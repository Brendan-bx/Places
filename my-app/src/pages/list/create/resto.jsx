import { Button } from '@/components/Button'
import { Form } from '@/components/Form'
import { FormField } from '@/components/FormField'
import Header from '@/components/Header'
import { avgPrice, cuisineTypes, stars } from '@/utils/constants'
import { capitalizeFirstLetter } from '@/utils/functions'
import {
    lieuTypesValidator,
    nameValidator,
    addressValidator,
    cityValidator,
    postalCodeValidator,
    countryValidator,
    cuisineTypesValidator,
    starsValidator,
    avgPriceValidator,
} from '@/validators'
import axios from 'axios'
import { Formik } from 'formik'
import * as yup from 'yup'

const initialValues = {
    name: '',
    address: '',
    codePostal: '',
    country: '',
    cuisineType: ''
}
const validationSchema = yup.object({
    lieuTypes: lieuTypesValidator,
    name: nameValidator,
    address: addressValidator,
    city: cityValidator,
    postalCode: postalCodeValidator,
    country: countryValidator,
    cuisineTypes: cuisineTypesValidator,
    stars: starsValidator,
    avgPrice: avgPriceValidator
})
const CreateRestoPage = () => {
    const handleSubmit = async (
        { lieuTypes ,name, address, city ,postalCode, country, cuisineTypes, stars, avgPrice },
        { resetForm }
    ) => {
        await axios.post('http://localhost:3000/api/', {
            lieuTypes,
            name,
            address,
            city,
            postalCode,
            country,
            cuisineTypes,
            stars,
            avgPrice
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
                    <p className="text-3xl m-4">Add a restaurant</p>
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
                        name="cuisineTypes"
                        placeholder=""
                        label="Cuisine type"
                    >
                        {cuisineTypes.map(cuisineType => (
                            <option value={cuisineType}>{capitalizeFirstLetter(cuisineType)}</option>
                        ))}
                    </FormField>
                    <FormField
                        className="w-80"
                        as="select"
                        name="stars"
                        placeholder=""
                        label="Stars"
                    >
                        {stars.map(etoile => (
                            <option value={etoile}>{ etoile }</option>
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
                            <option value={avgPrice}>{ avgPrice}</option>
                        ))}
                    </FormField>
                    <Button type="submit">Create</Button>
                </Form>
            </Formik>
        </>
    )
}

export default CreateRestoPage
