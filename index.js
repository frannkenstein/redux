import redux from "redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createLogger from "redux-logger";

const { logger } = createLogger;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAMS";
const buyCake = {
  type: BUY_CAKE,
  info: "FIRST REDUX ACTION",
};

const buyIceCream = {
  type: BUY_ICECREAM,
  info: "SECOND REDUX ACTION",
};
const buyCakes = () => {
  return buyCake;
};

const buyIceCreams = () => {
  return buyIceCream;
};

const initialCakeState = {
  numofCakes: 10,
};

const inittialIceCreamState = {
  numofIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numofCakes: state.numofCakes - 1,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = inittialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numofIceCreams: state.numofIceCreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const Store = createStore(rootReducer, applyMiddleware(logger));

console.log("initialState", Store.getState());

const unsubscribe = Store.subscribe(() => {
  console.log("UPDATED STATE", Store.getState());
});

Store.dispatch(buyCakes());
Store.dispatch(buyCakes());
Store.dispatch(buyCakes());
Store.dispatch(buyCakes());
Store.dispatch(buyIceCreams());
Store.dispatch(buyIceCreams());
Store.dispatch(buyIceCreams());

unsubscribe();
