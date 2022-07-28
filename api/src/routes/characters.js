const { Router } = require('express');
const router = Router()
const { get_Api_Characters, get_DB_Characters } = require('../controllers/characters')
const { Character, Episode } = require('../db.js')


    
router.get('/', async (req, res) => {
    try {
        const apiCharacters = await get_Api_Characters()
        const dbCharacters = await get_DB_Characters()
        
        const allC = [...apiCharacters, ...dbCharacters]
        res.status(200).send(allC)
    }
    
    catch(error) {
        console.log(error)
        res.status(404).send(error)
    }
});

router.post("/createcharacter", async (req, res) => {
    const {name, status, species, gender, image } = req.body
    const { episode } = req.body
    try {
            const createC = {
                name,
                status,
                species,
                gender,
                image
           }

        const character = await Character.create(createC)
        const episodeDB = await Episode.findAll({
            where: {
                name: episode
            }
        })

       character.addEpisode(episodeDB)

        res.send(character)
    }

    catch(error) {
        console.log(error)
        res.send("Error")
    }
});


module.exports = router