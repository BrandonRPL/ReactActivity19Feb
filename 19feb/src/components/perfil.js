import React from "react";
import { iamge1 } from "../images/image1.png";
import  '../styles/style.css'



function Perfil(props) {

    return(
        
        <div  className='contenedor-perfil'> 
            
            <img className='imagen-perfil' 
                src={require(`../images/${props.imagen}.jpg` )}
                alt='foto de desarrollador'
            />
            <div className='contenedor-texto-perfil' >
                <p className='nombre-perfil'>
                    {props.nombre} vive en {props.pais}
                </p>
                <p className='cargo-perfil'>
                    {props.cargo} en la empresa {props.empresa} 
                </p>
                <p className='texto-perfil'>
                    "{props.perfil}"
                </p>
            
                <div className='contenedor-botones'>
                {
                    <button className='botonLinked' onClick={()=> window.open(props.linked,'_blank')}> seguir en linkendin 
                    </button>
                }
                {
                    <button className='botonYou' onClick={()=> window.open(props.youtube,'_blank')}> seguir en youtube 
                    </button>
                }
                {
                    <button className='botonWeb' onClick={()=> window.open(props.webSite,'_blank')}> sitio website 
                    </button>
                }
                </div>
            </div>
        </div>


        

        

    );
    
}

export default Perfil;