import { Button } from '@/components/Button'
import Header from '@/components/Header'
import { capitalizeFirstLetter } from '@/utils/functions'
import axios from 'axios'
import React from 'react'

export const getServerSideProps = async ({ query: { placeId } }) => {
    const { data: place } = await axios.get(
        `http://localhost:3000/api/places/${placeId}`
    )
    return { props: { place } }
}

const InfosPage = ({ place }) => {
    return (
        <div>
            <Header />
            <div className="flex mt-20 justify-center items-center h-full">
                <div className="bg-gray-100 rounded-lg shadow-lg p-8 max-w-md w-full">
                    <h1 className="text-3xl font-bold mb-4">
                        {place.lieuTypes}
                    </h1>
                    <h3 className="text-lg mb-2">
                        {'City: ' + place.city + '  '}
                        {place.postalCode}
                    </h3>
                    <p className="mb-2">{'Country: ' + place.country}</p>
                    <p className="mb-2">
                        {'Type: ' + capitalizeFirstLetter(place.cuisineTypes)}
                    </p>
                    <p className="mb-2">{'Number of stars: ' + place.stars}</p>
                    <p className="mb-4">{'Average price: ' + place.avgPrice}</p>
                    <div className="space-x-4">
                        <Button variant="primary">Modify</Button>
                        <Button variant="danger">Delete</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfosPage
