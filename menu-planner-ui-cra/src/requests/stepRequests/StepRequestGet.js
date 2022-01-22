class StepRequestGet {
    constructor(recipeId){
        this.methodName = "GET";
        this.url = `/api/recipe/${recipeId}/step`;
    }
}

export default StepRequestGet;