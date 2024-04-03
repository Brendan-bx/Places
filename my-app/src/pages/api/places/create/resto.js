import { mw } from '@/api/mw'
import { createPlace, readPlaces } from '@/db/crudResto'

const handle = mw(async (req, res) => {
    if (req.method === 'GET') {
        const resto = await readPlaces()

        res.send(resto)

        return
    }

    if (req.method === 'POST') {
        console.log(req.body)
        const newPlace = await createPlace(req.body)

        res.send(newPlace)

        return
    }

    res.status(405).send({ error: 'Method not allowed' })
})

export default handle
