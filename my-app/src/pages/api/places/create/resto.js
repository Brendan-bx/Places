import { mw } from '@/api/mw'
import { createPlace, readPlaces } from '@/db/crudResto'

const handle = mw(async (req, res) => {
    if (req.method === 'GET') {
        const places = await readPlaces()

        res.send(places)

        return
    }

    if (req.method === 'POST') {
        const newPlace = await createPlace(req.body)

        res.send(newPlace)

        return
    }

    res.status(405).send({ error: 'Method not allowed' })
})

export default handle
