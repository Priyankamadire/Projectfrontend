import React,{useEffect ,  useState} from 'react';
import { Outlet, Link , useNavigate } from "react-router-dom";
import axios from 'axios';


const   Vacancies = () => {


  const navigate = useNavigate();
  const [products , setProducts] = useState("");

 
useEffect(()=>{
const fetchdata=async()=>{
  const data = await axios.get('/jobavai');
  console.log(data);
  setProducts(data);
};
fetchdata();
},[]);

  return (
    <div>
      <>
  <br />
  
  
  <table style={{ width: "100%" }} method="GET" className="text-dark" >
    <tbody >
      <tr>
        {/* <th>S.NO</th> */}
         <th>INSTITUE NAME</th>
      <th>POST AVAILABLE</th>
      <th>APPLY/VIEW MORE DETAILS</th>

      </tr>
      {
        products && products?.data.map((product)=>(

         
      <tr>
        
     <td>{product.instname}</td>
      <td>{product.postavailable}</td>
      <td><Link to ='/signin'>APPLY</Link></td> 

      </tr>
       ))
      } </tbody></table>
      <img
    src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202209/jobs-sixteen_nine.jpg?size=948:533"
    className="float-end rounded-circle"
    width="300px"
    height="450px"
  />
</>
      <Outlet />

    </div>
  )
};
export default Vacancies;
