import { useContext } from 'react';
import DishTypeRequestGetAll from '../../requests/dishTypeRequests/DishTypeRequestGetAll'
import Sender from '../../requests/Sender';
import ApiContext from '../../store/ApiContext';

const useDishTypeController = () => {
    const apiContext = useContext(ApiContext);
    const sender = new Sender(apiContext);

    const getAllDishTypes = async () => {
        const request = new DishTypeRequestGetAll()
        const result = await sender.send(request);
        return result;
    }

    return {
        getAllDishTypes,
    }

}

export default useDishTypeController;