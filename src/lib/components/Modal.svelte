<script>
    import closeIcon from '$lib/images/close-icon.png'

    export let fullScreen = false
    export let mobileFullScreen = false

    let dialog
    let closing = false

    export function showModal() {
        dialog.showModal()
        // This causes a bug if the model is not closed, but for instance deleted.
        // document.querySelector('body').style.overflowY = 'hidden'
    }

    export function close() {
        if (!dialog.open) {
            return Promise.resolve()
        }

        return new Promise(function (resolve) {
            dialog.addEventListener('webkitAnimationEnd', (arg) => {
                if (arg.animationName.includes('hide') && arg.pseudoElement === '') {
                    closing = false
                    dialog.close();
                    dialog.removeEventListener('webkitAnimationEnd', arg.callee, false);
                    document.querySelector('body').style.overflowY = ''
                    resolve()
                }
            }, false);
            closing = true
        })
    }

    export function closeNow() {
        dialog.close();
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

    .close-dialog, .close-dialog::backdrop {
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
        position: absolute;
        top: 3em;
        right: 3em;
        box-sizing: border-box;
        padding: 16px;
        width: 48px;
        height: 48px;
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
    @media only screen and (min-width: 768px) {
        .close {
            padding: 16px;
            width: 56px;
            height: 56px;
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
    <button on:click={close} class="icon-button close">
        <img src="{closeIcon}" alt="Close modal"/>
    </button>
    <h1 class="title">
        <slot name="title"></slot>
    </h1>
    <div class="body">
        <slot name="body"></slot>
    </div>
</dialog>
