import { mw } from '@/api/mw'
import { createResto, readRestos } from '@/db/crudResto'

const handle = mw(async (req, res) => {
    if (req.method === 'GET') {
        const places = await readRestos()

        res.send(places)

        return
    }

    if (req.method === 'POST') {
        const newPlace = await createResto(req.body)

        res.send(newPlace)

        return
    }

    res.status(405).send({ error: 'Method not allowed' })
})

export default handle
