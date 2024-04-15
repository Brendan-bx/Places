import { PlacesModel } from '@/db/model/resto'

export const createPlace = async (data) => {
    const newPlace = new PlacesModel(data)

    await newPlace.save()

    return newPlace
}
export const readRestos = async () => await PlacesModel.find()
export const readResto = async (placeId) => await PlacesModel.findById(placeId)
export const updateResto = async (placeId, data) => {
    const updatedResto = await PlacesModel.findByIdAndUpdate(placeId, data, {
        returnDocument: 'after',
    })

    return updatedResto
}
export const deleteResto = async (placeId) => {
    const place = await PlacesModel.findOneAndDelete({ _id: placeId })

    if (!place) {
        return null
    }

    return place
}
