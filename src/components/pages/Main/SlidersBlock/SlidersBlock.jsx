import { useEffect } from "react";
import { connect } from "react-redux"
import { getSlidersAC } from "../../../../redux/sliderReducer";
import {Slider} from "./Slider/Slider";

const SlidersBlock = ({slidersArray,getSliders}) =>{
    useEffect(()=>{getSliders()},[]);
    if(slidersArray){const sliders = slidersArray.map(el=><Slider title={el.title} items={el.array}/>);
    return <div>
        {sliders}
    </div>}else{
        return null;
    }
}
const mapStateToProps = (state) =>({
    ...state.sliders
});
const mapDispatchToProps = (dispatch) =>({
    getSliders: ()=>{dispatch(getSlidersAC())}
});
export default connect(mapStateToProps,mapDispatchToProps)(SlidersBlock);

