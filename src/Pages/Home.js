import Banner from "../components/Banner";
import BannerMain from '../components/BannerMain/BannerMain'
import "./styles/Home.css";
import {useMyContext } from "../components/DataProvider";

const Home = () => {

  const dato=useMyContext();
  console.log('Videos: ',dato);

  return <div className="home">
            <Banner />
            <BannerMain/>
            

        </div>
};

export default Home;
