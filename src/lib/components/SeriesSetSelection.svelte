<script>

  export let series = ""; // string
  export let sets = []; // list of set objects
  export let selectedSets = []; // list of ids of the selected sets

  $: seriesIsChecked = selectedSets.length === sets.length;
  $: seriesIsIndeterminate = selectedSets.length > 0 && selectedSets.length < sets.length;
  let enabledSetsElement;

  export function selectAll() {
    let newSelection = []
    for (const option of enabledSetsElement.options) {
      option.selected = true
      newSelection.push(option.value)
    }
    selectedSets = newSelection
  }

  export function unselectAll() {
    for (const option of enabledSetsElement.options) {
      option.selected = false
    }
    selectedSets = []
  }

  export function toggle() {
    if (seriesIsChecked) {
      unselectAll()
    } else {
      selectAll()
    }
  }
</script>

<style>
    .set-list {
        overflow: auto;
    }

    select {
        flex: 1;
    }

    .column {
        height: 100%;
    }
</style>


<div class="column">
  <div>
    <label for="{series}">{series}</label>
    <input
      type="checkbox"
      id="{series}"
      bind:checked={seriesIsChecked}
      bind:indeterminate={seriesIsIndeterminate}
      on:change={toggle}
    />
  </div>
  <select name="enabledSets"
          id="sets"
          multiple
          class="set-list"
          bind:value={selectedSets}
          bind:this={enabledSetsElement}
  >
    {#each sets as set}
      <option value="{set.id}">{set.name}</option>
    {/each}
  </select>

</div>
