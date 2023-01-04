import pokemon from "pokemontcgsdk";

let amountOfCardsForQuery = {};

function isNonEmpty(given) {
  return given !== undefined && given != null && (typeof given === "string" && given.trim() !== "");
}

const PokemonApiService = {
  getAmountOfCards: async (additionalQuery = "") => {
    if (!Object.hasOwn(amountOfCardsForQuery, additionalQuery)) {
      return await pokemon.card.where({ q: "flavorText:* " + additionalQuery, pageSize: 1 }).then(result => {
        amountOfCardsForQuery[additionalQuery] = result.totalCount;
        return result.totalCount;
      });
    } else {
      return amountOfCardsForQuery[additionalQuery];
    }
  },

  getRandomCard: async (additionalQuery = "") => {
    let value = await PokemonApiService.getAmountOfCards(additionalQuery);
    let pageNumber = Math.floor(Math.random() * value) + 1;

    let params = {
      q: "flavorText:* " + additionalQuery,
      pageSize: 1,
      page: pageNumber
    };

    return (await pokemon.card.where(params)).data[0];
  },

  getPage: async (pageNumber) => {
    return pokemon.card.where({
      q: "flavorText:*",
      pageSize: 10,
      page: pageNumber
    });
  },

  getCard: async (cardId) => {
    return pokemon.card.find(cardId);
  },

  getCardPage: async (params) => {

    let q = "";

    function appendQ(str) {
      q = q + str + " ";
    }

    if (params.page == null) {
      params.page = 1;
    }

    if (params.pageSize == null) {
      params.pageSize = 20;
    }

    if (isNonEmpty(params.name)) {
      appendQ(`name:"*${params.name}*"`);
    }

    if (isNonEmpty(params.attackName)) {
      appendQ(`attacks.name:"*${params.attackName}*"`);
    }

    if (isNonEmpty(params.set)) {
      appendQ(`(set.name:"*${params.set}*" OR set.series:"*${params.set}*")`);
    }

    if (isNonEmpty(params.flavorText)) {
      appendQ(`flavorText:"*${params.flavorText}*"`);
    } else {
      appendQ(`flavorText:"*"`);
    }

    return pokemon.card.where({
      pageSize: params.pageSize,
      page: params.page,
      orderBy: "-set.releaseDate, number",
      q: q
    });

  },

  getAllSetsWithFlavorTexts: async () => {
    return pokemon.set.all({
      q: "(-id:gym1 AND -id:gym2 AND -id:ru1 AND -id:ecard1 AND -id:ecard2 AND -id:ecard3 AND -id:ex1 AND -id:ex2 AND -id:ex3 AND -id:ex4 AND -id:ex5 AND -id:ex6 AND -id:ex7 AND -id:ex8 AND -id:ex9 AND -id:ex10 AND -id:ex11 AND -id:ex12 AND -id:ex13 AND -id:ex14 AND -id:ex15 AND -id:ex16 AND -id:tk1a AND -id:tk1b AND -id:tk2a AND -id:tk2b AND -id:pop1 AND -id:pop2 AND -id:pop3 AND -id:pop4 AND -id:pop5 AND -id:np)"
    });
  }
};

export default PokemonApiService;
