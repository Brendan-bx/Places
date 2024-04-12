import Link from 'next/link'

const LinkButton = ({ href, children }) => {
    return (
        <Link
            href={href}
            className="px-4 py-2 text-lg font-medium text-white bg-blue-500
            rounded-md shadow-md hover:bg-blue-600 focus:outline-none
            focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
            {children}
        </Link>
    )
}

export default LinkButton
