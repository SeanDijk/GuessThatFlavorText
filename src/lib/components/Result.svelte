<script>
    import cardBack from '$lib/images/pokemon_card_back.png'
    import Flipable from "./Flipable.svelte";

    export let showAnswer = false
    export let card

    const answerString = `The card was ${card.name} from ${card.set.name}!`

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
    {#if showAnswer === true}
        The card was {card.name} from {card.set.name}!
    {:else }
        Try again or reveal the answer.
    {/if}

    <div class="cardImg" on:click={() => showAnswer = true}>
        <Flipable showFront={showAnswer}>
            <img slot="front" src="{card.images.large}"/>
            <img slot="back" src="{cardBack}"/>
        </Flipable>
    </div>

    {#if showAnswer === true}
        <div class="row buttons">
            <button class="button-red-small">New flavor text</button>
        </div>
    {:else }
        <div class="row buttons">
            <button class="button-red-small" on:click={() =>showAnswer = true}>Show answer</button>
        </div>
    {/if}
</div>
