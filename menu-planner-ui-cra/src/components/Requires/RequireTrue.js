const RequireTrue = (props) => {
    const value = props.value;

    if(value){
        return props.children
    }
    return null;
}

export default RequireTrue;