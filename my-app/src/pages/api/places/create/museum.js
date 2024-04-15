import { mw } from '@/api/mw'
import { createMuseum, readMuseums } from '@/db/crudMuseum'

const handle = mw(async (req, res) => {
    if (req.method === 'GET') {
        const places = await readMuseums()

        res.send(places)

        return
    }
    if (req.method === 'POST') {
        const newPlace = await createMuseum(req.body)

        res.send(newPlace)

        return
    }

    res.status(405).send({ error: 'Method not allowed' })
})

export default handle
