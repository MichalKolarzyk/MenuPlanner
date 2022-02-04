class Sender {
  constructor(apiContext) {
    this.apiContext = apiContext;
  }

  async send(request) {
    this.apiContext.setIsBusy(true);

    const baseUrl = this.apiContext.baseUrl;
    const bodyJson = JSON.stringify(request.body);
    const url = baseUrl + request.url;

    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `${this.apiContext.authorizationMethod} ${this.apiContext.token}`,
    };

    let response;
    let json;
    let senderError;
    let errorMessage;

    try {
      response = await fetch(url, {
        method: request.methodName,
        body: bodyJson,
        headers: headers,
      });
      json = await response.json();
    } catch (error) {
      senderError = {
        bodyJson: bodyJson,
        message: error.message,
        request: request,
        response: response,
        apiContext: this.apiContext,
      };
    } finally {
      if (senderError) {
        console.log(senderError);
        errorMessage = senderError.message;
      } else if (response && !response.ok) {
        errorMessage = json.message;
      }

      if (errorMessage) {
        alert(errorMessage);
      }

      this.apiContext.setIsBusy(false);
      return json;
    }
  }
}
export default Sender;
