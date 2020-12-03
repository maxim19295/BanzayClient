import logo from '../../../assets/logo.png';
import l from './Logo.module.css';
export const Logo = () =>{
    return <div id={l.logo}>
            <div><img src={logo} alt='logo'/>
            </div>
            <div>
                <div>
                    Доставка Суши в Харькове
                </div>
                <div>
                    Скидка 10% при самовывозе
                </div>
            </div>
    </div>
}