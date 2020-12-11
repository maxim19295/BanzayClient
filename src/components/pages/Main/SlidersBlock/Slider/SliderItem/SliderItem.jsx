import set from '../../../../../../72.jpg';
export const SliderItem = ({title,price}) =>{
    return <div className='item'>
    <div><img src={set} />
    <div>{title}</div>
    <div>{price} uah</div>
    </div>
    <div>
        <button>в корзину</button>
    </div>
</div>}