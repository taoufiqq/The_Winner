import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


import './home.css';


const Quiz = () => {


  const [categories , setCategories] = useState(null);

  useEffect(()=>{
  
    axios.get(`http://localhost:3030/category`)
      .then(function (response) {
       
     
        setCategories(response.data)
      
      }).catch(function (err) {
        console.log(err);
    });
    
    })





  return(
    <div id="home">
       <form>
            <Link to="/home" className="play-button" style={{marginLeft: '1600px',marginTop: '22px'}}>log out</Link>
        </form>           
   
            <section id="section">
                <div style={{textAlign: 'center'}}>
                    <span className="mdi mdi-cube-outline cube"></span>
                </div>
                    <h2>Welcome </h2>

                     <h3>Choice Category to Start Game</h3>
         
                    <form>
          
                 
                    { categories && categories.map(item =>(
                      <div className="card-body">
                      <Link to="" className="play-button">{item.nameCategory}</Link>
                      </div>
                        ))} 
              
        
                  
                   </form>
                  
        
             </section>
            <ul className="bg-bubbles">
		      <li></li>
		      <li></li>
		      <li></li>
		      <li></li>
		      <li></li>
		      <li></li>
		      <li></li>
		      <li></li>
		      <li></li>
		      <li></li>
	       </ul>

  

    </div>


    );
  }

export default Quiz;