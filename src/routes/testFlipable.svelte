<script>
    import Flippable from "$lib/components/Flippable.svelte";

    import cardBack from '$lib/images/pokemon_card_back.png'

    let srcFront = 'https://images.pokemontcg.io/mcd12/6_hires.png'

</script>

<style>
    img {
        max-width: 100%;
    }
</style>

<Flippable>
    <slot slot="front">
        <img src="{srcFront}">
    </slot>
    <slot slot="back">
        <img src="{cardBack}">
    </slot>
<!--    srcFront="{srcFront}"-->
<!--    srcBack="{cardBack}"-->

</Flippable>
