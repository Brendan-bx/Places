import { mw } from '@/api/mw'
import { deletePlace, readPlace, updatePlace } from '@/db/crudResto'

const handle = mw(async (req, res) => {
    const { placeId } = req.query

    if (req.method === 'GET') {
        const place = await readPlace(placeId)

        if (!place) {
            res.status(404).send({ error: 'Not found' })

            return
        }

        res.send(place)

        return
    }

    // Update (item) => PATCH /todos/:todoId
    if (req.method === 'PATCH') {
        const updatedPlace = await updatePlace(placeId)

        if (!updatedPlace) {
            res.status(404).send({ error: 'Not found' })

            return
        }

        res.send(updatedPlace)

        return
    }

    // Delete (item) => DELETE /todos/:todoId
    if (req.method === 'DELETE') {
        const placeToBeDelete = await deletePlace(placeId)

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
