import { listParcs } from '@/db/schemas/listParcs'
import mongoose from 'mongoose'

export const PlacesModel =
    mongoose.models.places || mongoose.model('parcs', listParcs, 'Parcs')
