import Header from "../Header";
import Logo from "../logo";
import imgLogo from '../../assets/img/LogoMain.png'
import Button from "../Button";
import Banner from "../Banner";
import Footer from "../Footer";
import { useState } from "react";
import { colorSecundario,colorbtnClean } from "../Ui/Variables";
import Icono from "../Icono";
import {AiFillHome} from 'react-icons/ai'


const DefaultPage=()=>{

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
          fontColor: '#000000'
        },
        {
          tipo: 'btnHome',
          background: '',
          fontColor: ''
        },
      ]);

      const [site,setSite]=useState('home');
    

    return <>
        <Header>
            <Logo 
            src={imgLogo}
            tipo='header'
            />  
            {site==='home'?<Button
            onClick={()=>console.log("New Video!")}
            variant="btnHome"
            datos={btns}
            >
            Nuevo Video
            </Button>: 
            <Icono><AiFillHome/></Icono>          
            }

        </Header>
        {site==='home'&&<Banner/>}
        <Footer>
        <Logo 
            src={imgLogo}
            tipo='footer'  
        />
        </Footer> 
    </>
};

export default DefaultPage;