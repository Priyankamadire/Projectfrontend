import React,{useEffect ,  useState} from 'react';
import { Outlet, Link ,useNavigate  } from "react-router-dom";
const Suplogout = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('/slout',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"

            },
            credential:"include"
        }).then((res)=>{
            navigate('/sup_log' , {replace:true});
            window.localStorage.removeItem("isLoggedIn_");
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
      <h1>SUPLOGOUT</h1>
      </>
    </div>
  )
}

export default Suplogout
