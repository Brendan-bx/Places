import { Button } from '@/components/Button'
import LinkButton from '@/components/FormButton'
import Header from '@/components/Header'
import { capitalizeFirstLetter } from '@/utils/functions'
import axios from 'axios'
import React, { useState } from 'react'

export const getServerSideProps = async ({ query: { placeType, placeId } }) => {
    try {
        const { data } = await axios.get(
            `http://localhost:3000/api/places/${placeType}/${placeId}`
        )

        return {
            props: {
                place: data,
                placeType: placeType,
            },
        }
    } catch (error) {
        console.error('Error fetching place data:', error)
        return {
            notFound: true,
        }
    }
}

const InfosRestoPage = ({ place, initialPlaces }) => {
    const [places, setPlaces] = useState(initialPlaces)

    const handleDelete = (placeId) => async () => {
        const deletedPlace = places.find(({ _id }) => _id === placeId)
        const newPlaces = places.filter(({ _id }) => _id !== placeId)
        setPlaces(newPlaces)

        try {
            await axios.delete(
                `http://localhost:3000/api/places/${placeType}/${placeId}`
            )
        } catch (err) {
            setTodos([...newPlaces, deletedPlace])
        }
    }

    const RenderRestoInfo = ({ place }) => {
        if (place.lieuTypes === 'resto') {
            return (
                <div className="flex mt-20 justify-center items-center h-full">
                    <div className="bg-gray-100 rounded-lg shadow-lg p-8 max-w-md w-full">
                        <h1 className="text-3xl font-bold mb-4">
                            {place.lieuTypes}
                        </h1>
                        <h1 className="text-3xl font-bold mb-4">
                            {place.name}
                        </h1>
                        <h3 className="text-lg mb-2">
                            {'City: ' + place.city + '  '}
                            {place.postalCode}
                        </h3>
                        <p className="mb-2">{'Address: ' + place.address}</p>

                        <p className="mb-2">{'Country: ' + place.country}</p>
                        <p className="mb-2">
                            {'Type: ' +
                                capitalizeFirstLetter(place.cuisineTypes)}
                        </p>
                        <p className="mb-2">
                            {'Number of stars: ' + place.stars}
                        </p>
                        <p className="mb-4">
                            {'Average price: ' + place.avgPrice}
                        </p>
                        <div className="space-x-4">
                            <LinkButton
                                href={`/list/${place._id}/editResto`}
                                variant="primary"
                            >
                                Modify
                            </LinkButton>
                            <Button
                                onClick={handleDelete(place._id)}
                                variant="danger"
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                </div>
            )
        } else if (place.lieuTypes === 'bar') {
            return (
                <div className="flex mt-20 justify-center items-center h-full">
                    <div className="bg-gray-100 rounded-lg shadow-lg p-8 max-w-md w-full">
                        <h1 className="text-3xl font-bold mb-4">
                            {place.lieuTypes}
                        </h1>
                        <h1 className="text-3xl font-bold mb-4">
                            {place.name}
                        </h1>
                        <h3 className="text-lg mb-2">
                            {'City: ' + place.city + '  '}
                            {place.postalCode}
                        </h3>
                        <p className="mb-2">{'Address: ' + place.address}</p>

                        <p className="mb-2">{'Country: ' + place.country}</p>
                        <p className="mb-2">
                            {'Type: ' + capitalizeFirstLetter(place.barTypes)}
                        </p>
                        <p className="mb-4">
                            {'Average price: ' + place.avgPrice}
                        </p>
                        <div className="space-x-4">
                            <LinkButton
                                href={`/list/${place._id}/editBar`}
                                variant="primary"
                            >
                                Modify
                            </LinkButton>
                            <Button href="#" variant="danger">
                                Delete
                            </Button>
                        </div>
                    </div>
                </div>
            )
        } else if (place.lieuTypes === 'parc') {
            return (
                <div className="flex mt-20 justify-center items-center h-full">
                    <div className="bg-gray-100 rounded-lg shadow-lg p-8 max-w-md w-full">
                        <h1 className="text-3xl font-bold mb-4">
                            {place.lieuTypes}
                        </h1>
                        <h1 className="text-3xl font-bold mb-4">
                            {place.name}
                        </h1>
                        <h3 className="text-lg mb-2">
                            {'City: ' + place.city + '  '}
                            {place.postalCode}
                        </h3>{' '}
                        <p className="mb-2">{'Address: ' + place.address}</p>
                        <p className="mb-2">{'Country: ' + place.country}</p>
                        <p className="mb-2">
                            {'Type: ' + capitalizeFirstLetter(place.parcTypes)}
                        </p>
                        <p className="mb-4">
                            {'Public or private: ' + place.isPrivate}
                        </p>
                        <p className="mb-4">{'Free or fee: ' + place.isFree}</p>
                        {place.isFree === 'Fee' && (
                            <>
                                <p className="mb-4">
                                    {'Average price: ' + place.avgPrice}
                                </p>
                            </>
                        )}
                        <div className="space-x-4">
                            <LinkButton
                                href={`/list/${place._id}/editParc`}
                                variant="primary"
                            >
                                Modify
                            </LinkButton>
                            <Button href="#" variant="danger">
                                Delete
                            </Button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="flex mt-20 justify-center items-center h-full">
                    <div className="bg-gray-100 rounded-lg shadow-lg p-8 max-w-md w-full">
                        <h1 className="text-3xl font-bold mb-4">
                            {place.lieuTypes}
                        </h1>
                        <h1 className="text-3xl font-bold mb-4">
                            {place.name}
                        </h1>
                        <h3 className="text-lg mb-2">
                            {'City: ' + place.city + '  '}
                            {place.postalCode}
                        </h3>
                        <p className="mb-2">{'Address: ' + place.address}</p>

                        <p className="mb-2">{'Country: ' + place.country}</p>
                        <p className="mb-2">
                            {'Type of movement: ' +
                                capitalizeFirstLetter(place.artMovement)}
                        </p>
                        <p className="mb-2">
                            {'Type of art: ' +
                                capitalizeFirstLetter(place.artType)}
                        </p>
                        <p className="mb-4">
                            {'Free or Fee: ' +
                                capitalizeFirstLetter(place.isFree)}
                        </p>
                        {place.isFree === 'Fee' && (
                            <>
                                <p className="mb-4">
                                    {'Average price: ' + place.avgPrice}
                                </p>
                            </>
                        )}
                        <div className="space-x-4">
                            <LinkButton
                                href={`/list/${place._id}/editMuseum`}
                                variant="primary"
                            >
                                Modify
                            </LinkButton>
                            <Button
                                onClick={handleDelete(place._id)}
                                variant="danger"
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            <Header />
            <RenderRestoInfo place={place} />
        </div>
    )
}

export default InfosRestoPage
