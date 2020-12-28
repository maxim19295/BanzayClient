import b from '../../Body/Body.module.css';
import {connect} from 'react-redux';
import { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import GoodList from './GoodList/GoodList';
import { getMenuAC } from '../../../redux/menuReducer';
const Menu = ({menuList,getMenu}) =>{
    const {name} = useParams();
    useEffect(()=>{getMenu()},[]);
    if(menuList){
    const matchEl = menuList.find(el=>el.to===name);
    if(matchEl){
        return <div>
        <div id={b.bodyHeader}><div className='content'>{matchEl.title}</div></div>
        <GoodList menu={matchEl}/>
    </div>}
    else{
        return <Redirect path='/'/>
    }}
    else{
        return null;
    }
}
let mapStateToProps = (state) =>({
    ...state.menu
});
let mapDispatchToProps = (dispatch) =>({
    getMenu: ()=>dispatch(getMenuAC())
})
export default connect(mapStateToProps,mapDispatchToProps)(Menu);