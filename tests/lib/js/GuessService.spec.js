import {describe, expect, it, test} from 'vitest';
import GuessService from "$lib/js/GuessService.js";

describe("GuessService", () => {
    describe("matchesAnswer(guess, answer)", () => {

        it("should return true on an exact match ('Pikachu', 'Pikachu')", () => {
            expect(GuessService.matchesAnswer("Pikachu", "Pikachu")).toBe(true)
        })

        it("should return true if only accents differ ('Flabebe', 'Flabébé')", function () {
            expect(GuessService.matchesAnswer('Flabebe', 'Flabébé')).toBe(true)
        });

        it("should ignore casing ('pIkaChu', 'Pikachu')", function () {
            expect(GuessService.matchesAnswer("pIkaChu", "Pikachu")).toBe(true)
        });

        it('should trim input ("Pikachu ", "Pikachu")', function () {
            expect(GuessService.matchesAnswer("Pikachu ", "Pikachu")).toBe(true)
        });

        describe('should ignore the gender characters', () => {
            test('♀', function () {
                expect(GuessService.matchesAnswer("Nidoran", "Nidoran ♀")).toBe(true)
            });

            test('♂', function () {
                expect(GuessService.matchesAnswer("Nidoran", "Nidoran ♂")).toBe(true)
            });
        })


        it('should return false if the names are different ("Pikachu", "Raichu")', function () {
            expect(GuessService.matchesAnswer("Pikachu", "Raichu")).toBe(false);
        });

        describe('should return false if there are prefixes missing', () => {
            test('Dark', function () {
                expect(GuessService.matchesAnswer("Gyarados", "Dark Gyarados")).toBe(false)
            });

            test('Light', function () {
                expect(GuessService.matchesAnswer("Dragonair", "Light Dragonair")).toBe(false)
            });

            test('Shining', function () {
                expect(GuessService.matchesAnswer("Magikarp", "Shining Magikarp")).toBe(false)
            });
        })

    });

    describe("replaceNameWithBlank(flavorText, name)", () => {

        it('should change the name when it matches exactly', function () {
            let flavorText = `It's one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.`
            let name = 'Moltres'

            expect(GuessService.replaceNameWithBlank(flavorText, name)).toBe(
                `It's one of the legendary bird Pokémon. When BLANK flaps its flaming wings, they glimmer with a dazzling red glow.`
            )
        });

        it('should change when only the case differs', function () {
            let flavorText = `It's one of the legendary bird Pokémon. When MOLTRES flaps its flaming wings, they glimmer with a dazzling red glow.`
            let name = 'Moltres'

            expect(GuessService.replaceNameWithBlank(flavorText, name)).toBe(
                `It's one of the legendary bird Pokémon. When BLANK flaps its flaming wings, they glimmer with a dazzling red glow.`
            )
        });

        it('should replace the name when it is in te flavor text mutliple times', function () {
            let flavorText = `Moltres: It's one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.`
            let name = 'Moltres'

            expect(GuessService.replaceNameWithBlank(flavorText, name)).toBe(
                `BLANK: It's one of the legendary bird Pokémon. When BLANK flaps its flaming wings, they glimmer with a dazzling red glow.`
            )
        });

        describe('should change the name when it matches exactly apart from a prefix (e.g. name is "Galarian Moltres" and flavor text contains "Moltres")', () => {
            it('Galarian', function () {
                let flavorText = `The sinister aura that blazes like molten fire around this Pokémon is what inspired the name Moltres.`
                let name = 'Galarian Moltres'
                expect(GuessService.replaceNameWithBlank(flavorText, name)).toBe(
                    `The sinister aura that blazes like molten fire around this Pokémon is what inspired the name BLANK.`
                )
            });

            it('Hisuian', function () {
                let flavorText = `Hard of heart and deft of blade, this rare form of Samurott is a product of the Pokémon's evolution in the region of Hisui. Its turbulent blows crash into foes like ceaseless pounding waves.`
                let name = 'Hisuian Samurott'
                console.log(GuessService.replaceNameWithBlank(flavorText, name))

                expect(GuessService.replaceNameWithBlank(flavorText, name)).toBe(
                    `Hard of heart and deft of blade, this rare form of BLANK is a product of the Pokémon's evolution in the region of Hisui. Its turbulent blows crash into foes like ceaseless pounding waves.`
                )
            });

            it('Alolan', function () {
                let flavorText = `The sinister aura that blazes like molten fire around this Pokémon is what inspired the name Moltres.`
                let name = 'Galarian Moltres'
                expect(GuessService.replaceNameWithBlank(flavorText, name)).toBe(
                    `The sinister aura that blazes like molten fire around this Pokémon is what inspired the name BLANK.`
                )
            });

            it('Light', function () {
                let flavorText = `Some text Jolteon Some text`
                let name = 'Light Jolteon'
                expect(GuessService.replaceNameWithBlank(flavorText, name)).toBe(
                    `Some text BLANK Some text`
                )
            });

            it('Dark', function () {
                let flavorText = `Some text Jolteon Some text`
                let name = 'Dark Jolteon'
                expect(GuessService.replaceNameWithBlank(flavorText, name)).toBe(
                    `Some text BLANK Some text`
                )
            });

            it('Radiant', function () {
                let flavorText = `Some text Jolteon Some text`
                let name = 'Radiant Jolteon'
                expect(GuessService.replaceNameWithBlank(flavorText, name)).toBe(
                    `Some text BLANK Some text`
                )
            });

            it('Shining', function () {
                let flavorText = `Some text Jolteon Some text`
                let name = 'Shining Jolteon'
                expect(GuessService.replaceNameWithBlank(flavorText, name)).toBe(
                    `Some text BLANK Some text`
                )
            });
        });

    })
})
