import React, { useState } from 'react';

const LegalDisclaimer = ({ onAccept, onDecline, isMobile = false }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showFullTerms, setShowFullTerms] = useState(false);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setHasScrolled(true);
    }
  };

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
          maxWidth: isMobile ? '100%' : '600px',
          width: '100%',
          maxHeight: isMobile ? '90vh' : '80vh',
          display: 'flex',
          flexDirection: 'column',
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

        {/* Scrollable Terms Content */}
        <div
          style={{
            flex: 1,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            onScroll={handleScroll}
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: isMobile ? '16px' : '20px',
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
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
              Educational Purpose Only
            </h4>
            <p style={{ marginBottom: '16px' }}>
              The TMS Healing Journey application provides educational
              information about Dr. John Sarno's Tension Myositis Syndrome (TMS)
              approach. This content is for informational purposes only and
              should not replace professional medical advice, diagnosis, or
              treatment.
            </p>

            <h4
              style={{
                color: '#1f2937',
                marginBottom: '12px',
                fontSize: isMobile ? '14px' : '16px',
              }}
            >
              No Medical Advice
            </h4>
            <p style={{ marginBottom: '16px' }}>
              We do not provide medical advice. Always seek the advice of your
              physician or other qualified health provider with any questions
              you may have regarding a medical condition. Never disregard
              professional medical advice or delay seeking it because of
              something you have read in this application.
            </p>

            <h4
              style={{
                color: '#1f2937',
                marginBottom: '12px',
                fontSize: isMobile ? '14px' : '16px',
              }}
            >
              Privacy & Data
            </h4>
            <p style={{ marginBottom: '16px' }}>
              Your journal entries, symptom tracking, and assessment data are
              stored locally on your device. We do not collect, transmit, or
              store your personal health information on external servers. You
              are responsible for backing up your data.
            </p>

            <h4
              style={{
                color: '#1f2937',
                marginBottom: '12px',
                fontSize: isMobile ? '14px' : '16px',
              }}
            >
              Limitation of Liability
            </h4>
            <p style={{ marginBottom: '16px' }}>
              The creators of this application shall not be liable for any
              direct, indirect, incidental, special, or consequential damages
              arising from your use of this application or the information
              contained within it.
            </p>

            <h4
              style={{
                color: '#1f2937',
                marginBottom: '12px',
                fontSize: isMobile ? '14px' : '16px',
              }}
            >
              Emergency Situations
            </h4>
            <p style={{ marginBottom: '16px' }}>
              If you are experiencing a medical emergency, call emergency
              services immediately. This application is not designed for
              emergency use or crisis intervention.
            </p>

            <h4
              style={{
                color: '#1f2937',
                marginBottom: '12px',
                fontSize: isMobile ? '14px' : '16px',
              }}
            >
              Acceptance Renewal
            </h4>
            <p style={{ marginBottom: '16px' }}>
              Your acceptance of these terms expires after one year, at which
              point you will be asked to review and accept them again to
              continue using the application.
            </p>

            {showFullTerms && (
              <div>
                <h4
                  style={{
                    color: '#1f2937',
                    marginBottom: '12px',
                    fontSize: isMobile ? '14px' : '16px',
                  }}
                >
                  Intellectual Property
                </h4>
                <p style={{ marginBottom: '16px' }}>
                  The content in this application is based on the work of Dr.
                  John Sarno and other TMS practitioners. We respect
                  intellectual property rights and provide this application for
                  educational purposes under fair use principles.
                </p>

                <h4
                  style={{
                    color: '#1f2937',
                    marginBottom: '12px',
                    fontSize: isMobile ? '14px' : '16px',
                  }}
                >
                  Modifications
                </h4>
                <p style={{ marginBottom: '16px' }}>
                  We reserve the right to modify these terms at any time.
                  Continued use of the application after changes constitutes
                  acceptance of the modified terms.
                </p>

                <h4
                  style={{
                    color: '#1f2937',
                    marginBottom: '12px',
                    fontSize: isMobile ? '14px' : '16px',
                  }}
                >
                  Contact Information
                </h4>
                <p style={{ marginBottom: '16px' }}>
                  For questions about these terms or the application, please
                  contact us through the appropriate channels. We are committed
                  to addressing concerns and improving the user experience.
                </p>
              </div>
            )}

            {!showFullTerms && (
              <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <button
                  onClick={() => setShowFullTerms(true)}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#2563eb',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: isMobile ? '12px' : '13px',
                    fontWeight: '500',
                    textDecoration: 'underline',
                    padding: '8px',
                    minHeight: '44px',
                  }}
                >
                  Read Full Terms & Conditions
                </button>
              </div>
            )}
          </div>

          {/* Scroll Indicator */}
          {!hasScrolled && !showFullTerms && (
            <div
              style={{
                textAlign: 'center',
                marginTop: '8px',
                fontSize: isMobile ? '11px' : '12px',
                color: '#6b7280',
                fontStyle: 'italic',
              }}
            >
              ↓ Please scroll to read all terms ↓
            </div>
          )}
        </div>

        {/* Acceptance Section */}
        <div
          style={{
            marginTop: isMobile ? '16px' : '20px',
            padding: isMobile ? '16px' : '20px',
            backgroundColor: '#f0f9ff',
            borderRadius: '8px',
            border: '1px solid #bae6fd',
          }}
        >
          <h4
            style={{
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: '600',
              color: '#0369a1',
              marginBottom: '12px',
              textAlign: 'center',
            }}
          >
            🤝 Your Agreement
          </h4>
          <p
            style={{
              fontSize: isMobile ? '12px' : '13px',
              color: '#0369a1',
              lineHeight: '1.5',
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            By clicking "I Accept", you acknowledge that you have read,
            understood, and agree to these terms. You confirm that you
            understand this app is for educational purposes only.
          </p>

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
                fontSize: isMobile ? '14px' : '14px',
                fontWeight: '500',
                minHeight: '44px',
                flex: isMobile ? '1' : 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#fecaca';
                e.target.style.borderColor = '#f87171';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#fee2e2';
                e.target.style.borderColor = '#fecaca';
              }}
            >
              ❌ I Decline
            </button>

            <button
              onClick={onAccept}
              disabled={!hasScrolled && !showFullTerms}
              style={{
                backgroundColor:
                  hasScrolled || showFullTerms ? '#16a34a' : '#d1d5db',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: isMobile ? '14px 20px' : '12px 24px',
                cursor:
                  hasScrolled || showFullTerms ? 'pointer' : 'not-allowed',
                fontSize: isMobile ? '14px' : '14px',
                fontWeight: '500',
                minHeight: '44px',
                flex: isMobile ? '1' : 'none',
                transition: 'all 0.2s ease',
                opacity: hasScrolled || showFullTerms ? 1 : 0.6,
              }}
              onMouseEnter={(e) => {
                if (hasScrolled || showFullTerms) {
                  e.target.style.backgroundColor = '#15803d';
                }
              }}
              onMouseLeave={(e) => {
                if (hasScrolled || showFullTerms) {
                  e.target.style.backgroundColor = '#16a34a';
                }
              }}
            >
              ✅ I Accept & Continue
            </button>
          </div>

          {/* Acceptance Status */}
          {!hasScrolled && !showFullTerms && (
            <p
              style={{
                fontSize: isMobile ? '11px' : '12px',
                color: '#6b7280',
                textAlign: 'center',
                marginTop: '8px',
                fontStyle: 'italic',
              }}
            >
              Please read all terms before accepting
            </p>
          )}
        </div>

        {/* Footer Note */}
        <div
          style={{ textAlign: 'center', marginTop: isMobile ? '12px' : '16px' }}
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
