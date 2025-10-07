import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Button} from '../components/index'
function Guest() {
        const navItems=[
        {name:"Login",slug:"/login",active:false},
        {name:"Signup",slug:"/signup",active:false},
    ]
    const navigate=useNavigate();
    return (
        <div className="container">
            <h1 className='text-3xl text-white'>My Todo App</h1>
            {navItems.map(item=>(<div key={item.name}><Button onClick={()=>navigate(item.slug)}>{item.name}</Button></div>))}
        </div>
    )
}

export default Guest
