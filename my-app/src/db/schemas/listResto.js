import { avgPrice, cuisineTypes, lieuTypes, stars } from '@/utils/constants'
import { Schema } from 'mongoose'

export const listResto = new Schema({
    type: {
        type: String,
        required: true,
        enum: lieuTypes
    },
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
    cuisineType: {
        enum: cuisineTypes,
        required: true,
    },
    stars: {
        type: stars,
        required: true,
    },
    averagePrice: {
        type: avgPrice,
        required: true,
    },
})



