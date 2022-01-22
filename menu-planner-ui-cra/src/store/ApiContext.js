import React from "react"

const ApiContext = React.createContext({
    tags: [],
    createTag: (tag) => {},
    getTag: (id) => {},
    deleteTag: (id) => {},
    updateTag: (updateTag) => {},

    recipes: [],
    createRecipe: (recipe) => {},
    getRecipeList: (recipeRequest) => {},
    getRecipe: (id) => {},
    addTagToRecipe: (recipeId, tagId) => {},
    removeTagFromRecipe: (recipeId, tagId) => {},

    createStep: (recipeId, step) => {},
    deleteStet: (recipeId, stepId) => {},
    getStep: (recipeId, stepId) => {},
})

export default ApiContext;