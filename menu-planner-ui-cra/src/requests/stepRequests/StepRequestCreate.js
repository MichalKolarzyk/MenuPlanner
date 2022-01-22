class StepRequestCreate {
    constructor(recipeId, newStep){
        this.methodName = "POST";
        this.url = `/api/recipe/${recipeId}/step`;
        this.body = newStep;
    }
}

export default StepRequestCreate;