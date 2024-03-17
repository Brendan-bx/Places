import { Button } from "@/components/Button"
import { Form } from "@/components/Form"
import { FormField } from "@/components/FormField"
import Header from "@/components/Header"
import { nameValidator, adresseValidator, postalValidator, paysValidator } from "@/validators"
import axios from "axios"
import { Formik } from "formik"
import * as yup from "yup"

const initialValues = {
  Name: "",
  Adresse: "",
}
const validationSchema = yup.object({
  Name: nameValidator,
  Adresse: adresseValidator,
  Code_Postal: postalValidator,
  Pays: paysValidator,
})
const CreateRestoPage = () => {
  const handleSubmit = async ({ Name, Adresse, Code_Postal, Pays }, { resetForm }) => {
    await axios.post("http://localhost:3000/api/", {
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
        <Form className="flex justify-center" >
          <p className="text-3xl m-4">Add a restaurant</p>
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
          name="cuisineType"
          placeholder=""
          label="Type de cuisine"
          />
          <FormField
          className="w-80"
          name="Stars"
          label="Stars"
          />
        <Button type="submit">Create</Button>
      </Form>
    </Formik>
    </>
  )
}

export default CreateRestoPage