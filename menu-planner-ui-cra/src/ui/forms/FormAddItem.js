import useFormLayer from "../../store/formLayer/useFormLayer";

const FormAddItem = (props) => {
    const formLayer = useFormLayer();
    const onSubmit = props.onSubmit

    const submitHandler = async (event) => {
        event.preventDefault()
        await onSubmit(event);
        formLayer.close();
    }

    return <form className={props.className} onSubmit={submitHandler}>
        {props.children}
    </form>
}

export default FormAddItem;