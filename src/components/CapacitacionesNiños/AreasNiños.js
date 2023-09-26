import React from 'react'
import {useState, useEffect} from 'react'
import datas from '../../DataInfo/DataInfo.js'
import './Areaniños.css'



const AreasNiños = () => {
  const [data, setData] =useState([])
  const [images, setImages] =useState([])

  const [menuOpen, setMenuOpen] = useState(0);
  
  
  //aparecer y desaparecer ventana de informacion 
  const handlerbtn= () => {
    setMenuOpen(!menuOpen);
  }

  var displayNone = {
    dispĺay: "block",
  }

  if(menuOpen == 0){
    displayNone ={
        display:"none",
    }
    }
/*------------------*/



    useEffect(()=>{
        if(datas){
            setData(datas.dataInfo.AreasNiños.areasArray);
            setImages(datas.dataInfo.AreasNiños.images)
        }
    },[])
    return (
    <div className='areaNiños'>
        <div className='areaNiñosImages'>
                {

                  data.map((x)=> {
                    return (
                      <div key={x.name} className="SectionTarjet" onClick={ handlerbtn }>
                          <div key={x.name} className="tarjet">
                              
                              <img src={x.background[0]} alt={x} ></img>
                           <div>{x.name}</div>
                          </div>
                          
                          <div className="info-desarollos" style={displayNone} >
                            <div>
                              {x.description}
                            </div>
                          </div>


                      </div>
                                           
                    )
                  })
                }
        </div>
    </div>
  )
}

export default AreasNiños