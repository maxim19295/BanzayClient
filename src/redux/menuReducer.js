const GET_MENU = 'GET_MENU';
const menuList = [
    {
        id: 1,
        to: 'sushi',
        title: 'Суши',
        about: 'Суши – одно из самых популярных блюд в мире, которое одинаково любят в Европе и Азии. Они сочетают в себе потрясающий вкус и пользу, экзотику Востока и питательные ингредиенты, необходимые каждому. Более 10 веков суши являются традиционной едой в Китае и Японии, а в последние десятилетия они получили распространение по всему миру.'
    },
    {
        id: 2,
        to: 'maki',
        title: 'Маки Роллы',
        about: ''
    },
    {
        id: 3,
        to: 'rolly',
        title: 'Роллы',
        about: 'Роллы, как и суши, являются традиционными для восточной кухни. Их популярность объясняется качественными, тщательно подобранными ингредиентами и рецептами, которые позволяют раскрыть весь вкус и пользу продуктов. Роллы еще называют «суши, вывернутые наизнанку» или сиамаки.'
    },
    {
        id: 4,
        to: 'sety',
        title: 'Сеты',
        about: 'Сеты Харьков от компании Банзай – это прекрасный выбор для большой компании. Дешевле, чем поход в кафе, намного полезней, чем фаст-фуд, быстрее и легче, чем готовить самому! В наборах суши вы найдете прекрасно подобранные блюда от мастеров японской кухни.'
    },
    {
        id: 5,
        to: 'salaty',
        title: 'Салаты',
        about: 'Салаты занимают особое место в восточной кухне, ведь именно здесь мы встречаем столь необычное сочетание ингредиентов, способ их приготовления и подачи. Минимальная термическая обработка является традиционной для японских салатов. Так сохраняется максимум пользы, силы и свежести в каждом блюде, которое одинаково хорошо.'
    },
    {
        id: 6,
        to: 'napitki',
        title: 'Напитки',
        about: 'Невозможно представить себе дружеское застолье без напитков. Не обязательно крепких спиртных, ведь это не самое главное в душевных посиделках. Особенно, если это посиделки за японскими блюдами. Заказать напитки к суши в Харькове вы можете в суши-баре Банзай:'
    }
];
const initState = {
    menuList: null
}
export const menuReducer = (state=initState, action) =>{
    switch(action.type){
        case GET_MENU:{
            return {...state, menuList: action.menuList}
        }
            default: return state;
    }
}
export const getMenuAC = () =>{
    return {type: GET_MENU, menuList}};