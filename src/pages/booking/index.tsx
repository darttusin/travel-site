import React from 'react';
import './BookingModal.css'; // Убедитесь, что у вас есть файл стилей для модального окна

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tourTitle: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, tourTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{tourTitle}</h2>
        <p className="modal-text">Вы уверены, что хотите забронировать этот тур?</p>
        <div className="modal-buttons">
          <button className="modal-button" onClick={onClose}>Закрыть</button>
          <button className="modal-button" onClick={() => { /* Логика для бронирования */ }}>Подтвердить</button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;