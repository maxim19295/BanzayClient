import b from '../../Body/Body.module.css';
import g from './GoodPage.module.css';
import example from '../../../72.jpg';
import { getMenuAC } from '../../../redux/menuReducer';
import { getGoodsAC } from '../../../redux/goodsReducer';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import {AdditionalBlock} from './AdditionalBlock/AdditionalBlock';
const GoodPage = ({goodList,menuList,getMenu,getGoods}) =>{
    const {name,good_name} = useParams();
    useEffect(()=>{
        getMenu();
        if(menuList){
            const el = menuList.find(el=>el.to===name);
            if(el){
                getGoods(el.id);
            }
        }
    },[menuList,goodList]);
    if(menuList && goodList){
        const selectedGood = goodList.find(el=>el.id===parseInt(good_name));
        if(selectedGood){
        return <div>
        <div id={b.bodyHeader}>
            <div className='content'>
                {selectedGood.title}
            </div>
        </div>
        <div className='content'>
        <div className={g.goodContainer}>
            <div>
                <div><img src={example} alt='d'/></div>
                <div>
                    <div>{selectedGood.title}</div>
                    <div className={g.price}>{selectedGood.price} грн.</div>
                    <div>{selectedGood.weight} {selectedGood.assortCode===6 ? 'л.' : 'кг'}</div>
                    <div>{selectedGood.sostav}</div>
                    <div className={g.basketPanel}>
                        <button className={g.editPlace}>
                            -
                        </button>
                        <input className={g.editPlace} type='text' value='1'/>
                        <button className={g.editPlace}>
                            +
                        </button>
                        <button className={g.basketButton}>
                            Dobavit v basket
                        </button>
                    </div>
                    <div>
                        Category: <span className={g.category}>{menuList.find(el=>el.to===name).title}</span>
                    </div>
                </div>
            </div>
            <div className={g.aboutContainer}>
                <div>Описание</div>
                <div>Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.</div></div>
                <div><FontAwesomeIcon icon={faEye}/>Товар был просмотрен 5 раз</div>
        </div>
        <AdditionalBlock id={selectedGood.id} name_menu = {name} title='Возможно вас также заинтересует...' task='another' assortCode={selectedGood.assortCode} goodList={goodList}/>
        <AdditionalBlock id={selectedGood.id} name_menu = {name} title='Похожие товары' task='same' assortCode={selectedGood.assortCode} goodList={goodList}/>
        </div>
        
    </div>
    }
    else return <Redirect to='/'/>;
}
    else {return null;}

}
const mapStateToProps = (state) =>({
    ...state.menu,
    ...state.goods
});
const mapDispatchToProps = (dispatch) =>({
    getMenu: ()=>dispatch(getMenuAC()),
    getGoods: ()=>dispatch(getGoodsAC())
});
export default connect(mapStateToProps,mapDispatchToProps)(GoodPage);