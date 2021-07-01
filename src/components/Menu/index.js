import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { Link, Router, Switch } from 'react-router-dom';

const Menu = ({ recipes }) => (
  
    <nav className="menu">
      <Link to="/">
        <a
          className="menu-link menu-link--active"
          href="/"
        >
          Accueil
        </a>
      </Link>

        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.slug}`}>
            <a
              key={recipe.id}
              className="menu-link"
              href={`/recipe/${recipe.slug}`}
            >
              {console.log(`/recipe/${recipe.slug}`)}
              {recipe.title}
            </a>
          </Link>
        ))}
    </nav>

);

Menu.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Menu;
