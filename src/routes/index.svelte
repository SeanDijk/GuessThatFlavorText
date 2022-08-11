<script>
    import quizmaster from '$lib/images/blainesquiz1.png'
    import randomGuess from '$lib/images/blainesquiz3.png'
    import { base } from '$app/paths';
</script>

<style>
    .image-button-box {
        flex-grow: 1;
    }

    .container {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }

    @media only screen and (min-width: 768px) and (orientation: landscape) {
        .container {
            flex-direction: row;
            align-items: center;
        }
    }

</style>
<div class="container">
    <div class="column image-button-box">
        <img alt="Quizmaster image" src={quizmaster}/>
        <a href="{base}/search" class="button-red">
            Search a card
        </a>
    </div>


    <div class="column image-button-box">
        <img alt="Guess a card image" src={randomGuess}/>
        <a href="{base}/guess/random" class="button-red">
            Guess a random card
        </a>
    </div>
</div>
