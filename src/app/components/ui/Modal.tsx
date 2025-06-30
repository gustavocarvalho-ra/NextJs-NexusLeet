"use client"

import { useState } from 'react';

interface HoverModal {
  TextStr: React.ReactNode;
  modalContent: React.ReactNode;
}

export default function ModalLinks({ TextStr, modalContent }: HoverModal) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='relative flex justify-center'>
      <button className='hover:opacity-0'
        onMouseEnter={() => setIsModalOpen(true)}
        onMouseLeave={() => setIsModalOpen(false)}
      >
        {TextStr}
      </button>

        <div 
          className={`w-50 h-60 bg-(--mod) z-10 absolute rounded shadow-lg transition-opacity duration-300 ease-in-out
            ${isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onMouseEnter={() => setIsModalOpen(true)} 
          onMouseLeave={() => setIsModalOpen(false)}
        >
          {modalContent}
        </div>
      
    </div>
  );
}