import { listBar } from '@/db/schemas/listBar'
import mongoose from 'mongoose'

export const PlacesModel =
    mongoose.models.places || mongoose.model('barlist', listBar, 'Bar')
