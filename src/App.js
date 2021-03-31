import { Button } from '@material-ui/core';
import Header from 'components/Header';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import categoryApi from './api/categoryApi';
import './App.scss';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 2,
      };
      const productList = await categoryApi.getAll(params);

      console.log('productList', productList);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header />

      <header className="App-header">
        <Switch>
          {/* <Redirect from="/" to="/home-page" exact /> */}
          {/* <Route path="/" component={HomePage} exact /> */}
          <Route path="/" component={CounterFeature} exact />

          <Route path="/todos" component={TodoFeature} />
          <Route path="/albums" component={AlbumFeature} />

          {/* <Route component={NotFound} /> */}
        </Switch>

        <h1>Footer</h1>
      </header>
    </div>
  );
}

export default App;
