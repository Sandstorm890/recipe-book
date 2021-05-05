const recipeReducer = (state = {recipes: []}, action) => {
    switch(action.type){
        
        case "GOT_RECIPES":
            return {...state, recipes: action.payload.meals}
        case "ADDED_RECIPE":
            return {...state, recipes: [...state.recipes, action.payload.data]}
        case "DELETE_RECIPE":
            if (state.recipes.data) {
                return {recipes: state.recipes.data.filter(r => r !== action.payload)}
            } else {break}
        default:
            return state
    }
}

export default recipeReducer