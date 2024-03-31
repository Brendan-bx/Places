import {
    avgPrice,
    isFree,
    isPrivate,
    parcTypes,
    stars,
} from '@/utils/constants'
import { Schema } from 'mongoose'

export const listParcs = new Schema({
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
    parcTypes: {
        enum: parcTypes,
        required: true,
    },
    isFree: {
        type: String,
        required: true,
        enum: isFree,
    },
    isPrivate: {
        type: String,
        required: true,
        enum: isPrivate,
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
