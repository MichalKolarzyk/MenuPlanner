import { useContext } from "react";
import LayersContext from "../store/LayersContext";


const useLayers = () => {
    const layersContext = useContext(LayersContext);
    const showForm = (formElement) => {
        layersContext.setForm(formElement);
        layersContext.setIsVisibleFormLayer(true);
    }

    const showMessage = (title, message) => {
        layersContext.setTitle(title);
        layersContext.setMessage(message);
        layersContext.setIsVisibleMessageLayer(true);
    }

    return{
        showForm,
        showMessage,
    }
}

export default useLayers;