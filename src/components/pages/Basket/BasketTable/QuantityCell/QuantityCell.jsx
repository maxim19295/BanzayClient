import q from './QuantityCell.module.css';
export const QuantityCell = ({quantity}) =>{
    return <td>
    <div style={{display: 'inline-block'}}>
        <input type="button" className={q.quantityEdit} value="-" onClick={()=>{}} disabled={false}/>
        <input className={q.quantityEdit} type="text" minLength="1" maxLength="3" value={quantity} onChange={()=>{}}/>
        <input type="button" className={q.quantityEdit} value="+" onClick={()=>{}} disabled={false}/>
    </div>
</td>
}