import useDishController from "../../hooks/controllers/useDishController";
import useDateExtension from "../../hooks/extensions/useDateExtension";
import useInput from "../../hooks/inputs/useInput";
import SubmitButton from "../../ui/buttons/SubmitButton";
import Input from "../../ui/inputs/Input";
import Label from "../../ui/labels/Label";
import useValidation from '../../hooks/useValidator'

const DishAddPage = (props) => {
  const dateExtension = useDateExtension();
  const user = props.user;
  const dishType = props.dishType;
  const date = props.date;

  const portions = useInput([
    useValidation((value) => value.length > 0)
  ]);
  const recipe = useInput([
    useValidation((value) => value.length > 0)
  ])

  let formIsValid = false;
  if(portions.isValid && recipe.isValid){
    formIsValid = true;
  }

  const dishController = useDishController();

  const submitHandler = async (event) => {
    event.preventDefault();
    const result = await dishController.createDish({
      recipeId: recipe.value,
      date: dateExtension.toDateString(date),
      portions: portions.value,
      trustedUserId: user,
      dishTypeId: dishType.id,
    });

    if(result.ok){
      window.location.reload(false);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Label text={user} description="User:"/>
      <Label text={dishType.name} description="dishType:"/>
      <Label text={dateExtension.getDayName(date)} description="date:"/>
      <Input useInput={portions} placeholder="Portions" />
      <Input useInput={recipe} placeholder="Recipe" />
      <SubmitButton disabled={!formIsValid}>Dodaj</SubmitButton>
    </form>
  );
};

export default DishAddPage;
