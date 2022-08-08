<script>
    import pokeball from '$lib/images/pokeball.png'
    import { fade } from 'svelte/transition';
</script>
<style>
    .loading {
        position: absolute;
        width: 120px;
        height: 120px;
        top: 50%;
        left: 50%;
        margin-top: -60px;
        margin-left: -60px;
    }

    img {
        width: 100%;
        height: 100%;
        -webkit-animation: spin 4s linear infinite;
        -moz-animation: spin 4s linear infinite;
        animation: spin 4s linear infinite, show 1s ease normal;
    }
</style>
<div class="loading" out:fade>
    <img src="{pokeball}" class="loading" />
</div>
