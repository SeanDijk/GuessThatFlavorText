<script>
    import {beforeNavigate} from '$app/navigation';
    import {base} from '$app/paths';
    import CardGuess from "$lib/components/CardGuess.svelte";
    import PokemonApiService from '$lib/js/PokemonApiService.js'

    export let card;

    function reloadCard() {
        PokemonApiService.getRandomCard().then(value => {
            card = value
        })
    }

    if (card == null) {
        reloadCard()
    }

    beforeNavigate(navigation => {
        if (navigation.from != null && navigation.to != null && navigation.from.pathname === navigation.to.pathname &&
            (navigation.to.pathname === `${base}/guess/random` || navigation.to.pathname === `/${base}/guess/random`)
        ) {
            navigation.cancel()
            reloadCard()
        }
    })
</script>

    {#key card}
        <CardGuess card={card}></CardGuess>
    {/key}
