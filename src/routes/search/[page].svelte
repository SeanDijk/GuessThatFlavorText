<script context="module">
    export const prerender = false;

    import PokemonApiService from '$lib/js/PokemonApiService.js'

    export async function load({params, fetch, session, stuff}) {
        return {
            status: 200,
            props: {
                pageContents: await PokemonApiService.getPage(params.page),
            }
        };
    }
</script>

<script>
    // TODO page in de q params opnemen
    import {page} from "$app/stores";
    import {groupBy} from 'lodash';
    import {goto} from "$app/navigation";
    import {base} from "$app/paths";

    export let pageContents
    const pageSize = 10
    const pageNumber = $page.params.page
    // const query = $page.url.searchParams('q')

    // const query = $page.params('q')
    // const page = $page.url.searchParams('page')
    // const pageSize = $page.url.searchParams('pageSize')
    // const orderBy = $page.params('orderBy')

    // const name = $page.params('name')




    let groupedBySet = groupBy(pageContents.data, (card) => {
        return `${card.set.series} - ${card.set.name}`
    })

    function amountOfPages() {
        let x = parseInt(pageContents.totalCount / pageSize)
        if (pageContents.totalCount % pageSize) {
            x++;
        }
        return x;
    }

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

</style>
{JSON.stringify($page.url.searchParams.get('ref'))}


Page {pageNumber} of {amountOfPages()}.
<form on:submit|preventDefault={() => console.log("")}>
    <label>Name: <input/></label>
    <label>Hp: <input/></label>
    <label>Attack name: <input/></label>
    <label>Set: <input/></label>
    <label>Artist: <input/></label>
    <label>Types: <input/></label>
    <label>Retreat cost: <input/></label>
    <label>Flavor text: <input/></label>
</form>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Flavor text</th>
    </tr>
    </thead>
    <tbody>
    {#each Object.entries(groupedBySet) as [set, cards]}
        <tr>
            <th colspan="2">{set}</th>
        </tr>

        {#each cards as card}
            <tr on:click={() => goto(base + "/guess/" + btoa(card.id))} class="clickable">
                <td>{card.name}</td>
                <td>{card.flavorText}</td>
                <!--{card.id} | {card.name} | {card.flavorText} | {card.set.series} - {card.set.name} | -->
            </tr>
        {/each}

    {/each}

    </tbody>


</table>

