import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className="justify-between flex p-4 bg-blue-400">
      <Link href="#">Home</Link>
      <Link href="#">Add</Link>
    </div>
  )
}

export default Header