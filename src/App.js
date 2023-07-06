import logo from './logo.svg';
import GlobalStyle from './GlobalStyle'
import Header from './components/Header';
import Logo from './components/logo';
import imgLogo from "../src/assets/img/LogoMain.png";
import Button from './components/Button';
import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import {colorSecundario,colorbtnClean } from './components/Ui/Variables';
import Icono from './components/Icono';
import {AiFillHome} from 'react-icons/ai'





function App() {

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




  return (    
    <div className="App">
      <GlobalStyle/>
      <Header>
        <Logo 
          src={imgLogo}
          tipo='header'
        />  
        <Button
          onClick={()=>console.log("New Video!")}
          variant="btnHome"
          datos={btns}
        >
          Nuevo Video
        </Button>

      </Header>
      <Banner/>
      <Footer>
      <Logo 
        src={imgLogo}
        tipo='footer'  
      />
      </Footer>
    </div>
  );
}

export default App;
