import React, { useState } from 'react';

const LegalDisclaimer = ({ onAccept, onDecline, isMobile = false }) => {
  const [hasAgreed, setHasAgreed] = useState(false);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '16px' : '20px',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
          padding: isMobile ? '24px' : '40px',
          maxWidth: isMobile ? '100%' : '700px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '20px' : '24px',
          }}
        >
          <div
            style={{
              fontSize: isMobile ? '32px' : '48px',
              marginBottom: '12px',
            }}
          >
            ⚖️
          </div>
          <h1
            style={{
              fontSize: isMobile ? 'clamp(20px, 5vw, 24px)' : '28px',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '8px',
              lineHeight: '1.2',
            }}
          >
            Terms of Use & Privacy Policy
          </h1>
          <p
            style={{
              fontSize: isMobile ? '14px' : '16px',
              color: '#6b7280',
              lineHeight: '1.4',
              margin: 0,
            }}
          >
            Please review and accept to continue
          </p>
        </div>

        {/* Important Notice */}
        <div
          style={{
            backgroundColor: '#fef3c7',
            borderRadius: '8px',
            padding: isMobile ? '16px' : '20px',
            border: '1px solid #fcd34d',
            marginBottom: isMobile ? '20px' : '24px',
          }}
        >
          <h3
            style={{
              fontSize: isMobile ? '16px' : '18px',
              fontWeight: '600',
              color: '#92400e',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            ⚠️ Important Medical Disclaimer
          </h3>
          <p
            style={{
              fontSize: isMobile ? '13px' : '14px',
              color: '#92400e',
              lineHeight: '1.5',
              margin: 0,
            }}
          >
            This application is for educational purposes only and is not
            intended to provide medical advice, diagnosis, or treatment. Always
            consult with qualified healthcare professionals regarding your
            health conditions.
          </p>
        </div>

        {/* Terms Content - No Scrolling Required */}
        <div
          style={{
            backgroundColor: '#f8fafc',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
            padding: isMobile ? '16px' : '20px',
            marginBottom: isMobile ? '20px' : '24px',
            fontSize: isMobile ? '13px' : '14px',
            lineHeight: '1.6',
            color: '#374151',
          }}
        >
          <h4
            style={{
              color: '#1f2937',
              marginBottom: '12px',
              fontSize: isMobile ? '14px' : '16px',
            }}
          >
            Key Terms Summary
          </h4>
          
          <div style={{ marginBottom: '16px' }}>
            <strong>Educational Purpose:</strong> This app provides educational information about TMS and should not replace professional medical advice.
          </div>
          
          <div style={{ marginBottom: '16px' }}>
            <strong>Privacy:</strong> Your data is stored locally on your device. We do not collect or transmit personal health information.
          </div>
          
          <div style={{ marginBottom: '16px' }}>
            <strong>No Medical Advice:</strong> Always consult healthcare professionals for medical conditions. Never delay seeking medical advice.
          </div>
          
          <div style={{ marginBottom: '16px' }}>
            <strong>Emergency:</strong> This app is not for emergencies. Call emergency services if needed.
          </div>
          
          <div style={{ marginBottom: '16px' }}>
            <strong>Liability:</strong> Use at your own risk. We are not liable for damages arising from app use.
          </div>
          
          <div>
            <strong>Updates:</strong> Terms may be updated. Continued use constitutes acceptance.
          </div>
        </div>

        {/* Confirmation Checkbox */}
        <div
          style={{
            backgroundColor: '#f0f9ff',
            borderRadius: '8px',
            border: '1px solid #bae6fd',
            padding: isMobile ? '16px' : '20px',
            marginBottom: isMobile ? '16px' : '20px',
          }}
        >
          <label
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              cursor: 'pointer',
              fontSize: isMobile ? '13px' : '14px',
              lineHeight: '1.5',
              color: '#0369a1',
            }}
          >
            <input
              type="checkbox"
              checked={hasAgreed}
              onChange={(e) => setHasAgreed(e.target.checked)}
              style={{
                width: '18px',
                height: '18px',
                marginTop: '2px',
                cursor: 'pointer',
                accentColor: '#2563eb',
              }}
            />
            <span>
              <strong>I acknowledge that:</strong>
              <br />
              • I have read and understand these terms
              <br />
              • This app is for educational purposes only
              <br />
              • I will consult healthcare professionals for medical advice
              <br />
              • I understand the privacy and liability limitations
            </span>
          </label>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            gap: isMobile ? '8px' : '12px',
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <button
            onClick={onDecline}
            style={{
              backgroundColor: '#fee2e2',
              color: '#b91c1c',
              border: '1px solid #fecaca',
              borderRadius: '8px',
              padding: isMobile ? '14px 20px' : '12px 24px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              minHeight: '44px',
              flex: isMobile ? '1' : 'none',
              transition: 'all 0.2s ease',
            }}
          >
            ❌ I Decline
          </button>

          <button
            onClick={onAccept}
            disabled={!hasAgreed}
            style={{
              backgroundColor: hasAgreed ? '#16a34a' : '#d1d5db',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: isMobile ? '14px 20px' : '12px 24px',
              cursor: hasAgreed ? 'pointer' : 'not-allowed',
              fontSize: '14px',
              fontWeight: '500',
              minHeight: '44px',
              flex: isMobile ? '1' : 'none',
              transition: 'all 0.2s ease',
              opacity: hasAgreed ? 1 : 0.6,
            }}
          >
            ✅ I Accept & Continue
          </button>
        </div>

        {/* Status Message */}
        {!hasAgreed && (
          <p
            style={{
              fontSize: isMobile ? '11px' : '12px',
              color: '#6b7280',
              textAlign: 'center',
              marginTop: '12px',
              fontStyle: 'italic',
            }}
          >
            Please check the box above to enable the Accept button
          </p>
        )}

        {/* Footer Note */}
        <div
          style={{ 
            textAlign: 'center', 
            marginTop: isMobile ? '20px' : '24px',
            paddingTop: isMobile ? '16px' : '20px',
            borderTop: '1px solid #e5e7eb'
          }}
        >
          <p
            style={{
              fontSize: isMobile ? '10px' : '11px',
              color: '#9ca3af',
              margin: 0,
              lineHeight: '1.4',
            }}
          >
            This acceptance will be valid for one year from today's date
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalDisclaimer;
