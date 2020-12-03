import { Logo } from "./Logo/Logo"
import { Navigation } from "./Navigation/Navigation"
import b from './Banner.module.css';
import './../../App.css';
export const Banner = () =>{
    return <div id={b.banner}>
        <div className='content'>
        <Logo/>
        <Navigation/>
        </div>
    </div>
}