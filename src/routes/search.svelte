<script context="module">
    export const prerender = false;

    // import PokemonApiService from '$lib/js/PokemonApiService.js'
    //
    // /** @type {import('./__types/[slug]').Load} */
    // export async function load({params, fetch, session, stuff}) {
    //     return {
    //         status: 200,
    //         props: {
    //             pageContents: await PokemonApiService.getPage(params.page),
    //         }
    //     };
    // }
</script>

<script>
    // TODO page in de q params opnemen
    import {page} from "$app/stores";
    import {groupBy} from 'lodash';
    import {goto} from "$app/navigation";
    import {base} from "$app/paths";

    export let pageContents
    // const pageSize = 10
    // const pageNumber = $page.params.page
    // const query = $page.url.searchParams('q')

    // const query = $page.params('q')
    // const page = $page.url.searchParams('page')
    // const pageSize = $page.url.searchParams('pageSize')
    // const orderBy = $page.params('orderBy')

    // const name = $page.params('name')




    //let groupedBySet = groupBy(pageContents.data, (card) => {
    //    return `${card.set.series} - ${card.set.name}`
    //})
//
    //function amountOfPages() {
    //    let x = parseInt(pageContents.totalCount / pageSize)
    //    if (pageContents.totalCount % pageSize) {
    //        x++;
    //    }
    //    return x;
    //}

</script>

<style>

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
        white-space:nowrap;

    }
</style>

<!--Page {pageNumber} of {amountOfPages()}.-->
<form on:submit|preventDefault={() => console.log("")}>
    <div class="form-main">
        <label class="field">Name: <input/></label>
        <label class="field">Attack name: <input/></label>
        <label class="field">Set: <input/></label>
        <label class="field">Flavor text: <input/></label>

    </div>

    <details>
        <summary>Advanced search</summary>
        <label class="field">Hp: <input/></label>
        <label class="field">Artist: <input/></label>
        <label class="field">Types: <input/></label>
        <label class="field">Retreat cost: <input/></label>
    </details>
</form>

<!--<table>-->
<!--    <thead>-->
<!--    <tr>-->
<!--        <th>Name</th>-->
<!--        <th>Flavor text</th>-->
<!--    </tr>-->
<!--    </thead>-->
<!--    <tbody>-->
<!--    {#each Object.entries(groupedBySet) as [set, cards]}-->
<!--        <tr>-->
<!--            <th colspan="2">{set}</th>-->
<!--        </tr>-->

<!--        {#each cards as card}-->
<!--            <tr on:click={() => goto(base + "/guess/" + btoa(card.id))} class="clickable">-->
<!--                <td>{card.name}</td>-->
<!--                <td>{card.flavorText}</td>-->
<!--                &lt;!&ndash;{card.id} | {card.name} | {card.flavorText} | {card.set.series} - {card.set.name} | &ndash;&gt;-->
<!--            </tr>-->
<!--        {/each}-->

<!--    {/each}-->

<!--    </tbody>-->


<!--</table>-->

