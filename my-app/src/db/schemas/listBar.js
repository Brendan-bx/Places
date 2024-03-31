import { avgPrice, lieuTypes, barTypes, stars } from '@/utils/constants'
import { Schema } from 'mongoose'

export const listBar = new Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    postal: {
        type: Number,
    },
    country: {
        type: String,
    },
    barType: {
        type: String,
        enum: lieuTypes,
    },
    barTypes: {
        type: String,
        enum: barTypes,
    },
    avgPrice: {
        type: String,
        enum: avgPrice,
    },
})
