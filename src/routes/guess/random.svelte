<script>
    import LoadingIcon from '$lib/components/LoadingIcon.svelte'
    import Lifeline from '$lib/components/Lifeline.svelte'
    import PokemonService from '$lib/PokemonService.js'

    let givenAnswer = "";
    let data = null

    PokemonService.getRandomCard().then(value => {
        data = value
    })

    function withoutAccents(str) {
        return str.normalize('NFD').replace(/\p{Diacritic}/gu, "");
    }

    function checkAnswer() {
        return withoutAccents(data.name.toLowerCase()) === withoutAccents(givenAnswer.toLowerCase())
    }

    function processAnswer() {
        if (checkAnswer()) {

        } else {

        }
    }
</script>

<style>
    .flavor-text {
        font-size: 1.5em;
        /*font-style: italic;*/
        text-align: center;

        border: black solid 2px;

        margin: 16px;
        padding: 16px;
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

    .answer-card {
        max-width: 100%;
    }
</style>

<div class="column">

    {#if !data}
        <LoadingIcon/>
    {/if}

    {#if data}
        <div class="column">
            <q class="flavor-text">{(data.flavorText + "").replace(data.name, 'BLANK')}</q>
        </div>

        <div class="row">
            <span>Your guess:&nbsp;</span>
            <input bind:value={givenAnswer} type="text"/>
            <button on:click={checkAnswer}>Submit</button>
        </div>

        <h1>Lifelines</h1>
        <div class="column">
            <Lifeline buttonText="Show set">
                <fieldset class="answer">
                    <legend>{data.set.name} <img src="{data.set.images.symbol}" class="set-icon"></legend>
                    <img src="{data.set.images.logo}" class="set-logo">
                </fieldset>
            </Lifeline>
            <Lifeline buttonText="Show stage">
                <fieldset class="answer">
                    <legend>Stage</legend>
                    {data.subtypes.find(element => element === "Basic" || element.startsWith("Stage"))}
                </fieldset>
            </Lifeline>
            <Lifeline buttonText="Show attack">
                <fieldset class="answer">
                    <legend>Attack name</legend>
                    {data.attacks[Math.floor(Math.random() * data.attacks.length)].name}
                </fieldset>
            </Lifeline>
        </div>

        <details>
            <summary>Answer</summary>

            <fieldset>
                <legend>Answer</legend>
                <img src="{data.images.large}" class="answer-card">
            </fieldset>
        </details>
    {/if}

</div>
