const { Router } = require('express')
const router = Router()
const { allCharacters } = require('../controllers/characters')
const { Character, Episodes } = require('../db.js')


router.get('/', async (req, res) => {
    const apiCharacters = await allCharacters()
    const dbCharacters = await Character.findAll()
    
    const allC = [...apiCharacters, ...dbCharacters]

    res.send(allC)
});

router.post("/createcharacter", (req, res) => {
    const {name, status, species, gender, image } = req.body
    try {
            const createC = {
                name,
                status,
                species,
                gender,
                image
           }

        const x = Character.create(createC)
        res.send(createC)
    }

    catch(error) {
        console.log(error)
    }
})


module.exports = router