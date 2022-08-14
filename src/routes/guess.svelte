<script context="module">
    export const prerender = true;
</script>
<script>
    import PokemonApiService from '$lib/js/PokemonApiService.js'
    import {page} from "$app/stores";
    import CardGuess from "$lib/components/CardGuess.svelte";
    import {onMount} from "svelte";
    import {goto} from "$app/navigation";

    export let card = null;

    let cardId

    onMount(() => {
        if(!$page.url.searchParams.get('cardId')) {
            goto("/guess/random")
        }
        cardId = atob($page.url.searchParams.get('cardId'))
        if (card == null) {
            PokemonApiService.getCard(cardId).then(value => {
                card = value
            })
        }
    })
</script>

<CardGuess card={card}></CardGuess>

