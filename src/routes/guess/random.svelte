<script context="module">
    export const prerender = false;

    import PokemonApiService from '$lib/js/PokemonApiService.js'


    export async function load({params, fetch, session, stuff}) {
        console.log("load")
        let card = await PokemonApiService.getRandomCard()
        console.log(card)
        return {
            status: 200,
            props: {
                card: card
            }
        };
    }
</script>

<script>
    import {fade, crossfade} from 'svelte/transition';
    import {afterNavigate, beforeNavigate} from '$app/navigation';
    import {base} from '$app/paths';
    import CardGuess from "$lib/components/CardGuess.svelte";

    export let card;

    beforeNavigate(navigation => {
        navigation.cancel()
        if (navigation.from != null && navigation.to != null && navigation.from.pathname === navigation.to.pathname &&
            (navigation.to.pathname === `${base}/guess/random` || navigation.to.pathname === `/${base}/guess/random`)
        ) {
            reloadCard()
        }
    })

    function reloadCard() {
        // card = null
        show = false
        PokemonApiService.getRandomCard().then(value => {
            card = value
        })
    }

    let status = "blub"
    let show = true
</script>
{status}
{#if show}
    <div transition:fade={{delay: 200, duration: 1000}}
         on:introstart="{() => status = 'intro started'}"
         on:outrostart="{() => status = 'outro started'}"
         on:introend="{() => status = 'intro ended'}"
         on:outroend="{() => {status = 'outro ended'; show = true}}"
    >
        {#key card}
            <CardGuess card={card}></CardGuess>
        {/key}
    </div>
{/if}
