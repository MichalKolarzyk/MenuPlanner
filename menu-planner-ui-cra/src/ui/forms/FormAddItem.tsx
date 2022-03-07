import React from "react";
import useFormLayer from "../../store/formLayer/useFormLayer";

const FormAddItem = (props : any) => {
    const formLayer = useFormLayer();
    const onSubmit = props.onSubmit

    const submitHandler = async (event : any) => {
        event.preventDefault()
        await onSubmit(event);
        formLayer.close();
    }

    return <form className={props.className} onSubmit={submitHandler}>
        {props.children}
    </form>
}

export default FormAddItem;