const PlanSingleDish = (props) =>{
    const dish = props.dish;
    let view = <div></div>
    if(view){
        view = (
        <div>
            <span>{dish.recipeName}</span>
            <span>, </span>
            <span>{dish.portions}</span>
        </div>)
    }

    return view
}

export default PlanSingleDish;