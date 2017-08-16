import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import Helmet from 'react-helmet';
import Header from './Header';
import Filters from './Filters';
import ProductCategory from './Product/ProductCategory';
import Divider from './common/Divider';
import More from './Product/ShowMore';
import Footer from './Footer';

addLocaleData([...en, ...ru]);

export default () =>
  (<IntlProvider locale="ru">
    <div>
      <Helmet>
        <title>Men&apos;s clothing | Burberry</title>
        <meta name="description" content="Men's clothing | Burberry" />
      </Helmet>
      <Header />
      <Filters />
      <ProductCategory heading="Heritage Trench Coats" />
      <div className="container">
        <Divider />
      </div>
      <ProductCategory heading="Single Breasted Trench Coats" />
      <More viewed="8" summ="17" count="9" />
      <Footer />
    </div>
  </IntlProvider>);
