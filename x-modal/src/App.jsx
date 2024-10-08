import "./App.css";
import Button from "./Components/Button/Button";
import Modal from "./Components/ModalForm/Modal";
import {useState} from "react";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className = "app">
      <h1>User Details Modal</h1>
      <Button 
      onClick = {() => setShowModal(true)}
      >
        Open Form
      </Button>

      <div className={showModal? "show-modal" : "hide-modal"}>
        <Modal/>
      </div>
    </div>
  )
}

export default App