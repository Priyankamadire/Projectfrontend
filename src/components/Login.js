import React,{useState} from 'react'
import { Outlet, Link, json } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Lognav from './Lognav';

const Login=() => {

  const navigate = useNavigate();



const [email,setEmail] = useState('');
const [password , setPassword] = useState('');
  
const loginUser = async (e) =>{
   e.preventtDefault();
   const res = await fetch('/login',{
    method:"POST",
    headers:{
      "Content-Type" :"application/json"

    },
    body:JSON.stringify({
      email,
      password

    })
     
   });

   const data = await res.json();
   if(res.status == 400 || !data){
    window.alert("Invalid details")
   }
   else{
    window.alert("login successfull");
      navigate('/');


   }
}



  return (
    <div>
      <>
  <br />
  <center>
    <h1>LOGIN OR SIGNUP FOR PEOPLE WHO ARE LOOKING FOR A JOB</h1>
  </center>
  <section className='login'>
        <div className='container mt-5'>
          <div className='loin-content'>
            <h2 className='form-title'>Login</h2>
            <form  method='POST' className ='login-form' id='login-form'>
              
              <div className='form-group'>
                <label htmlFor ="email">
                  {/* <i className='bi bi-email-fill'></i> */}
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>

                </label>
                <input type="text" name = "email" id = "email" autoComplete='off'
                //  value={user.email}
                //  onChange={handleInputs}
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                                   placeholder='Your email'>
                </input>
              </div>
              <div className='form-group'>
                <label htmlFor ="password">
                  <i className="fa fa-key" aria-hidden="true"></i>
                  
                </label>
                <input type="password" name = "password" id = "password" autoComplete='off' 
                
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                 placeholder='Enter password'>
                </input>
              </div>

              <div className='form-group form-button'>
                <input type = "submit" name = "login" id="login" className='form-submit' value="login" 
                
                onClick={loginUser}
                ></input>
              </div>
            </form>
          </div>
          
        </div>
      </section>
  <br /><br/>
        <br/>
        <br/>
</>
      <Outlet />

    </div>
  )
};
export default Login;

