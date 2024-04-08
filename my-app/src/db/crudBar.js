import { PlacesModel } from '@/db/model/bar'

export const createPlace = async (data) => {
    const newPlace = new PlacesModel(data)

    await newPlace.save()

    return newPlace
}
export const readPlaces = async () => await PlacesModel.find()
