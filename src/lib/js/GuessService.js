function normalizeStringForAnswer(str) {
    return str.normalize('NFD').replace(/\p{Diacritic}/gu, "")
        .toLowerCase()
        .replace('♀', '')
        .replace('♂', '')
        .trim();
}

const filterTypes = [
    'Galarian',
    'Hisuian',
    'Alolan',
    'Light',
    'Dark',
    'Radiant',
    'Shining'
]

const BLANK = 'BLANK';
const GuessService = {
    /**
     * @param {string} guess The given guess
     * @param {string} answer The answer it should match
     * @return {boolean} true if the answer matches.
     */
    matchesAnswer: (guess, answer) => {
        return normalizeStringForAnswer(guess) === normalizeStringForAnswer(answer)
    },
    /**
     *
     * @param {string} flavorText
     * @param {string} name
     */
    replaceNameWithBlank: (flavorText, name) => {
        let blanked = flavorText.replaceAll(new RegExp(name,"ig"), BLANK)

        filterTypes.forEach(value => {
            blanked = blanked.replaceAll(new RegExp(name.replaceAll(value, '').trim(),"ig"), BLANK)
        })

        return blanked
    }
}

export default GuessService
