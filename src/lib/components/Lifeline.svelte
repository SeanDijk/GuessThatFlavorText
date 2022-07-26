<script>
    export let buttonText;
    let show = false;
</script>

{#if show}
    <slot></slot>
{:else}
    <button class="button-red" on:click={() => show = true}>{buttonText}</button>
{/if}

