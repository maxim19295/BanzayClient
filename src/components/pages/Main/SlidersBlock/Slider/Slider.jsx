import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './CarouselOwnStyle.css';
import { SliderItem } from './SliderItem/SliderItem';
export const Slider = ({title,items}) =>{
    const sliderItems = items.map(el=><SliderItem key={el.id} title={el.title} price={el.price}/>);
        return <div>
    <div className='content'>
<div className='sliderHeader'>{title}</div>
    <OwlCarousel className="owl-theme" items={4}
loop
margin={10}
nav>
    {sliderItems}
    </OwlCarousel>
    </div>
</div>
}