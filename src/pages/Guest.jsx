import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {Button} from '../components/index'
import authService from '../appwrite/auth'
function Guest() {
    const curUser=authService.getUser();
    const navigate=useNavigate();
    const location=useLocation();
    useEffect(()=>{
        if(curUser){
            navigate("/");
        }
    },[location.pathname]);
        const navItems=[
        {name:"Login",slug:"/login",active:false},
        {name:"Signup",slug:"/signup",active:false},
    ]
    return (
        <div className="container">
            <h1 className='text-3xl text-white'>My Todo App</h1>
            {navItems.map(item=>(<div key={item.name}><Button onClick={()=>navigate(item.slug)}>{item.name}</Button></div>))}
        </div>
    )
}

export default Guest
