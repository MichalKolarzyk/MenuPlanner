import DishRequestGetList from "../../requests/dishRequests/DishRequestGetList";
import DishRequestCreate from "../../requests/dishRequests/DishRequestCreate";
import useSender from "./useSender";
import DishRequestDelete from "../../requests/dishRequests/DishRequestDelete";

const useDishController = () => {
    const sender = useSender();

    const getDishList = async (dishBody) => {
        const request = new DishRequestGetList(dishBody)
        const result = await sender.send(request);
        return result;
    } 

    const createDish = async (dishBody) => {
        const request = new DishRequestCreate(dishBody)
        const result = await sender.sendCreate(request);
        return result;
    }

    const deleteDish = async (dishId) => {
        const request = new DishRequestDelete(dishId);
        const result = await sender.sendCreate(request);
    }

    return{
        getDishList,
        createDish,
        deleteDish,
    };
}

export default useDishController;