const axios = require('axios');
const { Character, Episode } = require('../db.js')

const get_Api_Characters = async () => {
    const characters = await axios.get("https://rickandmortyapi.com/api/character")
    data = characters.data.results  
    
     return data?.map(c => {   
        return {
            id: c.id,
            name: c.name,
            status: c.status,
            gender: c.gender,
            image: c.image,
            episode: c.episode,
            species: c.species
        }
     })
};

const get_DB_Characters = async () => {
    const db = await Character.findAll({
        include: Episode,
        through: { attributes: [] }
    })

    return db.map(e => {
        return {
            id: e.id,
            status: e.status,
            name: e.name,
            species: e.species,
            gender: e.gender,
            image: e.image,
            createdInDB: e.createdInDB,
            episode: e.episodes.map(n => n.name)
        }
    })
}

module.exports = {
    get_Api_Characters,
    get_DB_Characters
};