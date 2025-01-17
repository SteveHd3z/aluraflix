import React, {useState,useContext} from "react";
import { colorSecundario,colorbtnClean } from "./Ui/Variables";

export const dataContext=React.createContext();
export const useMyContext = () => useContext(dataContext);

//Ya que necesitamos contar con los videos y categorías en toda la aplicación usamos el hook dataContext

export const DataProvider=({children})=>{

  //datos necesarios para la ejecución del programa

  const [btns, setBtn]=useState([
      {
        tipo: 'btnNew',
        background: '#000000',
        fontColor: '#ffffff'
      },
      {
        tipo: 'btnSave',
        background: colorSecundario,
        fontColor: '#ffffff'
      },
      {
        tipo: 'btnClean',
        background: colorbtnClean,
        fontColor:  '#000000E5',
      },
      {
        tipo: 'btnNewCategory',
        background: colorSecundario,
        fontColor: '#ffffff'
      }
    ]);

  const [videos,setVideos]=useState([
        {
          titulo:"Que significa pensar como programador",
          link:"https://www.youtube.com/watch?v=ov7vA5HFe6w",
          imagen:"https://i.ytimg.com/vi/ov7vA5HFe6w/maxresdefault.jpg",
          categoria:"Front End",
          descripcion:"Principales características de un programador, habilidades y competencias",
          codigo:"2023f",
        },
        {
          titulo:"Cuando usar let,var y const",
          link:"https://www.youtube.com/watch?v=PztCEdIJITY&t=9s",
          imagen:"https://i.ytimg.com/vi/PztCEdIJITY/maxresdefault.jpg",
          categoria:"Back End",
          descripcion:"Aclarando dudas acerca de la declaracion de variables",
          codigo:"2023f"
        },
        {
          titulo:"Que es JavaScript",
          link:"https://www.youtube.com/watch?v=GJfOSoaXk4s&pp=ygUXYWx1cmEgcXVlIGVzIGphdmFTY3JpcHQ%3D",
          imagen:"https://i.ytimg.com/vi/GJfOSoaXk4s/maxresdefault.jpg",
          categoria:"Back End",
          descripcion:"Que es y como se hizo este lenguaje?",
          codigo:"2023f"
        },

        {
          titulo:"Spring Framework",
          link:"https://www.youtube.com/watch?v=t-iqt1b2qqk",
          imagen:"https://i.ytimg.com/vi/t-iqt1b2qqk/mqdefault.jpg",
          categoria:"Back End",
          descripcion:"Herramienta java para crear proyectos mas avanzados",
          codigo:"2023b"
        },
        {
          titulo:"Que son las Soft Skills",
          link:"https://www.youtube.com/watch?v=vhwspfvI52k",
          imagen:"https://i.ytimg.com/vi/vhwspfvI52k/maxresdefault.jpg",
          categoria:"Innovación y Gestión",
          descripcion:"Importancia de desarrollarlas para posicionarse en el mercado laboral",
          codigo:"2023i"
        },
        
        {
          titulo:"Git y GitHub para Principiantes",
          link:"https://youtu.be/-LmFK6skG7s",
          imagen:"https://i.ytimg.com/vi/-LmFK6skG7s/maxresdefault.jpg",
          categoria:"Git y GitHub",
          descripcion:"Importancia de aplicar nuevos conocimientos en control de versiones",
          codigo:"2023i"
        }
      ]);
  const [categorias,setCategorias]=useState([
        {
          nombre:"Front End",
          descripcion:"parte del desarrollo web que se dedica a la parte frontal de un sitio web",
          color:'#6BD1FF',
          codigo:"fe"
        },
        {
          nombre:"Back End",
          descripcion:"Frameworks mas utilizados de parte del servidor",
          color:'#00C86F',
          codigo:"be"
        },
        {
          nombre:"Innovación y Gestión",
          descripcion:"Metodologías necesarias para desarrollar nuestras soft skills",
          color:'#FE8C2A',
          codigo:"ig"
        },
        {
          nombre:"Git y GitHub",
          descripcion:"Controlador de versiones para cada uno de los proyectos",
          color:'#4C4444',
          codigo:"gyg"
        }
      ]);

  //Métodos para el manejo de la información por medio de CRUD
  //Crear
  const crearVideo=(nuevoVideo)=>{
    setVideos((prevVideos) => [...prevVideos, nuevoVideo]);
  }


      


    return (
        <dataContext.Provider            
          value={{videos,crearVideo,categorias,setCategorias,btns,setBtn}}
        >
          {children}
        </dataContext.Provider>

    );
};