import BaseRequest from "./BaseRequest";

class PostRequest<T> extends BaseRequest {
    body : T

    constructor(url : string, body : T){
        super("POST", url);
        this.body = body;
    }
}

export default PostRequest;