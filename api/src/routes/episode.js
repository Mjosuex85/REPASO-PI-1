const { Router } = require('express')
const router = Router()
const { Episode } = require('../db')
const { getEpisodes } = require("../controllers/episode")

router.get('/episodes', async (req, res) => {
    const episode = await getEpisodes()
    episode?.map(e => {
        Episode.findOrCreate({
            where: {
                name: e
            }
        })
    });

    res.send(episode)
})

module.exports = router