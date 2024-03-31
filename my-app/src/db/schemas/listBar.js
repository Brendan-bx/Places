import { avgPrice, lieuTypes, barTypes, stars } from '@/utils/constants'
import { Schema } from 'mongoose'

export const listBar = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    ville: {
        type: String,
        required: true,
    },
    postal: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    barType: {
        type: String,
        required: true,
        enum: lieuTypes,
    },
    barTypes: {
        enum: barTypes,
        required: true,
    },
    stars: {
        type: String,
        required: true,
        enum: stars,
    },
    averagePrice: {
        type: String,
        required: true,
        enum: avgPrice,
    },
})
