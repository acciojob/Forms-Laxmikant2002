import React from 'react';

const Card = ({ children }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px auto',
      maxWidth: '500px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    }}>
      {children}
    </div>
  );
};

export default Card;
