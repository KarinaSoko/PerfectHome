
import './App.css';
import { Header } from "./components/Header/Header.jsx";
import { LogoAndWorld } from './components/LogoAndWorld/LogoAndWorld.jsx';
import { ListingProperty } from './components/ListingProperty/ListingProperty.jsx';
import { Lux } from './components/Lux/Lux.jsx';
import { MakingLive } from './components/MakingLive/MakingLive.jsx';
import { Castomer } from './components/Castomer/Castomer.jsx';
import { Footer } from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="PageHeader">

      <Header />
      <LogoAndWorld />
      <ListingProperty />
      <Lux/>
      <MakingLive/>
      <Castomer/>
      <Footer/>

    </div>
  );
}

export default App;
