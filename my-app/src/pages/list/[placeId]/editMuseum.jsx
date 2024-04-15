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
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import * as yup from 'yup'
import { capitalizeFirstLetter } from '@/utils/functions'

export const getServerSideProps = async ({ query: { placeId } }) => {
    const { data: place } = await axios.get(
        `http://localhost:3000/api/places/${placeId}`
    )
    return { props: { place } }
}

const validationSchema = yup.object({
    lieuTypesValidator,
    nameValidator,
    addressValidator,
    cityValidator,
    postalCodeValidator,
    countryValidator,
    cuisineTypesValidator,
    starsValidator,
    avgPriceValidator,
})

const TodoEditPage = ({ place }) => {
    const router = useRouter()
    const initialValues = place

    const handleSubmit = async (values) => {
        await axios.patch(
            `http://localhost:3000/api/places/${place._id}`,
            values
        )
        router.push('/create')
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
                    <p className="text-3xl m-4">Edit Place</p>
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
                        {cuisineTypes.map((cuisineType) => (
                            <option value={cuisineType} key={cuisineType}>
                                {capitalizeFirstLetter(cuisineType)}
                            </option>
                        ))}
                    </FormField>
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
                    <Button type="submit">Update</Button>
                </Form>
            </Formik>
        </>
    )
}

export default TodoEditPage
