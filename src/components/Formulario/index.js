import { useState, useCallback } from "react";
import './Formulario.css';
import CampoForm from "./TextField";

const Formulario = () => {

    const [titulo, setTitulo] = useState("");
    const [link, setLink] = useState("");
    const [imagen, setImagen] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [codigo, setCodigo] = useState("");

    const [submitted, setSubmitted] = useState(false);

    const [errors, setErrors] = useState({
        titulo: false,
        link: false,
        imagen: false,
        categoria: false,
        descripcion: false,
        codigo: false
    });

    const [touched, setTouched] = useState({
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
            value: titulo,
            setData: setTitulo,
            error: errors.titulo && touched.titulo,
            errorText: 'Ingrese el titulo',
            type: 'text'
        },
        {
            id: 'link',
            label: 'Link del Video',
            value: link,
            setData: setLink,
            error: errors.link && touched.link,
            errorText: 'Ingrese el link del video',
            type: 'text'
        },
        {
            id: 'imagen',
            label: 'Link imágen del video',
            value: imagen,
            setData: setImagen,
            error: errors.imagen && touched.imagen,
            errorText: 'Link es obligatorio',
            type: 'text'
        },
        {
            id: 'categoria',
            label: 'Escoja una categoría',
            value: categoria,
            setData: setCategoria,
            error: errors.categoria && touched.categoria,
            errorText: 'Categoría es obligatoria',
            type: 'select'
        },
        {
            id: 'descripcion',
            label: 'Descripción',
            value: descripcion,
            setData: setDescripcion,
            error: errors.descripcion && touched.descripcion,
            errorText: 'Ingrese la descripción',
            type: 'text-area'
        },
        {
            id: 'codigo',
            label: 'Código de seguridad',
            value: codigo,
            setData: setCodigo,
            error: errors.codigo && touched.codigo,
            errorText: 'Ingrese el código',
            type: 'text'
        }
    ];

    // Manejar el envio de la informacion en SPA (Single Page Aplication)-No recargar pagina
    const handleSubmit = (e) => {
        e.preventDefault();
        /*setSubmitted(true);  // Marca que se ha intentado enviar el formulario
        
        // Llama a las validaciones aquí
        tipoInputs.forEach(input => validarCampo(input.id, input.value));
      
        // Verifica que todos los campos sean válidos antes de enviar los datos
        if (Object.values(errors).every(error => !error)) {
          const datosEnvio = {
            titulo,
            link,
            imagen,
            categoria,
            descripcion,
            codigo,
          };
          // registrarVideo(datosEnvio);
        }*/
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
            </form>
        </section>
    );
}

export default Formulario;
