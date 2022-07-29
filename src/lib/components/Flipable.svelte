<script>
    export let showFront = true;
    export let flipOnClick = true;

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

        background-color: #c8e351;

    }

    .container-inner {
        display: flex;

        /*position: relative;*/
        transition: transform 1s, left 1s;
        transform-style: preserve-3d;
        /*width: 100%;*/
        /*height: 100%;*/
    }

    .front, .back {
        /*position: absolute;*/
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;

        /*width: 100%;*/
        /*height: 100%;*/

        /*Center the contents*/
        /*background-color: #c8e351;*/

    }

    .back {
        position: absolute;
        top: 0;
        left: 50%;
        transform: rotateY(180deg) translate(+50%);
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
         class:flipped-front={showFront}
         class:flipped-back={!showFront}
         on:click={() => {if (flipOnClick) flip()}}
    >
        <div class="front">
            <slot name="front"></slot>
            <!--            <img src="{srcFront}"/>-->
        </div>
        <div class="back">
            <slot name="back"></slot>
            <!--            <img src="{srcBack}"/>-->
        </div>
    </div>
</div>


