class Sender {
  constructor(apiContext) {
    this.apiContext = apiContext;
  }

  async send(request) {
    const baseUrl = this.apiContext.baseUrl;
    const bodyJson = JSON.stringify(request.body);
    let response;
    let json;
    try {
      const url = baseUrl + request.url;
      response = await fetch(url, {
        method: request.methodName,
        body: bodyJson,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${this.apiContext.authorizationMethod} ${this.apiContext.token}`,
        },
      });

      if (!response.ok) {
        const error = await response.json()
        console.log(error)
        alert(error.message);
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
      alert(senderError.message);
    }
    json = await response.json();
    return json;
  }
}
export default Sender;
