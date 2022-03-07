import DishTypeRequestGetAll from '../requests/dishTypeRequests/DishTypeRequestGetAll'
import useSender from './useSender';

const useDishTypeController = () => {

    const sender = useSender();

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