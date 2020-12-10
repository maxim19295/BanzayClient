import m from './Main.module.css';
import best_sushi from '../../../assets/best_sushi.jpg';
import sushi from '../../../assets/tovary/sushi.png';
import maki from '../../../assets/tovary/maki.png';
import rolly from '../../../assets/tovary/rolly.png';
import sety from '../../../assets/tovary/sety.png';
import salaty from '../../../assets/tovary/salaty.png';
import napitki from '../../../assets/tovary/napitki.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarAlt, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import set from '../../../72.jpg';
import './CarouselOwnStyle.css';
import post1 from '../../../assets/discount.png';
import post2 from '../../../assets/bansai-sushi-na-dom-banzay.jpg';
import post3 from '../../../assets/domashnie-rolly-banzay.jpg';
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
        <div>
            <div className='content'>
            <div className='sliderHeader'>топ продаж</div>
            
            <OwlCarousel className="owl-theme" items={4}
    loop
    margin={10}
    nav>
                <div className='item'>
                    <div><img src={set} />
                    <div>Roll Fila DeLuxe</div>
                    <div>666 uah</div>
                    </div>
                    <div>
                        <button>в корзину</button>
                    </div>
                </div>
                <div className='item'>
                    <div><img src={set} />
                    <div>Roll Fila DeLuxe</div>
                    <div>666 uah</div>
                    </div>
                    <div>
                        <button>в корзину</button>
                    </div>
                </div>
                <div className='item'>
                    <div><img src={set} />
                    <div>Roll Fila DeLuxe</div>
                    <div>666 uah</div>
                    </div>
                    <div>
                        <button>в корзину</button>
                    </div>
                </div>
                <div className='item'>
                    <div><img src={set} />
                    <div>Roll Fila DeLuxe</div>
                    <div>666 uah</div>
                    </div>
                    <div>
                        <button>в корзину</button>
                    </div>
                </div>
                <div className='item'>
                    <div><img src={set} />
                    <div>Roll Fila DeLuxe</div>
                    <div>666 uah</div>
                    </div>
                    <div>
                        <button>в корзину</button>
                    </div>
                </div>
                <div className='item'>
                    <div><img src={set} />
                    <div>Roll Fila DeLuxe</div>
                    <div>666 uah</div>
                    </div>
                    <div>
                        <button>в корзину</button>
                    </div>
                </div>
                <div className='item'>
                    <div><img src={set} />
                    <div>Roll Fila DeLuxe</div>
                    <div>666 uah</div>
                    </div>
                    <div>
                        <button>в корзину</button>
                    </div>
                </div>
                <div className='item'>
                    <div><img src={set} />
                    <div>Roll Fila DeLuxe</div>
                    <div>666 uah</div>
                    </div>
                    <div>
                        <button>в корзину</button>
                    </div>
                </div>
            </OwlCarousel>
            </div>
        </div>
        <div>
        <div className='content'>
            <div className='sliderHeader'>роллы</div>
            <OwlCarousel className="owl-theme" items={4} loop
    margin={10}
    nav>
                <div className='item'>
                    <div><img src={set} />
                    <div>Roll Fila DeLuxe</div>
                    <div>666 uah</div>
                    </div>
                    <div>
                        <button>в корзину</button>
                    </div>
                </div>
                <div className='item'>
                    <div><img src={set} />
                    <div>Roll Fila DeLuxe</div>
                    <div>666 uah</div>
                    </div>
                    <div>
                        <button>в корзину</button>
                    </div>
                </div>
                <div className='item'>
                    <div><img src={set} />
                    <div>Roll Fila DeLuxe</div>
                    <div>666 uah</div>
                    </div>
                    <div>
                        <button>в корзину</button>
                    </div>
                </div>
                <div className='item'>
                    <div><img src={set} />
                    <div>Roll Fila DeLuxe</div>
                    <div>666 uah</div>
                    </div>
                    <div>
                        <button>в корзину</button>
                    </div>
                </div>
                <div className='item'>
                    <div><img src={set} />
                    <div>Roll Fila DeLuxe</div>
                    <div>666 uah</div>
                    </div>
                    <div>
                        <button>в корзину</button>
                    </div>
                </div>
                <div className='item'>
                    <div><img src={set} />
                    <div>Roll Fila DeLuxe</div>
                    <div>666 uah</div>
                    </div>
                    <div>
                        <button>в корзину</button>
                    </div>
                </div>
            </OwlCarousel>
            </div>
        </div>
        <div className={m.postBlock}>
            <div>
                <div className='content'>Ежедневная доставка вкуснейших суши и роллов с 11:00 до 22:00</div>
            </div>
            <div className='content'>
                <div>
                    <img src={post1} alt='post1'/>
                    <div className={m.header}>акции от банзай суши</div>
                    <div className={m.date}><FontAwesomeIcon icon={faCalendarAlt}/>2018-02-21</div>
                    <div>1) Скидка ВСЕМ! Воспользуйтесь услугой «Самовывоз» и автоматически получите скидку 10% на всё меню. Заказы принимаются по телефону и через корзину сайта banzay.kh.ua. Забрать свои заказы Вы можете с Салтовки (ул. Героев труда 9, кафе на территории аз[...]</div>
                </div>
                <div>
                    <img src={post2} alt='post3'/>
                    <div className={m.header}>поздравление любимых клиенток с 8 марта</div>
                    <div className={m.date}><FontAwesomeIcon icon={faCalendarAlt}/>2018-02-21</div>
                    <div>Суши-бар «Банзай» поздравляет своих любимых клиенток с 8 Марта! Только 08.03.2019 года — к каждому заказу на сумму свыше 500 гривен — ролл в подарок! Милые девушки, женщины, мамы! Коллектив суши-бара «Банзай» от всей души поздравляет вас с 8 Марта[...]</div>
                </div>
                <div>
                    <img src={post3} alt='post3'/>
                    <div className={m.header}>о пользе суши</div>
                    <div className={m.date}><FontAwesomeIcon icon={faCalendarAlt}/>2018-02-21</div>
                    <div>История возникновения суши. Суши или суси, как их иногда называют, приобрели широкую популярность во всем мире с начала 1980-х годов. В нашей стране сегодня это блюдо любят и едят очень многие. Суши невозможно сравнить ни с одним рыбным блюдом русск[...]</div>
                </div>
            </div>
        </div>
    </div>
}