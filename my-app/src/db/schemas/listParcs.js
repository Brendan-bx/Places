import {
    avgPrice,
    isFree,
    isPrivate,
    lieuTypes,
    parcTypes,
} from '@/utils/constants'
import { Schema } from 'mongoose'

export const listParcs = new Schema({
    ParcsType: {
        type: String,
        enum: lieuTypes[2],
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
    postal: {
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
    averagePrice: {
        type: String,
        enum: avgPrice,
    },
})
