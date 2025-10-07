import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import authService from '../appwrite/auth';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
function SignupForm() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        try{
        authService.signup({name,email,password}).then(user=>{
            dispatch(login(user));
            navigate('/');
        })
    }
    catch(error){
        throw error
    }
        
    }
    return (
        <div className='p-4 w-full h-full'>
            <form action="" className='flex flex-col gap-4 h-full flex items-center justify-center'>
                <Input value={name} onChange={(e)=>setName(e.target.value)} label="Name"/>
                <Input value={email} onChange={(e)=>setEmail(e.target.value)} label="Email"/>
                <Input value={password} onChange={(e)=>setPassword(e.target.value)} label="Password"/>
                <Button onClick={handleSubmit}>Signup</Button>
            </form>
        </div>
    )
}

export default SignupForm
