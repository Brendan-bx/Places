import { Button } from '@/components/Button'
import { Form } from '@/components/Form'
import { FormField } from '@/components/FormField'
import { avgPrice, cuisineTypes, lieuTypes, stars } from '@/utils/constants'

import Header from '@/components/Header'
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
import { ErrorMessage, Formik } from 'formik'
import { useRouter } from 'next/router'
import * as yup from 'yup'
import { capitalizeFirstLetter } from '@/utils/functions'

export const getServerSideProps = async ({ query: { placeId } }) => {
    const { data: place } = await axios.get(
        `http://localhost:3000/api/places/resto/${placeId}`
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
    cuisineTypes: cuisineTypesValidator,
    stars: starsValidator,
    avgPrice: avgPriceValidator,
})

const RestoEditPage = ({ place }) => {
    const router = useRouter()
    const initialValues = place

    const handleSubmit = async (values) => {
        await axios.patch(
            `http://localhost:3000/api/places/resto/${place._id}`,
            values
        )
        router.push('/')
    }

    return (
        <>
            <Header />
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className="flex justify-center">
                    <p className="text-3xl m-4">Edit resto</p>
                    <FormField
                        className="w-80 text-neutral-950"
                        name="name"
                        placeholder="Type the place name ..."
                        label="Place name"
                    />
                    <ErrorMessage name="name" />
                    <FormField
                        className="w-80 text-neutral-950"
                        name="address"
                        placeholder="Type the address ..."
                        label="Address :"
                    />
                    <ErrorMessage name="address" />
                    <FormField
                        className="w-80 text-neutral-950"
                        name="city"
                        placeholder="Type the city ..."
                        label="City"
                    />
                    <ErrorMessage name="city" />
                    <FormField
                        className="w-80 text-neutral-950"
                        name="postalCode"
                        placeholder="Type the postal code ... "
                        label="Postal code"
                    />
                    <ErrorMessage name="postalCode" />
                    <FormField
                        className="w-80 text-neutral-950"
                        name="country"
                        placeholder="Type the country ..."
                        label="Country"
                    />
                    <ErrorMessage name="country" />
                    <FormField
                        className="w-80"
                        as="select"
                        name="cuisineTypes"
                        placeholder=""
                        label="Cuisine type"
                    >
                        {cuisineTypes.map((cuisineType) => (
                            <option value={cuisineType} key={cuisineType}>
                                {capitalizeFirstLetter(cuisineType)}
                            </option>
                        ))}
                    </FormField>
                    <ErrorMessage name="cuisineTypes" />
                    <FormField
                        className="w-80"
                        as="select"
                        name="stars"
                        placeholder=""
                        label="Stars"
                    >
                        {stars.map((etoile) => (
                            <option value={etoile} key={etoile}>
                                {etoile}
                            </option>
                        ))}
                    </FormField>
                    <ErrorMessage name="stars" />
                    <FormField
                        className="w-80"
                        as="select"
                        name="price"
                        placeholder=""
                        label="Average price"
                    >
                        {avgPrice.map((avgPrice) => (
                            <option value={avgPrice} key={avgPrice}>
                                {avgPrice}
                            </option>
                        ))}
                    </FormField>
                    <ErrorMessage name="price" />
                    <Button type="submit">Update</Button>
                </Form>
            </Formik>
        </>
    )
}

export default RestoEditPage
