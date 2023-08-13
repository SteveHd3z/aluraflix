import GlobalStyle from './GlobalStyle'
import DefaultPage from './components/DefaultPage/index'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { DataProvider } from './components/DataProvider';


function App() {

  return (  
    <DataProvider>
        <GlobalStyle/>
        <DefaultPage/>    
    </DataProvider> 
  );
}

export default App;
