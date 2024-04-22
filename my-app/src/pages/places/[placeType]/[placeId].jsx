import { Button } from '@/components/Button'
import LinkButton from '@/components/FormButton'
import Header from '@/components/Header'
import { capitalizeFirstLetter } from '@/utils/functions'
import axios from 'axios'
import { useRouter } from 'next/router'
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

const InfosPage = ({ place, initialPlaces, placeType }) => {
    const [places, setPlaces] = useState(initialPlaces || [])
    const router = useRouter()

    const handleDelete = (placeId) => async () => {
        if (!places) {
            return
        }
        const deletedPlace = places.find((place) => place._id === placeId)
        const newPlaces = places.filter((place) => place._id !== placeId)
        setPlaces(newPlaces)

        try {
            await axios.delete(
                `http://localhost:3000/api/places/${placeType}/${placeId}`
            )
            router.push('/')
            alert('Delete successfull', place.name)
        } catch (err) {
            console.log(place._id)
            alert('Error delete', err)
        }
    }

    const RenderRestoInfo = ({ place }) => {
        if (place.lieuTypes === 'resto') {
            return (
                <div className="flex mt-20 justify-center items-center h-full">
                    <div className="bg-gray-100 rounded-lg shadow-lg p-8 max-w-md w-full">
                        <img
                            src="/restaurant.png"
                            alt="restaurant icon"
                            className="w-12 h-12"
                        />
                        <h1 className="text-3xl font-bold mb-4">
                            {place.name}
                        </h1>
                        <p className="flex mb-2">
                            <img src="/location.png" className="w-6 h-6 mr-2" />
                            {place.city + '  '}
                            {place.postalCode}
                        </p>
                        <p className="mb-2 ml-8">
                            {place.address + ', ' + place.country}
                        </p>
                        <p className="flex mb-2">
                            <img
                                src="/serving-dish.png"
                                className="w-6 h-6 mr-2"
                            />
                            {capitalizeFirstLetter(place.cuisineTypes)}
                        </p>
                        <p className="mb-2 flex">
                            <img src="/star.png" className="w-6 h-6 mr-2" />
                            {place.stars}
                            <span className="flex items-center ml-4">
                                <img
                                    src="/dollar.png"
                                    className="w-6 h-6 mr-2"
                                />
                                {place.avgPrice}
                            </span>
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
                        <img
                            src="/bar-counter.png"
                            alt="bar icon"
                            className="w-12 h-12"
                        />
                        <h1 className="text-3xl font-bold mb-4">
                            {place.name}
                        </h1>
                        <p className="flex mb-2">
                            <img src="/location.png" className="h-6 w-6 mr-2" />
                            {place.city + '  '}
                            {place.postalCode}
                        </p>
                        <p className="mb-2 ml-8">
                            {place.address + ', ' + place.country}
                        </p>

                        <p className="flex mb-2">
                            <img src="/cocktail.png" className="h-6 w-6 mr-2" />
                            {capitalizeFirstLetter(place.barTypes)}
                        </p>
                        <p className="mb-4 flex">
                            <img src="/dollar.png" className="w-6 h-6 mr-2" />
                            {place.avgPrice}
                        </p>
                        <div className="space-x-4">
                            <LinkButton
                                href={`/list/${place._id}/editBar`}
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
        } else if (place.lieuTypes === 'parc') {
            return (
                <div className="flex mt-20 justify-center items-center h-full">
                    <div className="bg-gray-100 rounded-lg shadow-lg p-8 max-w-md w-full">
                        <img src="/park.png" className="h-12 w-12 " />
                        <h1 className="text-3xl font-bold mb-4">
                            {place.name}
                        </h1>
                        <p className="flex mb-2">
                            <img src="/location.png" className="w-6 h-6 mr-2" />
                            {place.city + '  '}
                            {place.postalCode}
                        </p>
                        <p className="mb-2 ml-8">
                            {place.address + ', ' + place.country}
                        </p>
                        <p className="flex mb-2">
                            <img src="/park2.png" className="h-6 w-6 mr-2" />
                            {capitalizeFirstLetter(place.parcTypes)}
                        </p>
                        <p className="flex mb-4">
                            <img src="/lock.png" className="h-6 w-6 mr-2" />
                            {capitalizeFirstLetter(place.isPrivate)}
                        </p>
                        <p className="flex mb-4">
                            <img src="/hand.png" className="h-6 w-6 mr-2" />
                            {capitalizeFirstLetter(place.isFree)}
                        </p>
                        {place.isFree === 'fee' && (
                            <>
                                <p className="flex mb-4">
                                    <img
                                        src="/dollar.png"
                                        className="w-6 h-6 mr-2"
                                    />
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
        } else {
            return (
                <div className="flex mt-20 justify-center items-center h-full">
                    <div className="bg-gray-100 rounded-lg shadow-lg p-8 max-w-md w-full">
                        <img src="/museum.png" className="w-12 h-12" />
                        <h1 className="text-3xl font-bold mb-4">
                            {place.name}
                        </h1>
                        <p className="flex mb-2">
                            <img src="/location.png" className="h-6 w-6 mr-2" />
                            {place.city + '  '}
                            {place.postalCode}
                        </p>
                        <p className="mb-2 ml-8">
                            {place.address + ', ' + place.country}
                        </p>

                        <p className="flex mb-2">
                            <img
                                src="/performing.png"
                                className="h-6 w-6 mr-2"
                            />
                            {'Type of movement: ' +
                                capitalizeFirstLetter(place.artMovement)}
                        </p>
                        <p className="flex mb-2">
                            <img
                                src="/mona-lisa.png"
                                className="h-6 w-6 mr-2"
                            />
                            {'Type of art: ' +
                                capitalizeFirstLetter(place.artType)}
                        </p>
                        <p className="flex mb-4">
                            <img src="/hand.png" className="h-6 w-6 mr-2" />
                            {'Free or Fee: ' +
                                capitalizeFirstLetter(place.isFree)}
                        </p>
                        {place.isFree === 'fee' && (
                            <>
                                <p className="mb-4 flex">
                                    <img
                                        src="/dollar.png"
                                        className="h-6 w-6 mr-2"
                                    />
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
            <RenderRestoInfo place={place} />
        </div>
    )
}

export default InfosPage
