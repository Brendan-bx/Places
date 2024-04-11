import React, { useState } from 'react'
import Header from '@/components/Header'
import { Button } from '@/components/Button'
import { lieuTypes } from '@/utils/constants'
import axios from 'axios'

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
        console.log(selectedValue)
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
            <Header />
            <div className="flex flex-wrap">
                <section className="w-[183vh] h-20 mx-36 ">
                    <div className=" max-w-2xl mx-16 px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2>Places</h2>
                        <div className="grid gap-y-6 gap-x-2 sm:grid-cols-2 grid-cols-3">
                            {filteredPlaces.map(
                                ({
                                    _id,
                                    name,
                                    city,
                                    postalCode,
                                    country,
                                    lieuTypes,
                                }) => (
                                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#" key={_id}>
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                {lieuTypes}
                                            </h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                            {'Country : ' + country}
                                        </p>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                            {'City : ' +
                                                city +
                                                ' ' +
                                                postalCode}
                                        </p>
                                        <a
                                            href={`/infos/${_id}`}
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Read more
                                            <svg
                                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </section>
                <aside className="p-4 w-36 h-36">
                    <p>Types of places</p>
                    <select
                        className="border-solid border-2 border-gray-600"
                        value={selectedLieuType}
                        onChange={handleLieuTypeChange}
                    >
                        {lieuTypes.map((lieuType) => (
                            <option value={lieuType} key={lieuType}>
                                {lieuType}
                            </option>
                        ))}
                    </select>
                </aside>
            </div>
        </>
    )
}
