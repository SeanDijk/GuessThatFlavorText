function removeAccents(str) {
    return str.normalize('NFD').replace(/\p{Diacritic}/gu, "");
}

const GuessService = {
    matchesAnswer:(guess, answer) => {

        // TODO characters like ♀
        // TODO ignore regions like 'Galarian'
        return removeAccents(guess.toLowerCase()) === removeAccents(answer.toLowerCase())
    }
}

export default GuessService
