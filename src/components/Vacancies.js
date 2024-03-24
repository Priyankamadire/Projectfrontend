import React,{useEffect ,  useState} from 'react';
import { Outlet, Link , useNavigate } from "react-router-dom";
import axios from 'axios';


const   Vacancies = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get('https://projectbackends.onrender.com/jobavai');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchdata();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter(product => {
    const searchTerms = searchQuery.toLowerCase().split(" ");
    return searchTerms.every(term =>
      Object.values(product).some(value =>
        value.toString().toLowerCase().includes(term)
      )
    );
  });

  return (
    <div>
      
      <br />
      <div>
         
      <form className="d-flex">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </form>
        <br />
        <br />
        <div className='table-responsive'>
          <table style={{ width: "100%" }} method="GET" className="text-dark" >
          <tbody>
              <tr>
                <th>INSTITUE_NAME</th>
                <th>POST_AVAILABLE</th>
                
                <th>APPLY</th>
              </tr>
           
            
              {filteredProducts.map(product => (
                <tr key={product.id}>
                  <td>{product.instname}</td>
                  <td>{product.postavailable}</td>
               
                  <td><Link to='/signin'>APPLY</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Vacancies;
