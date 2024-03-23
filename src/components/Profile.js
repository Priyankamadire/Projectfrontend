import React,{useEffect ,  useState} from 'react';
import { Outlet, Link , useNavigate } from "react-router-dom";
import axios from 'axios';

const Profile = () => {
  const navigate = useNavigate();
  const [products , setProducts] = useState("");



  useEffect(()=>{
    const fetchdata=async()=>{
      const data = await axios.get('/myprofile');
      console.log(data);
      setProducts(data);
    };
    fetchdata();
  },[]);
  return (
    <div>
       <table id="myUL" style={{ width: "100%" }} method="GET" className="text-dark " >
    <tbody >
      <tr>
        {/* <th>S.NO</th> */}
         <th>NAME</th>
         <th>EMAIL</th>
         <th>MOBILE NUMBER</th>
      <th>Qualification</th>
      <th>EXPERIENCE</th>
      </tr>

      {
        products && products?.data.map((product)=>(

         
      <tr>
        
     <td>{product.name}</td>
      <td>{product.email}</td>
      <td>{product.phone}</td>
      <td>{product.qualification}</td>
      <td>{product.experience}</td>
    </tr>
     

        ))
      } </tbody></table>
      
    </div>
  )
}

export default Profile
