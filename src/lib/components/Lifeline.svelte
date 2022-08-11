<script>
    import StaticFade from "$lib/components/StaticFade.svelte";

    export let buttonText;
    let show = false;
</script>

<style>
    button {
        width: 100%;
    }
</style>

<StaticFade key="{show}">
{#if show}
    <slot></slot>
{:else}
    <button class="button-red" on:click={() => show = true}>{buttonText}</button>
{/if}
</StaticFade>
