class StepRequestGetById {
    constructor(recipeId, stepId){
        this.methodName = "GET";
        this.url = `/api/recipe/${recipeId}/step/${stepId}`;
    }
}

export default StepRequestGetById;