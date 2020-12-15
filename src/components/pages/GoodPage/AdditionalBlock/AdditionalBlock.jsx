import e from '../../../pages/Menu/Element/Element.module.css';
import g from '../../Menu/GoodList/GoodList.module.css';
import img from '../../../../72.jpg';
import {Element} from '../../../pages/Menu/Element/Element';
import { getGoodsAC } from '../../../../redux/goodsReducer';
import { NavLink } from 'react-router-dom';
const getNumbers = (task,assortCode,id,goodList) =>{
    let arr4Numbers = [];
    let arrAllNumbers=[];
    switch(task){
        case 'another': {
            arrAllNumbers=goodList.filter(el=>el.assortCode!==assortCode);
            if(arrAllNumbers.length!==0){
                let assort;
                for(let i=0;i<4;i++){
                    do{
                        assort = Math.floor(Math.random()*6+1);
                    }
                    while(!!arr4Numbers.find(el=>(el.assortCode===assort)) || assort===assortCode);
                    let elem;
                    do
                    {
                        elem=Math.floor(Math.random()*arrAllNumbers.filter(el=>el.assortCode===assort).length+1);
                    }
                    while(!!arr4Numbers.find(el=>el===arrAllNumbers.filter(el=>el.assortCode===assort)[elem-1]));
                    arr4Numbers[i]=arrAllNumbers.filter(el=>el.assortCode===assort)[elem-1];
                }
            }
        }
        break;
        case 'same': {
            arrAllNumbers=goodList.filter(el=>((el.assortCode===assortCode) && (el.id!==id)));
            if(arrAllNumbers.length!==0){for(let i=0;i<4;i++){
                let elem;
                do
                {
                    elem=Math.floor(Math.random()*arrAllNumbers.length+1);
                }
                while(!!arr4Numbers.find(el=>el===arrAllNumbers[elem-1]));
                arr4Numbers[i]=arrAllNumbers[elem-1];
            }}
        }
        break;
        default:{}
    }
    return arr4Numbers;
}
export const AdditionalBlock = ({name_menu,id,title,task,assortCode,goodList}) =>{
    const goods = getNumbers(task,assortCode,id,goodList);
    console.log(goods);
    if(goods.length!==0){
        const goodsElems = goods.map((el,index)=><NavLink to={`/menu/${name_menu}/${el.id}`}><Element img={img} key={index} title={el.title} price={el.price}/></NavLink>);
        return <div>
        <p>{title}</p>
        <div className={g.menuBlock}>
            {goodsElems}
        </div>
    </div>}
    else return null;
}