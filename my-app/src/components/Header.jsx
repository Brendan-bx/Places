import React from 'react'
import Link from 'next/link'
const Header = () => {
    return (
        <div className="justify-between flex p-4 bg-indigo-500">
            <div className="flex items-center">
                <img src="google-maps.png" className="w-6 h-6 mr-2" />
                <Link href="/">
                    <p className="font-bold">Find places</p>
                </Link>
            </div>

            <Link href="/list/create">Add</Link>
        </div>
    )
}

export default Header
