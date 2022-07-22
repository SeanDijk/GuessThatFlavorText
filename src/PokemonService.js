import pokemon from 'pokemontcgsdk'

let amountOfCards = null

const PokemonService = {
    getAmountOfCards: async () => {
        if (amountOfCards == null) {
            pokemon.card.where({q: 'flavorText:*', pageSize: 1}).then(result => {
                amountOfCards = result.totalCount
                return amountOfCards
            })
        } else {
            return amountOfCards
        }
    },

    getRandomCard: async () => {
        let value = await PokemonService.getAmountOfCards()
        const pageNumber = Math.floor(Math.random() * value) + 1;
        return await pokemon.card.where({q: 'flavorText:*', pageSize: 1, page: pageNumber}).data[0]
    },
}

export default PokemonService
