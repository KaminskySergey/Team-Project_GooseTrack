import ModalCreate from "components/ModalCreate/ModalCreate";
import ModalTodo from "pages/ModalTodo/ModalTodo";
import { useState } from "react";

export const AddTaskBtn = () => {
  const [isModalOpen, setIsOpenModal] = useState(false)

  const handleToggle = () => setIsOpenModal(pS => !pS)
   return (
   <>
   <button type="button" onClick={handleToggle}>ADD TODO</button>
   {isModalOpen && 
    <ModalCreate onClose={handleToggle}>
      <ModalTodo />
    </ModalCreate>}
   </>)
};
