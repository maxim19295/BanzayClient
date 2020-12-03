import { NavLink } from "react-router-dom"
import h from './Header.module.css';
import './../../App.css';
export const Header = () =>{
    return <div id={h.header}>
        <div className='content'>
        <div><NavLink to='/'>Заказы принимаем с 11:00 до 22:00!</NavLink></div>
        <div className={h.phones}>
            <div>
                <a href='tel:+380937257955'>(093) 725-79-55</a>
            </div>
            <div>
                <a href='tel:+380684257655'>(068) 425-76-55</a>
            </div>
            <div>
                <a href='tel:+380662358855'>(066) 235-88-55</a>
            </div>
        </div>
        </div>
    </div>
}