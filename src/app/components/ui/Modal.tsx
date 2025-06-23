
interface ModalProps {
  isOpen?:void;
  onClose?: () => void;
}

export default function Modal({isOpen, onClose}: ModalProps) {
  if (!isOpen) return null;

  return(
    <button onClick={isOpen}>
      abrir modal
      <div className="w-screen h-screen bg-amber-100" onClick={onClose}></div>
    
    </button>
  )
}