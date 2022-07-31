<script>
    import { fade } from 'svelte/transition';

    export let buttonText;
    let show = false;
</script>

{#if show}
    <div in:fade>
        <slot></slot>
    </div>
{:else}
    <button class="button-red" on:click={() => show = true}>{buttonText}</button>
{/if}

