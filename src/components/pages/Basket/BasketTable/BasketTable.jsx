import {DeleteCell} from './DeleteCell/DeleteCell';
import {ImageCell} from './ImageCell/ImageCell';
import {PriceCell} from './PriceCell/PriceCell';
import {QuantityCell} from './QuantityCell/QuantityCell';
import {TitleCell} from './TitleCell/TitleCell';
import {TotalCell} from './TotalCell/TotalCell';
import {connect} from 'react-redux';
import b from './BasketTable.module.css';
import { getBasketAC } from '../../../../redux/basketReducer';
import { useEffect } from 'react';
const BasketTable = ({basket,getBasket}) =>{
    useEffect(()=>{
        getBasket();
    })
    if(basket){
    let total = 0;
    for(let i =0; i<basket.length;i++){
        total+=basket[i].quantity*basket[i].price;
    }
    const tableBody = basket.map(
        (el,index)=>{
            return <tr height='60px'>
                <DeleteCell/>
                <ImageCell/>
                <TitleCell title={el.title}/>
                <PriceCell price={el.price}/>
                <QuantityCell quantity={el.quantity}/>
                <TotalCell total={el.price*el.quantity}/>
            </tr>
        }
    );
    return <table className={b.basketTable}>
    <thead></thead>
    <tbody>
    <tr height="40px">
        <th></th>
        <th></th>
        <th>Название</th>
        <th>Цена</th>
        <th>Количество</th>
        <th>Итого</th>
    </tr>
        {tableBody}
    <tr>
        <td colSpan={6}>
            <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
                <div style={{padding: '5px 15px'}}>
                    Всего: <b>{total} грн</b>
                </div>
            </div>
        </td>
    </tr>
<tr><td colSpan={6}><div style={{display: 'flex', flexDirection: 'row-reverse'}}>
<button onClick={()=>{}} style={{margin: 10, backgroundColor: 'red', border: 'none', color: 'white', padding: '5 15'}}>ОЧИСТИТЬ КОРЗИНУ</button></div></td></tr>
<tr><td colSpan={6}><div style={{display: 'flex', flexDirection: 'row-reverse'}}><a href="#"><button onClick={()=>{}} style={{margin: 10, backgroundColor: 'orange', border: 'none', color: 'white', padding: '5 15'}}>ОФОРМИТЬ ЗАКАЗ</button></a></div></td></tr>
</tbody>
    <tfoot></tfoot>
</table>
}
else{
    return null;
}
}
let mapStateToProps = (state) =>({
    ...state.basket
});
let mapDispatchToProps = (dispatch) =>({
    getBasket: ()=>{dispatch(getBasketAC())}
})
export default connect(mapStateToProps,mapDispatchToProps)(BasketTable);