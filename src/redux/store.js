import { basketReducer } from "./basketReducer";
import { menuReducer } from "./menuReducer";
import { requestReducer } from "./requestsReducer";
import { sliderReducer } from "./sliderReducer";
import thunk from 'redux-thunk';
const { combineReducers, createStore, applyMiddleware } = require("redux");
const { goodsReducer } = require("./goodsReducer");
const { postsReducer } = require("./postsReducer");
const { authReducer } = require("./authReducer");
const reducers = combineReducers({
    goods: goodsReducer,
    posts: postsReducer,
    basket: basketReducer,
    requests: requestReducer,
    menu: menuReducer,
    sliders: sliderReducer,
    auth: authReducer
})
export const store = createStore(reducers,applyMiddleware(thunk));
window.state=store;