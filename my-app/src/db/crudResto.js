import { PlacesModel } from '@/db/model/resto'

export const createPlace = async (data) => {
    const newPlace = new PlacesModel(data)

    await newPlace.save()

    return newPlace
}
export const readPlaces = async () => await PlacesModel.find()
// export const readPlace = async (todoId) => await PlacesModel.findById()
