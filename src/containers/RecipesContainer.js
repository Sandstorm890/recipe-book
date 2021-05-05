import RecipeCard from '../components/RecipeCard'
import React from 'react'
import {connect} from 'react-redux'
import {getRecipes} from '../actions/recipeActions'

class RecipesContainer extends React.Component {

    state = {
        search: ""
    }

    handleFormChange = (e) => {
        const value = e.target.value
        this.setState({
            search: value
        })
    }

    createRecipeCards() {
        let recipes = this.props.recipes

        if (recipes && this.state.search.length !== 0) {
            recipes = recipes.filter(recipe => recipe.strMeal.toLowerCase().includes(this.state.search.toLocaleLowerCase()))
        } 
        
        if (recipes) {
            return recipes.map(recipe => <RecipeCard key={parseInt(recipe.idMeal)} recipe={recipe} id={parseInt(recipe.idMeal)} name={recipe.strMeal} image={recipe.strMealThumb} instructions={recipe.strInstructions}/>)
        }
    
    }

    componentDidMount() {
        this.props.getRecipes()
    }

    render() {
        return (
            <div   style={{}} id="recipe-container">
                <div className="font-weight-bold">Search:</div>
                <input type="text" value={this.state.search} onChange={this.handleFormChange}></input>
                {this.createRecipeCards()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const recipes = state.recipes

    return {
        recipes: recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRecipes: () => dispatch(getRecipes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)