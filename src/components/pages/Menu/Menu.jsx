import example from '../../../72.jpg';
import { Element } from './Element/Element';
import m from './Menu.module.css';
import {connect} from 'react-redux';
import { getGoodsAC } from '../../../redux/goodsReducer';
import { useEffect } from 'react';
const Menu = ({goodList, el,getGoods}) =>{
    useEffect(()=>{getGoods(el.id)},[el.id]);
    if(goodList){const Elements = goodList.map(el=><Element img={example} key={el.id} title={el.title} price={el.price}/>);
    return <div>
        <div className='content'>
                <p>{el.about}</p>
                <div className={m.menuBlock}>
                {Elements}
                </div>
            </div>
    </div>}
    else{
        return null;
    }
}
let mapStateToProps = (state) =>({
     ...state.goods
});
let mapDispatchToProps = (dispatch) =>({
    getGoods: (id)=>dispatch(getGoodsAC(id))
})
export default connect(mapStateToProps,mapDispatchToProps)(Menu);