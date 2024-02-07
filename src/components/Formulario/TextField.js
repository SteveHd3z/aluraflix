import { TextField } from "@mui/material";
import { backgroundBody, colorTextoInput } from "../Ui/Variables";

const CampoForm=(props)=>{

  const {id,label,variant,value,handleChange,handleBlur,error,errorText,type}=props;
  
  return <TextField  
              id={id}
              label={label}
              variant={variant}
              value={value}
              onChange={handleChange}
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
                      borderBottom: '4px solid #E53935 ',
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
            />

           
}

export default CampoForm;


