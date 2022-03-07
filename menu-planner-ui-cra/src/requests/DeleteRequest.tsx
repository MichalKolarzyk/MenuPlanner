import BaseRequest from "./BaseRequest";

class DeleteRequest extends BaseRequest{
    constructor(url : string){
        super("DELETE", url);
    }
}

export default DeleteRequest;