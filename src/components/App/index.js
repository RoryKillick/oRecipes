import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';


import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Recipe from 'src/containers/Recipe';
import Error from 'src/components/Error';

import Loading from './Loading';


import './style.scss';


function App(props) {
  if (props.loading) {
    return <Loading />;
  }
  return (
      <div className="app">
        <Menu />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route exact path="/recipe/:slug" component={Recipe}/>
            <Route component={Error}/>
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
