import { Button } from '@/components/Button'
import { Form } from '@/components/Form'
import { FormField } from '@/components/FormField'
import Header from '@/components/Header'
import {
    artMovement,
    artType,
    avgPrice,
    isFree,
    lieuTypes,
} from '@/utils/constants'
import { capitalizeFirstLetter } from '@/utils/functions'
import {
    lieuTypesValidator,
    nameValidator,
    addressValidator,
    cityValidator,
    postalCodeValidator,
    countryValidator,
    artMovementValidator,
    artTypeValidator,
    isFreeValidator,
    avgPriceValidator,
} from '@/validators'
import axios from 'axios'
import { Formik } from 'formik'
import { useState } from 'react'
import * as yup from 'yup'

const initialValues = {
    lieuTypes: lieuTypes[1],
    name: '',
    address: '',
    postalCode: '',
    country: '',
    city: '',
    artType: artType[0],
    artMovement: artMovement[0],
    isFree: isFree[0],
}
const validationSchema = yup.object({
    lieuTypes: lieuTypesValidator,
    name: nameValidator,
    address: addressValidator,
    city: cityValidator,
    postalCode: postalCodeValidator,
    country: countryValidator,
    artType: artTypeValidator,
    artMovement: artMovementValidator,
    isFree: isFreeValidator,
    avgPrice: avgPriceValidator,
})
const CreateMuseumPage = () => {
    const [isFreeValue, setIsFreeValue] = useState(initialValues.isFree)

    const handleIsFreeChange = (e, formikProps) => {
        const selectedValue = e.target.value
        setIsFreeValue(selectedValue)
        formikProps.setFieldValue('isFree', selectedValue)
    }
    const handleSubmit = async (values, { resetForm }) => {
        await axios.post(
            'http://localhost:3000/api/places/create/museum',
            values
        )

        resetForm()
    }

    return (
        <>
            <Header />

            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {(formikProps) => (
                    <Form className="flex justify-center">
                        <p className="text-3xl m-4">Add a museum</p>
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
                            label="Address"
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
                            placeholder="Type the Postal code ... "
                            label="Postal Code"
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
                            name="artType"
                            label="Art type"
                        >
                            {artType.map((artType) => (
                                <option value={artType} key={artType}>
                                    {capitalizeFirstLetter(artType)}
                                </option>
                            ))}
                        </FormField>
                        <FormField
                            className="w-80"
                            as="select"
                            name="artMovement"
                            label="Art movement"
                        >
                            {artMovement.map((artMovement) => (
                                <option value={artMovement} key={artMovement}>
                                    {capitalizeFirstLetter(artMovement)}
                                </option>
                            ))}
                        </FormField>
                        <FormField
                            className="w-80"
                            as="select"
                            name="isFree"
                            label="Free or Fee ?"
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
                                placeholder=""
                                label="Average price"
                            >
                                {avgPrice.map((avgPrice) => (
                                    <option value={avgPrice} key={avgPrice}>
                                        {capitalizeFirstLetter(avgPrice)}
                                    </option>
                                ))}
                            </FormField>
                        )}
                        <Button type="submit">Create</Button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default CreateMuseumPage
