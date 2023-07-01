import PropTypes from "prop-types";
import '../src/App.css';

const CustomButton = ({label, type}) => {
  return (
    <div className={type==='green'?'bg-teal-800 w-40 text-center  border-2 border-white py-4 rounded-lg':'bg-white w-40 text-center  border-2 border-teal-800 py-4 rounded-lg'}>
       <p className={type==='green'?'text-white text-lg':'text-teal-800 text-lg'}>{label}</p>
    </div>
  )
}





export default CustomButton;

CustomButton.propTypes = {
    label: PropTypes.string.isRequired
    ,type: PropTypes.string.isRequired
}






