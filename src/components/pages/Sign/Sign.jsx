import { SignIn } from "./SignIn/SignIn"
import { SignUp } from "./SignUp/SignUp"
import s from './Sign.module.css';
export const Sign = () =>{
    return <div className='content'>
        <div className={s.sign}>
        <SignIn/>
        <SignUp/>
        </div>
    </div>
}