import Header from "../src/Header/Header.jsx";
import Hero from "../src/Hero/Hero.jsx";
import {DownPortion, PrivacySection, Footer, BottomCard} from "./Footer/Footer.jsx";
import {Lower, Support} from "./Lower/Lower.jsx";
import Main from "./Main/Main.jsx";

const App = () => {
  return(
    <div className="Container">
       <Header/>
       <Hero/>
       <Main/>
      <Lower/>
       <Support/>
       <Footer/>
       <BottomCard/>
       <DownPortion/>
       <PrivacySection/>
    </div>
  );
}

export default App;