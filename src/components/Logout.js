import React,{useEffect ,  useState} from 'react';
import { Outlet, Link ,useNavigate  } from "react-router-dom";

const Logout = () => {

    const navigate = useNavigate();
    useEffect(()=>{
        fetch('/lout',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"

            },
            credential:"include"
        }).then((res)=>{
            navigate('/signin' , {replace:true});
            window.localStorage.removeItem("isLoggedIn");
            if(!res.status != 200){
                const error = new Error(res.error);
                throw error;
            }

        }).catch((err)=>{
            console.log(err);
        })
        

    });

  return (
    <div>
      <>
      <h1>Logout</h1>
      </>
    </div>
  )
}

export default Logout
