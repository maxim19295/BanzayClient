import g from '../../Menu/GoodList/GoodList.module.css';
import img from '../../../../72.jpg';
import {Element} from '../../../pages/Menu/Element/Element';
import { NavLink } from 'react-router-dom';
const getNumbers = (task,assortCode,id,goodList) =>{
    let arr4Numbers = [];
    let arrAllNumbers=[];
    switch(task){
        case 'another': {
            arrAllNumbers=goodList.filter(el=>el.kod!==assortCode);
            if(arrAllNumbers.length!==0){
                let assort;
                for(let i=0;i<4;i++){
                    do{
                        assort = Math.floor(Math.random()*6+1);
                    }
                    while(!!arr4Numbers.find(el=>(el.kod===assort)) || assort===assortCode);
                    let elem;
                    do
                    {
                        elem=Math.floor(Math.random()*arrAllNumbers.filter(el=>el.kod===assort).length+1);
                    }
                    while(!!arr4Numbers.find(el=>el===arrAllNumbers.filter(el=>el.kod===assort)[elem-1]));
                    arr4Numbers[i]=arrAllNumbers.filter(el=>el.kod===assort)[elem-1];
                }
            }
        }
        break;
        case 'same': {
            arrAllNumbers=goodList.filter(el=>((el.kod===assortCode) && (el.number!==id)));
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
    if(goods.length!==0){
        const goodsElems = goods.map((el,index)=><NavLink to={`/menu/${name_menu}/${el.number}`}><Element img={img} key={index} title={el.nazvanie} price={el.price}/></NavLink>);
        return <div>
        <p>{title}</p>
        <div className={g.menuBlock}>
            {goodsElems}
        </div>
    </div>}
    else return null;
}