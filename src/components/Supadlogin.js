import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Supadlogin = () => {
    const navigate = useNavigate();



    const [email,setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [instcode,setInstcode] = useState('');
      
    const loginUser = async (e) =>{
       e.preventDefault();
       const res = await fetch('/suplogin',{
        method:"POST",
        headers:{
          "Content-Type" :"application/json"
    
        },
        body:JSON.stringify({
          email,
          instcode,
          password
    
        })
         
       });
    
       const data = await res.json();
       
window.localStorage.setItem("token",data.data);

window.localStorage.setItem("isLoggedIn_",true);
       if(res.status === 411 ){
        window.alert("FILL COMPLETE FORM TO REGISTER")
       }
       else if(res.status === 401){
window.alert('Wrong password try again');
       }

       else if(res.status === 406){
        window.alert('invalid details try again');
               }
               

       else{
     {
          window.alert("login successfull");
          navigate('/navbarsupad');
        }
        
    
    
       }
    }
    
    
    
      return (
        <div>
          <>
      <br />
      <center>
        <h1>LOGIN FOR INSTITUTE HEAD</h1>
      </center>
      {/* <section className='login'>
            <div className='container mt-5'> */}

              {/* <div className='loin-content'>
                <h2 className='form-title'>Login</h2> */}
                 <div className="container mt-3">
  <div className="card" style={{ width: 400 }}>


  <img className="card-img-top" src="https://tse3.mm.bing.net/th?id=OIP.F_oo-HIe743EBbgzBYyJ7gHaGN&pid=Api&P=0" width="100%" />
  <div className="card-body">
    <h4 className="card-title">LOGIN</h4>
    <p className="card-text"></p>
                <form  method='POST' className ='login-forms' id='login-form'>
                  <br/>
                  <div className='form-group'>
                    <label htmlFor ="email">
                      {/* <i className='bi bi-email-fill'></i> */}
                      <h5>
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>

                      </h5><p></p>
    
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
                        <label htmlFor ="instcode">
                          {/* <i className='bi bi-person-fill'></i> */}
                          <h5>
                          <i className="fa fa-briefcase" aria-hidden="true" /></h5><p></p>
                       </label>
                        <input type="text" name = "instcode" id = "instcode" autoComplete='off'   
                        value={instcode}
                        // onChange={handleInputs}
                    onChange={(e)=>setInstcode(e.target.value)}

                         placeholder='Institute unique code '>
                         </input>
                      </div>

                  <div className='form-group'>
                    <label htmlFor ="password">
                      <h5>
                      <i className="fa fa-key" aria-hidden="true"></i>

                      </h5>
                      
                    </label>
                    <input type="password" name = "password" id = "password" autoComplete='off' 
                    
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                     placeholder='Enter password'>
                    </input>
                  </div>
                 
    
                  {/* <div className='form-group form-button'>
                    <input type = "submit" name = "signin" id="signin" className='form-submit' value="login" 
                    
                    onClick={loginUser}
                    ></input>
                  </div>
                  <br /><br/> */}


                  <center>
                  <button type="button submit" 
              name = "signup" id="signup" className='form-submit btn btn-success'
              onClick={loginUser} >
                
                <h6>
                  <em>login</em>
                </h6>

              </button></center>
           

<div>
  <h5>dost have a account click here</h5>
<button type="button" className='btn btn-secondary'><Link  className='text-white' to ='/supad_regis'>SIGN UP</Link></button>

</div>
             
             

                 </form>
              </div>
              </div></div>
            {/* 
          </section> */}



      <br /><br/>
            <br/>
            <br/>
    </>
          
    
        </div>
      )
}

export default Supadlogin