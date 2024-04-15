import { PlacesModel } from '@/db/model/museum'

export const createMuseum = async (data) => {
    const newPlace = new PlacesModel(data)

    await newPlace.save()

    return newPlace
}
export const readMuseums = async () => await PlacesModel.find()
export const readMuseum = async (placeId) => await PlacesModel.findById(placeId)
export const updateMuseum = async (placeId, data) => {
    const updatedMuseum = await PlacesModel.findByIdAndUpdate(placeId, data, {
        returnDocument: 'after',
    })

    return updatedMuseum
}
export const deleteMuseum = async (placeId) => {
    const place = await PlacesModel.findOneAndDelete({ _id: placeId })

    if (!place) {
        return null
    }

    return place
}
