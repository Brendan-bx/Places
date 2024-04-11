import { Button } from '@/components/Button'
import { Form } from '@/components/Form'
import { FormField } from '@/components/FormField'
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

export const getServerSideProps = async ({ query: { placeId } }) => {
    const { data: places } = await axios(
        `http://localhost:3000/api/places/create/${placeId}`
    )

    return { props: { places } }
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
const TodoEditPage = ({ places }) => {
    const router = useRouter()
    const initialValues = places
    const handleSubmit = async (values) => {
        await axios.patch(
            `http://localhost:3000/api/places/create/resto/${places._id}`,
            values
        )

        router.push('/resto')
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
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
                <Button type="submit">Create</Button>
            </Form>
        </Formik>
    )
}

export default TodoEditPage
