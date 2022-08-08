<script>
    export let fullScreen = false
    export let mobileFullScreen = false

    let dialog
    let closing = false

    export function showModal() {
        dialog.showModal()
        // This causes a bug if the model is not closed, but for instance deleted.
        document.querySelector('body').style.overflowY = 'hidden'
    }

    export function close() {
        console.log("asd")
        dialog.addEventListener('webkitAnimationEnd', (arg) =>{
            console.log(arg)
            if (arg.animationName.includes('hide')) {
                closing = false
                dialog.close();
                dialog.removeEventListener('webkitAnimationEnd', arg.callee, false);
                document.querySelector('body').style.overflowY = ''
            }
        }, false);
        closing = true

        // dialog.close()
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

    .dialog[open]:not(.close-dialog), .dialog[open]:not(.close-dialog)::backdrop {
        -webkit-animation: show .5s ease normal;
    }

    .close-dialog, .close-dialog::backdrop{
        -webkit-animation: hide .5s ease normal;
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

<dialog class="dialog"
        class:fullscreen={fullScreen}
        class:fullscreenMobile={mobileFullScreen}
        class:close-dialog={closing}
        bind:this={dialog}
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
