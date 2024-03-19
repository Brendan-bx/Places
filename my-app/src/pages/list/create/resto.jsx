import { Button } from '@/components/Button'
import { Form } from '@/components/Form'
import { FormField } from '@/components/FormField'
import Header from '@/components/Header'
import { avgPrice, cuisineTypes, etoiles } from '@/utils/constants'
import { capitalizeFirstLetter } from '@/utils/functions'
import {
    nameValidator,
    adresseValidator,
    postalValidator,
    paysValidator,
} from '@/validators'
import axios from 'axios'
import { Formik } from 'formik'
import * as yup from 'yup'

const initialValues = {
    name: '',
    adresse: '',
    codePostal: '',
    pays: '',
    cuisineType: ''
}
const validationSchema = yup.object({
    name: nameValidator,
    adresse: adresseValidator,
    codePostal: postalValidator,
    pays: paysValidator,
    cuisineType: yup.string().oneOf(cuisineTypes)
})
const CreateRestoPage = () => {
    const handleSubmit = async (
        { name, adresse, codePostal, pays },
        { resetForm }
    ) => {
        await axios.post('http://localhost:3000/api/', {
            name,
            adresse,
            codePostal,
            pays,
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
                        placeholder="Entrez le nom du lieu ..."
                        label="Nom du lieu"
                    />
                    <FormField
                        className="w-80 text-neutral-950"
                        name="adresse"
                        placeholder="Entrez une adresse ..."
                        label="Adresse :"
                    />
                    <FormField
                        className="w-80 text-neutral-950"
                        name="codePostal"
                        placeholder="Entrez un code postal ... "
                        label="Code postal"
                    />
                    <FormField
                        className="w-80 text-neutral-950"
                        name="pays"
                        placeholder="Entrez un pays ..."
                        label="Pays"
                    />
                    <FormField
                        className="w-80"
                        as="select"
                        name="cuisineType"
                        placeholder=""
                        label="Type de cuisine"
                    >
                        {cuisineTypes.map(cuisineType => (
                            <option value={cuisineType}>{capitalizeFirstLetter(cuisineType)}</option>
                        ))}
                    </FormField>
                    <FormField
                        className="w-80"
                        as="select"
                        name="etoiles"
                        placeholder=""
                        label="Etoiles"
                    >
                        {etoiles.map(etoile => (
                            <option value={etoile}>{ etoile }</option>
                        ))}
                    </FormField>
                    <FormField
                        className="w-80"
                        as="select"
                        name="prix"
                        placeholder=""
                        label="Prix"
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
