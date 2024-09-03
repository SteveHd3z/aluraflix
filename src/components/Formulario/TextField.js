import { TextField, Select, MenuItem, InputLabel,FormControl} from "@mui/material";
import { backgroundBody, colorTextoInput } from "../Ui/Variables";
import { useMyContext } from "../DataProvider";

const CampoForm = (props) => {

    const { id, label, variant, value, setValue, handleBlur, error, errorText, type } = props;
    const {categorias}=useMyContext()

    const commonStyles = {
      m: 1,
      width: '100%',
      background: '#53585D', 
      borderRadius: '8px',                  
      
      '& .MuiInputLabel-root': {
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: '300',
        lineHeight: '21.09px',
        letterSpacing: '1px',
        marginLeft: '10px', // Este es el margen que queremos sobrescribir en el select
        color: colorTextoInput,
      },
      '& .css-1eed5fa-MuiInputBase-root-MuiInput-root': {                            
        color: 'white',
        marginLeft: '10px'
      },
      '& .css-1eed5fa-MuiInputBase-root-MuiInput-root::after': {
        borderBottom: '4px solid #2A7AE4'                                          
      },
      '& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
        color: '#C2C2C2'                      
      },
      '& .css-1eed5fa-MuiInputBase-root-MuiInput-root.Mui-error::before, .css-1eed5fa-MuiInputBase-root-MuiInput-root.Mui-error::after': {
        borderBottom: '4px solid #E53935 '
      },
      '& .css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root.Mui-error': {
        color: '#C2C2C2'
      },
      '& .css-1d1r5q-MuiFormHelperText-root.Mui-error': {
        background: backgroundBody,
        color: '#E53935', 
        fontSize: '16px'
      },
      '& .MuiInputBase-inputMultiline': {   //Para el multiline 
        padding: '10px',
        color: 'white',
      },
    };

    // Estilos específicos para el label dentro de Select
    const labelStyles = {
      marginLeft: '0px !important', // Sobrescribe forzadamente el margin-left
      lineHeight: '41px', // Aplica por defecto
      color: '#C2C2C2', // Color por defecto
      '&.Mui-focused': {
        lineHeight: '41px', // Aplica lineHeight solo cuando el label está enfocado
      },
      '&.Mui-error': {
        color: '#C2C2C2', // Cambia el color en caso de error
        lineHeight: 'normal', // Cambia lineHeight a 'normal' en caso de error
      },
      '&.MuiInputLabel-shrink': {
        // Estilos cuando el label está en modo "shrink" (valor cargado o campo enfocado)
        lineHeight: '41px',
        color: '#C2C2C2',
      },
    }; 

    // Estilos específicos para Select
    const selectStyles = {
      color: 'white',
      marginLeft: '10px',
      '&::after': {
        borderBottom: '4px solid #2A7AE4',
      },
      '&.Mui-error::before, &.Mui-error::after': {
        borderBottom: '4px solid #E53935',
      },
    };

    const spanStyles={
      color: '#E53935', 
      fontSize: '16px', 
      background: backgroundBody,
      lineHeight: '28px'
    }
    const menuItemStyles={
      fontWeight:600,
    }

    const renderInputField = () => {
      switch (type) {
        case 'text':
          return (
            <TextField
              id={id}
              label={label}
              variant={variant}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={(e) =>handleBlur(id, e.target.value)}
              error={error}
              helperText={error && errorText}
              sx={commonStyles}
            />
          );
        case 'select':
          return (
            <FormControl sx={commonStyles} fullWidth error={error}>
              <InputLabel
                id={id}
                sx={labelStyles} // Aquí aplicamos los estilos específicos del label para el select
              >
                {label}
              </InputLabel>
              <Select
                id={id}
                label={label}
                variant={variant}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={(e) =>handleBlur(id, e.target.value)}
                error={error}
                helperText={error && errorText}
                sx={selectStyles}
              >
                {categorias.map((categoria) => (
                  <MenuItem sx={menuItemStyles} key={categoria.codigo} value={categoria.codigo}>
                    {categoria.nombre}
                  </MenuItem> ))}

              </Select>
              {error && (
                <span style={spanStyles}>
                  {errorText}
                </span> )}
            </FormControl>
            
          );
          case 'text-area':
            return (
              <TextField
                id={id}
                label={label}
                variant={variant}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={(e) =>handleBlur(id, e.target.value)}
                error={error}
                helperText={error && errorText}
                sx={commonStyles}
                multiline
                rows={4} // Puedes ajustar la cantidad de filas que desees para el textarea
              />
            );
        default:
          return null;
      }
    };

    return <>{renderInputField()}</>;
};

export default CampoForm;








/*import { TextField } from "@mui/material";
import { backgroundBody, colorTextoInput } from "../Ui/Variables";

const CampoForm=(props)=>{

  const {id,label,variant,value,setValue,handleBlur,error,errorText,type}=props;
  //Verificar que tipo de input es y retornar en base a este.
  console.log(type)
  return (
    <>
        {type === 'text' && <TextField  
              id={id}
              label={label}
              variant={variant}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={handleBlur}
              error={error }
              helperText={error && errorText}
              type={type} // Cambia el tipo a "text" para permitir entrada de texto y números
              
              //Aplicacion de estilos sebreescribiendo las clases por defecto de MUI
              sx={{ 
                  m: 1,
                  width: '100%',
                  background: '#53585D', 
                  borderRadius:'8px',                  
                  

                  '& .MuiInputLabel-root':{
                      fontFamily: 'Roboto',
                      fontSize: '18px',
                      fontWeight: '300',
                      lineHeight: '21.09px',
                      letterSpacing: '1px',
                      marginLeft: '10px',
                      color: colorTextoInput  //No necesita llaves para que lea el valor de la variable
                  },
                  //Estilos iniciales del input
                  '& .css-1eed5fa-MuiInputBase-root-MuiInput-root': {                            
                      color: 'white',
                      paddingLeft: '10px'
                  },
                  //Luego de selecionar el campo input:
                  '& .css-1eed5fa-MuiInputBase-root-MuiInput-root::after': {
                      borderBottom: '4px solid #2A7AE4'                                          
                  },
                  //Label al seleccionar el campo
                  '& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
                    color: '#C2C2C2'                      
                },
                  //Cambios en el input al presentarse el error:
                  '& .css-1eed5fa-MuiInputBase-root-MuiInput-root.Mui-error::before, .css-1eed5fa-MuiInputBase-root-MuiInput-root.Mui-error::after':{
                      borderBottom: '4px solid #E53935 '
                  },
                  //label al presentarse el error y quitar el foco:
                  '& .css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root.Mui-error': {
                    color: '#C2C2C2'
                  },
                  //Estilos para campo y leyenda del error:
                  '& .css-1d1r5q-MuiFormHelperText-root.Mui-error': {
                      background: backgroundBody,
                      color: '#E53935', 
                      fontSize: '16px'
                  }                      
              }}
            />}
    
    </>
    

        )
}

export default CampoForm;*/


