<script>
    import quizmaster from '$lib/images/blainesquiz1.png'
    import randomGuess from '$lib/images/blainesquiz3.png'
    import { base } from '$app/paths';
</script>

<style>
    .image-button-box {
        max-width: 800px;
    }
</style>

<div class="column image-button-box">
    <img alt="Quizmaster image" src={quizmaster}/>
    <a class="button-red">
        I am the quizmaster
    </a>
</div>


<div class="column image-button-box">
    <img alt="Guess a card image" src={randomGuess}/>
    <a href="{base}/guess/random" class="button-red">
        Guess a random card
    </a>
</div>

