<script>
    import Flipable from "../lib/components/Flipable.svelte";

    import cardBack from '$lib/images/pokemon_card_back.png'

    let srcFront = 'https://images.pokemontcg.io/mcd12/6_hires.png'

</script>

<style>
    img {
        max-width: 100%;
    }
</style>

<Flipable>
    <slot slot="front">
        <img src="{srcFront}">
    </slot>
    <slot slot="back">
        <img src="{cardBack}">
    </slot>
<!--    srcFront="{srcFront}"-->
<!--    srcBack="{cardBack}"-->

</Flipable>
