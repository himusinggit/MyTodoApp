import React,{useId} from 'react'

function Input({label,...props}) {
    const id=useId();
    return (
        <div className='flex flex-col'>
        <label htmlFor="id" className='text-white' >{label}</label>
        <input type="text" className='bg-gray-200 text-black text-lg py-2 px-4 rounded-md' id='id' {...props} />
        </div>
    )
}

export default Input
