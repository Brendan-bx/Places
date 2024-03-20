import { Button } from '@/components/Button'
import { Form } from '@/components/Form'
import { FormField } from '@/components/FormField'
import Header from '@/components/Header'
import { art, artType, avgPrice } from '@/utils/constants'
import { capitalizeFirstLetter } from '@/utils/functions'
import {
    nameValidator,
    addressValidator,
    postalValidator,
    countryValidator,
} from '@/validators'
import axios from 'axios'
import { Formik } from 'formik'
import * as yup from 'yup'

const initialValues = {
    description: '',
    isDone: false,
}
const validationSchema = yup.object({
    Name: nameValidator,
    Address: addressValidator,
    postalCode: postalValidator,
    country: countryValidator,
})
const CreateMuseePage = () => {
    const handleSubmit = async (
        { name, address, postalCode, country },
        { resetForm }
    ) => {
        await axios.post('http://localhost:3000/api/', {
            name,
            address,
            postalCode,
            country,
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
                    <p className="text-3xl m-4">Ajouter un musée</p>
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
                        label="Address "
                    />
                    <FormField
                        className="w-80 text-neutral-950"
                        name="postalCode"
                        placeholder="Type the postal code ... "
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
                        name="art"
                        placeholder=""
                        label="Artistic movement"
                    >
                        {art.map(art => (
                            <option value={art}>{capitalizeFirstLetter(art)}</option>
                        ))}
                    </FormField>
                    <FormField
                        className="w-80"
                        as="select"
                        name="artType"
                        placeholder=""
                        label="Art type"
                    >
                        {artType.map(artType => (
                            <option value={artType}>{capitalizeFirstLetter(artType)}</option>
                        ))}
                    </FormField>
                    <FormField name="isFree" type="checkbox" label="Fee ?" />
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

export default CreateMuseePage
