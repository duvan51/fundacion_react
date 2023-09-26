import DataEcommerce from '../../DataInfo/DataEcommerce';
import React from 'react';
import {useEffect, useState} from 'react';


const Ecommerce = () => {

  const [dataEc, setEc] = useState([]);
 
  useEffect(() => {
    if(DataEcommerce){
      setEc(DataEcommerce.dataEcommerce.InformacionProduct)
    }
    else if(" "){
      setEc("error")
    }  
  },[DataEcommerce])

  
  

  const products = dataEc.map((i)=>{
    console.log(i)
     
    return(
      <div className="card" key={i.id}>
          <img src={i.images[0]} className="card-img-top" alt="..." />
          <div className='CardBody'>
            <div className="card-body">
              <p className="card-text">{i.name}</p>
              <div className='card-cash'>{i.cash}</div>
              
            </div>
            <div className='count'>{i.count}</div>
            <div className='card-comprar'>
              <div className='comprar'> 
                <button className='btn-comprar'></button>
                <button className='btn-agregar'></button>
              </div>
            </div>
            
          </div>
        </div>
    )
    
  })
  return (
    <div className='ecommercePage'>
      <div className='BodyProductsHeader'>
          <div className='bodyEcommerce'>
            <div className='bodyEcommerceProductsSelect'>
              <div className='bodyEcommerceProductsSelectComplet'>
                <div className= "tarjet">
                  <div className='name'>
                    
                  </div>
                  <div className='images'>
                    <img></img>
                    <img></img>
                    <img></img>
                  </div>
                </div>
              </div>
            </div>
            <div className='bodyEcommerceProducts' display='flex'>
              {products}
            </div>
          </div>
      </div>  
    </div>
    
  )
}

export default Ecommerce