import { connect } from 'react-redux';
import Recipe from 'src/components/Recipe';

import { findRecipe } from 'src/selectors/recipes';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);

  return ({
    recipe: findRecipe(state.recipes.list, ownProps.match.params.slug),
  })
}

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(Recipe);

export default container;
