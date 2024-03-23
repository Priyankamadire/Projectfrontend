import React,{useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import Login from './Login';
// import {useHistory} from 'react-router-dom';
// import {NavLink ,useHistory } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Register = () => {
// const history = useHistory();
// let history = useHistory ();
const navigate = useNavigate();

  const [user,setUser]=useState({
    name: "",
    email:"", 
    phone:"",
    qualification:"",
    experience:"",
    password:"",
    cpassword:""
  });
  let name,value;
  const handleInputs=(e) =>{
 console.log(e);
  name = e.target.name;
  value = e.target.value;
  setUser({...user,[name]:value});
  
  }
   const PostData = async (e) => {
    e.preventDefault();
    const {name, email,  phone, qualification, experience ,password,  cpassword}=user;
    const res = await fetch("/register" , {
      method:"POST",
      headers:{
        "Content-Type" :"application/json"

      },
        body:JSON.stringify({
          name, email,  phone, qualification,experience, password,  cpassword
        })
    });

    const data = await res.json();
    // const userExist = await user.findOne({email:email});


    // if(data.status === 422 || !data){
    //   window.alert("invalid registeration");
    //   console.log("invalid registeration");
    // }
     if(res.status === 488){
      window.alert('user already exist try creating with new mail id');
    }

     else if(!name || !email || !phone ||  !qualification || !experience || !password || !cpassword){
      window.alert("please fill all the details");
  }
  else if(res.status === 422){
    window.alert("enter correct password");
}

    else{
      window.alert("registeration successful");
      console.log(" registeration successful");
      // navigate.push('/login');
      // history.push('/login');
      navigate('/signin');
    }


   }
  return (
    <div>
      <>
      {/* <section className='registeru'>
        <div className='container mt-5'> */}
          <div className='signup-content'>
            <center>
            <h2 className='form-title'>SIGN UP / CREATE NEW ACCOUNT </h2>

            </center>

            <form method='POST' className ='register-form' id='register-form'>
<br/>

              <img className='float-end rounded-circle' width="450px" src='https://images.creativemarket.com/0.1.0/ps/5619475/1820/1213/m1/fpnw/wm1/obn1eyv07hrklwajtbxon51mrwh19tdsdk4yfgrvf3rezgjhvqtbz63i1iynvcxa-.jpg?1545910921&s=65129f1789eee7e2d18d316380208700'>


              </img>
<br/>
<br/>
              <div className='form-group'>
                <label htmlFor ="name">
                <h5>Enter your name:
                <i className='bi bi-person-fill'></i>
                </h5><p></p>
                </label>
                <input type="text" name = "name" id = "name" autoComplete='off'
                value={user.name}
                onChange={handleInputs}
      
                placeholder='Your Name'>
                </input>
              </div>
              <div className='form-group'>
                <label htmlFor ="email">
                  {/* <i className='bi bi-email-fill'></i> */}
                  {/* <i className="fa fa-envelope-o" aria-hidden="true"></i> */}
                  <h5>Enter your Email:
                  <i className='bi bi-envelope-fill'></i>
                </h5>
                <p></p>
                </label>
                <input type="text" name = "email" id = "email" autoComplete='off'
                 value={user.email}
                 onChange={handleInputs}

                                   placeholder='Your email'>
                </input>
              </div><div className='form-group'>
                <label htmlFor ="phone">
                  {/* <i className='bi bi-person-fill'></i> */}
                  {/* <i className ="fa fa-phone-square" aria-hidden="true"></i> */}
                  <h5>Enter your mobile number:
                  <i className='fa fa-phone-square' aria-hidden="true"></i>
                </h5>
                <p></p>
                </label>
                <input type="text" name = "phone" id = "phone" autoComplete='off'
                 value={user.phone}
                 onChange={handleInputs}
                  placeholder='Your Phone num'>
                </input>
              </div><div className='form-group'>
                <label htmlFor ="qualification">
                  {/* <i className='bi bi-person-fill'></i> */}
                  <h5>Enter your qualification:
                  <i className='bi bi-mortarboard-fill' aria-hidden="true"></i>
                </h5>
                <p></p>
                  {/* <i className="fa fa-briefcase" aria-hidden="true" /> */}
               </label>
                <input type="text" name = "qualification" id = "qualification" autoComplete='off'   
                value={user.qualification}
                onChange={handleInputs}
                 placeholder='Your education Qualification '>
                 </input>
              </div>
              <div className='form-group'>
                <label htmlFor ="experience">
                  {/* <i className='bi bi-person-fill'></i> */}
                  <h5>Enter your Experience:
                  <i className="fa fa-briefcase" aria-hidden="true" />

                </h5>
               </label>
                <input type="text" name = "experience" id = "experience" autoComplete='off'   
                value={user.experience}
                onChange={handleInputs}
                 placeholder='Your work experience '>
                 </input>
              </div>
              
              
              <div className='form-group'>
                <label htmlFor ="password">
                  {/* <i className='bi bi-person-fill'></i> */}
                  {/* <i className="fa fa-key" aria-hidden="true"></i> */}
                  <h5>Create password:
                  {/* <i className="fa fa-briefcase" aria-hidden="true" /> */}
                  <i className="fa fa-key" aria-hidden="true"></i>

                </h5>
                <p></p>
                  
                </label>
                <input type="password" name = "password" id = "password" autoComplete='off' 
                 value={user.password}
                 onChange={handleInputs}
                 placeholder='Enter password'>
                </input>
              </div><div className='form-group'>
                <label htmlFor ="cpassword">
                  {/* <i className='bi bi-person-fill'></i> */}
                  <h5>Confirm password:
                  {/* <i className="fa fa-briefcase" aria-hidden="true" /> */}
                  <i className="fa fa-key" aria-hidden="true"></i>

                </h5>
                <p></p>
                  </label>
                <input type="password" name = "cpassword" id = "cpassword" autoComplete='off' 
                 value={user.cpassword}
                 onChange={handleInputs}
                 placeholder='Confirm password'>
                </input>
              </div>
              


              {/* <div className='form-group form-button'>
                <input type = "submit" name = "signup" id="signup" className='form-submit' value="register" onClick={PostData}></input>
              </div> */}


<pre></pre>
<center>
              <button type="button submit" 
              name = "signup" id="signup" className='form-submit btn btn-success'
              onClick={PostData} >
                <h4>
                  <em>REGISTER</em>
                </h4>

              </button></center>
              <br/>
              <h4>ALREDY HAVE AN ACCOUNT
              <button type="button" 
              className=' btn btn-warning'
              > <Link to='/signin'>

<h5>
                  <em className='text-dark'>LOGIN</em>
                </h5>
              </Link>
               
               
              </button>
              </h4>
<br/>
            </form>

          </div>


          
        {/* </div>
      </section> */}
      </>

    
    </div>
  )
}

export default Register
