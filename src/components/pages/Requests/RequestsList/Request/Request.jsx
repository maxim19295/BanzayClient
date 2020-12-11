import ava from '../../../../../assets/avatar.png';
import r from './Request.module.css';
export const Request = (props) => {
    return <div className={r.request}>
        <div className={r.ava}><img src={ava} alt='ava'/></div>
        <div className={r.textPanel}>
            <div className={r.infoPanel}>
                <div>
                    <div>{props.autor} - </div>
<div className={r.timeRequest}>{props.date}</div>
                </div>
                <div>Ответить</div>
            </div>
            <div>{props.text}</div>
        </div>
    </div>
}