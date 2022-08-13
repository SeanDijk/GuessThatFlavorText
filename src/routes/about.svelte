<script>
    import github from '$lib/images/GitHub-Mark-120px-plus.png'
    import twitter from '$lib/images/twitter.svg'

</script>

<style>
    .container {
        padding: 16px;
    }

    .socials {
        display: flex;
        flex-direction: row;

        justify-content: center;
        align-items: center;
    }

    figure {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .social-image {
        width: 64px;
        height: 64px;
    }

</style>

<div class="container">
    <p
    >Big shout out to the <a href="https://anchor.fm/uncommonenergy" target="_blank">Uncommon Energy
        Podcast</a> and their segment called 'Guess That Flavor Text' where this tool is based upon.
    </p>

    <p>
        Special thanks and credits to:
    </p>

    <ul>
        <li>
            <a href="https://pokemontcg.io/" target="_blank">pokemontcg.io</a>, for supplying and maintaining an awesome api, providing
            all the card data.
        </li>
        <li>
            KaelinT, the author of the <a href="https://www.cufonfonts.com/font/pokemon-fire-red" target="_blank">Pokémon Fire Red
            Font</a>.
        </li>
        <li>
            <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a> for creating the framework, that is used to build this tool
        </li>
    </ul>

    <div class="socials">
        <a href="https://github.com/SeanDijk/GuessThatFlavorText" target="_blank">
            <figure>
                <img src="{github}" alt="github" class="social-image"/>
                <figcaption>Github</figcaption>
            </figure>
        </a>

        <a href="https://twitter.com/Sean_van_Dijk" target="_blank">
            <figure>
                <img src="{twitter}" alt="twitter" class="social-image"/>
                <figcaption>Twitter</figcaption>
            </figure>
        </a>

    </div>
</div>
