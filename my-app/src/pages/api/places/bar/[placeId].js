import { mw } from '@/api/mw'
import { deleteBar, readBar, updateBar } from '@/db/crudBar'

const handle = mw(async (req, res) => {
    const { placeId } = req.query

    if (req.method === 'GET') {
        const place = await readBar(placeId)

        if (!place) {
            res.status(404).send({ error: 'Not found' })

            return
        }

        res.send(place)

        return
    }

    if (req.method === 'PATCH') {
        const updatedBar = await updateBar(placeId, req.body)

        if (!updatedBar) {
            res.status(404).send({ error: 'Not found' })

            return
        }

        res.send(updatedBar)

        return
    }

    if (req.method === 'DELETE') {
        const placeToBeDelete = await deleteBar(placeId)

        if (!placeToBeDelete) {
            res.status(404).send({ error: 'Not found' })

            return
        }

        res.send(placeToBeDelete)

        return
    }

    res.status(404).send({ error: 'Not found' })
})

export default handle
