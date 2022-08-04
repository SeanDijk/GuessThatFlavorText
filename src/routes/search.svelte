<script>
    import PokemonApiService from '$lib/js/PokemonApiService.js'
    // PokemonApiService.getSets()

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

    form {
        display: grid;
        grid-template-columns: 200px 1fr;
        grid-gap: 16px;
        width: 100%;
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
        white-space:nowrap;

    }
</style>

<!--Page {pageNumber} of {amountOfPages()}.-->
<form on:submit|preventDefault={() => console.log("")}>
    <label class="field">Name: </label>
    <input placeholder="Pikachu"/>
    <label class="field">Attack name:</label>
    <input placeholder="Pika punch"/>
    <label class="field">Set:</label>
    <input placeholder="Stormfront"/>
    <label class="field">Flavor text:</label>
    <textarea placeholder="It lives in forests with others"/>

</form>

<!--TODO More search options-->
<!--<details>-->
<!--    <summary>Advanced search</summary>-->
<!--    <label class="field">Hp: <input/></label>-->
<!--    <label class="field">Artist: <input/></label>-->
<!--    <label class="field">Types: <input/></label>-->
<!--    <label class="field">Retreat cost: <input/></label>-->
<!--</details>-->

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

