import { basketReducer } from "./basketReducer";
import { menuReducer } from "./menuReducer";
import { requestReducer } from "./requestsReducer";
import { sliderReducer } from "./sliderReducer";
const { combineReducers, createStore } = require("redux");
const { goodsReducer } = require("./goodsReducer");
const { postsReducer } = require("./postsReducer");

const reducers = combineReducers({
    goods: goodsReducer,
    posts: postsReducer,
    basket: basketReducer,
    requests: requestReducer,
    menu: menuReducer,
    sliders: sliderReducer
})
export const store = createStore(reducers);
window.state=store;