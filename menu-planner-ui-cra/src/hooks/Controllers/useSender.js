import { useContext } from "react";
import ApiContext from '../../store/ApiContext'
import useLayers from '../useLayers'

const useSender = () => {
    const apiContext = useContext(ApiContext);
    const layers = useLayers();

    const send = async (request)  => {
      apiContext.setIsBusy(true);
  
      const baseUrl = apiContext.baseUrl;
      const bodyJson = JSON.stringify(request.body);
      const url = baseUrl + request.url;
  
      const headers = {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `${apiContext.authorizationMethod} ${apiContext.token}`,
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
          apiContext: apiContext,
        };
      } finally {
        if (senderError) {
          errorMessage = senderError.message;
          console.log(senderError);
        } else if (response && !response.ok) {
          errorMessage = json;
          console.log(errorMessage)
        }
  
        if (errorMessage) {
          layers.showMessage("Error", errorMessage.message);
        }
  
        apiContext.setIsBusy(false);
        return json;
      }
    }

    return {
        send,
    }
  }
  export default useSender;
  