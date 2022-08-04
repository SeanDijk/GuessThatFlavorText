<script>
    export let fullScreen = false
    export let mobileFullScreen = false

    let dialog

    export function showModal() {
        dialog.showModal()
        document.querySelector('body').style.overflowY = 'hidden'
    }

    export function close() {
        dialog.close()
        document.querySelector('body').style.overflowY = ''
    }

    function closeOutside(event) {
        const rect = dialog.getBoundingClientRect();
        const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height
            && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
        if (!isInDialog) {
            close();
        }
    }
</script>

<style>
    .dialog {
        box-sizing: border-box;
        border-radius: 16px;
        max-width: 90%;
        max-height: 90%;
    }

    .dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.70);
    }

    .fullscreen {
        max-width: 100%;
        max-height: 100%;
        width: 100%;
        height: 100%;
        border-radius: 0;
    }

    .close {
        all: unset;
        cursor: pointer;
        position: absolute;
        top: 1em;
        right: 1em;
        font-family: "Pokemon Fire Red", serif;
        display: flex;
        justify-content: center; /* align horizontal */
        align-items: center; /* align vertical */

        width: 2em;
        height: 2em;
        outline: orange 5px auto;

    }

    .close:focus {
        outline: orange 5px auto;
    }

    @media only screen and (max-width: 768px) {
        .fullscreenMobile {
            max-width: 100%;
            max-height: 100%;
            width: 100%;
            height: 100%;
            border-radius: 0;
        }
    }
</style>

<dialog class="dialog" class:fullscreen={fullScreen} class:fullscreenMobile={mobileFullScreen} bind:this={dialog}
        on:click={closeOutside}
>
    <button class="close" on:click={close}>x</button>
    <h1 class="title">
        <slot name="title"></slot>
    </h1>
    <div class="body">
        <slot name="body"></slot>
    </div>
</dialog>
