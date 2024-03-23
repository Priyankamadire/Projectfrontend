import React,{useEffect} from 'react';
import axios, {isCancel, AxiosError} from 'axios'; 
import { Outlet, Link,useNavigate} from "react-router-dom";


export default function About() {
// useEffect(()=>{
//     const fetchData  = async() =>{
//       const data = await axios.get('/wfaculty/get');
//       // const json = await response.json()
//       console.log("data is>",data)

//     }
//     fetchData();

//   },[]); 
 
 
  return (
    <div>
      <>
<br></br>   

     <img
          className="float-end rounded-circle"
          src="https://static9.depositphotos.com/1028979/1141/i/600/depositphotos_11413299-stock-photo-conceptual-image-of-business-woman.jpg"
          width="600px"
          height="456px"
        />
        <strong>
          <em>
            <p>
              BEST INSTITUTES ARE INVOLVED IN OUR WEBSITES..U CAN MAKE YOUR
              CARRER BY JOINING US.....
            </p>
            <p>
              OUR WEBSITE IS MORE USEFUL TO POST FACULTY JOBS..WITH IN SMALL
              TIME U CAN JOIN GREAT INSTITUTES...
            </p>
            <p>
              MANAGMENT CAN EASILY POST THE FACULTY JOB REQUIRED AND CAN POST IN
              OUR WEBSITE
            </p>
            <p>MANAGMENT CAN ALSO VIEW THEIR FACULTY DETAILS</p>
          </em>
        </strong>
        <em>
          <br />
        </em>
      </>
    </div>
  );
}
