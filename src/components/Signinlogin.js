// import React from 'react'
import React,{useState} from 'react'
// import { Outlet, Link, json } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
// import jwt from 'jsonwebtoken';
const Signinlogin = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [remember, setRemember] = useState(false)
// const [user, setUser] = useState()
// const handleSubmit = async e => {
  
// };
     
    const loginUser = async (e) =>{
       e.preventDefault();
       const res = await fetch('/login',{
        method:"POST",
        headers:{
          "Content-Type" :"application/json"
    
        },
        body:JSON.stringify({
          email,
          password
    
        }),
        
         
       });
        
       const data = await res.json();
      
window.localStorage.setItem("token",data.data);

window.localStorage.setItem("isLoggedIn",true);
       if(res.status === 400 ){
        window.alert("Fill complete form to login");
       }
       else if(res.status === 412){
        window.alert("password not matched enter correct password");
       }
       else if(res.status === 405){
        window.alert("invalid details try again");
       }
       else{
        window.alert("login successfull");
          navigate('/lognav');
       }
    }
    
    
    
      return (
        <div>
          <>
      <br />
      <center>
        <h1>LOGIN  FOR PEOPLE WHO ARE LOOKING FOR A JOB</h1>
      </center>
      {/* <section className='login'>
            <div className='container mt-5'> */}
            <div className="container mt-3">
  <div className="card" style={{ width: 400 }}>


  <img className="card-img-top" src="https://static.vecteezy.com/system/resources/previews/000/518/208/original/man-working-with-computer-bright-colorful-vector-illustration.jpg" width="100%" />
  <div className="card-body">
    <h4 className="card-title">LOGIN</h4>
    <p className="card-text"></p>
  
                <form  method='POST' className ='login-form' id='login-form' >
                  
                  <div className='form-group'>
                    <br/>
                    
                    <label htmlFor ="email">
                      {/* <i className='bi bi-email-fill'></i> */}
                      <h5>Email:<i className="fa fa-envelope-o" aria-hidden="true"></i></h5>
                      
    <p></p>
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
                      <h5>
                        Password
                      <i className="fa fa-key" aria-hidden="true"></i>
                      </h5>
                      
                      
                    </label>
                    <input type="password" name = "password" id = "password" autoComplete='off' 
                    
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                     placeholder='Enter password'
                     >
                    </input>
                  </div>  
                   {/* <br /> */}
                   
                   <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" name="rememberme" value={remember} onChange={(e)=>setRemember(!remember)} /> remember me
                        </label>
                    </div>
                  <div className='form-group form-button'>
<center>
                  <button type="button submit" 
              name = "signup" id="signup" className='form-submit btn btn-success'
              onClick={loginUser} >
                
                <h6>
                  <em>login</em>
                </h6>

              </button></center>
                    {/* <input type = "submit" name = "signin" id="signin" className='form-submit' value="login" 
                    
                    onClick={loginUser}
                    ></input> */}
                  </div>







                  <div>
  <h5>dost have a account click here </h5>
<button type="button" className='btn btn-primary'><Link  className='text-white' to ='/register_'>SIGN UP</Link></button>

</div>
                </form>
              </div>
              


              </div>
</div>

            {/* </div>
          </section> */}
            <br/>
            <br/>
    </>
          
    
        </div>
      )
}

export default Signinlogin
