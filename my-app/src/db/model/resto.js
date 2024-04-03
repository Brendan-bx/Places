import { listResto } from '@/db/schemas/listResto'
import mongoose from 'mongoose'

export const PlacesModel =
    mongoose.models.places || mongoose.model('places', listResto, 'Restaurants')
