import React, { useState } from 'react'
import Header from '@/components/Header'
import { Button } from '@/components/Button'
import { capitalizeFirstLetter } from '@/utils/functions'
import { lieuTypes } from '@/utils/constants'
import axios from 'axios'

export const getServerSideProps = async () => {
    const { data: places } = await axios(
        `http://localhost:3000/api/places/create/resto`
    )

    return {
        props: { initialPlaces: places },
    }
}

export default function Home({ initialPlaces }) {
    const [places, setPlaces] = useState(initialPlaces)
    const [selectedLieuType, setSelectedLieuType] = useState('')

    const filteredResto = selectedLieuType
        ? places.filter((item) => item.lieuTypes.includes(selectedLieuType))
        : places

    const handleLieuTypeChange = (event) => {
        setSelectedLieuType(event.target.value)
    }

    return (
        <>
            <Header />
            <div className="flex flex-wrap">
                <section className="w-[183vh] h-20 mx-36 ">
                    <div className=" max-w-2xl mx-16 px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2>Places</h2>

                        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 grid-cols-3 xl:gap-x-8">
                            {filteredResto.map(
                                ({ _id, name, city, postalCode, country }) => (
                                    <a
                                        key={_id}
                                        href={`/infos/${_id}`}
                                        className="group border-solid border-2 border-sky-500"
                                    >
                                        <h3 className="mt-4 text-sm text-gray-700">
                                            {city}--
                                            {postalCode}
                                        </h3>
                                        <p className="mt-1 text-lg font-medium text-gray-900">
                                            {country}
                                        </p>
                                        <div className="flex justify-around">
                                            <Button
                                                variant="primary"
                                                size="md"
                                                className="hidden group-hover:inline"
                                            >
                                                INFOS
                                            </Button>
                                        </div>
                                    </a>
                                )
                            )}
                        </div>
                    </div>
                </section>
                <aside className="p-4 w-36 h-36">
                    <p>Types of places</p>
                    <select
                        className="border-solid border-2 border-gray-600"
                        onChange={handleLieuTypeChange}
                    >
                        <option value="">All</option>
                        {lieuTypes.map((lieuType) => (
                            <option value={lieuType} key={lieuType}>
                                {capitalizeFirstLetter(lieuType)}
                            </option>
                        ))}
                    </select>
                </aside>
            </div>
        </>
    )
}
