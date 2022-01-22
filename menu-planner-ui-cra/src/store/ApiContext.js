import React from "react"

const ApiContext = React.createContext({
    getTags: () => {},
    createTag: (tag) => {},
    getTag: (id) => {},
    deleteTag: (id) => {},
    updateTag: (updateTag) => {},

    createRecipe: (recipe) => {},
    getRecipes: (recipeRequest) => {},
    getRecipe: (id) => {},
    deleteRecipe: (id) => {},
    addTagToRecipe: (recipeId, tagId) => {},
    getTagsFromRecipe: (recipeId) => {},
    removeTagFromRecipe: (recipeId, tagId) => {},

    createStep: (recipeId, step) => {},
    deleteStet: (recipeId, stepId) => {},
    getStep: (recipeId, stepId) => {},
    getSteps: (recipeId, stepId) => {}, 
})

export default ApiContext;