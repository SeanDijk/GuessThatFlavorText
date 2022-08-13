<script>
    import {fade} from 'svelte/transition';

    let shown = false

    export function show(millis) {
        let timeout = millis ?? 3000
        shown = true
        setTimeout(() => {
            close()
        }, timeout)
    }

    export function close() {
        shown = false
    }
</script>

<style>
    .message-container {
        position: fixed;
        width: 100%;
        bottom: 10%;
        left: 0;

        display: flex;
        justify-content: center;
    }

    .message {
        background-color: rgba(38, 38, 38, 0.9);
        color: white;

        box-sizing: border-box;
        padding: 16px;
    }
</style>

{#if shown}
    <div class="message-container" transition:fade>
        <div class="message">
            <slot></slot>
        </div>
    </div>
{/if}
