import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";

const Supregister = () => {

        const navigate = useNavigate();
        
          const [admin,setUser]=useState({
            instname: "",
            email:"", 
            phone:"",
            instcode:"",
            password:"",
            cpassword:""
          });
          let name,value;
          const handleInputs=(e) =>{
         console.log(e);
          name = e.target.name;
          value = e.target.value;
          setUser({...admin,[name]:value});
          
          }
           const PostData = async (e) => {
            e.preventDefault();
            const {instname, email,  phone, instcode, password,  cpassword}=admin;
            const res = await fetch("https://projectbackends.onrender.com/supregister" , {
              method:"POST",
              headers:{
                "Content-Type" :"application/json"
        
              },
                body:JSON.stringify({
                  instname, email,  phone, instcode, password,  cpassword
                })
            });
            const data = await res.json();
            if(!instname  ||!email || !phone || !instcode|| !password || !cpassword){
              window.alert("Please fill all the details");
              console.log("invalid registeration");
            }
            else if (res.status === 423){
              window.alert("THIS USER ALREDY EXIST");
            }
            else if (res.status === 425){
              window.alert("PASSWORD DINT MATCH TRY AGAIN");
            }
            else{
              window.alert("registeration successful");
              console.log(" registeration successful");
              // navigate.push('/login');
              // history.push('/login');
            //   navigate('/sup_log');
              navigate('/sup_log');
            }
        
        
           }
          return (
            <div>
              <>
              {/* <section className='registerusp'>
                <div className='container mt-5'> */}
                  <div className='signup-contents'>
                    <center>
                    <h2 className='form-title'>Sign up/Register for super-admin</h2>

                    </center>
                    <form method='POST' className ='register-forms' id='register-forms'>
                      <br/>
                    <img className='float-end ' width="450px" src='https://tse4.mm.bing.net/th?id=OIP.2U4KHetREgwdR4HOXa74ygHaE8&pid=Api&P=0'>


</img>
                      <div className='form-groups'>
                        <br/>
                        <label htmlFor ="instname">
                          <h5>Enter Institute name:
                  {/* <i className="fa fa-briefcase" aria-hidden="true" /> */}
                  <i class="fa fa-building" aria-hidden="true"></i>

                </h5><p></p>
                        </label>
                        <input type="text" name = "instname" id = "instname" autoComplete='off'
                        value={admin.instname}
                        onChange={handleInputs}
              
                        placeholder='Institute Name'>
                        </input>
                      </div>
                      <div className='form-groups'>
                        <label htmlFor ="email">
                          {/* <i className='bi bi-email-fill'></i> */}
                          <h5>Enter Institute email:
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>


                </h5><p></p>
                        </label>
                        <input type="text" name = "email" id = "email" autoComplete='off'
                         value={admin.email}
                         onChange={handleInputs}
        
                                           placeholder='inst email'>
                        </input>
                      </div><div className='form-groups'>
                        <label htmlFor ="phone">
                          {/* <i className='bi bi-person-fill'></i> */}
                          <h5>Enter institue phone number:
                          <i className ="fa fa-phone-square" aria-hidden="true"></i>



                </h5><p></p>
                        </label>
                        <input type="text" name = "phone" id = "phone" autoComplete='off'
                         value={admin.phone}
                         onChange={handleInputs}
                          placeholder='inst  Phone num'>
                        </input>
                      </div><div className='form-groups'>
                        <label htmlFor ="instcode">
                          {/* <i className='bi bi-person-fill'></i> */}
                          <h5>Enter institue code:
                          <i className="fa fa-briefcase" aria-hidden="true" />

                          {/* <i className ="fa fa-phone-square" aria-hidden="true"></i> */}



                </h5><p></p>
                          
                       </label>
                        <input type="text" name = "instcode" id = "instcode" autoComplete='off'   
                        value={admin.instcode}
                        onChange={handleInputs}
                         placeholder='Institute unique code '>
                         </input>
                      </div><div className='form-groups'>
                        <label htmlFor ="password">
                          {/* <i className='bi bi-person-fill'></i> */}
                          {/* <i className="fa fa-key" aria-hidden="true"></i> */}
                          <h5>Create password
                  {/* <i className="fa fa-briefcase" aria-hidden="true" /> */}
                  <i className="fa fa-key" aria-hidden="true"></i>

                </h5><p></p>
                          
                        </label>
                        <input type="password" name = "password" id = "password" autoComplete='off' 
                         value={admin.password}
                         onChange={handleInputs}
                         placeholder='Enter password'>
                        </input>
                      </div><div className='form-groups'>
                        <label htmlFor ="cpassword">
                          {/* <i className='bi bi-person-fill'></i> */}
                          {/* <i className="fa fa-key" aria-hidden="true"></i>
                           */}
                            <h5>Confirm password
                  {/* <i className="fa fa-briefcase" aria-hidden="true" /> */}
                  <i className="fa fa-key" aria-hidden="true"></i>

                </h5>
                          
                          </label>
                        <input type="password" name = "cpassword" id = "cpassword" autoComplete='off' 
                         value={admin.cpassword}
                         onChange={handleInputs}
                         placeholder='Confirm password'>
                        </input>
                      </div>
        
                      {/* <div className='form-group form-button'>
                        <input type = "submit" name = "signupform" id="signupform" className='forms-submit' value="register" onClick={PostData}></input>
                      </div> */}
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
              className=' btn btn-info'
              > <Link to='/sup_log'>

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
export default Supregister