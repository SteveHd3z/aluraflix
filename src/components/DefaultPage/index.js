import Header from "../Header";
import Logo from "../logo";
import imgLogo from '../../assets/img/LogoMain.png'
import Button from "../Button";
import Banner from "../Banner";
import Footer from "../Footer";
import { useState } from "react";
import { colorSecundario,colorbtnClean } from "../Ui/Variables";
import Icono from "../Icono";
import {AiFillHome} from 'react-icons/ai';
import {Link} from 'react-router-dom';


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

    const [isHome,setHome]=useState(true);
    

    return <>
        <Header>
            <Logo 
            src={imgLogo}
            tipo='header'
            />  
            {isHome ?
            <Button
            as={Link}
            to='/newvideo'
            onClick={()=>setHome(false)}
            variant="btnHome"
            datos={btns}
            >
            Nuevo Video
            </Button> : 
              <Icono as={Link} to='/'>
                <AiFillHome  onClick={()=>setHome(true)}/>
              </Icono>}
        </Header>

        <body style={{minHeight:'700px'}}>
            {isHome && <Banner/>}
        </body>        

        <Footer>
          <Logo 
              src={imgLogo}
              tipo='footer'  
          />
        </Footer> 
    </>
};

export default DefaultPage;