import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import ProductViewModal from './ProductViewModal';

import Header from './Header';
import Footer from './Footer';
import Routes from '../router/Routes';

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <Header {...props} />
            <div className='container'>
              <div className='main'>
                <Routes />
              </div>
              <Footer />
              <ProductViewModal />
            </div>
          </>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
