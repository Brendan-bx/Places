import * as yup from 'yup'

export const AdresseValidator = yup.string().min(3).required()
