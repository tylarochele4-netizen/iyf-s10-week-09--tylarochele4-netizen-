import React from 'react';
function Input({ label, type = 'text', value, onChange, placeholder, name, required = false }) {
  return (
    <div style={{ marginBottom: '15px', textAlign: 'left' }}>
      {label && (
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
          {label} {required && <span style={{ color: 'red' }}>*</span>}
        </label>
      )}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={{ 
          width: '100%', 
          padding: '10px', 
          borderRadius: '4px', 
          border: '1px solid #ccc',
          boxSizing: 'border-box'
        }}
      />
    </div>
  );
}

export default Input;
