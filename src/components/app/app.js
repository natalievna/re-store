import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CardPage } from '../pages';
import ShopHeader from '../shop-header';

import './app.css';



const App = () => {

    return (
        <main role="main" className="container">
            <ShopHeader numItems="5" total="220"/>
            <Switch>
                <Route path="/" exact component={HomePage} />

                <Route path="/cart" component={CardPage} />
            </Switch>
        </main>
    );
};

export default App;