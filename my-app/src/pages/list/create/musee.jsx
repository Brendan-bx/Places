import { Button } from '@/components/Button'
import { Form } from '@/components/Form'
import { FormField } from '@/components/FormField'
import Header from '@/components/Header'
import { art, artType, avgPrice } from '@/utils/constants'
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
    description: '',
    isDone: false,
}
const validationSchema = yup.object({
    Name: nameValidator,
    Adresse: adresseValidator,
    Code_Postal: postalValidator,
    Pays: paysValidator,
})
const CreateMuseePage = () => {
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
                    <p className="text-3xl m-4">Ajouter un musée</p>
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
                        name="art"
                        placeholder=""
                        label="Courant artistique"
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
                        label="Type d'art"
                    >
                        {artType.map(artType => (
                            <option value={artType}>{capitalizeFirstLetter(artType)}</option>
                        ))}
                    </FormField>
                    <FormField name="isFree" type="checkbox" label="Payant?" />
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

export default CreateMuseePage
