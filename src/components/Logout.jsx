import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from './Button'
import authService from '../appwrite/auth';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
function Logout() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleLogout=()=>{
        authService.logout().then(res=>{
            dispatch(logout())
            localStorage.removeItem("todos");
            navigate("/guest")
        });
    }
    return (
        <Button onClick={handleLogout}>Logout</Button>
    )
}

export default Logout
