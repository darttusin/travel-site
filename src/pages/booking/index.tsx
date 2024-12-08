import React, { useState } from 'react';
import './BookingModal.css';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tourTitle: string;
  onConfirm: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, tourTitle, onConfirm }) => {
  if (!isOpen) return null;

  const [email, setEmail] = useState('');

  const handleConfirm = async () => {
    try {
      const response = await fetch('http://localhost:8000/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, tourTitle }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Booking successful:', data);
      onConfirm();
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{tourTitle}</h2>
        <p className="modal-text">Введите свой емейл, мы с вами свяжемся</p>
        <input 
          type="email"
          className="email-input"
          placeholder="Введите ваш email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
        <div className="modal-buttons">
          <button className="modal-button" onClick={onClose}>Закрыть</button>
          <button className="modal-button" onClick={handleConfirm}>Подтвердить</button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;