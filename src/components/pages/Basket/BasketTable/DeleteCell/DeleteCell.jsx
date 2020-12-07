import { faTimes, faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import d from './DeleteCell.module.css';
export const DeleteCell = () =>{
    return <td>
    <div style={{display: 'inline-block'}} title="Удалить из корзины">
    <div className={d.delIcon}>
        <div className={d.in}>
            <FontAwesomeIcon icon={faTimesCircle}/>
        </div>
        <div className={d.out}>
            <FontAwesomeIcon icon={faTimes}/>
        </div>
    </div>
    </div>
</td>
}