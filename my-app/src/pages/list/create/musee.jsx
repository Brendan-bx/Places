import { Button } from '@/components/Button'
import { Form } from '@/components/Form'
import { FormField } from '@/components/FormField'
import Header from '@/components/Header'
import { artMovement, artType, avgPrice, isFree } from '@/utils/constants'
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
    avgPriceValidator
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
    artMovement: artMovementValidator,
    artType: artTypeValidator,
    isFree: isFreeValidator,
    avgPrice: avgPriceValidator,
})
const CreateMuseePage = () => {
    const handleSubmit = async (
        { lieuTypes ,name, address, city, postalCode, country, artMovement, artType, isFree ,avgPrice},
        { resetForm }
    ) => {
        await axios.post('http://localhost:3000/api/', {
            lieuTypes,
            name,
            address,
            city,
            postalCode,
            country,
            artMovement,
            artType,
            isFree,
            avgPrice,
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
                        name="city"
                        placeholder="Type the city ..."
                        label="City"
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
                        name="artMovement"
                        placeholder=""
                        label="Artistic movement"
                    >
                        {artMovement.map(artMovement => (
                            <option value={artMovement}>{capitalizeFirstLetter(artMovement)}</option>
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

                    <FormField
                        className="w-80"
                        name="isFree"
                        type="checkbox"
                        label="Free or fee ?">
                        {isFree.map(isFree => (
                            <option value={isFree}>{capitalizeFirstLetter(isFree)}</option>
                        ))}
                    </FormField>                    <FormField
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
