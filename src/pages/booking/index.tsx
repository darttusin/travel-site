import React from 'react';
import './BookingModal.css';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tourTitle: string;
  onConfirm: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, tourTitle, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{tourTitle}</h2>
        <p className="modal-text">Введите свой емейл, мы с вами свяжемся</p>
        <input type="email" className="email-input" placeholder="Введите ваш email" />
        <div className="modal-buttons">
          <button className="modal-button" onClick={onClose}>Закрыть</button>
          <button className="modal-button" onClick={onConfirm}>Подтвердить</button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;