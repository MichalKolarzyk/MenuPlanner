import classes from './FlexRow.module.css'

const FlexRow = (props) => {

    return <div className={`${classes.main} ${props.className}`}>
        {props.children}
    </div>
}

export default FlexRow;