import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import "./Modal.css";

const Modal = ({onClose}) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber:"",
    dob: "",
  })

  const closeModalRef = useRef(null);  
  const hanldeClickedOutsideModal = (e) => {
    if(closeModalRef.current && !closeModalRef.current.contains(e.target)) {
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", hanldeClickedOutsideModal);
    return () => {
      document.removeEventListener("mousedown", hanldeClickedOutsideModal);
    }
  })
  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData({
      ...formData,
     [name]: value, 
    })
  }

  const validateForm = (formData) => {
    if(formData.phoneNumber.length !== 10) {
      alert("Invalid phone number, Please enter a 10-digit phone number.")
      return false;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(formData.email)) {
      alert("Invalid email. Please check your email address.");
      return false;
    }

    const today = new Date();
    if(formData.dob > today.toISOString().split("T")[0]) {
      alert("Invalid date of birth. Date of birth cannot be in the future")
      return false;
    }

    return true;
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!validateForm(formData)) return;

    console.log(formData);
    setFormData({
      username: "",
      email: "",
      phoneNumber:"",
      dob: "",
    })
  }

  return (
    
    <div className="modal" >
      <div className="modal-content" ref={closeModalRef}>
        <form onSubmit={handleSubmit}>
          <h2>Fill Details</h2>

          <div className="username input-container">
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" onChange={handleChange} name="username" value={formData.username} required/>
          </div>

          <div className="email input-container">
            <label htmlFor="email">Email Address: </label>
            <input type="email" id="email" onChange={handleChange} name="email" value={formData.email} required/>
          </div>

          <div className="phone input-container">
            <label htmlFor="phone">Phone Number: </label>
            <input type="number" id="phone" onChange={handleChange} name="phoneNumber" value={formData.phoneNumber} required/>
          </div>

          <div className="date-of-birth input-container">
            <label htmlFor="dob">Date of Birth: </label>
            <input type="date" id="dob" onChange={handleChange} name="dob" value={formData.dob} required/>
          </div>

          <Button className = "submit-button" type = "submit">Submit</Button>
        </form>
      </div>

    </div>
  )
}

export default Modal