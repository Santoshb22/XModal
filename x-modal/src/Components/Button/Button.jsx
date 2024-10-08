import "./Button.css";

const Button = ({children, onClick}) => {
  return (
    <button 
    className="primary-btn" 
    onClick={onClick}
    >
        {children}
    </button>
  )
}

export default Button