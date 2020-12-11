const GET_REQUESTS_FOR_ALL = 'GET_REQUESTS_FOR_ALL';
const GET_REQUESTS_FOR_ADMIN = 'GET_REQUESTS_FOR_ADMIN';
const initState = {
    requestList: null
}
const requestList = [
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
        case GET_REQUESTS_FOR_ALL: return {...state, requestList: action.requestList.filter(el=>el.private===false)}
        case GET_REQUESTS_FOR_ADMIN: return {...state, requestList: action.requestList.filter(el=>el.private===true)}
        default: return state;
    } 
};
export const getRequestsForAllAC = () => ({type: GET_REQUESTS_FOR_ALL, requestList});
export const getRequestsForAdminAC = () => ({type: GET_REQUESTS_FOR_ADMIN, requestList});