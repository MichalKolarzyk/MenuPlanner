class StepRequestDelete {
    constructor(recipeId, stepId){
        this.methodName = "DELETE";
        this.url = `/api/recipe/${recipeId}/step?id=${stepId}`;
    }
}

export default StepRequestDelete;