"use client"

import { useState } from 'react';

interface HoverModal {
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
      </button>

        <div 
          className={`w-50 h-60 bg-amber-900 z-10 absolute rounded shadow-lg transition-opacity duration-300 ease-in-out
            ${isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onMouseEnter={() => setIsModalOpen(true)} 
          onMouseLeave={() => setIsModalOpen(false)}
        >
          {modalContent}
        </div>
      
    </div>
  );
}