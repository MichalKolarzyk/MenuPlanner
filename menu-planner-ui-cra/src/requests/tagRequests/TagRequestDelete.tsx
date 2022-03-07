import DeleteRequest from "../DeleteRequest";

class TagRequestDelete extends DeleteRequest{
    constructor(id : number){
        super(`/api/tag?id=${id}`);
    }
}

export default TagRequestDelete;