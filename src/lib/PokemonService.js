import pokemon from 'pokemontcgsdk'

let amountOfCards = null

const PokemonService = {
    getAmountOfCards: async () => {
        if (amountOfCards == null) {
            return await pokemon.card.where({q: 'flavorText:*', pageSize: 1}).then(result => {
                amountOfCards = result.totalCount
                console.log("Returning: " + result.totalCount)
                return result.totalCount
            })
        } else {
            return amountOfCards
        }
    },

    getRandomCard: async () => {
        let value = await PokemonService.getAmountOfCards()
        let pageNumber = Math.floor(Math.random() * value) + 1;
        return (await pokemon.card
            .where({q: 'flavorText:*', pageSize: 1, page: pageNumber}))
            .data[0]
    },
}

export default PokemonService
