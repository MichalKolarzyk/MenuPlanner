import PostRequest from "../PostRequest";

class StepRequestCreate extends PostRequest<any>{

    constructor(recipeId : number, newStep : any){
        super(`/api/recipe/${recipeId}/step`, newStep);
    }
}

export default StepRequestCreate;