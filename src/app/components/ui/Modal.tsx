
interface ModalProps {
  isOpen?:boolean;
  onClose?: () => void;
}

export default function Modal({isOpen, onClose}: ModalProps) {
  return(
    <button>
      abrir modal
      <div className="w-screen h-screen bg-amber-100"></div>

    </button>
  )
}