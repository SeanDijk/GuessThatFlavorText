<script>
    import LoadingIcon from '$lib/components/LoadingIcon.svelte'
    import Lifeline from '$lib/components/Lifeline.svelte'
    import Result from '$lib/components/Result.svelte'
    import Modal from '$lib/components/Modal.svelte'
    import StaticFade from "$lib/components/StaticFade.svelte";
    import GuessService from '$lib/js/GuessService.js'

    export let card = null

    $: {
        // Reference card so that this runs whenever card is changed
        card
        // Don't reference givenAnswer directly, so that changes do not trigger this
        resetAnswer()
    }

    let givenAnswer = "";
    let guessedCorrectly = false;
    let resultDialog

    export function getDialog() {
        return resultDialog
    }

    function checkAnswer() {
        return GuessService.matchesAnswer(givenAnswer, card.name)
    }

    function processAnswer() {
        guessedCorrectly = checkAnswer()
        resultDialog.showModal()
    }

    function resetAnswer() {
        givenAnswer = ""
    }
</script>

<style>
    .container {
        margin: 16px;
    }

    .flavor-text {
        display: inline;
        font-size: 1.5em;
        text-align: center;
        border: black solid 2px;
        padding: 16px;
        margin-bottom: 16px;
    }

    .set-icon {
        flex: 0 0 auto;
        max-width: 100%;
        height: .8em;
    }

    .set-logo {
        flex: 0 0 auto;
        max-width: 100%;
        max-height: 100px;
        height: 100%;
        align-self: center;
    }

    .answer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 1.6em;
        max-height: 2.8em;
    }

    legend {
        display: flex;
        align-items: center;
        font-size: 1.1em;
    }

    .guess-form {
        width: 100%;
    }

    .guess-form > input {
        font-size: 1.2em;
        width: 100%;
    }
</style>


<div class="column container">
    {#if !card}
        <LoadingIcon/>
    {/if}

    <StaticFade key={card}>
        <div class="column">
            {#if card}
                <q class="flavor-text">{(card.flavorText + "").replace(card.name, 'BLANK')}</q>
                {#key card}
                    <form class="row guess-form" on:submit|preventDefault={processAnswer}>
                        <input bind:value={givenAnswer} type="text" placeholder="Your guess..."/>
                        <button type="submit" class="button-red-small">Submit</button>
                    </form>

                    <h1>Lifelines</h1>
                    <div class="column">
                        <Lifeline buttonText="Show set">
                            <fieldset class="answer">
                                <legend>{card.set.name} <img src="{card.set.images.symbol}" class="set-icon"></legend>
                                <img src="{card.set.images.logo}" class="set-logo">
                            </fieldset>
                        </Lifeline>
                        <Lifeline buttonText="Show stage">
                            <fieldset class="answer">
                                <legend>Stage</legend>
                                {card.subtypes.find(element => element === "Basic" || element.startsWith("Stage"))}
                            </fieldset>
                        </Lifeline>
                        <Lifeline buttonText="Show attack">
                            <fieldset class="answer">
                                <legend>Attack name</legend>
                                {card.attacks[Math.floor(Math.random() * card.attacks.length)].name}
                            </fieldset>
                        </Lifeline>
                    </div>
                {/key}
            {/if}
        </div>
    </StaticFade>
    {#key card}
        <Modal bind:this={resultDialog} mobileFullScreen={true}>
                        <span slot="title">
                            {#if (guessedCorrectly)}
                            You were right!
                            {:else}
                            Wrong guess!
                            {/if}
                        </span>
            <Result slot="body"
                    card={card}
                    guessedCorrectly={guessedCorrectly}
            >
            </Result>
        </Modal>
    {/key}
</div>
