import { avgPrice, cuisineTypes, lieuTypes, stars } from '@/utils/constants'
import { Schema } from 'mongoose'

export const listResto = new Schema({
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
    cuisineType: {
        type: String,
        enum: cuisineTypes,
    },
    stars: {
        type: String,
        enum: stars,
    },
    averagePrice: {
        type: String,
        enum: avgPrice,
    },
})
