import DishRequestGetList from "../../requests/dishRequests/DishRequestGetList";
import useSender from "./useSender";

const useDishController = () => {
    const sender = useSender();

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