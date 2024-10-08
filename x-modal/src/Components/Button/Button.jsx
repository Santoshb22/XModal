import "./Button.css";

const Button = ({children, onClick, type}) => {
  return (
    <button 
    className="primary-btn" 
    onClick={onClick}
    type={type}
    >
        {children}
    </button>
  )
}

export default Button