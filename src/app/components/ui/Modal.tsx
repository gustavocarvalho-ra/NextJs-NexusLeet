"use client"

import { useState } from 'react';

interface HoverModal {
  buttonText: string;
  modalContent: React.ReactNode;
}

export default function ModalLinks({ modalContent }: HoverModal) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='relative inline-block'>
      <button 
        onMouseEnter={() => setIsModalOpen(true)}
        onMouseLeave={() => setIsModalOpen(false)}
      >
        modal
      </button>

      {isModalOpen && (
        <div 
          className=" bg-amber-900 z-10 absolute" 
          onMouseEnter={() => setIsModalOpen(true)} 
          onMouseLeave={() => setIsModalOpen(false)}
        >
          {modalContent}
          <h1>test modal</h1>

        </div>
      )}
    </div>
  );
}