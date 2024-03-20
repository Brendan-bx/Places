import { cuisineTypes } from '@/utils/constants'
import { Schema } from 'mongoose'

export const listResto = new Schema({
    type: {
        type: String,
        required: true,
        enum: [""]
    },
    name: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    ville: {
        type: String,
        required: true,
    },
    postal: {
        type: String,
        required: true,
    },
    Country: {
        type: String,
        required: true,
    },
    cuisineType: {
        enum: cuisineTypes,
        required: true,
    },
    stars: {
        type: Number,
        required: true,
    },
    averagePrice: {
        type: Number,
        required: true,
    },
})
