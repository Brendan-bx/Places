import { avgPrice, artMovement, artType, isFree } from '@/utils/constants'
import { Schema } from 'mongoose'

export const listMuseum = new Schema({
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
    averagePrice: {
        type: Number,
        enum: avgPrice,
    },
})
