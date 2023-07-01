import PropTypes from "prop-types";
import '../src/App.css';

const CustomButton = ({label}) => {
  return (
    <div className="btn">
        {label}
    </div>
  )
}

const TransCustomButton = ({label}) => {
  return (
    <div className="t-btn">
        {label}
    </div>
  )
}


export  {CustomButton, TransCustomButton};

CustomButton.propTypes = {
    label: PropTypes.string.isRequired
}

TransCustomButton.propTypes = {
    label: PropTypes.string.isRequired 
}