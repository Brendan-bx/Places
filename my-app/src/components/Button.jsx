import clsx from 'clsx'

const variants = {
    primary:
        'px-4 py-2 text-lg font-medium text-white bg-indigo-500 rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50',
    danger: 'px-4 py-2 text-lg font-medium text-white bg-red-500 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50',
}

export const Button = ({ className, variant = 'primary', ...otherProps }) => (
    <button className={clsx(variants[variant], className)} {...otherProps} />
)
