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
            return 'Try again or reveal the answer.'
        }
    }

    $: message = getMessage()
</script>

<style>
    .cardImg {
        width: 100%;
        max-width: 600px;
        align-self: center;
        margin-top: 1em;
        margin-bottom: 1em;

    }

    .buttons {
        justify-content: center;
    }

    img{
        flex: 0 0 auto;
        max-width: 100%;
        max-height: 100%;
    }
</style>

<div class="column">

    <div>{message}</div>
    <Flipable
            showFront={showAnswer}
            on:click={() => showAnswer = true}
            class="cardImg"
    >
        <img slot="front" src="{card.images.large}"/>
        <img slot="back" src="{cardBack}"/>
    </Flipable>

    {#if showAnswer === true || showAnswer === true}
        <div class="row buttons">
            <button class="button-red-small">New flavor text</button>
        </div>
    {:else }
        <div class="row buttons">
            <button class="button-red-small" on:click={() =>showAnswer = true}>Show answer</button>
        </div>
    {/if}


</div>
