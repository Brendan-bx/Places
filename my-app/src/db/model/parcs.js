import { listParcs } from '@/db/schemas/listParcs'
import mongoose from 'mongoose'

export const PlacesModel =
    mongoose.models.Parcs || mongoose.model('Parcs', listParcs, 'Parcs')
