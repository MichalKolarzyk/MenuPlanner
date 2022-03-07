import BaseRequest from "./BaseRequest";

class GetRequest extends BaseRequest{
    constructor(url : string){
        super("GET", url);
    }
}

export default GetRequest;