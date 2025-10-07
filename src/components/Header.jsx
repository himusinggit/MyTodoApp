import React, { useId } from 'react'
import Button from './Button';
import { useSelector } from 'react-redux'
import Logout from './Logout';

function Header() {
    const status=useSelector(state=>state.auth.status);

    return (
        <>
        <div className="flex gap-4">
        <h1 className='text-3xl text-white'>My Todo App</h1>
        
        {status && (<Logout/>)}
        </div>
        </>
    )
}

export default Header
