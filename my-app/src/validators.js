import * as yup from 'yup'

export const addressValidator = yup.string().min(3).required()
