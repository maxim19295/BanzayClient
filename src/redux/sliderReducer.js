const GET_SLIDERS = 'GET_SLIDERS';
const initState = {
    slidersArray: null
}
const slidersArray = [
    {
        title: 'топ продаж',
        array: [
        {
            id: 1,
            title: 'Set Kantri',
            price: '666',
            assortCode: 4
        },
        {
            id: 2,
            title: 'Set Fila XL',
            price: '666',
            assortCode: 4
        },
        {
            id: 3,
            title: 'Set Sity',
            price: '666',
            assortCode: 4
        },
        {
            id: 4,
            title: 'Set Filla',
            price: '666',
            assortCode: 4
        },
        {
            id: 5,
            title: 'Set s ugrem',
            price: '666',
            assortCode: 4
        },
        {
            id: 6,
            title: 'Set Kali',
            price: '666',
            assortCode: 4
        },
        {
            id: 7,
            title: 'Set Syrnyj',
            price: '666',
            assortCode: 4
        },
        {
            id: 8,
            title: 'Set hungry student',
            price: '666',
            assortCode: 4
        },
        {
            id: 9,
            title: 'felix red ikra',
            price: '666',
            assortCode: 1
        },
        {
            id: 10,
            title: 'felix perepil egg',
            price: '666',
            assortCode: 1
        }
    ]},
    {
        title: 'роллы',
        array: [
        {
        id: 1,
        title: 'chees roll',
        price: '666',
        assortCode: 3
    },
    {
        id: 2,
        title: 'roll black dragon',
        price: '666',
        assortCode: 3
    },
    {
        id: 3,
        title: 'roll child',
        price: '666',
        assortCode: 3
    },
    {
        id: 4,
        title: 'roll ebi',
        price: '666',
        assortCode: 3
    },
    {
        id: 5,
        title: 'roll fila de luxe',
        price: '666',
        assortCode: 3
    },
    {
        id: 6,
        title: 'roll ssl losos',
        price: '666',
        assortCode: 2
    },
    {
        id: 7,
        title: 'roll s ugrem',
        price: '666',
        assortCode: 2
    },
    {
        id: 8,
        title: 'roll s tuncom',
        price: '666',
        assortCode: 2
    },
    {
        id: 9,
        title: 'roll kopch chiken',
        price: '666',
        assortCode: 2
    },
    {
        id: 10,
        title: 'roll avokado',
        price: '666',
        assortCode: 2
    }]}
];
export const sliderReducer = (state=initState,action) =>{
    switch(action.type){
        case GET_SLIDERS: return {...state, slidersArray: action.slidersArray}
        default: return state;
    }
}
export const getSlidersAC = () => ({type: GET_SLIDERS, slidersArray});