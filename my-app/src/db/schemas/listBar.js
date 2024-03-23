import { avgPrice, lieuTypes, barTypes, stars } from '@/utils/constants'
import { Schema } from 'mongoose'

export const listBar = new Schema({
    type: {
        type: String,
        required: true,
        enum: lieuTypes
    },
    barTypes: {
        enum: barTypes,
        required: true,
    },
    stars: {
        type: String,
        required: true,
        enum: stars
    },
    averagePrice: {
        type: String,
        required: true,
        enum: avgPrice
    },
})
