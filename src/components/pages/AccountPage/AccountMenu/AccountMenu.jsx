import { NavLink } from "react-router-dom"
import a from './AccountMenu.module.css';
export const AccountMenu = () =>{
    return <div id={a.accountMenuList}>
        <div><NavLink to='/account'>Консоль</NavLink></div>
        <div><NavLink to='/account/orders'>Заказы</NavLink></div>
        <div><NavLink to='/account/address'>Адреса</NavLink></div>
        <div><NavLink to='/account/details'>Детали учетной записи</NavLink></div>
        <div><NavLink to='/account/users'>Пользователи</NavLink></div>
        <div><NavLink to='/account/edit_goods'>Редактирование товаров</NavLink></div>
        <div><NavLink to='/account/visit_journal'>Журнал посещений</NavLink></div>
        <div><div>Удалить аккаунт</div></div>
        <div><div>Выйти</div></div>

    </div>
}