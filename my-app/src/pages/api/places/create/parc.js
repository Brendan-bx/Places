import { mw } from '@/api/mw'
import { createParc, readParcs } from '@/db/crudParc'

const handleParc = mw(async (req, res) => {
    if (req.method === 'GET') {
        const places = await readParcs()

        res.send(places)

        return
    }
    if (req.method === 'POST') {
        const newPlace = await createParc(req.body)

        res.send(newPlace)

        return
    }

    res.status(405).send({ error: 'Method not allowed' })
})

export default handleParc
