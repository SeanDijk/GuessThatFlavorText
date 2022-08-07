<script context="module">
    export const prerender = false;
</script>
<script>
    import PokemonApiService from '$lib/js/PokemonApiService.js'
    import {page} from "$app/stores";
    import pkg from 'lodash';
    import {goto} from "$app/navigation";
    import {base} from "$app/paths";
    import LoadingIcon from "$lib/components/LoadingIcon.svelte";
    import {replaceStateWithQuery} from "$lib/js/QueryParams.js";
    const { groupBy } = pkg;

    export let pageContents
    let groupedBySet
    let amountOfPages
    let haveSearched = false
    let searching = false

    let pageNumber = parseInt($page.url.searchParams.get('page') ?? '1')
    let pageSize = parseInt($page.url.searchParams.get('pageSize') ?? '20')
    let qName = $page.url.searchParams.get('name')
    let qAttackName = $page.url.searchParams.get('attackName')
    let qSet = $page.url.searchParams.get('set')
    let qFlavorText = $page.url.searchParams.get('flavorText')

    console.log(pageNumber)

    $: if (pageContents) {
        groupedBySet = groupBy(pageContents.data, (card) => {
            return `${card.set.series} - ${card.set.name}`
        })
    } else {
        groupedBySet = {}
    }

    $: if (pageContents) {
        let x = parseInt(pageContents.totalCount / pageSize)
        if (pageContents.totalCount % pageSize) {
            x++;
        }
        amountOfPages = x
    }

    function submit() {

        let queryParamsToAddToUrl = {}
        if (pageNumber !== 1) queryParamsToAddToUrl.page = pageNumber
        if (pageSize !== 20) queryParamsToAddToUrl.pageSize = pageSize
        if (qName) queryParamsToAddToUrl.name = qName
        if (qAttackName) queryParamsToAddToUrl.attackName = qAttackName
        if (qSet) queryParamsToAddToUrl.set = qSet
        if (qFlavorText) queryParamsToAddToUrl.flavorText = qFlavorText

        if (typeof window !== 'undefined') {
            replaceStateWithQuery(queryParamsToAddToUrl)
        }

        searching = true
        PokemonApiService.getCardPage({
            page: pageNumber,
            pageSize: pageSize,
            name: qName,
            attackName: qAttackName,
            set: qSet,
            flavorText: qFlavorText
        }).then(value => {
            pageContents = value
            haveSearched = true
            searching = false
        })
    }

    function goToPage(number) {
        pageNumber = number
        console.log('Go to ' + number)
        submit()
    }

    function nextPage() {
        console.log('next')
        goToPage(pageNumber + 1)
    }

    function previousPage() {
        console.log('prev')
        goToPage(pageNumber - 1)
    }

    if (qName || qAttackName || qSet || qFlavorText || pageNumber !== 1) {
        submit()
    }

</script>

<style>

    .form-grid {
        display: grid;
        grid-template-columns: 200px 1fr;
        grid-gap: 16px;
        width: 100%;
        padding-top: 16px;
        padding-bottom: 16px;
    }

    label {
        grid-column: 1 / 2;
    }

    input, textarea {
        grid-column: 2 / 3;

    }

    table {
        /*border-spacing: 0.5rem;*/
    }

    th {
        text-align: left;
    }

    td, th {
        border: 1px solid #999;
        padding: 0.5rem;
    }

    .clickable {
        cursor: pointer;
    }

    .form-main {
        display: flex;
        flex-wrap: wrap;
    }

    .field {
        padding: 8px 4px;
        white-space: nowrap;
    }

    .submit {
        width: 100%;
    }

    .page-number-selector {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>
<form on:submit|preventDefault={submit}>
    <div class="form-grid">
        <label for="name" class="field">Name: </label>
        <input id="name" bind:value={qName} placeholder="Pikachu"/>

        <label for="attack-name" class="field">Attack name:</label>
        <input id="attack-name" bind:value={qAttackName} placeholder="Pika punch"/>

        <label for="set" class="field">Set:</label>
        <input id="set" bind:value={qSet} placeholder="Stormfront"/>

        <label for="flavor-text" class="field">Flavor text:</label>
        <textarea id="flavor-text" bind:value={qFlavorText} placeholder="It lives in forests with others"></textarea>

    </div>

    <button class="button-red-small submit">Search</button>
</form>
{#if searching}
    <LoadingIcon></LoadingIcon>
{/if}
{#if haveSearched && pageContents && pageContents.totalCount > 0}
    <div class="page-number-selector">
        <button on:click={previousPage} disabled='{pageNumber <= 1}'>Previous</button>
        <span>Page {pageNumber} of {amountOfPages}</span>
        <button on:click={nextPage} disabled='{pageNumber >= amountOfPages}'>Next</button>
    </div>

    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Flavor text</th>
            <th>Attacks</th>
        </tr>
        </thead>
        <tbody>
        {#each Object.entries(groupedBySet) as [set, cards]}
            <tr>
                <th colspan="3">{set}</th>
            </tr>
            {#each cards as card}
                <tr on:click={() => goto(base + "/guess/" + btoa(card.id))} class="clickable">
                    <td>{card.name}</td>
                    <td>{card.flavorText}</td>
                    <td>{card?.attacks?.map(value => value.name).reduce((previousValue, currentValue) => previousValue + ", " + currentValue) || ''}</td>
                    <!--{card.id} | {card.name} | {card.flavorText} | {card.set.series} - {card.set.name} | -->
                </tr>
            {/each}

        {/each}
        </tbody>
    </table>

    <div class="page-number-selector">
        <button on:click={previousPage} disabled='{pageNumber <= 1}'>Previous</button>
        <span>Page {pageNumber} of {amountOfPages}</span>
        <button on:click={nextPage} disabled='{pageNumber >= amountOfPages}'>Next</button>
    </div>
{:else if haveSearched}
    No results found
{/if}
