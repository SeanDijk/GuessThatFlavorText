<script>
    export let showFront = true;
    export let flipOnClick = true;
    export let animate = false;

    export function flip() {
        showFront = !showFront
    }
</script>

<style>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;

        perspective: 1000px; /* Remove this if you don't want the 3D effect */
        width: 100%;
        height: 100%;

    }

    .container-inner {
        display: grid;
        transform-style: preserve-3d;
    }
    .animate {
        transition: transform 1s;
    }

    .front, .back {
        display: flex;

        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;

        width: 100%;
        height: 100%;
        grid-area: 1 / 1 / 1 / 1;
    }

    .back {
        transform: rotateY(180deg); /*translate(+50%);*/
    }

    .flipped-front {
        transform: rotateY(0deg);
    }

    .flipped-back {
        transform: rotateY(180deg);
    }
</style>

<div class="container">
    <div class="container-inner"
         class:animate={animate}
         class:flipped-front={showFront}
         class:flipped-back={!showFront}
         on:click={() => {if (flipOnClick) flip()}}
    >
        <div class="front">
            <slot name="front"></slot>
        </div>
        <div class="back">
            <slot name="back"></slot>
        </div>
    </div>
</div>


