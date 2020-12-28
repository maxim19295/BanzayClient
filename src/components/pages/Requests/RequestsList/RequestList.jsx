import { RequestBlock } from "./RequestBlock/RequestBlock"
import {connect} from 'react-redux';
import { getComments, getRequestsForAll } from "../../../../redux/requestsReducer";
import { useEffect } from "react";
const RequestsList = ({requestList,getRequestsForAll,getComments}) =>{
    const getCommentsHandler = (number) =>{
        getComments(number);
    }
    useEffect(()=>{getRequestsForAll()},[]);
    if(requestList){
        const Requests = requestList.map((el,index)=><RequestBlock key={index} getCommentsHandler = {getCommentsHandler} request={el}/>)
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
    getRequestsForAll: ()=>{dispatch(getRequestsForAll())},
    getComments: (number)=>{dispatch(getComments(number));}
})
export default connect(mapStateToProps,mapDispatchToProps)(RequestsList);