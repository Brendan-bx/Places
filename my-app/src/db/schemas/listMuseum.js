import {
    avgPrice,
    lieuTypes,
    artMovement,
    artType,
    stars,
} from '@/utils/constants'
import { Schema } from 'mongoose'

export const listMuseum = new Schema({
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
    museumType: {
        type: String,
        required: true,
        enum: lieuTypes,
    },
    artType: {
        enum: artType,
        required: true,
    },
    artMovement: {
        type: String,
        required: true,
        enum: artMovement,
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
