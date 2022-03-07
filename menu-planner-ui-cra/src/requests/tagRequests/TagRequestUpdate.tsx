import PutRequest from "../PutRequest";

class TagRequestUpdate extends PutRequest<any> {
    constructor(updateTag : any){
        super("/api/tag", updateTag);
    }
}

export default TagRequestUpdate;