"use client"

import { useState } from 'react';

export default function ModalLinks() {
  const [isOpen, setIsOpen] = useState(false);


  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button 
        onClick={toggleModal}
      >
        Abrir Links
      </button>

      {isOpen && (
        <div className="w-screen h-screen bg-amber-900 absolute" onClick={toggleModal}>
          <h1>test</h1>
          <div onClick={(e) => e.stopPropagation()}>
            <button onClick={toggleModal}>
              X
            </button>
            <h2>Links Úteis</h2>

          </div>
        </div>
      )}
    </div>
  );
}