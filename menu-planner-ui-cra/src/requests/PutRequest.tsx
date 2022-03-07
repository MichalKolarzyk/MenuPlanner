import BaseRequest from "./BaseRequest";

class PutRequest<T> extends BaseRequest{
    body:T;

    constructor(url : string, body : T){
        super("PUT", url);
        this.body = body;
    }
}

export default PutRequest;