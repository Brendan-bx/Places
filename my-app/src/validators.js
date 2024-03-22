import * as yup from 'yup'
import { lieuTypes, cuisineTypes, barTypes, artMovement, artType, isFree, isPrivate, avgPrice, stars, parcTypes } from '@/utils/constants';

export const lieuTypesValidator = yup.string().oneOf(lieuTypes)
export const nameValidator = yup.string().min(3).required()
export const addressValidator = yup.string().min(3).required()
export const cityValidator = yup.string().min(3).required()
export const postalCodeValidator = yup.number().min(3).required()
export const countryValidator = yup.string().min(3).required()

export const cuisineTypesValidator = yup.string().oneOf(cuisineTypes)
export const artTypeValidator = yup.string().oneOf(artType)
export const artMovementValidator = yup.string().oneOf(artMovement)
export const barTypesValidator = yup.string().oneOf(barTypes)
export const parcTypesValidator = yup.string().oneOf(parcTypes)


export const isFreeValidator = yup.string().oneOf(isFree)
export const isPrivateValidator = yup.string().oneOf(isPrivate)
export const avgPriceValidator = yup.string().oneOf(avgPrice)
export const starsValidator = yup.string().oneOf(stars)
