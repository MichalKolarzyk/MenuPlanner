import PlanCell from "./PlanCell";

const PlanUser = (props) => {
    const dishes = props.dishes;
    const user = props.user;
    const dishTypes = props.dishTypes;

    const view = dishTypes.map(dt => <PlanCell key={dt} dishes={dishes.filter(d => d.dishTypeId === dt)}/>)

    return <div>
        <span>{user}</span>
        {view}
    </div>
}

export default PlanUser;