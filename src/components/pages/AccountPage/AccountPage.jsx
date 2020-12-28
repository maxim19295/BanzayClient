import { Redirect, useParams } from "react-router-dom"
import { AccountBlock } from "./AccountBlock/AccountBlock";
import { AccountMenu } from "./AccountMenu/AccountMenu";
import ap from './AccountPage.module.css';
export const AccountPage = (props) =>{
    const {name} = useParams();
    if(props.auth.isAuth){
    if(props.auth.isAuth!=='no_checked'){return <div><div className='content'><div className={ap.accountPage}>
        <AccountMenu/>
        <AccountBlock name={name}/>
    </div></div></div>}
    else{
        return null;
    }
    }
    else{
        return <Redirect to='/'/>
    }
}