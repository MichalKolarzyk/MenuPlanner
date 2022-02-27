import { useDispatch, useSelector } from "react-redux";
import { connectionActions } from "../../store/connection/connectionSlice";
import { messageActions } from "../../store/messageLayer/messageSlice";
import useMessageLayer from "../../store/messageLayer/useMessageLayer";

const useSender = () => {
  const dispatch = useDispatch();
  const connection = useSelector((store) => store.connection)

  const messageLayer = useMessageLayer();

  const send = async (request) => {
    dispatch(connectionActions.setIsBusy(true));

    const baseUrl = connection.baseUrl;
    const bodyJson = JSON.stringify(request.body);
    const url = baseUrl + request.url;

    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `${connection.authorizationMethod} ${connection.token}`,
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
      };
    } finally {
      if (senderError) {
        errorMessage = senderError.message;
        console.log(senderError);
      } else if (response && !response.ok) {
        errorMessage = json;
        console.log(errorMessage);
      }

      if (errorMessage) {
        messageLayer.show("Error", errorMessage.message);
      }

      dispatch(connectionActions.setIsBusy(false));
      return json;
    }
  };

  const sendCreate = async (request) => {
    dispatch(connectionActions.setIsBusy(true));

    const baseUrl = connection.baseUrl;
    const bodyJson = JSON.stringify(request.body);
    const url = baseUrl + request.url;

    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `${connection.authorizationMethod} ${connection.token}`,
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
    } catch (error) {
      senderError = {
        bodyJson: bodyJson,
        message: error.message,
        request: request,
        response: response,
      };
    } finally {
      if (senderError) {
        errorMessage = senderError.message;
        console.log(senderError);
      } else if (response && !response.ok) {
        errorMessage = await response.json();
        console.log(errorMessage);
      }

      if (errorMessage) {
        messageLayer.show("Error", errorMessage.message);
      }

      dispatch(connectionActions.setIsBusy(false));
      return response;
    }
  };

  return {
    send,
    sendCreate,
  };
};
export default useSender;
