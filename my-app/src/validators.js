import * as yup from 'yup'
import { lieuTypes, cuisineTypes, barTypes, artMovement, artType, isFree, isPrivate, avgPrice, stars, parcTypes } from '@/utils/constants';

export const lieuTypesValidator = yup.of(yup.mixed().oneOf(Object.values(lieuTypes)).required());
export const nameValidator = yup.string().min(3).required()
export const addressValidator = yup.string().min(3).required()
export const cityValidator = yup.string().min(3)
export const postalCodeValidator = yup.number().min(3)
export const countryValidator = yup.string().min(3)

export const cuisineTypesValidator = yup.of(yup.mixed().oneOf(Object.values(cuisineTypes)).required())
export const artTypeValidator = yup.of(yup.mixed().oneOf(Object.values(artType)).required())
export const artMovementValidator = yup.of(yup.mixed().oneOf(Object.values(artMovement)).required())
export const barTypesValidator = yup.of(yup.mixed().oneOf(Object.values(barTypes)).required())
export const parcTypesValidator = yup.of(yup.mixed().oneOf(Object.values(parcTypes)).required())


export const isFreeValidator = yup.of(yup.mixed().oneOf(Object.values(isFree)).required())
export const isPrivateValidator = yup.of(yup.mixed().oneOf(Object.values(isPrivate)).required())
export const avgPriceValidator = yup.of(yup.mixed().oneOf(Object.values(avgPrice)).required())
export const starsValidator = yup.of(yup.mixed().oneOf(Object.values(stars)).required())

