import { listMuseum } from '@/db/schemas/listMuseum'
import mongoose from 'mongoose'

export const PlacesModel =
    mongoose.models.places || mongoose.model('Place', listMuseum, 'places')
