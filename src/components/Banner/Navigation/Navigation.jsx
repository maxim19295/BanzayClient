import { NavLink } from "react-router-dom";
import n from './Navigation.module.css';
export const Navigation = () =>{
    const authLink = {
        title: 'Войти',
        to: '/sign'
    }
    const menu = [
        {
            title: 'Главная',
            to: '/glavnaya'
        },
        {
            title: 'Меню',
            to: {
                to: '/menu',
                submenu: [
                {
                    title: 'Суши',
                    to: '/sushi'
                },
                {
                    title: 'Маки',
                    to: '/maki'
                },
                {
                    title: 'Роллы',
                    to: '/rolly'
                },
                {
                    title: 'Сеты',
                    to: '/sety'
                },
                {
                    title: 'Салаты',
                    to: '/salaty'
                },
                {
                    title: 'Напитки',
                    to: '/napitki'
                }

        ]}
        },
        {
            title: 'О нас',
            to: '/onas'
        },
        {
            title: 'Доставка и оплата',
            to: '/dostavka'
        },
        {
            title: 'Отзывы',
            to: '/otzyvy'
        },
        {
            title: 'Корзина',
            to: '/korzina'
        },
        authLink

    ];
    return <div id={n.navigation}>
        {menu.map((el,index)=>{
            const to = typeof el.to === 'string' ? el.to : '#';
        const submenu = typeof el.to !== 'string' ? <div key={index} id={n.submenu}>{
            el.to.submenu.map((subel,index)=>{
                return <div key={index}><NavLink to={`${el.to.to}${subel.to}`}>{subel.title}</NavLink></div>
                })
            }</div> : null;
            return <div key={index}><NavLink to={to}>{el.title}</NavLink>
            {
               submenu
            }</div>
        })}
    </div>
}