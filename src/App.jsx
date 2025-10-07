import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import authService from './appwrite/auth'
import { useDispatch } from 'react-redux'
import { login } from './store/authSlice'
function App() {
  const navigate=useNavigate();
  const [loading, setLoading] = useState(true);
  const dispatch=useDispatch();
  const status=useSelector(state=>state.auth.status);
  // console.log(status);
  useEffect(() => {
    authService.getUser().
    then((user)=>{
      if(user){
      dispatch(login(user));
      }
      else{
        navigate("/guest")
      }
    })
    .catch((error)=>{
      throw error;
    }).
    finally(()=>{
      setLoading(false);
    })
  },[])
  return (!loading)?(
    <Outlet/>
  ):(<div className="container"><div className='flex flex-col items-center justify-center h-screen'><h1 className='text-3xl text-white'>Loading</h1></div></div>)
}

export default App
