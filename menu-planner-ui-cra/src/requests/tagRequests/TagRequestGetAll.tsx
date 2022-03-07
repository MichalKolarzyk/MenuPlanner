import GetRequest from "../GetRequest";

class TagRequestGetAll extends GetRequest {
    constructor(){
        super("/api/tag");
    }
}

export default TagRequestGetAll;