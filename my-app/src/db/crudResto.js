import { PlacesModel } from '@/db/model/resto'

export const createPlace = async (data) => {
    const newPlace = new PlacesModel(data)

    await newPlace.save()

    return newPlace
}
export const readPlaces = async () => await PlacesModel.find()
export const readPlace = async (placeId) => await PlacesModel.findById(placeId)
export const updatePlace = async (placeId, data) => {
    const updatedPlace = await PlacesModel.findByIdAndUpdate(placeId, data, {
        returnDocument: 'after',
    })

    return updatedPlace
}
export const deletePlace = async (placeId) => {
    const place = await PlacesModel.findOneAndDelete({ _id: placeId })

    if (!place) {
        return null
    }

    return place
}
