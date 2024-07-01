import { useEffect } from 'react';

const Modal = ({ show, onClose, children }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto h-[80vh] overflow-y-auto w-full relative">
        <button
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-2 py-1 w-[36px] h-[36px] flex justify-center items-center"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
