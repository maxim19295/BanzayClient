import { Contacts } from "./Contacts/Contacts"
import { FooterPic } from "./FooterPic/FooterPic"
import { GetOrder } from "./GetOrder/GetOrder"
import f from './Footer.module.css';
import './../../App.css';
export const Footer = () =>{
    return <div id={f.footer}>
        <div className='content'>
        <Contacts/>
        <GetOrder/>
        <FooterPic/>
        </div>
    </div>
}