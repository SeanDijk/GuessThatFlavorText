<script>
    import {beforeNavigate} from '$app/navigation';
    import {base} from '$app/paths';
    import CardGuess from "$lib/components/CardGuess.svelte";
    import PokemonApiService from '$lib/js/PokemonApiService.js'

    export let card;

    let guessComponent;

    async function reloadCard() {
        let dialogClose = guessComponent?.getDialog()?.close() ?? await Promise.resolve()
        let newCard = PokemonApiService.getRandomCard()
        await dialogClose
        card = null
        card = await newCard
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

<div>
    <CardGuess card={card} bind:this={guessComponent}></CardGuess>
</div>

