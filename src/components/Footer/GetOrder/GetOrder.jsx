import instagram from '../../../assets/instagram.png';
import f from './../Footer.module.css';
export const GetOrder = () =>{
    return <div className={f.list}>
        <p>Оформить заказ</p>
        <div>(066) 235-88-55</div>
        <div>(068) 425-76-55</div>
        <div>(093) 725-79-55</div>
        <div><img src={instagram} alt='inst'/>Мы в Instagram</div>
    </div>
}