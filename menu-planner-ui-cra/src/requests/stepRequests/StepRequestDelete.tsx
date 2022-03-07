class StepRequestDelete {
    methodName : string;
    url : string;
    
    constructor(recipeId : number, stepId : number){
        this.methodName = "DELETE";
        this.url = `/api/recipe/${recipeId}/step?id=${stepId}`;
    }
}

export default StepRequestDelete;