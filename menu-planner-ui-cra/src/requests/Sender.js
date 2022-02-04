class Sender {
  constructor(apiContext) {
    this.apiContext = apiContext;
  }

  async send(request) {
    const baseUrl = this.apiContext.baseUrl;
    const bodyJson = JSON.stringify(request.body);
    let response;
    this.apiContext.setIsBusy(true);
    let json;
    try {
      const url = baseUrl + request.url;
      response = await fetch(url, {
        method: request.methodName,
        body: bodyJson,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `${this.apiContext.authorizationMethod} ${this.apiContext.token}`,
        },
      });
      json = await response.json()
      this.apiContext.setIsBusy(false)
      if (!response.ok) {
        alert(json.message);
      }
    } catch (error) {
      const senderError = {
        bodyJson: bodyJson,
        message: error.message,
        request: request,
        apiContext: this.apiContext,
      };
      console.log(senderError);
      console.log(response);
      this.apiContext.setIsBusy(false)
      alert(senderError.message);
    }
    return json;
  }
}
export default Sender;
