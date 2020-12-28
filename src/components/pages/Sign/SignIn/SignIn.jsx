import { RequireSign } from "../RequireSign/RequireSign";
import { WarningField } from "../WarningField/WarningField";
import s from '../Sign.module.css';
import {Field, Form, Formik } from "formik";
import { checkMatch, signIn } from "../../../../redux/authReducer";
import { connect } from "react-redux";

const validateUsername = (value) =>{
    if(!value){
        return 'Обязательное поле!'
    }
    if(value.length<6){
        return 'Минимум 6 символов'
    }
    return null
}
const validatePassword = (value) =>{
    if(!value){
        return 'Обязательное поле!'
    }
    if(value<6){
        return 'Минимум 6 символов'
    }
    return null
}
const SignIn = ({signIn}) =>{
    return <div>
    <h2>Авторизация</h2>
    <Formik initialValues={{loginOrEmail: '',password:'',remember: false}}
    onSubmit = {
        (values)=>signIn(values)
    }
    >
        {({errors, touched})=>(<Form>
    <div className={s.signForm}>
    {errors.loginOrEmail && touched.loginOrEmail && <div><WarningField type='error' message={`${errors.loginOrEmail}`}/></div>}
    <div><label>Имя пользователя или e-mail <RequireSign/></label></div>
    <div><Field type='text' name='loginOrEmail' validate={validateUsername}/></div>
    <div><label>Пароль <RequireSign/></label></div>
    {errors.password && touched.password && <div><WarningField type='error' message={`${errors.password}`}/></div>}
    <div><Field type='password' name='password' validate={validatePassword}/></div>
    <div><button type='submit' className='buttonForm'>АВТОРИЗАЦИЯ</button>
    <Field type='checkbox' name='remember'/>
    <label>Запомнить меня</label></div>
    </div>
    </Form>)}
    </Formik>
    </div>
}
const mapStateToProps = (state) =>({
    ...state.auth
});
const mapDispatchToProps = (dispatch) =>({
    signIn: (credentials)=>dispatch(signIn(credentials)),
    checkMatch: (field, value)=>dispatch(checkMatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);