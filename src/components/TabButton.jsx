import React from 'react';

const TabButton = ({ id, label, active, onClick, isMobile = false }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      style={{
        backgroundColor: active ? '#2563eb' : 'white',
        color: active ? 'white' : '#374151',
        border: '2px solid',
        borderColor: active ? '#2563eb' : '#e5e7eb',
        borderRadius: '8px',
        padding: isMobile ? '14px 8px' : '12px 16px',
        cursor: 'pointer',
        fontSize: isMobile ? '14px' : '16px',
        fontWeight: '500',
        transition: 'all 0.2s ease',
        minHeight: '44px',
        minWidth: isMobile ? '100%' : '120px',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: active
          ? '0 2px 4px rgba(37, 99, 235, 0.2)'
          : '0 1px 3px rgba(0, 0, 0, 0.1)',
        // Handle text wrapping on very small screens
        wordBreak: 'keep-all',
        lineHeight: '1.2',
        // Focus styles for accessibility
        outline: 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.target.style.backgroundColor = '#f9fafb';
          e.target.style.borderColor = '#d1d5db';
          e.target.style.transform = 'translateY(-1px)';
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.target.style.backgroundColor = 'white';
          e.target.style.borderColor = '#e5e7eb';
          e.target.style.transform = 'translateY(0px)';
        }
      }}
      onFocus={(e) => {
        e.target.style.boxShadow = active
          ? '0 2px 4px rgba(37, 99, 235, 0.2), 0 0 0 3px rgba(147, 197, 253, 0.5)'
          : '0 1px 3px rgba(0, 0, 0, 0.1), 0 0 0 3px rgba(147, 197, 253, 0.5)';
      }}
      onBlur={(e) => {
        e.target.style.boxShadow = active
          ? '0 2px 4px rgba(37, 99, 235, 0.2)'
          : '0 1px 3px rgba(0, 0, 0, 0.1)';
      }}
      onTouchStart={(e) => {
        // Add touch feedback for mobile
        e.target.style.transform = 'scale(0.98)';
      }}
      onTouchEnd={(e) => {
        // Reset touch feedback
        setTimeout(() => {
          e.target.style.transform = 'scale(1)';
        }, 100);
      }}
    >
      {label}
    </button>
  );
};

export default TabButton;
