import { PlacesModel } from '@/db/model/parcs'

export const createParc = async (data) => {
    const newPlace = new PlacesModel(data)

    await newPlace.save()

    return newPlace
}
export const readParcs = async () => await PlacesModel.find()
export const readParc = async (placeId) => await PlacesModel.findById(placeId)
export const updateParc = async (placeId, data) => {
    const updatedParc = await PlacesModel.findByIdAndUpdate(placeId, data, {
        returnDocument: 'after',
    })

    return updatedParc
}
export const deleteParc = async (placeId) => {
    const place = await PlacesModel.findOneAndDelete({ _id: placeId })

    if (!place) {
        return null
    }

    return place
}
