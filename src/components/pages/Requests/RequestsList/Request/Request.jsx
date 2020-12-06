import ava from '../../../../../assets/avatar.png';
import r from './Request.module.css';
export const Request = () => {
    return <div className={r.request}>
        <div className={r.ava}><img src={ava} alt='ava'/></div>
        <div className={r.textPanel}>
            <div className={r.infoPanel}>
                <div>
                    <div>Name - </div>
                    <div className={r.timeRequest}>dd.mm.yyyy at hh.mm</div>
                </div>
                <div>Ответить</div>
            </div>
            <div>request text</div>
        </div>
    </div>
}