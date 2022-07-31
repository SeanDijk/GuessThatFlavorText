<script context="module">
    export const prerender = false;

    import PokemonApiService from '$lib/js/PokemonApiService.js'

    /** @type {import('./__types/[slug]').Load} */
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
    import {page} from "$app/stores";
    import {groupBy} from 'lodash';

    export let pageContents
    const pageSize = 100
    const pageNumber = $page.params.page
    // const query = $page.url.searchParams('q')


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

</style>

Page {pageNumber} of {amountOfPages()}.



<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Flavor text</th>
    </tr>
    </thead>
    <tbody>
    {#each Object.entries(groupedBySet) as [set, cards]}
        <tr><th colspan="2">{set}</th></tr>

        {#each cards as card}
            <tr>
                <td>{card.name} {btoa(card.id)}</td>
                <td>{card.flavorText}</td>
                <!--{card.id} | {card.name} | {card.flavorText} | {card.set.series} - {card.set.name} | -->
            </tr>
        {/each}

    {/each}

    </tbody>


</table>

