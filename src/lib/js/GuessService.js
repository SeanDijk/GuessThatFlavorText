function removeAccents(str) {
    return str.normalize('NFD').replace(/\p{Diacritic}/gu, "");
}

const GuessService = {
    matchesAnswer:(guess, answer) => {
        return removeAccents(guess.toLowerCase()) === removeAccents(answer.toLowerCase())
    }
}

export default GuessService
