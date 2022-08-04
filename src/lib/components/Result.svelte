<script>
    import {base} from "$app/paths";
    import cardBack from '$lib/images/pokemon_card_back.png'
    import Flipable from "./Flipable.svelte";

    export let guessedCorrectly = false
    export let showAnswer = false
    export let card

    const answerString = `The card was ${card.name} from ${card.set.name}!`

    $: show = showAnswer || guessedCorrectly

    function getMessage() {
        if (showAnswer === true) {
            return answerString
        } else {
            return ''
        }
    }

    $: message = getMessage()
</script>

<style>
    .cardImg {
        box-sizing: border-box;
        width: 100%;
        max-width: 600px;
        align-self: center;
        margin-top: 1em;
        margin-bottom: 1em;
        padding: 16px;
    }

    .buttons {
        justify-content: center;
    }

    img {
        flex: 0 0 auto;
        max-width: 100%;
        max-height: 100%;
        flex-grow: 1;
    }

</style>

<div class="column">
    {#if show === true}
        The card was {card.name} from {card.set.name}!
    {:else }
        Try again or reveal the answer.
    {/if}

    <div class="cardImg" on:click={() => showAnswer = true}>
        <Flipable showFront={show} animate={!guessedCorrectly} flipOnClick="{!guessedCorrectly}">
            <img slot="front" src="{card.images.large}"/>
            <img slot="back" src="{cardBack}"/>
        </Flipable>
    </div>

    {#if show === true}
        <div class="row buttons">
            <a class="button-red-small" href="{base}/guess/random">New flavor text</a>
        </div>
    {:else }
        <div class="row buttons">
            <button class="button-red-small" on:click={() => showAnswer = true}>Show answer</button>
        </div>
    {/if}
</div>
