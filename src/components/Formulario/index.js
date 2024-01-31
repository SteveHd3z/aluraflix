import { useState } from "react";
import './Formulario.css';
import CampoForm from "./TextField";



const Formulario=()=>{


    const [titulo,setTitulo]=useState("")
    const [link,setLink]=useState("")
    const [imagen,setImagen]=useState("")
    const [categoria,setCategoría]=useState("")
    const [descripcion,setDescripcion]=useState("")
    const [codigo,setCodigo]=useState("")

    const [inputValue,setInputValue]=useState("")
    const [error, setError]=useState(false);

    const handleInputTitle = (e) => {        
        
        const value = e.target.value;
        console.log(value)    
        // Validación: Comprueba si el campo esta vacío

        value.trim()===0 && setError(true);
        setTitulo(value);
      };

    const tipoInputs=[
        {
            id:'title',
            label:'Titulo',
            value:titulo,
            onChange:handleInputTitle,
            error:error,
            errorText:'Debe ingresar un campo numerico',
            type:'text'  
        }
    ];

    

    //Manejar el envio de la informacion en SPA (Single Page Aplication)-No recargar pag

    const manejarEnvio=(e)=>{
        e.preventDefault();
        let datosEnvio={
            titulo,
            link,
            imagen,
            categoria,
            descripcion,
            codigo
        }  
        //registrarVideo(datosEnvio)     
    }

    /*const handleInputChange = (e) => {        
        
        const value = e.target.value;
        console.log(value)    
        // Validación: Comprueba si el valor es numérico
        setError(isNaN(value)); //Devuelve true si no es un numero   
        setInputValue(value);
      };*/

   

    return <section className="form">

        <form onSubmit={manejarEnvio}>
            <h2 className="tituloForm">Nuevo Video</h2>  
               
                 <CampoForm
                    id='number'
                    label='Ingrese un Número'
                    variant='standard'
                    value={inputValue}
                    onChange={handleInputTitle}
                    error={error}
                    errorText={'Debe ingresar un campo numerico'}
                    type='text'
                 /> 

        
        </form>
        
    </section>

}

export default Formulario
