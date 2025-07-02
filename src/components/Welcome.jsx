import React from 'react';

const Welcome = ({ onTakeAssessment, onSkipToApp, isMobile = false }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: isMobile ? '24px' : '32px',
        padding: isMobile ? '20px' : '40px 20px',
        textAlign: 'center',
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          padding: isMobile ? '24px' : '40px',
          maxWidth: isMobile ? '100%' : '600px',
          width: '100%',
        }}
      >
        <div style={{ marginBottom: isMobile ? '20px' : '24px' }}>
          <div
            style={{
              fontSize: isMobile ? '48px' : '64px',
              marginBottom: '16px',
            }}
          >
            🌟
          </div>
          <h1
            style={{
              fontSize: isMobile ? 'clamp(24px, 6vw, 32px)' : '36px',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '16px',
              lineHeight: '1.2',
            }}
          >
            Welcome to Your Healing Journey
          </h1>
          <p
            style={{
              fontSize: isMobile ? '16px' : '18px',
              color: '#4338ca',
              lineHeight: '1.6',
              margin: 0,
            }}
          >
            Discover the power of mind-body healing with Dr. John Sarno's TMS
            approach
          </p>
        </div>

        {/* Key Benefits */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '16px' : '20px',
            marginBottom: isMobile ? '24px' : '32px',
          }}
        >
          <div
            style={{
              backgroundColor: '#f0f9ff',
              borderRadius: '12px',
              padding: isMobile ? '16px' : '20px',
              border: '1px solid #bae6fd',
            }}
          >
            <div
              style={{
                fontSize: isMobile ? '24px' : '32px',
                marginBottom: '8px',
              }}
            >
              📊
            </div>
            <h3
              style={{
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '600',
                color: '#0369a1',
                marginBottom: '8px',
              }}
            >
              Track Your Progress
            </h3>
            <p
              style={{
                fontSize: isMobile ? '12px' : '13px',
                color: '#0369a1',
                lineHeight: '1.4',
                margin: 0,
              }}
            >
              Monitor symptoms and emotions to identify healing patterns
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#f0fdf4',
              borderRadius: '12px',
              padding: isMobile ? '16px' : '20px',
              border: '1px solid #bbf7d0',
            }}
          >
            <div
              style={{
                fontSize: isMobile ? '24px' : '32px',
                marginBottom: '8px',
              }}
            >
              📚
            </div>
            <h3
              style={{
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '600',
                color: '#15803d',
                marginBottom: '8px',
              }}
            >
              Learn & Understand
            </h3>
            <p
              style={{
                fontSize: isMobile ? '12px' : '13px',
                color: '#15803d',
                lineHeight: '1.4',
                margin: 0,
              }}
            >
              Access expert resources and educational content
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#fef3c7',
              borderRadius: '12px',
              padding: isMobile ? '16px' : '20px',
              border: '1px solid #fcd34d',
              gridColumn: isMobile ? '1' : 'auto',
            }}
          >
            <div
              style={{
                fontSize: isMobile ? '24px' : '32px',
                marginBottom: '8px',
              }}
            >
              ✍️
            </div>
            <h3
              style={{
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '600',
                color: '#d97706',
                marginBottom: '8px',
              }}
            >
              Journal & Reflect
            </h3>
            <p
              style={{
                fontSize: isMobile ? '12px' : '13px',
                color: '#d97706',
                lineHeight: '1.4',
                margin: 0,
              }}
            >
              Process emotions through guided journaling
            </p>
          </div>
        </div>

        {/* Getting Started */}
        <div
          style={{
            backgroundColor: '#faf5ff',
            borderRadius: '12px',
            padding: isMobile ? '20px' : '24px',
            border: '1px solid #e9d5ff',
            marginBottom: isMobile ? '24px' : '32px',
          }}
        >
          <h3
            style={{
              fontSize: isMobile ? '16px' : '18px',
              fontWeight: '600',
              color: '#7c3aed',
              marginBottom: '12px',
            }}
          >
            🚀 Ready to Begin?
          </h3>
          <p
            style={{
              fontSize: isMobile ? '14px' : '15px',
              color: '#7c3aed',
              lineHeight: '1.6',
              margin: 0,
            }}
          >
            We recommend starting with our TMS assessment to understand your
            unique healing path. This will help personalize your experience and
            provide targeted guidance.
          </p>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '12px' : '16px',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={onTakeAssessment}
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: isMobile ? '16px 24px' : '14px 28px',
              cursor: 'pointer',
              fontSize: isMobile ? '16px' : '16px',
              fontWeight: '600',
              minHeight: '44px',
              flex: isMobile ? '1' : 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#1d4ed8';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 16px rgba(37, 99, 235, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#2563eb';
              e.target.style.transform = 'translateY(0px)';
              e.target.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
            }}
          >
            📋 Take TMS Assessment
          </button>

          <button
            onClick={onSkipToApp}
            style={{
              backgroundColor: 'white',
              color: '#374151',
              border: '2px solid #e5e7eb',
              borderRadius: '12px',
              padding: isMobile ? '16px 24px' : '14px 28px',
              cursor: 'pointer',
              fontSize: isMobile ? '16px' : '16px',
              fontWeight: '600',
              minHeight: '44px',
              flex: isMobile ? '1' : 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f9fafb';
              e.target.style.borderColor = '#d1d5db';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.borderColor = '#e5e7eb';
              e.target.style.transform = 'translateY(0px)';
            }}
          >
            🏠 Explore App First
          </button>
        </div>
      </div>

      {/* What to Expect */}
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
          padding: isMobile ? '20px' : '32px',
          maxWidth: isMobile ? '100%' : '700px',
          width: '100%',
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? '20px' : '24px',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          🌈 What to Expect on Your Journey
        </h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '12px' : '16px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: isMobile ? '12px' : '16px',
              padding: isMobile ? '12px' : '16px',
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
            }}
          >
            <div
              style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                borderRadius: '50%',
                width: isMobile ? '28px' : '32px',
                height: isMobile ? '28px' : '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: 'bold',
                flexShrink: 0,
              }}
            >
              1
            </div>
            <div>
              <h4
                style={{
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '4px',
                }}
              >
                Understand Your Pain
              </h4>
              <p
                style={{
                  fontSize: isMobile ? '13px' : '14px',
                  color: '#6b7280',
                  lineHeight: '1.5',
                  margin: 0,
                }}
              >
                Learn how emotions and stress can create real physical symptoms
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: isMobile ? '12px' : '16px',
              padding: isMobile ? '12px' : '16px',
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
            }}
          >
            <div
              style={{
                backgroundColor: '#10b981',
                color: 'white',
                borderRadius: '50%',
                width: isMobile ? '28px' : '32px',
                height: isMobile ? '28px' : '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: 'bold',
                flexShrink: 0,
              }}
            >
              2
            </div>
            <div>
              <h4
                style={{
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '4px',
                }}
              >
                Track & Reflect
              </h4>
              <p
                style={{
                  fontSize: isMobile ? '13px' : '14px',
                  color: '#6b7280',
                  lineHeight: '1.5',
                  margin: 0,
                }}
              >
                Use our tools to monitor symptoms and process emotions through
                journaling
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: isMobile ? '12px' : '16px',
              padding: isMobile ? '12px' : '16px',
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
            }}
          >
            <div
              style={{
                backgroundColor: '#f59e0b',
                color: 'white',
                borderRadius: '50%',
                width: isMobile ? '28px' : '32px',
                height: isMobile ? '28px' : '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: 'bold',
                flexShrink: 0,
              }}
            >
              3
            </div>
            <div>
              <h4
                style={{
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '4px',
                }}
              >
                Experience Healing
              </h4>
              <p
                style={{
                  fontSize: isMobile ? '13px' : '14px',
                  color: '#6b7280',
                  lineHeight: '1.5',
                  margin: 0,
                }}
              >
                Watch as understanding and emotional awareness lead to symptom
                relief
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Encouragement */}
      <div
        style={{
          background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
          borderRadius: '12px',
          padding: isMobile ? '20px' : '24px',
          border: '1px solid #bbf7d0',
          maxWidth: isMobile ? '100%' : '500px',
          width: '100%',
        }}
      >
        <h3
          style={{
            fontSize: isMobile ? '16px' : '18px',
            fontWeight: '600',
            color: '#15803d',
            marginBottom: '12px',
          }}
        >
          💚 You're Taking a Brave Step
        </h3>
        <p
          style={{
            fontSize: isMobile ? '14px' : '15px',
            color: '#15803d',
            lineHeight: '1.6',
            margin: 0,
          }}
        >
          Thousands of people have found relief through TMS healing. Your pain
          is real, and so is the possibility of recovery. This journey takes
          courage, and you've already begun by being here.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
