import post1 from '../assets/discount.png';
import post2 from '../assets/bansai-sushi-na-dom-banzay.jpg';
import post3 from '../assets/domashnie-rolly-banzay.jpg';
const GET_POSTS = 'GET_POSTS';
const postList = [
    {
        id: 1,
        title: 'акции от банзай суши',
        picture: post1,
        date: '2018-02-21',
        text: '1) Скидка ВСЕМ! Воспользуйтесь услугой «Самовывоз» и автоматически получите скидку 10% на всё меню. Заказы принимаются по телефону и через корзину сайта banzay.kh.ua. Забрать свои заказы Вы можете с Салтовки (ул. Героев труда 9, кафе на территории аз[...]'
    },
    {
        id: 2,
        title: 'поздравление любимых клиенток с 8 марта',
        picture: post2,
        date: '2018-02-21',
        text: 'Суши-бар «Банзай» поздравляет своих любимых клиенток с 8 Марта! Только 08.03.2019 года — к каждому заказу на сумму свыше 500 гривен — ролл в подарок! Милые девушки, женщины, мамы! Коллектив суши-бара «Банзай» от всей души поздравляет вас с 8 Марта[...]'
    },
    {
        id: 3,
        title: 'о пользе суши',
        picture: post3,
        date: '2018-02-21',
        text: 'История возникновения суши. Суши или суси, как их иногда называют, приобрели широкую популярность во всем мире с начала 1980-х годов. В нашей стране сегодня это блюдо любят и едят очень многие. Суши невозможно сравнить ни с одним рыбным блюдом русск[...]'
    }
];
const initState = {
    postList: null
}
export const postsReducer = (state=initState, action)=>{
    switch(action.type){
        case GET_POSTS: return {...state, postList: action.postList}
        default: return state;
    }
}
export const getPostsAC = () =>{
    return {type: GET_POSTS, postList}
}