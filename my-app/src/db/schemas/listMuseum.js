import { avgPrice, lieuTypes, artMovement, artType, stars } from '@/utils/constants'
import { Schema } from 'mongoose'

export const listMuseum = new Schema({
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
    Country: {
        type: String,
        required: true,
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
        enum: stars
    },
    averagePrice: {
        type: String,
        required: true,
        enum: avgPrice
    },
})
