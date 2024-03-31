import Header from '@/components/Header'
import { Button } from '@/components/Button'
import { capitalizeFirstLetter } from '@/utils/functions'
import { lieuTypes } from '@/utils/constants'

const products = [
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt:
            'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt:
            'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt:
            'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'dfgjdfgjshfglqjkdfhglksjdfhglksjdfghlkjh',
    },
    {
        id: 5,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'dfgjdfgjshfglqjkdfhglksjdfhglksjdfghlkjh',
    },
    {
        id: 5,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'dfgjdfgjshfglqjkdfhglksjdfhglksjdfghlkjh',
    },
    // More products...
]

export default function Home() {
    return (
        <>
            <Header />
            <div className="flex flex-wrap">
                <section className="w-[183vh] h-20 mx-36 ">
                    <div className=" max-w-2xl mx-16 px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2>Products</h2>

                        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 grid-cols-3 xl:gap-x-8">
                            {products.map((product) => (
                                <a
                                    key={product.id}
                                    href={product.href}
                                    className="group border-solid border-2 border-sky-500"
                                >
                                    <h3 className="mt-4 text-sm text-gray-700">
                                        {product.name}
                                    </h3>
                                    <p className="mt-1 text-lg font-medium text-gray-900">
                                        {product.price}
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
                            ))}
                        </div>
                    </div>
                </section>
                <aside className="p-4 w-36 h-36">
                    <p>Places</p>
                    <select className="border-solid border-2 border-gray-600">
                        {lieuTypes.map((lieuType) => (
                            <option value={lieuType}>
                                {capitalizeFirstLetter(lieuType)}
                            </option>
                        ))}
                    </select>
                </aside>
            </div>
        </>
    )
}
