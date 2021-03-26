import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { ID_APP } from './common/constants';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Home from './page/home';
import store from './common/store';
import '../css/main.css';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Home />
        </HashRouter>
    </Provider>,
    document.getElementById(ID_APP)
);
