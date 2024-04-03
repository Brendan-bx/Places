import { avgPrice, lieuTypes, barTypes } from '@/utils/constants'
import { Schema } from 'mongoose'

export const listBar = new Schema({
    lieuTypes: {
        type: String,
        enum: lieuTypes,
    },
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    postalCode: {
        type: Number,
    },
    country: {
        type: String,
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
