import ErrorFallback from 'components/ErrorFallback';
import Cart from 'pages/Cart';
import Checkout from 'pages/Checkout';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import Product from 'pages/Product';
import Products from 'pages/Products';
import SearchResults from 'pages/SearchResults';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from 'react-hot-toast';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from 'utils/routes';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Layout>
        <Routes>
          <Route element={<Cart />} path={ROUTES.CART} />
          <Route element={<Checkout />} path={ROUTES.CHECKOUT} />
          <Route element={<Home />} path={ROUTES.HOME} />
          <Route element={<Product />} path={`${ROUTES.PRODUCT}/:productId`} />
          <Route element={<Products />} path={ROUTES.PRODUCTS} />
          <Route element={<SearchResults />} path={ROUTES.SEARCH} />
          <Route element={<Navigate replace to={ROUTES.HOME} />} path='*' />
        </Routes>
      </Layout>
      <Toaster />
    </ErrorBoundary>
  );
}

export default App;
