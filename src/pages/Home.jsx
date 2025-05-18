import Mobilebar from "../components/Mobilebar";
import ImageCarousel from "../components/ImageCarousel";
import News from "../components/News";
import Price from "../components/Price";
import Feature from "../components/Feature";
import Tradeview from "../components/Tradeview";




const Home=()=> {
  return (
    <>
      <ImageCarousel />
      <News />
      <Price />
      <Feature />
      <Tradeview />
      
    </>
  );
}

export default Home;