import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Banner } from "./components/Banner/Banner";
import {Body} from "./components/Body/Body";
import b from './components/Body/Body.module.css';
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import './App.css';
import GoodPage from "./components/pages/GoodPage/GoodPаge";
import Menu from "./components/pages/Menu/Menu";
import { useEffect } from "react";
import { getAuth } from "./redux/authReducer";
import { connect } from "react-redux";
import { AccountPage } from "./components/pages/AccountPage/AccountPage";
import * as axios from 'axios';
const App = (props) =>{
  useEffect(()=>{
    props.getAuth();
  },[])
  return (<BrowserRouter>
    <div className="app">
      <Header/>
      <Banner isAuth={props.isAuth} credentials={props.credentials}/>
      <Switch>
        <Route path='/account' exact render={()=>{
          if(props.isAuth===true){return <>
            <div id={b.bodyHeader}><div className='content'>мой аккаунт</div></div>
            <AccountPage auth={{...props}}/></>}
            else{
              return <Redirect to='/sign' />
            }
        }}/>
        <Route path='/account/:name' exact render={()=>{
        if(props.isAuth===true){return <>
        <div id={b.bodyHeader}><div className='content'>мой аккаунт</div></div>
        <AccountPage auth={{...props}}/></>}
        else{
          return <Redirect to='/sign' />
        }
      }}/>
        <Route path='/:name' exact render={()=><Body auth={{...props}}/>}/>
        <Route path='/menu/:name' exact render={()=><Menu/>}/>
        <Route path='/menu/:name/:good_name' exact render={()=><GoodPage/>}/>
        <Route path='/' exact render={()=><Body/>}/>
      </Switch>
        <Footer/>
    </div>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) =>({
  ...state.auth
});
const mapDispatchToProps = (dispatch) =>({
  getAuth: ()=>dispatch(getAuth())
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
