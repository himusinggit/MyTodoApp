import React,{useId} from 'react'
import Input from "./Input"
import Button from './Button'
import authService from '../appwrite/auth';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function LoginForm() {
        const dispatch=useDispatch();
        const navigate=useNavigate();
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const handleSubmit=(e)=>{
            e.preventDefault();
            try {
                authService.login({email,password}).then(users=>{
                authService.getUser().then(user=>{
                    dispatch(login(user));
                    if(user) navigate('/')
                })
            })

            } catch (error) {
                throw error
            }

            
        }
    return (
        <div className='p-4 w-full h-full'>
            <form action="" className='flex flex-col gap-4 h-full flex items-center justify-center'>
                <Input value={email} onChange={(e)=>setEmail(e.target.value)} label="Email"/>
                <Input value={password} onChange={(e)=>setPassword(e.target.value)} label="Password"/>
                <Button onClick={handleSubmit}>Login</Button>
            </form>
        </div>
    )
}

export default LoginForm
