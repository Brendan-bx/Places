import { avgPrice, isFree, isPrivate, lieuTypes, parcTypes, stars } from '@/utils/constants'
import { Schema } from 'mongoose'

export const listParcs = new Schema({
    type: {
        type: String,
        required: true,
        enum: lieuTypes
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
        enum: isPrivate
    },
    stars: {
        type: String,
        required: true,
        enum: stars
    },
    averagePrice: {
        type: String,
        required: true,
        enum: avgPrice
    },
})
