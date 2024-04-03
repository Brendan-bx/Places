import { avgPrice, lieuTypes, barTypes } from '@/utils/constants'
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
        type: String,
    },
    country: {
        type: String,
    },
    placeTypes: {
        type: String,
        enum: lieuTypes[2],
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
