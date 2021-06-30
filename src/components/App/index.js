import React from 'react';
import PropTypes from 'prop-types';

import Menu from 'src/components/Menu';
import Home from 'src/containers/Home';
// import Recipe from 'src/containers/Recipe';
// import Error from 'src/components/Error';

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
      <Home />
      {/* <Recipe /> */}
      {/* <Error /> */}
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
