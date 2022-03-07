class BaseRequest {
    methodName : string;
    url : string;

    constructor(methodName : string, url : string){
        this.methodName = methodName;
        this.url = url;
    }
}

export default BaseRequest;