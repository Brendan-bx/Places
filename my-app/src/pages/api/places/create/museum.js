import { mw } from '@/api/mw'
import { createPlace } from '@/db/crudMuseum'

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
            artType,
            artMovement,
            isFree,
            avgPrice,
        } = req.body

        const newPlace = await createPlace(req.body)

        res.send(newPlace)

        return
    }

    res.status(405).send({ error: 'Method not allowed' })
})

export default handle
