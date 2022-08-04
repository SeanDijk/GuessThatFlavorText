<script>
    import Modal from "$lib/components/Modal.svelte";
    import Result from "$lib/components/Result.svelte";

    let card = {
        "id": "sm2-5",
        "name": "Lilligant",
        "supertype": "Pokémon",
        "subtypes": [
            "Stage 1"
        ],
        "hp": "90",
        "types": [
            "Grass"
        ],
        "evolvesFrom": "Petilil",
        "attacks": [
            {
                "name": "Petal Blizzard",
                "cost": [
                    "Colorless"
                ],
                "convertedEnergyCost": 1,
                "damage": "",
                "text": "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
            },
            {
                "name": "Petal Dance",
                "cost": [
                    "Grass",
                    "Colorless"
                ],
                "convertedEnergyCost": 2,
                "damage": "40×",
                "text": "Flip 3 coins. This attack does 40 damage for each heads. This Pokémon is now Confused."
            }
        ],
        "weaknesses": [
            {
                "type": "Fire",
                "value": "×2"
            }
        ],
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "set": {
            "id": "sm2",
            "name": "Guardians Rising",
            "series": "Sun & Moon",
            "printedTotal": 145,
            "total": 180,
            "legalities": {
                "unlimited": "Legal",
                "expanded": "Legal"
            },
            "ptcgoCode": "GRI",
            "releaseDate": "2017/05/05",
            "updatedAt": "2021/07/15 11:30:00",
            "images": {
                "symbol": "https://images.pokemontcg.io/sm2/symbol.png",
                "logo": "https://images.pokemontcg.io/sm2/logo.png"
            }
        },
        "number": "5",
        "artist": "You Iribi",
        "rarity": "Rare",
        "flavorText": "No matter how much time and money is spent raising it, its flowers are the most beautiful when they bloom in the wild.",
        "nationalPokedexNumbers": [
            549
        ],
        "legalities": {
            "unlimited": "Legal",
            "expanded": "Legal"
        },
        "images": {
            "small": "https://images.pokemontcg.io/sm2/5.png",
            "large": "https://images.pokemontcg.io/sm2/5_hires.png"
        },
        "tcgplayer": {
            "url": "https://prices.pokemontcg.io/tcgplayer/sm2-5",
            "updatedAt": "2022/07/25",
            "prices": {
                "normal": {
                    "low": 0.1,
                    "mid": 0.25,
                    "high": 5.39,
                    "market": 0.21,
                    "directLow": 0.18
                },
                "reverseHolofoil": {
                    "low": 0.19,
                    "mid": 0.37,
                    "high": 2.4,
                    "market": 0.3,
                    "directLow": 0.25
                }
            }
        },
        "cardmarket": {
            "url": "https://prices.pokemontcg.io/cardmarket/sm2-5",
            "updatedAt": "2022/07/25",
            "prices": {
                "averageSellPrice": 0.22,
                "lowPrice": 0.02,
                "trendPrice": 0.17,
                "reverseHoloSell": 0.27,
                "reverseHoloLow": 0.1,
                "reverseHoloTrend": 0.41,
                "lowPriceExPlus": 0.02,
                "avg1": 0.09,
                "avg7": 0.18,
                "avg30": 0.16,
                "reverseHoloAvg1": 0.3,
                "reverseHoloAvg7": 0.34,
                "reverseHoloAvg30": 0.32
            }
        }
    }
</script>

<Result card="{card}"></Result>
