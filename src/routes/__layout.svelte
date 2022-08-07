<script>
    import { base } from '$app/paths';
</script>
<style>
    @import url('$lib/css/buttons.css');
    @import url('$lib/css/util.css');
    @import url('$lib/css/typography.css');

    header {
        font-family: "Pokemon Fire Red", serif;
        font-size: 2em;

        border-style: solid;
        border-bottom-width: 5px;
        padding: 8px;
    }

    .link, .link:hover, .link:focus, .link:active {
        text-decoration: none;
        color: inherit;
    }

</style>
<header>
    <a href="{base ?? '/'}" class="link">Guess That Flavor Text</a>
</header>
<slot>

</slot>
