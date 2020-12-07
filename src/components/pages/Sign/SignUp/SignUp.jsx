import { RequireSign } from "../RequireSign/RequireSign";
import { WarningField } from "../WarningField/WarningField";
import s from '../Sign.module.css';
export const SignUp = () =>{
    return <div>
    <h2>Регистрация</h2>
    <div className={s.signForm}>
    <div><WarningField/></div>
    <div><label>Имя пользователя <RequireSign/></label></div>
    <div><input type='text' name='username' onChange={()=>{}} value={'user'}/></div>
    <div><WarningField/></div>
    <div><button id='checkLogin' disabled={true} onClick = {()=>{}}>Проверить имя пользователя</button></div>
    <div><label>E-mail <RequireSign/></label></div>
    <div><input type='email' name='email' onChange={()=>{}} value={'email'}/></div>
    <div><WarningField/></div>
    <div><button disabled={true} onClick={()=>{}}>Проверить e-mail</button></div>
    <div><label>Пароль <RequireSign/></label></div>
    <div><input style={{borderColor: 'red'}} type='password' name='password' onChange={()=>{}} value={''}/></div>
    <div><label>Повторите пароль <RequireSign/></label></div>
    <div><input style={{borderColor: 'red'}} type='password' name='repeatPassword' onChange={()=>{}} value={''}/></div>
    <div><button disabled={false} className='buttonForm' onClick={()=>{}}>РЕГИСТРАЦИЯ</button></div>
    </div>
</div>
}