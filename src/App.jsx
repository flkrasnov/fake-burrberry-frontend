import React from 'react';

import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

import Header from './Header';
import Footer from './Footer';
import Product from './Product/View';
import Products from './Product/List';

addLocaleData([...en, ...ru]);

export default () =>
  (<IntlProvider locale="ru">
    <div>
      <Helmet>
        <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
        <meta name="description" content="Welcome to burberry.com" />
      </Helmet>
      <Router>
        <div>
          <Header />
          <div className="App">
            <Switch>
              <Route exact path="/:section" component={Products} />
              <Route exact path="/:section/:category" component={Products} />
              <Route path="/:section/:category/:id" component={Product} />
              <Redirect from="/" to="/men/clothes" />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  </IntlProvider>);
