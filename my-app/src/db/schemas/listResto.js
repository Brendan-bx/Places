import { avgPrice, cuisineTypes, lieuTypes, stars } from '@/utils/constants'
import { Schema } from 'mongoose'

export const listResto = new Schema({
    type: {
        type: String,
        required: true,
        enum: lieuTypes
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



