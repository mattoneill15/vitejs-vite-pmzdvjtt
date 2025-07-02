import React, { useState } from 'react';

const LegalDisclaimer = ({ onAccept, onDecline }) => {
  const [hasRead, setHasRead] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [acceptedMedical, setAcceptedMedical] = useState(false);

  const canProceed =
    hasRead && acceptedTerms && acceptedPrivacy && acceptedMedical;

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #eff6ff 0%, #faf5ff 100%)',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div
          style={{
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
            color: 'white',
            padding: '24px',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              margin: '0 0 8px 0',
            }}
          >
            📋 Important Information
          </h1>
          <p style={{ margin: 0, opacity: 0.9 }}>
            Please review these important terms before using our healing
            application
          </p>
        </div>

        {/* Content */}
        <div style={{ padding: '32px', maxHeight: '60vh', overflowY: 'auto' }}>
          {/* Medical Disclaimer */}
          <div
            style={{
              marginBottom: '32px',
              padding: '20px',
              backgroundColor: '#fef7ff',
              borderRadius: '8px',
              border: '1px solid #e9d5ff',
            }}
          >
            <h2
              style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#7c2d12',
                marginBottom: '12px',
              }}
            >
              🏥 Medical Information
            </h2>
            <div
              style={{ fontSize: '14px', color: '#92400e', lineHeight: '1.6' }}
            >
              <p>
                <strong>Educational Purpose:</strong> This application is
                designed for educational and informational purposes to support
                your wellness journey.
              </p>

              <p>This application is not intended to:</p>
              <ul>
                <li>
                  Diagnose, treat, cure, or prevent any disease or medical
                  condition
                </li>
                <li>
                  Replace professional medical advice, diagnosis, or treatment
                </li>
                <li>Provide medical recommendations or prescriptions</li>
                <li>
                  Serve as a substitute for consultation with qualified
                  healthcare professionals
                </li>
              </ul>

              <p>
                <strong>FDA Information:</strong> This application has not been
                evaluated by the Food and Drug Administration and is not
                intended as a medical device or treatment.
              </p>

              <p>
                <strong>Healthcare Guidance:</strong> Always consult with your
                physician or other qualified healthcare provider before making
                any healthcare decisions. Never disregard professional medical
                advice or delay seeking it because of information from this
                application.
              </p>

              <p>
                <strong>Emergency Situations:</strong> If you are experiencing a
                medical emergency, call 911 immediately. This application is not
                designed for emergency situations.
              </p>

              <p>
                <strong>Professional Relationship:</strong> Use of this
                application does not create a doctor-patient relationship with
                any healthcare provider.
              </p>
            </div>
          </div>

          {/* Terms of Service */}
          <div
            style={{
              marginBottom: '32px',
              padding: '20px',
              backgroundColor: '#f0f9ff',
              borderRadius: '8px',
              border: '1px solid #bae6fd',
            }}
          >
            <h2
              style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#0c4a6e',
                marginBottom: '12px',
              }}
            >
              📋 Terms of Service
            </h2>
            <div
              style={{ fontSize: '14px', color: '#0c4a6e', lineHeight: '1.6' }}
            >
              <p>
                <strong>1. Agreement to Terms</strong>
                <br />
                By using this application, you agree to these Terms of Service
                and applicable laws.
              </p>

              <p>
                <strong>2. License for Use</strong>
                <br />
                This application is licensed for personal, non-commercial use to
                support your wellness journey.
              </p>

              <p>
                <strong>3. Your Responsibilities</strong>
                <br />
                You agree to:
              </p>
              <ul>
                <li>Provide accurate information when using the app</li>
                <li>Maintain the confidentiality of your personal data</li>
                <li>
                  Use the application in compliance with all applicable laws
                </li>
                <li>Respect the intellectual property rights of the content</li>
              </ul>

              <p>
                <strong>4. Appropriate Use</strong>
                <br />
                Please use this application responsibly and avoid:
              </p>
              <ul>
                <li>Any unlawful activities</li>
                <li>Attempting to access other users' private information</li>
                <li>Transmitting harmful code or content</li>
                <li>Interfering with other users' experience</li>
              </ul>

              <p>
                <strong>5. Service Limitations</strong>
                <br />
                We provide this service "as is" and cannot guarantee
                uninterrupted access or specific outcomes from using the
                application.
              </p>

              <p>
                <strong>6. Updates to Terms</strong>
                <br />
                We may update these terms occasionally. Continued use indicates
                acceptance of any modifications.
              </p>
            </div>
          </div>

          {/* Privacy Policy */}
          <div
            style={{
              marginBottom: '32px',
              padding: '20px',
              backgroundColor: '#f0fdf4',
              borderRadius: '8px',
              border: '1px solid #bbf7d0',
            }}
          >
            <h2
              style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#166534',
                marginBottom: '12px',
              }}
            >
              🔒 Privacy & Data Protection
            </h2>
            <div
              style={{ fontSize: '14px', color: '#166534', lineHeight: '1.6' }}
            >
              <p>
                <strong>Effective Date:</strong>{' '}
                {new Date().toLocaleDateString()}
              </p>

              <p>
                <strong>1. Information We Collect</strong>
                <br />
                We collect only the information you choose to provide,
                including:
              </p>
              <ul>
                <li>Personal reflections and journal entries</li>
                <li>Symptom tracking data for your personal use</li>
                <li>Assessment responses to provide personalized insights</li>
                <li>Basic usage data to improve our service</li>
              </ul>

              <p>
                <strong>2. How We Use Your Information</strong>
              </p>
              <ul>
                <li>To provide personalized insights and recommendations</li>
                <li>To ensure the application functions properly</li>
                <li>To improve our services based on usage patterns</li>
                <li>To communicate important updates about the service</li>
              </ul>

              <p>
                <strong>3. Data Security</strong>
                <br />
                Your data is stored securely on your device. We implement
                industry-standard security measures to protect your information.
              </p>

              <p>
                <strong>4. Information Sharing</strong>
                <br />
                We respect your privacy and do not sell or rent your personal
                information. We may share anonymized, aggregated data for
                research purposes only with your consent.
              </p>

              <p>
                <strong>5. Your Privacy Rights</strong>
                <br />
                You have the right to:
              </p>
              <ul>
                <li>Access and review your personal data</li>
                <li>Correct any inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Export your data for personal use</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <p>
                <strong>6. Data Protection Standards</strong>
                <br />
                We follow healthcare-level security practices to protect your
                sensitive information, even though this is not a medical
                application.
              </p>

              <p>
                <strong>7. International Use</strong>
                <br />
                If you use this application outside the United States, your
                information may be processed in the United States where our
                servers are located.
              </p>

              <p>
                <strong>8. Children's Privacy</strong>
                <br />
                This application is intended for adults (18+) and we do not
                knowingly collect information from children.
              </p>
            </div>
          </div>

          {/* Liability Information */}
          <div
            style={{
              marginBottom: '32px',
              padding: '20px',
              backgroundColor: '#fffbeb',
              borderRadius: '8px',
              border: '1px solid #fde68a',
            }}
          >
            <h2
              style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#78350f',
                marginBottom: '12px',
              }}
            >
              ⚖️ Liability & Risk Information
            </h2>
            <div
              style={{ fontSize: '14px', color: '#78350f', lineHeight: '1.6' }}
            >
              <p>
                <strong>Understanding Risks:</strong> While this application is
                designed to be helpful, you acknowledge that any wellness
                activity carries some level of personal responsibility.
              </p>

              <p>
                <strong>Personal Responsibility:</strong> You agree to use this
                application responsibly and understand that your wellness
                journey is ultimately your own responsibility.
              </p>

              <p>
                <strong>Service Limitations:</strong> This application is
                provided on an "as is" basis. We cannot guarantee specific
                outcomes or that the service will meet all your individual
                needs.
              </p>

              <p>
                <strong>Professional Guidance:</strong> We strongly encourage
                working with qualified healthcare professionals as part of your
                overall wellness strategy.
              </p>

              <p>
                <strong>Limitation of Claims:</strong> Any disputes will be
                resolved through appropriate legal channels, and our liability
                is limited to the extent permitted by law.
              </p>
            </div>
          </div>

          {/* Intellectual Property */}
          <div
            style={{
              marginBottom: '32px',
              padding: '20px',
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
            }}
          >
            <h2
              style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#475569',
                marginBottom: '12px',
              }}
            >
              📚 Content & Intellectual Property
            </h2>
            <div
              style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6' }}
            >
              <p>
                <strong>Application Content:</strong> The content, design, and
                functionality of this application are protected by intellectual
                property laws.
              </p>

              <p>
                <strong>Third-Party Content:</strong> We acknowledge and respect
                the work of Dr. John Sarno and other researchers whose methods
                inform this application.
              </p>

              <p>
                <strong>Your Content:</strong> You retain ownership of any
                personal content you create. By using the application, you grant
                us permission to process your content solely to provide the
                service.
              </p>

              <p>
                <strong>Respectful Use:</strong> Please use our content
                respectfully and in accordance with these terms.
              </p>
            </div>
          </div>
        </div>

        {/* Acknowledgment Checkboxes */}
        <div
          style={{
            padding: '24px',
            backgroundColor: '#f9fafb',
            borderTop: '1px solid #e5e7eb',
          }}
        >
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                cursor: 'pointer',
                marginBottom: '12px',
              }}
            >
              <input
                type="checkbox"
                checked={hasRead}
                onChange={(e) => setHasRead(e.target.checked)}
                style={{ marginRight: '12px', marginTop: '2px' }}
              />
              <span style={{ fontSize: '14px', color: '#374151' }}>
                I have carefully read and understand all of the above
                information
              </span>
            </label>

            <label
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                cursor: 'pointer',
                marginBottom: '12px',
              }}
            >
              <input
                type="checkbox"
                checked={acceptedMedical}
                onChange={(e) => setAcceptedMedical(e.target.checked)}
                style={{ marginRight: '12px', marginTop: '2px' }}
              />
              <span style={{ fontSize: '14px', color: '#374151' }}>
                I understand this is an educational wellness app, not a medical
                device
              </span>
            </label>

            <label
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                cursor: 'pointer',
                marginBottom: '12px',
              }}
            >
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                style={{ marginRight: '12px', marginTop: '2px' }}
              />
              <span style={{ fontSize: '14px', color: '#374151' }}>
                I agree to the Terms of Service and understand my
                responsibilities
              </span>
            </label>

            <label
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                cursor: 'pointer',
                marginBottom: '20px',
              }}
            >
              <input
                type="checkbox"
                checked={acceptedPrivacy}
                onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                style={{ marginRight: '12px', marginTop: '2px' }}
              />
              <span style={{ fontSize: '14px', color: '#374151' }}>
                I agree to the Privacy Policy and data handling practices
              </span>
            </label>
          </div>

          <div
            style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}
          >
            <button
              onClick={onDecline}
              style={{
                backgroundColor: '#6b7280',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '500',
              }}
            >
              Not Right Now
            </button>
            <button
              onClick={onAccept}
              disabled={!canProceed}
              style={{
                backgroundColor: canProceed ? '#059669' : '#d1d5db',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                cursor: canProceed ? 'pointer' : 'not-allowed',
                fontSize: '16px',
                fontWeight: '500',
              }}
            >
              Accept & Continue
            </button>
          </div>

          <p
            style={{
              fontSize: '12px',
              color: '#6b7280',
              textAlign: 'center',
              marginTop: '16px',
              margin: '16px 0 0 0',
            }}
          >
            By continuing, you acknowledge understanding these terms and agree
            to use this wellness application responsibly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalDisclaimer;
