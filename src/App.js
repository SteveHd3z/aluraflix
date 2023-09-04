import GlobalStyle from './GlobalStyle'
import DefaultPage from './components/DefaultPage/index'
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
