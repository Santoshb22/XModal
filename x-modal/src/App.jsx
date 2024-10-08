import "./App.css";
import Button from "./Components/Button/Button";
import Modal from "./Components/ModalForm/Modal";
import {useState} from "react";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className = "app">
      <div className="header">
        <h1>User Details Modal</h1>
        <Button 
        onClick = {() => setShowModal(true)}
        >
          Open Form
        </Button>
      </div>
      
      {showModal && <Modal/>}
    </div>
  )
}

export default App