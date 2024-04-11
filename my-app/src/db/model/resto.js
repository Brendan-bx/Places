import { listResto } from '@/db/schemas/listResto'
import mongoose from 'mongoose'

export const PlacesModel =
    mongoose.models.Restaurants ||
    mongoose.model('Restaurants', listResto, 'Restaurants')
