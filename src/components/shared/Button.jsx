import React from 'react';
function Button({ children, onClick, type = 'button', variant = 'primary', disabled = false }) {
  const styles = {
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    backgroundColor: variant === 'primary' ? '#007bff' : '#6c757d',
    color: 'white',
    border: 'none',
    opacity: disabled ? 0.6 : 1,
    fontSize: '14px',
    fontWeight: 'bold'
  };

  return (
    <button type={type} onClick={onClick} style={styles} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
