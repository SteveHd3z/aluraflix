import { useState, useCallback } from "react";
import './Formulario.css';
import CampoForm from "./TextField";
import Button from "../Button";
import { useMyContext } from "../DataProvider";
import { Link } from "react-router-dom";

const Formulario = () => {

    const {btns,setVideos}=useMyContext()

    const [formData, setFormData] = useState({
        titulo: "",
        link: "",
        imagen: "",
        categoria: "",
        descripcion: "",
        codigo: "",
    });
    
    const limpiarCampos = () => {
        setFormData({
            titulo: "",
            link: "",
            imagen: "",
            categoria: "",
            descripcion: "",
            codigo: ""
        });
    };
    

    const [errors, setErrors] = useState({
        titulo: false,
        link: false,
        imagen: false,
        categoria: false,
        descripcion: false,
        codigo: false
    });
    const [touched, setTouched] = useState({        //para manejo de envío y validación
        titulo: false,
        link: false,
        imagen: false,
        categoria: false,
        descripcion: false,
        codigo: false
    });    

    // Validación de campos
    const validarCampo = useCallback((id, valor) => {
        setErrors((prevErrors) => ({
            ...prevErrors,                  //Spread Operator
            [id]: valor.trim() === ''
        }));
    }, []);
    
    const handleBlur = (id, valor) => {
        setTouched((prevTouched) => ({
            ...prevTouched,
            [id]: true
        }));
        validarCampo(id, valor);
    };   

    const tipoInputs = [
        {
            id: 'titulo',
            label: 'Titulo',
            value: formData.titulo,
            setData: setFormData,
            error: errors.titulo && touched.titulo, //Validación: Si tiene errores y ha sido tocado o perdido el foco
            errorText: 'Ingrese el titulo',
            type: 'text'
        },
        {
            id: 'link',
            label: 'Link del Video',
            value: formData.link,
            setData: setFormData,
            error: errors.link && touched.link,
            errorText: 'Ingrese el link del video',
            type: 'text'
        },
        {
            id: 'imagen',
            label: 'Link imágen del video',
            value: formData.imagen,
            setData: setFormData,
            error: errors.imagen && touched.imagen,
            errorText: 'Link es obligatorio',
            type: 'text'
        },
        {
            id: 'categoria',
            label: 'Escoja una categoría',
            value: formData.categoria,
            setData: setFormData,
            error: errors.categoria && touched.categoria,
            errorText: 'Categoría es obligatoria',
            type: 'select'
        },
        {
            id: 'descripcion',
            label: 'Descripción',
            value: formData.descripcion,
            setData: setFormData,
            error: errors.descripcion && touched.descripcion,
            errorText: 'Ingrese la descripción',
            type: 'text-area'
        },
        {
            id: 'codigo',
            label: 'Código de seguridad',
            value: formData.codigo,
            setData: setFormData,
            error: errors.codigo && touched.codigo,
            errorText: 'Ingrese el código',
            type: 'text'
        }
    ];    

    // Manejar el envio de la informacion en SPA (Single Page Aplication)-No recargar pagina
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const datosEnvio = { ...formData };

    
        // Verificar si todos los campos están sin errores y han sido tocados
        if (Object.values(errors).every(error => !error) && 
            Object.values(touched).every(touch => touch)) {
            
            console.log('Se enviaron los datos: ', datosEnvio);
            setVideos((prevVideos) => [...prevVideos, datosEnvio]);
            alert('Los Datos se Enviaron Correctamente!')
            limpiarCampos()
            
        } else {        
            // Si algún campo no ha sido tocado, marcarlo como tocado
            const newTouched = { ...touched };
            for (let key in datosEnvio) {
                newTouched[key] = true; // Marcar cada campo como tocado
                validarCampo(key, datosEnvio[key]); // Validar cada campo
            }
            setTouched(newTouched); // Actualizar el estado de touched
        }
    };
      
    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
                <h2 className="tituloForm">Nuevo Video</h2>
                {tipoInputs.map((input) => (
                    <div className="campo" key={input.id}>
                        <CampoForm
                            id={input.id}
                            label={input.label}
                            variant='standard'
                            value={input.value}
                            setValue={input.setData}
                            handleBlur={handleBlur}               
                            error={input.error}
                            errorText={input.errorText}
                            type={input.type}
                        />
                    </div>
                ))}

        <section className="buttonSection">

            <div className="btnsForm">
                <Button
                    onClick={handleSubmit}
                    variant="btnSave"
                    datos={btns}
                    >
                    Guardar
                </Button>
                <Button
                    onClick={limpiarCampos}
                    variant="btnClean"
                    datos={btns}
                    type="button"  // Para evitar que se envíe la informacion 
                    >
                    Limpiar
                </Button>
            </div>
            
            <Button
                as={Link}
                to='/category' 
                variant="btnNewCategory"
                datos={btns}
                type="button" 
                >
                Nueva Categoría
            </Button>


        </section>

            


            </form>
        </section>
    );
}

export default Formulario;
