import { Button } from '@/components/Button'
import { Form } from '@/components/Form'
import { capitalizeFirstLetter } from '@/utils/functions'
import { FormField } from '@/components/FormField'
import Header from '@/components/Header'
import { avgPrice, parcTypes } from '@/utils/constants'
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
    Name: '',
    Adresse: '',
    Code_Postal: '',
    Pays: '',
}
const validationSchema = yup.object({
    Name: nameValidator,
    Adresse: adresseValidator,
    Code_Postal: postalValidator,
    Pays: paysValidator,
})
const CreateParcPage = () => {
    const handleSubmit = async (
        { Name, Adresse, Code_Postal, Pays },
        { resetForm }
    ) => {
        await axios.post('http://localhost:3000/api/', {
            Name,
            Adresse,
            Code_Postal,
            Pays,
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
                    <p className="text-3xl m-4">Ajouter un parc</p>
                    <FormField
                        className="w-80 text-neutral-950"
                        name="Name"
                        placeholder="Entrez le nom du lieu ..."
                        label="Nom du lieu"
                    />
                    <FormField
                        className="w-80 text-neutral-950"
                        name="Adresse"
                        placeholder="Entrez une adresse ..."
                        label="Adresse :"
                    />
                    <FormField
                        className="w-80 text-neutral-950"
                        name="Code_Postal"
                        placeholder="Entrez un code postal ... "
                        label="Code postal"
                    />
                    <FormField
                        className="w-80 text-neutral-950"
                        name="Pays"
                        placeholder="Entrez un pays ..."
                        label="Pays"
                    />
                    <FormField
                        className="w-80"
                        as="select"
                        name="parcType"
                        placeholder=""
                        label="Type de parc"
                    >
                        {parcTypes.map(parcType => (
                            <option value={parcType}>{capitalizeFirstLetter(parcType)}</option>
                        ))}
                    </FormField>
                    <FormField
                        name="isPrivate"
                        type="checkbox"
                        label="Public ?"
                    />
                    <FormField name="isFree" type="checkbox" label="Payant ?" />
                    <FormField
                        className="w-80"
                        as="select"
                        name="price"
                        placeholder=""
                        label="Prix"
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

export default CreateParcPage
