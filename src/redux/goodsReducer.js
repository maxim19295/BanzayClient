import * as axios from 'axios';
const GET_GOODS = 'GET_GOODS';
const initState = {
    goodList: null
}
const godList = [{
    id: 1,
    title: 'Roll s ugrem',
    price: 666,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 3
},
{
    id: 2,
    title: 'Roll s lososem',
    price: 554,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 3
},
{
    id: 3,
    title: 'Sushi s kuricey',
    price: 455,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 1
},
{
    id: 4,
    title: 'Set fila XXL',
    price: 234,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 4
},
{
    id: 5,
    title: 'Maki Yellow dragon',
    price: 634,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 2
},
{
    id: 6,
    title: 'Salat s krasnoy ikroy',
    price: 663,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 5
},
{
    id: 7,
    title: 'baltika 9',
    price: 333,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 6

},
{
    id: 8,
    title: 'krusovice black',
    price: 333,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 6

},
{
    id: 9,
    title: 'sandora',
    price: 333,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 6

},
{
    id: 10,
    title: 'Salat oliv\'e',
    price: 428,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 5
},
{
    id: 11,
    title: 'Salat vesnyaniy',
    price: 663,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 5
},
{
    id: 12,
    title: 'Salat pod shuboi',
    price: 663,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 5
},
{
    id: 13,
    title: 'rozovoe vino',
    price: 333,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 6

},
{
    id: 14,
    title: 'Maki Black dragon',
    price: 634,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 2
},
{
    id: 15,
    title: 'Maki Red dragon',
    price: 634,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 2
},
{
    id: 16,
    title: 'Maki Gold dragon',
    price: 634,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 2
},
{
    id: 17,
    title: 'heineken',
    price: 333,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 6

},
{
    id: 18,
    title: 'Sushi s krevetkoj',
    price: 634,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 1
},
{
    id: 19,
    title: 'Felix banzai',
    price: 634,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 1
},
{
    id: 20,
    title: 'Felix c ugrem',
    price: 634,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 1
},
{
    id: 21,
    title: 'Set Kali',
    price: 634,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 4
},
{
    id: 22,
    title: 'Set c ugrem',
    price: 634,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 4
},
{
    id: 23,
    title: 'Set sushi',
    price: 634,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 4
},
{
    id: 24,
    title: 'Set losos',
    price: 634,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 4
},
{
    id: 25,
    title: 'Salat wakame',
    price: 634,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 5
},
{
    id: 26,
    title: 'Sushi ogurec',
    price: 634,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 1
},
{
    id: 27,
    title: 'Maki avokado',
    price: 634,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 2
},
{
    id: 28,
    title: 'Roll s ogurcem',
    price: 634,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 3
},
{
    id: 29,
    title: 'Roll syrnij',
    price: 634,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 3
},
{
    id: 30,
    title: 'Sushi ogurec',
    price: 634,
    weight: 444,
    sostav: 'Sostav',
    about: 'Этот ролл с нежной начинкой из японского омлета и сливочного сыра, покрытый вкуснейшим угрем, сделает Ваш романтический вечер незабываемым! заказать в Харькове роллы и сеты ресторан Банзай.',
    assortCode: 3
}
];
export const goodsReducer = (state=initState, action)=>{
    switch(action.type){
        case GET_GOODS: return {...state, goodList: action.goodList}
        default: return state;
    }
};
const getGoodsAC = (goodList) =>({type: GET_GOODS, goodList});
export const getGoods = () => (dispatch) =>{
    axios.get('/tovary').then((result)=>dispatch(getGoodsAC(result.data)));
    //axios.post('/api/login',{email: 'maxim19995@gmail.com', password: 'najdirabotudebil'},{headers: {'Content-Type': 'application/json'}})
    /* все ок axios.post('/api/register', {phone: '+380954517921', name: 'maxiksx',email: 'maxim19995@gmail.com', password: 'najdirabotudebil'}, {headers: {'Content-Type': 'application/json'}})*/
    //не передаются хидеры (пидоры) axios.get('/api/me',{},{headers: {'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1heGltMTk5NUBnbWFpbC5jb20iLCJpYXQiOjE2MDg5ODU3NTQsImV4cCI6MTYwODk4OTM1NH0.UTMTFkxroCjbBMD4sx7viY6d2sAtB807EUnaBU3mRME', 'Content-Type': 'application/json'}})
    //все ок axios.get('/api/items')
    //все ок axios.get('/api/items/2')
    //все ок axios.put('/api/items/1',{title: 'Notebook'},{headers: {'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1heGltMTk5OTVAZ21haWwuY29tIiwiaWF0IjoxNjA4OTkzMDkzLCJleHAiOjE2MDg5OTY2OTN9.9UZ12WRyhDsySax2Q0hpYHjYqDe5MSRS9wnM50E3WPw'}});
    //все ок, только хидеры axios.delete('/api/items/2',{},{headers: {'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1heGltMTk5OTVAZ21haWwuY29tIiwiaWF0IjoxNjA4OTkzMDkzLCJleHAiOjE2MDg5OTY2OTN9.9UZ12WRyhDsySax2Q0hpYHjYqDe5MSRS9wnM50E3WPw'}})
    //все ок axios.post('/api/items',{title: 'TV center', price: 14999},{headers: {'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1heGltMTk5OTVAZ21haWwuY29tIiwiaWF0IjoxNjA4OTk5MTE2LCJleHAiOjE2MDkwMDI3MTZ9.VDCfTNSn4Gh0_DOftGr4_Bfsaeri-6sUsF_pVwvW3gc', 'Content-Type': 'application/json'}})
}
