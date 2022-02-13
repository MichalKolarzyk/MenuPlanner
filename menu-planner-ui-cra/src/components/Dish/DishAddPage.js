import useDishController from "../../hooks/Controllers/useDishController";
import useDateExtension from "../../hooks/Extensions/useDateExtension";
import useInput from "../../hooks/useInput";
import Input from "../../ui/inputs/Input";

const DishAddPage = (props) => {
  const dateExtension = useDateExtension();
  const user = props.user;
  const dishType = props.dishType;
  const date = props.date;

  const portions = useInput();
  const recipe = useInput();

  const dishController = useDishController();

  const submitHandler = (event) => {
    dishController.createDish({
      recipeId: recipe.value,
      date: dateExtension.toDateString(date),
      portions: portions.value,
      trustedUserId: user,
      dishTypeId: dishType.id,
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <span>User: </span>
        <span>{user}</span>
      </div>
      <div>
        <span>dishType: </span>
        <span>{dishType.name}</span>
      </div>
      <div>
        <span>date: </span>
        <span>{dateExtension.getDayName(date)}</span>
      </div>
      <Input useInput={portions} placeholder="Portions" />
      <Input useInput={recipe} placeholder="Recipe" />
      <button>Dodaj</button>
    </form>
  );
};

export default DishAddPage;
