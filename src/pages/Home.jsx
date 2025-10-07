import React, { use, useEffect, useState,useId } from 'react'
import {Header,Input,Todo} from "../components/index"
import dataService from '../appwrite/config';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import authService from '../appwrite/auth';
function Home() {
  const userData=useSelector(state=>state.auth.userData);
  const location=useLocation();
  const navigate=useNavigate();
  const [task, setTask] = useState("");
  const [userTodos, setuserTodos] = useState([]);
  useEffect(() => {
      console.log(userData.$id);
      if(userData){
      dataService.listRows(userData.$id).then((todos)=>{
      console.log("yahan tak pahunch raha hai ",todos);
      if(todos.rows.length>0){
        setuserTodos(todos.rows);
        console.log("yo yo yo");
      }
    })
  }
  },[location])
  const handleAdd=()=>{
    setuserTodos([...userTodos,{todo:task,$id:Date.now()}]);
    dataService.addRow({todo:task,userId:userData.$id});
    
  }
    return (
            <div className="container">
      <div className="main">
        <div className="head">
          <Header/>
          <div style={{display:"flex",width:"100%"}}>
            <input type="text" className='addInput' value={task} onChange={(e)=>setTask(e.target.value)} />
            <div onClick={handleAdd} style={{backgroundColor:"green",display:'flex',alignItems:"center",justifyContent:"center",padding:"1rem",cursor:"pointer",borderTopRightRadius:"5px",borderBottomRightRadius:"5px",color:"white"}}>Add</div>
            </div>
        </div>
        <div className="alltodos">
            {userTodos.map((res)=>(<Todo key={res.$id} todo={res.todo} todoId={res.$id}/>))}
        </div>
      </div>
    </div>
    )
}

export default Home
