import Header from "../Header";
import Logo from "../logo";
import imgLogo from '../../assets/img/LogoMain.png'
import Button from "../Button";
import Footer from "../Footer";
import { useState } from "react";
import { colorSecundario,colorbtnClean,colorBtnFront,colorBtnBack,colorBtnGestion } from "../Ui/Variables";
import Icono from "../Icono";
import {AiFillHome} from 'react-icons/ai';
import { BrowserRouter,Route,Routes,Navigate,Link} from 'react-router-dom';
import Home from "../../Pages/Home";
import NewVideo from "../../Pages/NewVideo";
import NewCategory from '../../Pages/NewCategory';
import Error404 from '../../Pages/Error404';


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
    

    return <BrowserRouter>  

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
      
        <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/newvideo' element={<NewVideo/>}/>
             <Route path='/category' element={<NewCategory/>}/>
             <Route path='*' element={<Error404/>}/>
        </Routes>

        <Footer>
          <Logo src={imgLogo}/>
        </Footer> 
    </BrowserRouter>
};

export default DefaultPage;