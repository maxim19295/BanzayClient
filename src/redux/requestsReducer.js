import * as axios from 'axios';
const GET_REQUESTS = 'GET_REQUESTS';
const GET_COMMENTS = 'GET_COMMENTS';
const initState = {
    requestList: null
}
const rquestList = [
    {
        id: 1,
        autor: 'Max',
        date: '02.02.2020 at 20:02',
        text: 'Sushi is fine',
        private: false,
        comments: [
            {
                id: 1,
                autor: 'Banzay',
                date: '02.02.2020 at 20:03',
                text: 'thx'
            }
        ]
    },
    {
        id: 2,
        autor: 'Den',
        date: '02.02.2020 at 20:22',
        text: 'Sushi is shit!!!!',
        private: true,
        comments: [{
            id: 1,
            autor: 'Banzay',
            date: '02.02.2020 at 20:23',
            text: ':\'('
        }]
    }
];
export const requestReducer = (state=initState, action) =>{
    switch(action.type){
        case GET_REQUESTS: return {...state, requestList: action.requestList}
        case GET_COMMENTS: return {...state, requestList: state.requestList.map(el=>{
            if(el.n_request===action.number){
                return {...el, comments: [...action.commentsList]}
            }
            else return el;
        })}
        default: return state;
    } 
};
const getRequestsAC = (requestList) => ({type: GET_REQUESTS, requestList});
export const getRequestsForAll = () => (dispatch) =>{
    axios.get('/requests').then((result)=>{
        dispatch(getRequestsAC(result.data));
    })
}
const getCommentsAC = (number,commentsList) =>({type: GET_COMMENTS, number, commentsList});
export const getRequestsForAdmin = () => (dispatch) =>{
    axios.get('/request_for_admin').then((result)=>{
        dispatch(getRequestsAC(result.data));
    })
}
export const getComments = (requestNumber) =>{
    return (dispatch) =>{
    axios.get(`/comments/${requestNumber}`).then((result)=>dispatch(getCommentsAC(requestNumber,result.data)));
}}