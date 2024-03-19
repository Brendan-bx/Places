import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'

const create = () => {
    return (
        <div>
            <Header />
            <h1 className="flex justify-center p-4 text-3xl">Add a place</h1>
            <div className="flex justify-center gap-4">
                <Link href="/list/create/resto">Add a restaurant</Link>
                <Link href="/list/create/musee">Add a museum</Link>
                <Link href="/list/create/bar">Add a bar</Link>
                <Link href="/list/create/parc">Add a parc</Link>
            </div>
        </div>
    )
}

export default create
