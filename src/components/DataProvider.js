import React, {useState,useContext} from "react";
import { colorBtnFront,colorBtnBack,colorBtnGestion } from "./Ui/Variables";

export const dataContext=React.createContext();
export const useMyContext = () => useContext(dataContext);

export const DataProvider=({children})=>{

    const [videos,setVideos]=useState([
        {
          titulo:"Que significa pensar como programador",
          link:"https://www.youtube.com/watch?v=ov7vA5HFe6w",
          imagen:"https://i.ytimg.com/vi/ov7vA5HFe6w/maxresdefault.jpg",
          categoria:"Front End",
          descripcion:"Principales características de un programador, habilidades y competencias",
          codigo:"2023f"
        },
        {
          titulo:"Cuando usar let,var y const",
          link:"https://www.youtube.com/watch?v=PztCEdIJITY&t=9s",
          imagen:"https://i.ytimg.com/vi/PztCEdIJITY/maxresdefault.jpg",
          categoria:"Front End",
          descripcion:"Aclarando dudas acerca de la declaracion de variables",
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
        }
      ]);
      const dato='Hola soy un dato';


    return (
        <dataContext.Provider            
            value={{videos,setVideos,categorias,setCategorias}}
            >
                {children}
        </dataContext.Provider>

    );
};