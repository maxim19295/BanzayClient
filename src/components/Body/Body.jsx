import { Route, Switch, useParams } from "react-router-dom"
import { About } from "../pages/About/About";
import { Main } from "../pages/Main/Main";
import {DeliveryInfo} from '../pages/DeliveryInfo/DeliveryInfo';
import {Requests} from '../pages/Requests/Requests';
import { Basket } from '../pages/Basket/Basket';
import Menu from '../pages/Menu/Menu';
import b from './Body.module.css';
import '../../App.css'
import { Sign } from "../pages/Sign/Sign";
import {connect} from 'react-redux';
import { getMenuAC } from "../../redux/menuReducer";
import { GoodPage } from "../pages/GoodPage/GoodPаge";
export const Body = () =>{
    const {name} = useParams();
    if(name){
        return <div>
        <Switch>
            <Route path='/glavnaya' 
            render={()=><>
            <Main/>
            </>}/>
            <Route path='/onas' 
            render={()=><>
            <div id={b.bodyHeader}><div className='content'>о нас</div></div>
            <About/>
            </>}/>
            <Route path='/dostavka' 
            render={()=><>
            <div id={b.bodyHeader}><div className='content'>доставка и оплата</div></div>
            <DeliveryInfo/>
            </>}/>
            <Route path='/otzyvy' 
            render={()=><>
            <div id={b.bodyHeader}><div className='content'>отзывы</div></div>
            <Requests/>
            </>}/>
            <Route path='/korzina' 
            render={()=><>
            <div id={b.bodyHeader}><div className='content'>корзина</div></div>
            <Basket/>
            </>}/>
            <Route path='/sign' render={()=><>
            <div id={b.bodyHeader}><div className='content'>войти/зарегистрироваться</div></div>
            <Sign/>
            </>}/>
        </Switch>
    </div>}
    else {
        return <div>
            <Main/>
        </div>
    }
}