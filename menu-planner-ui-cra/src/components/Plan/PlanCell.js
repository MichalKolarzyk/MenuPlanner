import PlanSingleDish from "./PlanSingleDish";

const PlanCell = (props) => {
    const dishes = props.dishes;

    
    const view = dishes.map(d => <PlanSingleDish key={d} dish={d}/>)
    return(
        <td>{view}</td>
    )
}

export default PlanCell;