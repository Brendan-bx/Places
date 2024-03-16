import { Schema } from "mongoose"

export const listResto = new Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  adresse: {
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
  pays: {
    type: String,
    required: true,
  },
  cuisineType: {
    enum: [""],
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
  averagePrice: {
    type: Number,
    required: true,
  }
})