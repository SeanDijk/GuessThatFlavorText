<script>
  import pokemonApiService from "$lib/js/PokemonApiService.js";
  import { onMount } from "svelte";
  import pkg from "lodash";
  import SeriesSetSelection from "$lib/components/SeriesSetSelection.svelte";
  import { randomGuessSettings } from "$lib/js/stores.js";
  import { get } from "svelte/store";

  const { groupBy } = pkg;

  let setsBySeries;
  let selectedSetsBySeries = {};
  const intialSelection = JSON.parse(get(randomGuessSettings.enabledSets));
  let seriesSetSelections = [];
  $: {
    randomGuessSettings.enabledSets.set(JSON.stringify(Object.values(selectedSetsBySeries).flatMap(entry => entry)));
  }

  function setInitialState(series, sets) {
    let setIds = sets.map(value => value.id);
    selectedSetsBySeries[series] = intialSelection.filter(value => {
      return setIds.includes(value);
    });
  }

  function unselectAllSets() {
    for (const seriesSetSelection of seriesSetSelections) {
      seriesSetSelection.unselectAll();
    }
  }

  function selectAllSets() {
    for (const seriesSetSelection of seriesSetSelections) {
      seriesSetSelection.selectAll();
    }
  }

  onMount(() => {
    console.log("test3");
    pokemonApiService.getAllSetsWithFlavorTexts().then(value => {
      setsBySeries = groupBy(value, (set => set.series));
      for (const [series, sets] of Object.entries(setsBySeries)) {
        setInitialState(series, sets);
      }
    });
  });
</script>

<style>
    .container {
        padding: 16px;
    }

    summary {
        font-weight: bold;
    }

    .sets {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: space-evenly;
    }

    .set {
        flex-grow: 1;
        width: 100%;
    }
    @media only screen and (min-width: 768px) {
        .set {
            height: 300px;
            width: auto;
        }
    }
</style>

<div class="container">
  <h1>Settings</h1>

<!--  <label for="dark-mode">Enable Dark mode</label>-->
<!--  <input type="checkbox" id="dark-mode" name="dark-mode" >-->

  <h2>Guessing</h2>
  Changes the various aspects of guessing cards.
  <h3>Lifelines</h3>
  This feature is still being added
  <h3>Random Parameters</h3>
  Changes the parameters which are used to get a random card.
  <details>
    <summary>Sets</summary>
    If nothing is selected, all the sets are used. Some sets, like <i>Gym Heroes</i> are missing, since they do not contain
    a single Pokémon with a flavor text.<br />
    <button on:click={selectAllSets}>Select all</button>
    <button on:click={unselectAllSets}>Unselect all</button>
    <div class="sets">
      {#if setsBySeries}
        {#each Object.entries(setsBySeries) as [series, sets], i}
          <div class="set">
            <SeriesSetSelection series="{series}"
                                sets="{sets}"
                                bind:selectedSets={selectedSetsBySeries[series]}
                                bind:this={seriesSetSelections[i]}
            />
          </div>
        {/each}
      {/if}
    </div>
  </details>
</div>
