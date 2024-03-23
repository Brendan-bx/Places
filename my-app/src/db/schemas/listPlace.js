import { listBar } from '@/db/schemas/listBar'
import { listMuseum } from '@/db/schemas/listMuseum'
import { listParcs } from '@/db/schemas/listParcs'
import { listResto } from '@/db/schemas/listResto'
import { lieuTypes } from '@/utils/constants'
import { Schema } from 'mongoose'

export const listPlace = new Schema({
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
    country: {
        type: String,
        required: true,
    },
  museum: {
			type: listMuseum,
		},
		parc: {
			type: listParcs,
		},
		bar: {
			type: listBar,
		},
		restaurant: {
			type: listResto,
		},
})
