import { avgPrice, cuisineTypes, lieuTypes, stars } from '@/utils/constants'
import { Schema } from 'mongoose'

export const listResto = new Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    ville: {
        type: String,
    },
    postal: {
        type: Number,
    },
    country: {
        type: String,
    },
    restoType: {
        type: String,
        enum: lieuTypes,
    },
    cuisineType: {
        enum: cuisineTypes,
    },
    stars: {
        type: stars,
    },
    averagePrice: {
        type: avgPrice,
    },
})
