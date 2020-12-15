import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Banner } from "./components/Banner/Banner";
import {Body} from "./components/Body/Body";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import './App.css';
import GoodPage from "./components/pages/GoodPage/GoodPаge";
import Menu from "./components/pages/Menu/Menu";
function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Header/>
      <Banner/>
      <Switch>
        <Route path='/:name' exact render={()=><Body/>}/>
        <Route path='/menu/:name' exact render={()=><Menu/>}/>
        <Route path='/menu/:name/:good_name' exact render={()=><GoodPage/>}/>
        <Route path='/' exact render={()=><Body/>}/>
      </Switch>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
