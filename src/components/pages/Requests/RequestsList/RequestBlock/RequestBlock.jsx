import { Request } from "../Request/Request"
import r from './RequestBlock.module.css';
export const RequestBlock = () =>{
    return <div className={r.requestBlock}>
        <Request/>
        <div className={r.commentBlock}>
            <Request/>
        </div>
    </div>
}