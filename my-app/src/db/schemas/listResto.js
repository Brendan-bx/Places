import { avgPrice, cuisineTypes, lieuTypes, stars } from '@/utils/constants'
import { Schema } from 'mongoose'

export const listResto = new Schema({
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
    cuisineTypes: {
        type: String,
        enum: cuisineTypes,
    },
    stars: {
        type: String,
        enum: stars,
    },
    avgPrice: {
        type: String,
        enum: avgPrice,
    },
})
