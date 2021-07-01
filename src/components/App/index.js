import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';


import Menu from 'src/components/Menu';
import Home from 'src/containers/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';

import Loading from './Loading';
import data from '../../data';

import './style.scss';


function App(props) {
  if (props.loading) {
    return <Loading />;
  }
  return (
      <div className="app">
        <Menu recipes={data}/>
          <Switch>
            <Route path="/">
              <Home recipes={data}/>
            </Route>
            <Route exact path={`/recipe/crepes-raffinees`}>
              <Recipe />
            </Route>
            <Route exact path={`/recipe/pizza-margherita`}>
              <Recipe />
            </Route>
            <Route>
              <Error />
            </Route>
          </Switch>
      </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
