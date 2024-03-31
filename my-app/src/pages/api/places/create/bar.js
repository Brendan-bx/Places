import { mw } from '@/api/mw'
import { createPlace } from '@/db/crudBar'

const handle = mw(async (req, res) => {
    // Read (collection) => GET /todos
    /*if (req.method === "GET") {
    const todos = await readTodos()

    res.send(todos)

    return
  }*/
    if (req.method === 'POST') {
        const {
            name,
            address,
            city,
            postalCode,
            country,
            barType,
            isPrivate,
            isFree,
            avgPrice,
        } = req.body

        if (!description) {
            res.status(422).send({ error: 'missing description argument' })

            return
        }

        const newPlace = await createPlace(req.body)

        res.send(newPlace)

        return
    }

    res.status(405).send({ error: 'Method not allowed' })
})

export default handle
