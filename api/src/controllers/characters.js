const axios = require('axios')

const allCharacters = async () => {
    const characters = await axios.get("https://rickandmortyapi.com/api/character")
    data = characters.data.results
    /* console.log(data) */
     return data.map(c => {
        return {
            id: c.id,
            name: c.name,
            status: c.status
        }
     })
}

module.exports = {
    allCharacters
}