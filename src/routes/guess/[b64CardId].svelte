<script>
    import LoadingIcon from '$lib/components/LoadingIcon.svelte'
    import Lifeline from '$lib/components/Lifeline.svelte'
    import Result from '$lib/components/Result.svelte'
    import Modal from '$lib/components/Modal.svelte'
    import PokemonApiService from '$lib/js/PokemonApiService.js'
    import GuessService from '$lib/js/GuessService.js'
    import {page} from "$app/stores";

    export let card = null;
    let cardId = atob($page.params.b64CardId)
    let givenAnswer = "";
    let guessedCorrectly = false;
    let resultDialog

    if (card == null) {
        PokemonApiService.getCard(cardId).then(value => {
            console.log(value)
            card = value
        })
    }

    function checkAnswer() {
        return GuessService.matchesAnswer(givenAnswer, card.name)
    }

    function processAnswer() {
        guessedCorrectly = checkAnswer()
        resultDialog.showModal()
    }
</script>

<style>
    .container {
        margin: 16px;
    }

    .flavor-text {
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
        width: 100%;
        font-family: "Pokemon Fire Red", serif;
        font-size: 1.2em;
    }
</style>

<div class="column container">
    {#if !card}
        <LoadingIcon/>
    {/if}

    {#if card}
        <q class="flavor-text">{(card.flavorText + "").replace(card.name, 'BLANK')}</q>

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
    {/if}

</div>
