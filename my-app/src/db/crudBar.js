import { PlacesModel } from '@/db/model/bar'

export const createBar = async (data) => {
    const newPlace = new PlacesModel(data)

    await newPlace.save()

    return newPlace
}
export const readBars = async () => await PlacesModel.find()
export const readBar = async (placeId) => await PlacesModel.findById(placeId)
export const updateBar = async (placeId, data) => {
    const updatedBar = await PlacesModel.findByIdAndUpdate(placeId, data, {
        returnDocument: 'after',
    })

    return updatedBar
}
export const deleteBar = async (placeId) => {
    const place = await PlacesModel.findOneAndDelete({ _id: placeId })

    if (!place) {
        return null
    }

    return place
}
