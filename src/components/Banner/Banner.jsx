import { Logo } from "./Logo/Logo"
import { Navigation } from "./Navigation/Navigation"
import b from './Banner.module.css';
import './../../App.css';
export const Banner = (props) =>{
    return <div id={b.banner}>
        <div className='content'>
        <Logo/>
        <Navigation {...props}/>
        </div>
    </div>
}