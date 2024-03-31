import { PlacesModel } from '@/db/model/parcs'

export const createPlace = async (data) => {
    const newPlace = new PlacesModel(data)

    await newPlace.save()

    return newPlace
}
