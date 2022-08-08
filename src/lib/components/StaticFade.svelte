<script>
    import {fade} from 'svelte/transition';

    export let key
    export let skipMount = false

</script>
<style>
    .container {
        display: grid;
    }

    .contained {
        grid-area: 1 / 1 / 1 / 1;
    }
</style>
<div class="container">
    {#key key}
        <div class="contained" transition:fade={{duration: 500}}>
            <slot></slot>
        </div>
    {/key}
</div>
