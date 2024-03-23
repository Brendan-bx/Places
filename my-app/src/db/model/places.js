import { listPlace } from "@/db/schemas/listPlace"
import mongoose from "mongoose"

export const PlacesModel =
	mongoose.models.places || mongoose.model("Place", listPlace , "places")
