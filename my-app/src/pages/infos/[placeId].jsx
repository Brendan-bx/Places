import { Button } from '@/components/Button'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const InfosPage = () => {
    const [place, setPlace] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        const fetchPlace = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/api/places/${id}`
                )
                setPlace(response.data)
            } catch (error) {
                console.error('Error fetching place details:', error)
            }
        }

        fetchPlace()
    }, [id])

    if (!place) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h3 className="mt-4 text-sm text-gray-700">
                {place.city}--
                {place.postalCode}
            </h3>
            <p>{place.country}</p>
            <div>
                <Button
                    variant="primary"
                    size="md"
                    className="hidden group-hover:inline"
                >
                    Modify
                </Button>
            </div>
        </div>
    )
}

export default InfosPage
