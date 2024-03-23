import { mw } from "@/api/mw"
import { createPlace } from "@/db/crud"

const handle = mw(async (req, res) => {
  // Read (collection) => GET /todos
  /*if (req.method === "GET") {
    const todos = await readTodos()

    res.send(todos)

    return
  }*/

  // Create (item) => POST /todos
  if (req.method === "POST") {
    const lieuTypes = req.body.lieuTypes
    const name = req.body.name
    const address = req.body.address
    const city = req.body.city
    const postalCode = req.body.postalCode
    const country = req.body.country
    const cuisineTypes = req.body.cuisineTypes
    const stars = req.body.stars
    const avgPrice = req.body.avgPrice

    if (!description) {
      res.status(422).send({ error: "missing description argument" })

      return
    }

    const newTodo = await createPlace({ lieuTypes ,name, address, city ,postalCode, country, cuisineTypes, stars, avgPrice })

    res.send(newPlace)

    return
  }

  res.status(404).send({ error: "Not found" })
})

export default handle
