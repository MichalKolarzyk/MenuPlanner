import GetRequest from "../GetRequest";

class TagRequestGetById extends GetRequest {
    constructor(tagId : number){
        super(`/api/tag/${tagId}`);
    }
}

export default TagRequestGetById;