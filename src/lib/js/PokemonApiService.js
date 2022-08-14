import pokemon from 'pokemontcgsdk'

let amountOfCards = null

function isNonEmpty(given) {
    return given !== undefined && given != null && (typeof given === 'string' && given.trim() !== '')
}


const PokemonApiService = {
    getAmountOfCards: async () => {
        if (amountOfCards == null) {
            return await pokemon.card.where({q: 'flavorText:*', pageSize: 1}).then(result => {
                amountOfCards = result.totalCount
                return result.totalCount
            })
        } else {
            return amountOfCards
        }
    },

    getRandomCard: async () => {
        let value = await PokemonApiService.getAmountOfCards()
        let pageNumber = Math.floor(Math.random() * value) + 1;
        return (await pokemon.card
            .where({q: 'flavorText:*', pageSize: 1, page: pageNumber}))
            .data[0]
    },

    getPage: async (pageNumber) => {
        return pokemon.card.where({
            q: 'flavorText:*',
            pageSize: 10,
            page: pageNumber
        })
    },

    getCard: async (cardId) => {
        return pokemon.card.find(cardId)
    },

    getCardPage: async (params) => {

        let q = ""

        function appendQ(str) {
            q = q + str + ' '
        }

        if (params.page == null) {
            params.page = 1
        }

        if (params.pageSize == null) {
            params.pageSize = 20
        }

        if (isNonEmpty(params.name)) {
            appendQ(`name:"*${params.name}*"`)
        }

        if (isNonEmpty(params.attackName)) {
            appendQ(`attacks.name:"*${params.attackName}*"`)
        }

        if (isNonEmpty(params.set)) {
            appendQ(`(set.name:"*${params.set}*" OR set.series:"*${params.set}*")`)
        }

        if (isNonEmpty(params.flavorText)) {
            appendQ(`flavorText:"*${params.flavorText}*"`)
        } else {
            appendQ(`flavorText:"*"`)
        }

        return pokemon.card.where({
            pageSize: params.pageSize,
            page: params.page,
            orderBy: "-set.releaseDate, number",
            q: q
        })

    },

    getSets: async () => {
        let sets = pokemon.set.all()
        return sets
    }
}

export default PokemonApiService
