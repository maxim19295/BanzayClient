const GET_BASKET = 'GET_BASKET';
const initState = {
    basket: null
}
const basket = [
    {
        id: 1, 
        title: 'Roll s ugrem',
        price: 666,
        quantity: 1
    },
    {
        id: 3, 
        title: 'Roll s lososem',
        price: 248,
        quantity: 4
    }
];
export const basketReducer = (state = initState, action) =>{
    switch(action.type){
        case GET_BASKET: return {...state, basket: action.basket}
        default: return state;
    }
}
export const getBasketAC = () => ({type: GET_BASKET, basket});