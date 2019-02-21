import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import addNewDishReducer from './Store/reducers/addNewDishReducer';
import orderPageReducer from './Store/reducers/orderPageReducer';
import dishesListReducer from './Store/reducers/dishesListReducer';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    addNewDishReducer: addNewDishReducer,
    orderPageReducer: orderPageReducer,
    dishListReducer: dishesListReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
