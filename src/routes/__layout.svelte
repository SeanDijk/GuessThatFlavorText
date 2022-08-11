<script>
    import {base} from '$app/paths';
</script>
<style>
    @import url('$lib/css/buttons.css');
    @import url('$lib/css/util.css');
    @import url('$lib/css/typography.css');
    @import url('$lib/css/animations.css');

    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        font-family: "Pokemon Fire Red", serif;
        font-size: 1.8em;
        border-style: solid;
        border-bottom-width: 5px;
        padding: 8px;
        height: 44px;
    }

    .content {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }

    footer {
        box-sizing: border-box;
        padding: 16px;
        background-color: #262626;
        color: white;
        min-height: 60px;
        font-size: .7em;

        display: flex;
        justify-content: center;
        align-items: center;

    }

    .home, .home:hover, .home:focus, .home:active, .nav-link {
        text-decoration: none;
        color: inherit;
    }

    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .menu > summary {
        list-style-type: '☰️';
        font-size: .5em;
        height: 48px;
        width: 48px;
    }

    .menu[open] > summary {
        list-style-type: 'x';
        font-size: 1em;
    }

    .menu-container {
        position: absolute;
        top: 60px;
        left: 0;

        box-sizing: border-box;
        padding: 8px;
        border-style: solid;
        border-bottom-width: 5px;
    }





    .nav-link {
        height: 100%;
    }

    .nav-link:hover {

    }

    @media only screen and (min-width: 768px) {
        header {
            font-size: 2em;
        }
    }

</style>
<header>
    <a href="{base}/" class="home">Guess That Flavor Text</a>
        <details class="menu">
            <summary></summary>
            <div class="menu-container">
                <a href="{base}/about" class="nav-link">About</a>
            </div>
        </details>
</header>

<div class="content">
    <slot></slot>
</div>

<footer>
    Pokémon and All Respective Names are Trademark & © of Nintendo 1996-2022.

    This website is not produced by, endorsed by, supported by, or affiliated with Nintendo, The Pokémon Company
    International, GAMEFREAK, or Uncommon Energy Podcast.
    <br>
    All other content © 2022 GuessThatFlavorText.
</footer>
