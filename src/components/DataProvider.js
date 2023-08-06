import React, {useState,useContext} from "react";
import { colorBtnFront,colorBtnBack,colorBtnGestion } from "./Ui/Variables";

export const dataContext=React.createContext();
export const useMyContext = () => useContext(dataContext);

export const DataProvider=({children})=>{

    const [videos,setVideos]=useState([
        {
          titulo:"Que significa pensar como programador",
          link:"https://www.youtube.com/watch?v=ov7vA5HFe6w",
          imagen:"https://i.ytimg.com/an_webp/ov7vA5HFe6w/mqdefault_6s.webp?du=3000&sqp=CMDEpKYG&rs=AOn4CLBcGJAOiZMojHEOMy1Xg4AJEKlSyQ",
          categoria:"Front End",
          descripcion:"Principales características de un programador, habilidades y competencias",
          codigo:"2023f"
        },
        {
          titulo:"Cuando usar let,var y const",
          link:"https://www.youtube.com/watch?v=PztCEdIJITY&t=9s",
          imagen:"https://i.ytimg.com/an_webp/PztCEdIJITY/mqdefault_6s.webp?du=3000&sqp=CLqlpKYG&rs=AOn4CLBaJByJQVKIrIXIx848RMibMDC9Fw",
          categoria:"Front End",
          descripcion:"Aclarando dudas acerca de la declaracion de variables",
          codigo:"2023f"
        },
        {
          titulo:"Spring Framework",
          link:"https://www.youtube.com/watch?v=t-iqt1b2qqk",
          imagen:"https://i.ytimg.com/an_webp/t-iqt1b2qqk/mqdefault_6s.webp?du=3000&sqp=CJ2HpKYG&rs=AOn4CLCF5bcYAMqgNWGTLEfn5bFJxmDDHQ",
          categoria:"Back End",
          descripcion:"Herramienta java para crear proyectos mas avanzados",
          codigo:"2023b"
        },
        {
          titulo:"Que son las Soft Skills",
          link:"https://www.youtube.com/watch?v=vhwspfvI52k",
          imagen:"https://i.ytimg.com/an_webp/vhwspfvI52k/mqdefault_6s.webp?du=3000&sqp=CLXFpKYG&rs=AOn4CLBl3LjldRg5dsMP_DKNH4ig8jHtKg",
          categoria:"Innovación y Gestion",
          descripcion:"Importancia de desarrollarlas para posicionarse en el mercado laboral",
          codigo:"2023i"
        }
      ]);
      const [categorias,setCategorias]=useState([
        {
          nombre:"Front End",
          descripcion:"parte del desarrollo web que se dedica a la parte frontal de un sitio web",
          color:{colorBtnFront},
          codigo:"fe"
        },
        {
          nombre:"Back End",
          descripcion:"Frameworks mas utilizados de parte del servidor",
          color:{colorBtnBack},
          codigo:"be"
        },
        {
          nombre:"Innovación y Gestión",
          descripcion:"Metodologías necesarias para desarrollar nuestras soft skills",
          color:{colorBtnGestion},
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