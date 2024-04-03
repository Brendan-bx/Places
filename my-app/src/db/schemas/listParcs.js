import {
    avgPrice,
    isFree,
    isPrivate,
    lieuTypes,
    parcTypes,
} from '@/utils/constants'
import { Schema } from 'mongoose'

export const listParcs = new Schema({
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
    parcTypes: {
        type: String,
        enum: parcTypes,
    },
    isPrivate: {
        type: String,
        enum: isPrivate,
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
