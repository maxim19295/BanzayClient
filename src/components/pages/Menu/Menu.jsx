import example from '../../../72.jpg';
import { Element } from './Element/Element';
import m from './Menu.module.css';
export const Menu = ({el}) =>{
return <div>
    <div className='content'>
            <p>Суши – одно из самых популярных блюд в мире, которое одинаково любят в Европе и Азии. Они сочетают в себе потрясающий вкус и пользу, экзотику Востока и питательные ингредиенты, необходимые каждому. Более 10 веков суши являются традиционной едой в Китае и Японии, а в последние десятилетия они получили распространение по всему миру.</p>
            <div className={m.menuBlock}>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            <Element img={example} title='Сет "Маки"' price='275 грн'/>
            </div>
        </div>
</div>
}