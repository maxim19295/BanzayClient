import e from './Element.module.css';
export const Element = ({img, title, price}) =>{
    return <div className={e.blockOne}>
                    <div className={e.subBlockOne}>
                    <div><img src={img} alt='example'/></div>
                    <div>{title}</div>
                    <div className={e.price}>{price}</div>
                    </div>
                    <div><button className={e.basketButton}>в корзину</button></div>
                </div>
}