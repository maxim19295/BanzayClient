const GET_GOODS = 'GET_GOODS';
const initState = {
    goodList: null
}
const goodList = [{
    id: 1,
    title: 'Roll s ugrem',
    price: 666,
    weight: 444,
    assortCode: 3
},
{
    id: 2,
    title: 'Roll s lososem',
    price: 554,
    weight: 444,
    assortCode: 3
},
{
    id: 3,
    title: 'Sushi s kuricey',
    price: 455,
    weight: 444,
    assortCode: 1
},
{
    id: 4,
    title: 'Set fila XXL',
    price: 234,
    weight: 444,
    assortCode: 4
},
{
    id: 5,
    title: 'Maki Yellow dragon',
    price: 634,
    weight: 444,
    assortCode: 2
},
{
    id: 6,
    title: 'Salat s krasnoy ikroy',
    price: 663,
    weight: 444,
    assortCode: 5
},
{
    id: 7,
    title: 'Pivo s chernoy ikroy',
    price: 333,
    weight: 444,
    assortCode: 6

},
{
    id: 8,
    title: 'Mak syrnyj',
    price: 428,
    weight: 444,
    assortCode: 5
},
];
export const goodsReducer = (state=initState, action)=>{
    switch(action.type){
        case GET_GOODS:return {...state, goodList: action.goodList.filter(el=>el.assortCode===action.code)}
        default: return state;
    }
};
export const getGoodsAC = (code) =>({type: GET_GOODS, code, goodList});