import { useState } from "react";
import { Request } from "../Request/Request"
import r from './RequestBlock.module.css';
export const RequestBlock = ({request,getCommentsHandler}) =>{
    const handleClick = () =>{
        if(show){
            setShow(false);
        }
        else{
            setShow(true);
            getCommentsHandler(request.n_request);
        }
    }
    const [show,setShow] = useState(false);
    return <div className={r.requestBlock}>
        <Request autor={request.autor} date={request.str_time} text={request.content}/>
        <button onClick={handleClick}>{show ? 'Скрыть' : 'Показать'} комментарии</button>
        { (request.comments && show) && request.comments.map(el=><div className={r.commentBlock}>
            <Request autor={el.autor} date={el.str_time} text={el.content}/>
        </div>)}
    </div>
}