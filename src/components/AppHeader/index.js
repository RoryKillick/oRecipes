import React from 'react';
import image from 'src/assets/logo.png'

import './style.scss';

const AppHeader = () => (
  <header className="header">
    <img src={image} className="header-logo" alt="Logo oRecipes" />
  </header>
);

export default AppHeader;
