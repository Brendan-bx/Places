import { mw } from '@/api/mw'
import { deleteMuseum, readMuseum, updateMuseum } from '@/db/crudMuseum'

const handle = mw(async (req, res) => {
    const { placeId } = req.query

    if (req.method === 'GET') {
        const place = await readMuseum(placeId)

        if (!place) {
            res.status(404).send({ error: 'Not found' })

            return
        }

        res.send(place)

        return
    }

    if (req.method === 'PATCH') {
        const updatedMuseum = await updateMuseum(placeId, req.body)

        if (!updatedMuseum) {
            res.status(404).send({ error: 'Not found' })

            return
        }

        res.send(updatedMuseum)

        return
    }

    if (req.method === 'DELETE') {
        const placeToBeDelete = await deleteMuseum(placeId)

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
