class Sender {
    constructor(apiContext){
        this.apiContext = apiContext;
    }

    async send(request) {
        const baseUrl = this.apiContext.baseUrl;
        let response;
        let json;
        try {
            const url = baseUrl + request.url;
            response = await fetch(url, {
                method: request.methodName,
                body: JSON.stringify(request.body),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.apiContext.token
                }
            });
            json = await response.json();
        }
        catch (error) {
            const senderError = {
                message: error.message,
                request: request,
                response: response,
                responseJSON: json,
                apiContext: this.apiContext,
            };
            console.log(senderError);
        }
        return json;
    }
}
export default Sender