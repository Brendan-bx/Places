import {
    avgPrice,
    artMovement,
    artType,
    isFree,
    lieuTypes,
} from '@/utils/constants'
import { Schema } from 'mongoose'

export const listMuseum = new Schema({
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
    artMovement: {
        type: String,
        enum: artMovement,
    },
    artType: {
        type: String,
        enum: artType,
    },
    isFree: {
        type: String,
        enum: isFree,
    },
    avgPrice: {
        type: String,
        enum: avgPrice,
    },
})
