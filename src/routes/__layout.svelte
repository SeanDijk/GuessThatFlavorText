<script>
    import {base} from '$app/paths';
    import HamburgerMenu from "$lib/components/HamburgerMenu.svelte";
    import {afterNavigate} from '$app/navigation';
    import {fade} from 'svelte/transition';

    let hamburgerMenu

    afterNavigate(navigation => {
        hamburgerMenu.close()
    })
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
        position: absolute;
        /* header height + padding + border */
        top: 65px;
        left: 0;

        box-sizing: border-box;
        padding: 8px;
        width: 100%;
        border-style: solid;
        background-color: white;
    }

    .nav-link {
        display: block;
        width: 100%;
        text-align: center;
    }

    .nav-link:focus:before {
        content: '> ';
    }

    .hamburger-menu {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    @media only screen and (min-width: 768px) {
        header {
            font-size: 2em;
        }
    }

</style>
<header>
    <a href="{base}/" class="home">Guess That Flavor Text</a>
    <div class="hamburger-menu">
        <HamburgerMenu bind:this={hamburgerMenu}>
            <div class="menu" transition:fade>
                <a href="{base}/about" class="nav-link">About</a>
                <a href="{base}/search" class="nav-link">Search a card</a>
                <a href="{base}/guess/random" class="nav-link">Guess random card</a>
            </div>
        </HamburgerMenu>
    </div>
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
