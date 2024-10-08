import "./Button.css";

const Button = ({children, onClick, className}) => {
  return (
    <button 
    className= {`primary-btn ${className}`} 
    onClick={onClick}
    >
        {children}
    </button>
  )
}

export default Button