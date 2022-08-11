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
<!--Maybe also support an if else where stuff is not recreated-->
<div class="container">
    {#key key}
        <div class="contained" transition:fade|local={{duration: 500}}>
            <slot></slot>
        </div>
    {/key}
</div>
