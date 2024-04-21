import React, { useState } from 'react'
import { lieuTypes } from '@/utils/constants'
import axios from 'axios'
import { capitalizeFirstLetter } from '@/utils/functions'
import { Button } from '@/components/Button'

export default function Home() {
    const [places, setPlaces] = useState([])
    const [selectedLieuType, setSelectedLieuType] = useState('')

    const generateApiUrl = (lieuType) => {
        return `http://localhost:3000/api/places/create/${encodeURIComponent(lieuType)}`
    }

    const handleLieuTypeChange = async (event) => {
        const selectedValue = event.target.value
        setSelectedLieuType(selectedValue)
        const apiUrl = generateApiUrl(selectedValue)
        try {
            const { data } = await axios(apiUrl)
            setPlaces(data)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    const filteredPlaces = selectedLieuType
        ? places.filter(
              (item) =>
                  item.lieuTypes && item.lieuTypes.includes(selectedLieuType)
          )
        : places

    return (
        <>
            <div className="flex">
                <aside className="p-4 w-1/4">
                    <p className="mb-2">Types of places</p>
                    <select
                        className="w-full border border-gray-600 p-1"
                        value={selectedLieuType}
                        onChange={handleLieuTypeChange}
                    >
                        <option>--</option>
                        {lieuTypes.map((lieuType) => (
                            <option value={lieuType} key={lieuType}>
                                {lieuType}
                            </option>
                        ))}
                    </select>
                </aside>
                <section className="w-3/4">
                    <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2 className="mb-8">Places</h2>
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredPlaces.map(
                                ({
                                    _id,
                                    name,
                                    city,
                                    postalCode,
                                    country,
                                    lieuTypes,
                                }) => (
                                    <div
                                        key={_id}
                                        className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                                    >
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                {capitalizeFirstLetter(
                                                    lieuTypes
                                                )}
                                            </h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                            {'Name: ' + name}
                                        </p>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                            {'Country: ' + country}
                                        </p>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                            {'City: ' + city + ' ' + postalCode}
                                        </p>
                                        <a
                                            href={`/places/${lieuTypes}/${_id}`}
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Read more
                                        </a>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
