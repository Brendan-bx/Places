import { Button } from '@/components/Button'
import { Form } from '@/components/Form'
import { FormField } from '@/components/FormField'
import {
    avgPrice,
    isFree,
    isPrivate,
    lieuTypes,
    parcTypes,
} from '@/utils/constants'

import Header from '@/components/Header'
import {
    lieuTypesValidator,
    nameValidator,
    addressValidator,
    cityValidator,
    postalCodeValidator,
    countryValidator,
    parcTypesValidator,
    isPrivateValidator,
    isFreeValidator,
    avgPriceValidator,
} from '@/validators'
import axios from 'axios'
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import * as yup from 'yup'
import { capitalizeFirstLetter } from '@/utils/functions'
import { useState } from 'react'

export const getServerSideProps = async ({ query: { placeId } }) => {
    const { data: place } = await axios.get(
        `http://localhost:3000/api/places/parc/${placeId}`
    )
    return { props: { place } }
}

const validationSchema = yup.object({
    lieuTypes: lieuTypesValidator,
    name: nameValidator,
    address: addressValidator,
    city: cityValidator,
    postalCode: postalCodeValidator,
    country: countryValidator,
    parcTypes: parcTypesValidator,
    isPrivate: isPrivateValidator,
    isFree: isFreeValidator,
    avgPrice: avgPriceValidator,
})

const ParcEditPage = ({ place }) => {
    const initialValues = place
    const [isFreeValue, setIsFreeValue] = useState(initialValues.isFree)

    const handleIsFreeChange = (e, formikProps) => {
        const selectedValue = e.target.value
        setIsFreeValue(selectedValue)
        formikProps.setFieldValue('isFree', selectedValue)
    }
    const router = useRouter()

    const handleSubmit = async (values) => {
        await axios.patch(
            `http://localhost:3000/api/places/parc/${place._id}`,
            values
        )
        router.push('/')
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {(formikProps) => (
                    <Form className="flex justify-center">
                        <p className="text-3xl m-4">Edit park</p>
                        <FormField
                            className="w-80 text-neutral-950"
                            name="name"
                            placeholder="Type the place name ..."
                            label="Place name"
                        />
                        <FormField
                            className="w-80 text-neutral-950"
                            name="address"
                            placeholder="Type the address ..."
                            label="Address :"
                        />
                        <FormField
                            className="w-80 text-neutral-950"
                            name="city"
                            placeholder="Type the city ..."
                            label="City"
                        />
                        <FormField
                            className="w-80 text-neutral-950"
                            name="postalCode"
                            placeholder="Type the postal code ... "
                            label="Postal code"
                        />
                        <FormField
                            className="w-80 text-neutral-950"
                            name="country"
                            placeholder="Type the country ..."
                            label="Country"
                        />
                        <FormField
                            className="w-80"
                            as="select"
                            name="parcTypes"
                            placeholder=""
                            label="Parc type"
                        >
                            {parcTypes.map((parcType) => (
                                <option value={parcType} key={parcType}>
                                    {capitalizeFirstLetter(parcType)}
                                </option>
                            ))}
                        </FormField>
                        <FormField
                            className="w-80"
                            as="select"
                            name="isPrivate"
                            label="Public or private ?"
                        >
                            {isPrivate.map((isPrivate) => (
                                <option value={isPrivate} key={isPrivate}>
                                    {isPrivate}
                                </option>
                            ))}
                        </FormField>
                        <FormField
                            className="w-80"
                            name="isFree"
                            as="select"
                            label="Free or fee ?"
                            onChange={(e) => handleIsFreeChange(e, formikProps)}
                            value={formikProps.values.isFree}
                        >
                            {isFree.map((isFree) => (
                                <option value={isFree} key={isFree}>
                                    {capitalizeFirstLetter(isFree)}
                                </option>
                            ))}
                        </FormField>
                        {formikProps.values.isFree === isFree[0] ? null : (
                            <FormField
                                className="w-80"
                                as="select"
                                name="avgPrice"
                                label="Average price"
                            >
                                {avgPrice.map((avgPrice) => (
                                    <option value={avgPrice} key={avgPrice}>
                                        {avgPrice}
                                    </option>
                                ))}
                            </FormField>
                        )}
                        <Button type="submit">Update</Button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default ParcEditPage
