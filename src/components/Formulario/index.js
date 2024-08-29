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
  
  const validarCampo = useCallback(() => {      //Solo cambia cuando las dependencias cambian 
    setError(titulo.trim() === '');
  }, [titulo]);  
    

    // Manejadores de eventos onBlur, validamos el campo  cuando se pierde el foco en el elemento
    const handleBlur = () => {
        validarCampo();
    };   
      

    const tipoInputs=[
        {
            id:'title',
            label:'Titulo',
            value:titulo,
            setData:setTitulo,
            errorText:'Ingrese el titulo',
            type:'text'  
        },
        {
            id:'link',
            label:'Link del Video',
            value:link,
            setData:setLink,
            errorText:'Ingrese el link del video',
            type:'text'
        },
        {
            id:'image',
            label:'Link imágen del video',
            value:imagen,
            setData:setImagen,
            errorText: 'Link es obligatorio', 
            type:'text'
        },
        {
            id:'category',
            label:'Escoja una categoría',
            value:categoria,
            setData:setCategoría,
            errorText: 'Categoría es obligatoria', 
            type:'select'
        },
        {
            id:'description',
            label:'Descripción',
            value:descripcion,
            setData:setDescripcion,
            errorText: 'Ingrese la descripción', 
            type:'text-area'
        },
        {
            id:'code',
            label:'Código de seguridad',
            value:codigo,
            setData:setCodigo,
            errorText: 'Ingrese el código', 
            type:'text'
        }
    ];

    

    //Manejar el envio de la informacion en SPA (Single Page Aplication)-No recargar pag

    const handleSubmit=(e)=>{
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

        <form onSubmit={handleSubmit}>
            <h2 className="tituloForm">Nuevo Video</h2>  
               
                 
                 {tipoInputs.map((input)=>{
                    return <div className="campo">
                        <CampoForm
                            id={input.id}
                            label={input.label}
                            variant='standard'
                            value={input.value}
                            setValue={input.setData}
                            handleBlur={handleBlur}               
                            error={error}
                            errorText={input.errorText}
                            type={input.type}
                        />
                    </div>
                        
                 })}
                  

        
        </form>
        
    </section>

}

export default Formulario
