import { RequireSign } from "../RequireSign/RequireSign";
import { WarningField } from "../WarningField/WarningField";
import s from '../Sign.module.css';
export const SignIn = () =>{
    return <div>
    <h2>Авторизация</h2>
    <div className={s.signForm}>
    <div><WarningField type='error' message='error'/></div>
    <div><label>Имя пользователя или e-mail <RequireSign/></label></div>
    <div><input type='text' name='login' value={11} onChange={()=>{}}/></div>
    <div><label>Пароль <RequireSign/></label></div>
    <div><input type='password' name='password' value={11} onChange={()=>{}}/></div>
    <div><button disabled={false} className='buttonForm' onClick={()=>{
    }}>АВТОРИЗАЦИЯ</button><input type='checkbox' name='remember' checked={true} onChange={()=>{}}/>
    <label>Запомнить меня</label></div>
    </div>
    </div>
}