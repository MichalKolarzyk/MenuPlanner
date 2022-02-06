import { useContext } from "react";
import DishRequestGetList from "../../requests/dishRequests/DishRequestGetList";
import Sender from "../../requests/Sender";
import ApiContext from "../../store/ApiContext";

const useDishController = () => {
    const apiContext = useContext(ApiContext);
    const sender = new Sender(apiContext);

    const getDishList = async (dishBody) => {
        const request = new DishRequestGetList(dishBody)
        const result = await sender.send(request);
        return result;
    } 

    return{
        getDishList,
    };
}

export default useDishController;