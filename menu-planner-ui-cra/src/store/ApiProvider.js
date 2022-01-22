import React, { useState, useEffect } from "react"
import Sender from "../requests/Sender"
import TagRequestDelete from '../requests/tagRequests/TagRequestDelete'
import TagRequestGetAll from '../requests/tagRequests/TagRequestGetAll'
import TagRequestCreate from '../requests/tagRequests/TagRequestCreate'
import ApiContext from "./ApiContext"
import TagRequestUpdate from "../requests/tagRequests/TagRequestUpdate"
import TagRequestGetById from "../requests/tagRequests/TagRequestGetById"
import RecipeRequestCreate from "../requests/recipeRequests/RecipeRequestCreate"
import RecipeRequestGetList from "../requests/recipeRequests/RecipeRequestGetList"
import RecipeRequestGetById from "../requests/recipeRequests/RecipeRequestGetById"
import RecipeRequestAddTag from "../requests/recipeRequests/RecipeRequestAddTag"
import RecipeRequestRemoveTag from "../requests/recipeRequests/RecipeRequestRemoveTag"
import StepRequestCreate from "../requests/stepRequests/StepRequestCreate"
import StepRequestDelete from "../requests/stepRequests/StepRequestDelete"
import StepRequestGetById from "../requests/stepRequests/StepRequestGetById"
import StepRequestGet from "../requests/stepRequests/StepRequestGet"
import RecipeRequestGetTags from '../requests/recipeRequests/RecipeRequestGetTags'

const ApiProvider = (props) => {
    const sender = new Sender();
    
    const getTagsHandler = async () => {
        const request = new TagRequestGetAll()
        const response = await sender.send(request);
        return response;
    }

    const createTagHandler = async (item) => {
        const request = new TagRequestCreate(item);
        sender.send(request)
    }

    const getTagHandler = async (id) => {
        const request = new TagRequestGetById(id);
        const response = await sender.send(request);
        return response;
    }

    const deleteTagHandler = async (id) => {
        const request = new TagRequestDelete(id);
        await sender.send(request);
    }

    const updateTagHandler = async (updateTag) => {
        const request = new TagRequestUpdate(updateTag);
        await sender.send(request);
    }

    const createRecipeHandler = async (recipe) => {
        const request = new RecipeRequestCreate(recipe);
        await sender.send(request);
    }

    const getRecipeListHandler = async (recipeRequest) => {
        const request = new RecipeRequestGetList(recipeRequest)
        const response = await sender.send(request);
        return response;
    }

    const getRecipeHandler = async (id) => {
        const request = new RecipeRequestGetById(id)
        const response = await sender.send(request);
        return response;
    }

    const addTagToRecipeHandler = async (recipeId, tagId) => {
        const request = new RecipeRequestAddTag(recipeId, tagId)
        await sender.send(request);
    }

    const removeTagFromRecipeHandler = async (recipeId, tagId) => {
        const request = new RecipeRequestRemoveTag(recipeId, tagId)
        await sender.send(request);
    }

    const createStepHandler = async (recipeId, step) => {
        const request = new StepRequestCreate(recipeId, step);
        await sender.send(request);
    }

    const deleteStetHandler = async (recipeId, stepId) => {
        const request = new StepRequestDelete(recipeId, stepId);
        await sender.send(request);
    }

    const getStepHandler = async (recipeId, stepId) => {
        const request = new StepRequestGetById(recipeId, stepId);
        const response = await sender.send(request);
        return response;
    }

    const getStepsHandler = async (recipeId) => {
        const request = new StepRequestGet(recipeId)
        const response = await sender.send(request);
        return response;
    }

    const getTagsFromRecipeHandler = async (recipeId) => {
        const request = new RecipeRequestGetTags(recipeId);
        const response = await sender.send(request);
        return response;
    }


    const apiContext = {
        getTags: getTagsHandler,
        createTag: createTagHandler,
        getTag: getTagHandler,
        deleteTag: deleteTagHandler,
        updateTag: updateTagHandler,

        createRecipe: createRecipeHandler,
        getRecipes: getRecipeListHandler,
        getRecipe: getRecipeHandler,
        addTagToRecipe: addTagToRecipeHandler,
        getTagsFromRecipe: getTagsFromRecipeHandler,
        removeTagFromRecipe: removeTagFromRecipeHandler,

        createStep: createStepHandler,
        deleteStet: deleteStetHandler,
        getStep: getStepHandler,
        getSteps: getStepsHandler, 
    }

    return <ApiContext.Provider value={apiContext}>
        {props.children}
    </ApiContext.Provider>
}

export default ApiProvider