import { mw } from '@/api/mw'
import { deleteParc, readParc, updateParc } from '@/db/crudParc'

const handle = mw(async (req, res) => {
    const { placeId } = req.query

    if (req.method === 'GET') {
        const place = await readParc(placeId)

        if (!place) {
            res.status(404).send({ error: 'Not found' })

            return
        }

        res.send(place)

        return
    }

    if (req.method === 'PATCH') {
        const updatedParc = await updateParc(placeId, req.body)

        if (!updatedParc) {
            res.status(404).send({ error: 'Not found' })

            return
        }

        res.send(updatedParc)

        return
    }

    if (req.method === 'DELETE') {
        const placeToBeDelete = await deleteParc(placeId)

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
