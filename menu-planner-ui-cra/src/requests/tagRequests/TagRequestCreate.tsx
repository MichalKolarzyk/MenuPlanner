import PostRequest from "../PostRequest";

class TagRequestCreate extends PostRequest<any> {
    constructor(newTag : any){
        super("/api/tag", newTag);
    }
}

export default TagRequestCreate;