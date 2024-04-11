import { listMuseum } from '@/db/schemas/listMuseum'
import mongoose from 'mongoose'

export const PlacesModel =
    mongoose.models.Museum || mongoose.model('Museum', listMuseum, 'Museum')
