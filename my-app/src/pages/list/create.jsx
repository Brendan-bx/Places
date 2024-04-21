import LinkButton from '@/components/FormButton'
import Header from '@/components/Header'
import React from 'react'

const Create = () => {
    return (
        <div>
            <h1 className="flex justify-center p-4 text-3xl">Add a Place</h1>
            <div className="flex justify-center gap-4">
                <LinkButton href="/list/create/resto">
                    Add a Restaurant
                </LinkButton>
                <LinkButton href="/list/create/musee">Add a Museum</LinkButton>
                <LinkButton href="/list/create/bar">Add a Bar</LinkButton>
                <LinkButton href="/list/create/parc">Add a Park</LinkButton>
            </div>
        </div>
    )
}

export default Create
