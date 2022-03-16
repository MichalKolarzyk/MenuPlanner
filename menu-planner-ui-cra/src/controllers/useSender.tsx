import useConnection from "../store/connection/useConnection";

const useSender = () => {
  const connection = useConnection();

  const send = async (request: any) => {
    //connection.setIsBusy(true);

    const baseUrl = connection.baseUrl;
    const bodyJson = JSON.stringify(request.body);
    const url = baseUrl + request.url;

    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `${connection.authorizationMethod} ${connection.token}`,
    };

    let response;
    let json;
    let errorMessage;

    response = await fetch(url, {
      method: request.methodName,
      body: bodyJson,
      headers: headers,
    });
    json = await response.json();

    if (response && !response.ok) {
      errorMessage = json.message;
      throw new Error(errorMessage);
    }

    //connection.setIsBusy(false);
    return json;
  };

  const sendCreate = async (request: any) => {
    //connection.setIsBusy(true);

    const baseUrl = connection.baseUrl;
    const bodyJson = JSON.stringify(request.body);
    const url = baseUrl + request.url;

    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `${connection.authorizationMethod} ${connection.token}`,
    };

    let response;
    let errorMessage;

    response = await fetch(url, {
      method: request.methodName,
      body: bodyJson,
      headers: headers,
    });

    if (response && !response.ok) {
      errorMessage = await response.json();
      throw new Error(errorMessage.toString());
    }

    //connection.setIsBusy(false);
    return response;
  };

  return {
    send,
    sendCreate,
  };
};
export default useSender;
