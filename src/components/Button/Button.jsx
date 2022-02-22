import PropTypes from 'prop-types'; 
import styles from "./Button.module.css"

const Button = ({title, onClick }) => {
    return (
        <button className={styles.btn} onClick={onClick} type="button">{title}</button>
    );
}

export default Button;

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}