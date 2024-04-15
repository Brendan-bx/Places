import { mw } from '@/api/mw'
import { deleteResto, readResto, updateResto } from '@/db/crudResto'

const handle = mw(async (req, res) => {
    const { placeId } = req.query

    if (req.method === 'GET') {
        const place = await readResto(placeId)

        if (!place) {
            res.status(404).send({ error: 'Not found' })

            return
        }

        res.send(place)

        return
    }

    if (req.method === 'PATCH') {
        const updatedResto = await updateResto(placeId, req.body)

        if (!updatedResto) {
            res.status(404).send({ error: 'Not found' })

            return
        }

        res.send(updatedResto)

        return
    }

    if (req.method === 'DELETE') {
        const placeToBeDelete = await deleteResto(placeId)

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
