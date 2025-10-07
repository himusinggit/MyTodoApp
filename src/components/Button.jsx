import React from 'react'

function Button({children,bgColor="blue",...props}) {
    return (
        <button className={`bg-red-500 text-lg text-white px-4 py-2 rounded-md flex items-center justify-center`} {...props}>{children}</button>
    )
}

export default Button
