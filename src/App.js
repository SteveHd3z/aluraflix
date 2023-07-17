import GlobalStyle from './GlobalStyle'
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import NewVideo from './Pages/NewVideo';
import NewCategory from './Pages/NewCategory'
import Error404 from './Pages/Error404';
import DefaultPage from './components/DefaultPage'


function App() {

  return (    
    <BrowserRouter>
      <GlobalStyle/>
      <DefaultPage/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/newvideo' element={<NewVideo/>}/>
        <Route path='/category' element={<NewCategory/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
