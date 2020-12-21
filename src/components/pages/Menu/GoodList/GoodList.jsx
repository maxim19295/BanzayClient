import g from './GoodList.module.css';
import example from '../../../../72.jpg';
import { Element } from '../Element/Element';
import { useEffect } from 'react';
import { getGoods } from '../../../../redux/goodsReducer';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
const GoodList = ({menu,goodList,getGoods}) =>{
    useEffect(()=>{getGoods()},[]);
    if(goodList){
        debugger;
        const filteredGoodList = goodList.filter(el=>menu.id===el.kod);
        const Elements = filteredGoodList.map(el=><NavLink to={`${menu.to}/${el.number}`}><Element img={example} key={el.number} title={el.nazvanie} price={el.price}/></NavLink>);
    return <div>
        <div className='content'>
                <p>{menu.about}</p>
                <div className={g.menuBlock}>
                {Elements}
                </div>
    
    </div>
    </div>
}
else return null;
}
let mapStateToProps = (state) =>({
    ...state.goods
});
let mapDispatchToProps = (dispatch) =>({
   getGoods: ()=>dispatch(getGoods())
})
export default connect(mapStateToProps,mapDispatchToProps)(GoodList);