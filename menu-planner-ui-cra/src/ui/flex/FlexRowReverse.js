import classes from './FlexRowReverse.module.css'

const FlexRowReverse = (props) => {

    return <div className={`${classes.main} ${props.className}`}>
        {props.children}
    </div>
}

export default FlexRowReverse;