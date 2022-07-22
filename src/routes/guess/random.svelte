<script>
    import PokemonService from '../../PokemonService.js'
    PokemonService.getRandomCard().then(value => {
        console.log(value)
    })
</script>
