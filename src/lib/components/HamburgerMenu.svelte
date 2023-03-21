<script>
    import closeIcon from '$lib/images/close-icon.png'
    import hamburgerIcon from '$lib/images/hamburger.png'

    export let showHamburgerButton = true;
    let menuOpen = false;

    export function open() {
        menuOpen = true
    }

    export function close() {
        menuOpen = false
    }

    export function toggle() {
        if (isOpen()) {
            close()
        } else {
            open()
        }
    }

    export function isOpen() {
        return menuOpen
    }
</script>

<style>
    .container {
        display: flex;
    }

</style>

<div class="container">
    {#if showHamburgerButton}
        <button on:click={toggle} class="icon-button">
            {#if menuOpen}
                <img src="{closeIcon}" alt="Close menu"/>
            {:else}
                <img src="{hamburgerIcon}" alt="Open menu"/>
            {/if}
        </button>
    {/if}

    {#if !showHamburgerButton || menuOpen}
        <slot></slot>
    {/if}
</div>
