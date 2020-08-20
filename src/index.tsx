import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppWrapper} from './App';
import {Provider} from "react-redux";
import * as serviceWorker from './serviceWorker';
import {store} from "./Redux/store";
import SCommon from "./common.module.css"

ReactDOM.render(
    <Provider store={store}>
        <div>
            <AppWrapper />
        </div>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
