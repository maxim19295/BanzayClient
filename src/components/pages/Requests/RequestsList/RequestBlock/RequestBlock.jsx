import { Request } from "../Request/Request"
import r from './RequestBlock.module.css';
export const RequestBlock = ({request}) =>{
    return <div className={r.requestBlock}>
        <Request autor={request.autor} date={request.date} text={request.text}/>
        { (request.comments) && request.comments.map(el=><div className={r.commentBlock}>
            <Request autor={el.autor} date={el.date} text={el.text}/>
        </div>)}
    </div>
}