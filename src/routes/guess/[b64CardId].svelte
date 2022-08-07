<script>
    import PokemonApiService from '$lib/js/PokemonApiService.js'
    import {page} from "$app/stores";
    import CardGuess from "$lib/components/CardGuess.svelte";

    export let card = null;
    let cardId = atob($page.params.b64CardId)

    if (card == null) {
        PokemonApiService.getCard(cardId).then(value => {
            card = value
        })
    }
</script>

<CardGuess card={card}></CardGuess>

