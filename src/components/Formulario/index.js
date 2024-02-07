import { useState,useEffect,useCallback } from "react";
import './Formulario.css';
import CampoForm from "./TextField";



const Formulario=()=>{


    const [titulo,setTitulo]=useState("")
    const [link,setLink]=useState("")
    const [imagen,setImagen]=useState("")
    const [categoria,setCategoría]=useState("")
    const [descripcion,setDescripcion]=useState("")
    const [codigo,setCodigo]=useState("")
    const [error, setError]=useState(false);

  // Validación de campos 
  
  const validarCampo = useCallback(() => {
    setError(titulo.trim() === '');
  }, [titulo]);  
    

    // Manejadores de eventos onBlur
    const handleBlur = () => {
        console.log("Se perdio el foco, valor en blur: ");
        validarCampo();
    };


    const handleInputTitle = (e) => { 
        console.log('Ingreso al handle Change') 
        const value = e.target.value;
        setTitulo(value);
        validarCampo();        
      };

    

      

    const tipoInputs=[
        {
            id:'title',
            label:'Titulo',
            value:titulo,
            handleChange:handleInputTitle,
            errorText:'Ingrese el Titulo',
            type:'text'  
        }
    ];

    

    //Manejar el envio de la informacion en SPA (Single Page Aplication)-No recargar pag

    const handleData=(e)=>{
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
    
   

    return <section className="form">

        <form onSubmit={handleData}>
            <h2 className="tituloForm">Nuevo Video</h2>  
               
                 
                 {tipoInputs.map((input)=>{
                    return <CampoForm
                        id={input.id}
                        label={input.label}
                        variant='standard'
                        value={input.value}
                        handleChange={input.handleChange}
                        handleBlur={handleBlur}               
                        error={error}
                        errorText={input.errorText}
                        type={input.type}
                    />
                 })}
                  

        
        </form>
        
    </section>

}

export default Formulario
