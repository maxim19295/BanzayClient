import * as axios from 'axios';
const GET_AUTH_SUCCESS = 'GET_AUTH_SUCCESS';
const GET_AUTH_FAIL = 'GET_AUTH_FAIL';
const SIGN_UP = 'SIGN_UP';
const SIGN_IN = 'SIGN_IN';
const CHECK_MATCH_LOGIN = 'CHECK_MATCH_LOGIN';
const CHECK_MATCH_EMAIL = 'CHECK_MATCH_EMAIL';
export const authReducer = (state={isAuth: 'no_checked', isMatchLogin: 'no_checked', isMatchEmail: 'no_checked', credentials: {login: null, email: null, password: null}}, action)=>{
    switch(action.type){
        case GET_AUTH_SUCCESS: return {...state, isAuth: true, credentials: {...action.credentials}};
        case GET_AUTH_FAIL: return {...state, isAuth: false}
        case SIGN_UP: return state;
        case SIGN_IN: return {...state, isAuth: true, credentials: action.credentials};
        case CHECK_MATCH_LOGIN: return {...state, isMatchLogin: action.isMatch}
        case CHECK_MATCH_EMAIL: return {...state, isMatchEmail: action.isMatch}
        default: return state;
    }
}
const signInAC = (credentials) =>({type: SIGN_IN, credentials});
const checkMatchLoginAC = (isMatch) =>({type: CHECK_MATCH_LOGIN, isMatch})
const checkMatchEmailAC = (isMatch) =>({type: CHECK_MATCH_EMAIL, isMatch})
const getAuthSuccess = (credentials) =>({type: GET_AUTH_SUCCESS, credentials})
const getAuthFail = () => ({type: GET_AUTH_FAIL});
export const signIn = ({loginOrEmail, password}) =>(dispatch) =>{
    axios.post(`/auth/login`,{loginOrEmail, password}).then(result=>{
        if(result.status===200) {
            localStorage.setItem('user',(result.data.token))
            dispatch(signInAC(result.data));}
    })
}
export const signUp = ({username,email,password}) =>(dispatch)=>{
    axios.post('/auth/register',{username,email,password})
}
export const checkMatch = (checkField,value) =>(dispatch)=>{
    switch(checkField){
        case 'login':{
            axios.get(`/match/login/${value}`).then(
                result=>{
                    result.data ? dispatch(checkMatchLoginAC(true)) : dispatch(checkMatchLoginAC(false))
                }
            )
        }
        break;
        case 'email':{
            axios.get(`/match/email/${value}`).then(
                result=>{
                    result.data ? dispatch(checkMatchEmailAC(true)) : dispatch(checkMatchEmailAC(false))
                }
            )
        }
        default:{
        }
    }
}
export const getAuth = () =>(dispatch) =>{
    const authorization = localStorage.getItem('user');
    axios.get('/auth/me',{headers: {authorization}}).then(
        result=>{
            if(result.status===200){
                dispatch(getAuthSuccess(result.data));
            }
            else{
                dispatch(getAuthFail())
            }
        }
    )
}