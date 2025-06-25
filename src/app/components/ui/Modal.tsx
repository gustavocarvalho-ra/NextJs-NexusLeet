"use client"

import { useState } from "react";

// interface ModalProps {
//   isOpen?: boolean;
//   onClose?: () => void;
// }

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };


  return(
    <div>
      <button className="text-white cursor-pointer" onClick={handleOpenModal}>
        Abrir modal
      </button>
      
      {isOpen && (
        <div className="w-screen h-screen absolute bg-amber-100" onClick={handleOpenModal}>

        </div>

      )}
    </div>
  )
}