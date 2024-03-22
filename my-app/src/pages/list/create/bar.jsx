import { Button } from '@/components/Button'
import { Form } from '@/components/Form'
import { FormField } from '@/components/FormField'
import Header from '@/components/Header'
import { avgPrice, barTypes } from '@/utils/constants'
import { capitalizeFirstLetter } from '@/utils/functions'
import {
    lieuTypesValidator,
    nameValidator,
    addressValidator,
    cityValidator,
    postalCodeValidator,
    countryValidator,
    barTypesValidator,
    avgPriceValidator,
    starsValidator

} from '@/validators'
import axios from 'axios'
import { Formik } from 'formik'
import * as yup from 'yup'

const initialValues = {
    description: '',
    isDone: false,
}
const validationSchema = yup.object({
    lieuTypes: lieuTypesValidator,
    name: nameValidator,
    address: addressValidator,
    city: cityValidator,
    postalCode: postalCodeValidator,
    country: countryValidator,
    barTypes: barTypesValidator,
    avgPrice: avgPriceValidator,
    stars: starsValidator
})
const CreateBarPage = () => {
    const handleSubmit = async (
        { lieuTypes ,name, address, city, postalCode, country, barTypes, avgPrice ,stars },
        { resetForm }
    ) => {
        await axios.post('http://localhost:3000/api/', {
            lieuTypes,
            name,
            address,
            city,
            postalCode,
            country,
            barTypes,
            avgPrice,
            stars
        })

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
                <Form className="flex justify-center">
                    <p className="text-3xl m-4">Ajouter un bar</p>
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
                        name="barTypes"
                        placeholder=""
                        label="Bar type"
                    >
                        {barTypes.map(barType => (
                            <option value={barType}>{capitalizeFirstLetter(barType)}</option>
                        ))}
                    </FormField>
                    <FormField
                        className="w-80"
                        as="select"
                        name="price"
                        placeholder=""
                        label="Average price"
                    >
                        {avgPrice.map(avgPrice => (
                            <option value={avgPrice}>{capitalizeFirstLetter(avgPrice)}</option>
                        ))}
                    </FormField>
                    <Button type="submit">Create</Button>
                </Form>
            </Formik>
        </>
    )
}

export default CreateBarPage
