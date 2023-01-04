<script>
  import { beforeNavigate } from "$app/navigation";
  import { base } from "$app/paths";
  import CardGuess from "$lib/components/CardGuess.svelte";
  import PokemonApiService from "$lib/js/PokemonApiService.js";
  import { randomGuessSettings } from "$lib/js/stores.js";

  export let card;

  let guessComponent;
  let reloaded = false;
  let setsToUse = []; // empty uses all
  randomGuessSettings.enabledSets.subscribe(value => setsToUse = JSON.parse(value));

  async function reloadCard() {
    let dialogClose = guessComponent?.getDialog()?.close() ?? await Promise.resolve();

    let setQuery = setsToUse.length === 0 ? "" : "(" + setsToUse.map(value => `set.id:${value}`)
      .reduce((previousValue, currentValue) => previousValue + " OR " + currentValue) + ")";

    let newCard = PokemonApiService.getRandomCard(setQuery);
    await dialogClose;
    card = null;
    card = await newCard;
    reloaded = true;
  }

  if (card == null) {
    reloadCard();
  }

  beforeNavigate(navigation => {
    if (navigation.from != null && navigation.to != null && navigation.from.pathname === navigation.to.pathname &&
      (navigation.to.pathname === `${base}/guess/random` || navigation.to.pathname === `/${base}/guess/random`)
    ) {
      navigation.cancel();
      reloadCard();
    }
  });
</script>

<div>
  {#if reloaded === false || card != null}
    <CardGuess card={card} bind:this={guessComponent}></CardGuess>
  {/if}
    {#if reloaded === true && card == null}
        Something went wrong while retrieving the card.
    {/if}
</div>

