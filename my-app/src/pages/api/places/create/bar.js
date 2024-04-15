import { mw } from '@/api/mw'
import { createBar, readBars } from '@/db/crudBar'

const handle = mw(async (req, res) => {
    if (req.method === 'GET') {
        const places = await readBars()

        res.send(places)

        return
    }
    if (req.method === 'POST') {
        const newPlace = await createBar(req.body)

        res.send(newPlace)

        return
    }

    res.status(405).send({ error: 'Method not allowed' })
})

export default handle
