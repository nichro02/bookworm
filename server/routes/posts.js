import express from 'express'

const router = express.Router()

//home route
router.get('/', (req, res) => {
    res.send('GET ROUTE WORKS!')
})

export default router