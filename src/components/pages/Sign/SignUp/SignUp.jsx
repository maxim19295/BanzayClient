import { RequireSign } from "../RequireSign/RequireSign";
import { WarningField } from "../WarningField/WarningField";
import s from '../Sign.module.css';
import {Field, Form, Formik } from "formik";
import { checkMatch, signUp } from "../../../../redux/authReducer";
import { connect } from "react-redux";
import { useState } from "react/cjs/react.development";
const validateUsername = (value) =>{
    if(!value){
        return 'Обязательное поле!'
    }
    if(value.length<6){
        return 'Минимум 6 символов'
    }
    return null
}
const validateEmail = (value) =>{
    if (!value) {
      return 'Обязательное поле';
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Некорректно введен email';
    }
    return null;
  }
const validatePassword = (value)=>{
    if(!value){
        return 'Обязательное поле';
    }
    if(value.length<8){
        return 'Минимум 8 символов'
    }
    return null;
}
const SignUp = ({checkMatch,isMatchLogin,isMatchEmail,signUp}) =>{
    const [passwordsAreEquals,setEqualsOfPasswords] = useState(false);
    const checkEqualsOfPasswords = (password, repeatPassword) =>{

    }
    const checkMatchLoginHandler = (value) =>{
        checkMatch('login',value);
    }
    const checkMatchEmailHandler = (value) =>{
        checkMatch('email',value);
    }
    return <div>
    <h2>Регистрация</h2>
    <Formik
    initialValues = {{username: null, email: null, password: null, repeatPassword: null}}
    onSubmit = {(values)=>signUp(values)}
    >
    {({values,errors,touched})=><Form>
    <div className={s.signForm}>
    <div><WarningField/></div>
    <div><label>Имя пользователя <RequireSign/></label></div>
    <div><Field type='text' name='username'/></div>
    {errors.username && touched.username && <div><WarningField type='error' message={`${errors.username}`}/></div>}
    <div><div id='checkLogin' onClick={()=>checkMatchLoginHandler(values.username)}>Проверить имя пользователя</div></div>
    {isMatchLogin==='no_checked' ? null : isMatchLogin ? <WarningField type='error' message='Такое имя пользователя уже существует'/> : <WarningField type='success' message='Имя пользователя свободно'/>}
    <div><label>E-mail <RequireSign/></label></div>
    <div><Field type='email' name='email'/></div>
    {errors.email && touched.email && <div><WarningField type='error' message={`${errors.email}`}/></div>}
    <div><div onClick={()=>checkMatchEmailHandler(values.email)}>Проверить e-mail</div></div>
    {isMatchEmail==='no_checked' ? null : isMatchEmail ? <WarningField type='error' message='Такой электронный адрес уже зарегистрирован'/> : <WarningField type='success' message='Электронный адрес свободен'/>}
    <div><label>Пароль <RequireSign/></label></div>
    {errors.password && touched.password && <div><WarningField type='error' message={`${errors.password}`}/></div>}
    <div><Field style={{borderColor: (!values.password && !values.repeatPassword) ? 'gray' : (values.password === values.repeatPassword) ? 'lightgreen' : 'red'}} type='password' name='password' validate={validatePassword}/></div>
    <div><label>Повторите пароль <RequireSign/></label></div>
    <div><Field style={{borderColor: (!values.password && !values.repeatPassword) ? 'gray' : (values.password === values.repeatPassword) ? 'lightgreen' : 'red'}} type='password' name='repeatPassword' validate={validatePassword}/></div>
    <div><button className='buttonForm' type="submit">РЕГИСТРАЦИЯ</button></div>
    </div>
    </Form>}
    </Formik>
</div>
}
const mapStateToProps = (state) =>({
    ...state.auth
});
const mapDispatchToProps = (dispatch) =>({
    checkMatch: (field, value)=>dispatch(checkMatch(field, value)),
    signUp: (object)=>dispatch(signUp(object))
});
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);