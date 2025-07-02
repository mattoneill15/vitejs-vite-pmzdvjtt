import React from 'react';

const TabButton = ({ id, label, active, onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: '8px 16px',
      margin: '4px',
      backgroundColor: active ? '#2563eb' : '#f3f4f6',
      color: active ? 'white' : '#374151',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
    }}
  >
    {label}
  </button>
);

export default TabButton;
