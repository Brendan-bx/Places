import { PlacesModel } from "@/db/model/places"


export const createPlace = async ({ lieuTypes ,name, address, city ,postalCode, country, cuisineTypes, stars, avgPrice }) => {
  const newPlace = new PlacesModel({ lieuTypes ,name, address, city ,postalCode, country, cuisineTypes, stars, avgPrice })

  await newPlace.save()

  return newPlace
}