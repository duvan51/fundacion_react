import React, { useState } from 'react'





const Header = () => {

    

    const [menuOpen, setMenuOpen] = useState(0);


    
    const ClickHandler= () => {
        setMenuOpen(!menuOpen);
    }



    var colorwhite = {
        color: 'white',
        transform: 'rotate(-25deg)'
    }
    var backNone = {
        background: "none",
        
    }
    var character = {
        display: "flex",
        left:"0"
    }
    var btnstyle = {
        background:"rgb(255, 109, 114)",
        color:"white",
        bordercolor:"white",
        transform: 'rotate(50deg)'

    }

    if(menuOpen == 0){
        character ={
            left:"-2000px",
        }
        backNone = {
            background:""
        }

         btnstyle = {
        background:""
         }
        colorwhite = {
        color:""
        }
        
    }



  return (
    <div className="header" style={backNone}>
        <div className='headerContainer'>
            <div className='headerContainerlogo-btnMenu'>
                <div>@logo</div>
                Fundacion
            </div>
            <div className='headerContainerBtn menuOpenn' style={btnstyle}  href="#menu" onClick={ClickHandler}>
                <i className="fi fi-br-apps" style={colorwhite}></i>
            </div>
            <div className='headerContainerMenu' style={character} id="menu" >
                <div className='ul'>
                    <div className='logoNameUl'>
                        <div className='logoNameUlImg'>
                            ACUERDATE
                        </div>
                    </div>
                    <li> <a href='/'>HOME</a></li>
                    <li> <a href='/donacion'>DONACION</a></li>
                    <li> <a href='/ecommerce'>ECOMMERCE</a></li>
                    <li> <a href='/quienesSomos'>QUIENES SOMOS</a></li>
                    <li>ABOUT ME</li>
                    <li>LOCATE</li>
                    <li>DONATE</li>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header