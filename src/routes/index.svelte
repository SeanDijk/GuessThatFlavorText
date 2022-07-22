<script>
    import quizmaster from '/images/blainesquiz1.png'
    import randomGuess from '/images/blainesquiz3.png'
</script>

<style>
    .image-button-box {
        max-width: 800px;
    }

    .image-button-box > button {
        font-size: 2em;
    }
</style>

<div class="column image-button-box">
    <img alt="Quizmaster image" src={quizmaster}/>
    <button>I am the quizmaster</button>
</div>


<div class="column image-button-box">
    <img alt="Guess a card image" src={randomGuess}/>
    <button>Guess a random card</button>
</div>

