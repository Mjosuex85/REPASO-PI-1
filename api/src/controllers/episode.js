const axios = require('axios')

const getEpisodes = async () => {
    try {
    const episodes = await axios.get("https://rickandmortyapi.com/api/episode")
    const data = episodes.data.results;
        return data.map(e => e.name)
    }

    catch(error) {
        console.log(error)
    }   
}   

module.exports = {
    getEpisodes
}