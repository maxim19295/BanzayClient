import m from './Main.module.css';
import best_sushi from '../../../assets/best_sushi.jpg';
import sushi from '../../../assets/tovary/sushi.png';
import maki from '../../../assets/tovary/maki.png';
import rolly from '../../../assets/tovary/rolly.png';
import sety from '../../../assets/tovary/sety.png';
import salaty from '../../../assets/tovary/salaty.png';
import napitki from '../../../assets/tovary/napitki.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import PostsBlock from './PostsBlock/PostsBlock';
import SlidersBlock from './SlidersBlock/SlidersBlock';
export const Main = () =>{
    return <div>
        <div>
           <img src={best_sushi} alt='best_sushi' />
        </div>
        <div className='content'>
        <div className={m.tovary}>
        <div>
            <img src={sushi}/>
            <p>Суши</p>
        </div>
        <div>
            <img src={maki}/>
            <p>Маки</p>
        </div>
        <div>
            <img src={rolly}/>
            <p>Роллы</p>
        </div>
        <div>
            <img src={sety}/>
            <p>Сеты</p>
        </div>
        <div>
            <img src={salaty}/>
            <p>Салаты</p>
        </div>
        <div>
            <img src={napitki}/>
            <p>Напитки</p>
        </div>
        </div>
        <div>
        </div>
        </div>
        <div className={m.requestsBlock}>
            <p>Что говорят наши клиенты</p>
            <div className='content'>
            <div>
                <FontAwesomeIcon icon={faQuoteLeft} color='gray' size='2x'/>
                заказывали 4 сета. муж поехал забрал. еще 10% скидка. суши просто бомба) ребята молодцы)) главное все свежее) теперь только в БАНЗАЙ будем заказывать)) СУШИ - БАР БАНЗАЙ: Спасибо за отзыв. Рады, что Вы остались довольны. Стараемся быть лучше, для Вас!)
                <br/>
                Анна Харьков 23:04:45 02-17-2018
            </div>
            <div>
            <FontAwesomeIcon icon={faQuoteLeft} color='gray' size='2x'/>
            Вот уже как 2 года Вам не изменяем)))пер епробовали все сеты))очень очень вкусные суши, доставка быстрая, все аккуратно, только один минус - в меню нет супа, а так хотелось бы((. СУШИ - БАР БАНЗАЙ: Спасибо за отзыв. Рады, что Вы остаётесь с нами. Ваше предложение будет рассмотрено.
            <br/>
            Марина Харьков 18:29:31 01-30-2018
            </div>
            <div>
            <FontAwesomeIcon icon={faQuoteLeft} color='gray' size='2x'/>
            Заказали сет голодный студент, спасибо большое это супер вкусно, быстро и очень удобно для салтовчан!!! Ещё и скидочка за самовывоз 10 процентов), получше чем в Якитории и в мафии , я довольна!!! СУШИ - БАР БАНЗАЙ: Спасибо за отзыв. Рады, что Вы остались довольны. Стараемся быть лучше, для Вас!
            <br/>
            Алина Харьков 15:08:31 02-02-2018
            </div>
        </div>
        </div>
        <SlidersBlock/>
        <PostsBlock/>
        
    </div>
}