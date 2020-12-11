import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Banner } from "./components/Banner/Banner";
import Body from "./components/Body/Body";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import './App.css';
function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Header/>
      <Banner/>
      <Switch>
        <Route path='/:name' children={<Body/>}/>
        <Route path='/' children={<Body/>}/>
      </Switch>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
