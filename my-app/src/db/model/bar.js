import { listBar } from '@/db/schemas/listBar'
import mongoose from 'mongoose'

export const PlacesModel =
    mongoose.models.Bar || mongoose.model('Bar', listBar, 'Bar')
