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
            lieuTypes,
            name,
            address,
            city,
            postalCode,
            country,
            barType,
            avgPrice,
        } = req.body

        const newPlace = await createPlace(req.body)

        res.send(newPlace)

        return
    }

    res.status(405).send({ error: 'Method not allowed' })
})

export default handle
