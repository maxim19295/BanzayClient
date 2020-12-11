import { RequestBlock } from "./RequestBlock/RequestBlock"
import {connect} from 'react-redux';
import { getRequestsForAllAC } from "../../../../redux/requestsReducer";
import { useEffect } from "react";
const RequestsList = ({requestList,getRequestsForAll}) =>{
    useEffect(()=>{getRequestsForAll()},[]);
    if(requestList){const Requests = requestList.map(el=><RequestBlock request={el}/>)
    return <div>
        {Requests}
    </div>}
    else {
        return null;
    }
}
const mapStateToProps = (state) =>({
    ...state.requests
});
const mapDispatchToProps = (dispatch) =>({
    getRequestsForAll: ()=>{dispatch(getRequestsForAllAC())}
})
export default connect(mapStateToProps,mapDispatchToProps)(RequestsList);