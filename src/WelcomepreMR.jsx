import React from 'react';

const Welcome = ({ onTakeAssessment, onSkipToApp }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center' }}>
        <h1
          style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '12px',
          }}
        >
          Welcome to TMS Healing Journey
        </h1>
        <p style={{ fontSize: '18px', color: '#6b7280', lineHeight: '1.6' }}>
          Your comprehensive resource for understanding and healing Tension
          Myositis Syndrome using Dr. John Sarno's mind-body approach
        </p>
      </div>

      {/* What is TMS Section */}
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '32px',
        }}
      >
        <h2
          style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '16px',
          }}
        >
          What is TMS?
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: '#374151',
            lineHeight: '1.7',
            marginBottom: '16px',
          }}
        >
          Tension Myositis Syndrome (TMS) is a condition where emotional stress
          and repressed feelings manifest as real physical pain. Dr. John Sarno
          discovered that many chronic pain conditions are actually the result
          of psychological tension rather than structural problems.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              padding: '16px',
              backgroundColor: '#f0fdf4',
              borderRadius: '8px',
              border: '1px solid #bbf7d0',
            }}
          >
            <h4
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#166534',
                marginBottom: '4px',
              }}
            >
              Mind-Body Connection
            </h4>
            <p style={{ fontSize: '13px', color: '#15803d' }}>
              Emotions directly impact physical wellbeing
            </p>
          </div>
          <div
            style={{
              padding: '16px',
              backgroundColor: '#eff6ff',
              borderRadius: '8px',
              border: '1px solid #bfdbfe',
            }}
          >
            <h4
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#1e40af',
                marginBottom: '4px',
              }}
            >
              Real Pain
            </h4>
            <p style={{ fontSize: '13px', color: '#1d4ed8' }}>
              Symptoms are genuine, not imaginary
            </p>
          </div>
          <div
            style={{
              padding: '16px',
              backgroundColor: '#faf5ff',
              borderRadius: '8px',
              border: '1px solid #e9d5ff',
            }}
          >
            <h4
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#7c3aed',
                marginBottom: '4px',
              }}
            >
              Emotional Healing
            </h4>
            <p style={{ fontSize: '13px', color: '#8b5cf6' }}>
              Address root causes, not just symptoms
            </p>
          </div>
        </div>
      </div>

      {/* Choose Your Path */}
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '32px',
        }}
      >
        <h2
          style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Choose Your Path
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {/* Take Assessment Option */}
          <div
            style={{
              border: '2px solid #e5e7eb',
              borderRadius: '12px',
              padding: '24px',
              textAlign: 'center',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#2563eb';
              e.currentTarget.style.backgroundColor = '#f8fafc';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = '#e5e7eb';
              e.currentTarget.style.backgroundColor = 'white';
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📋</div>
            <h3
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '12px',
              }}
            >
              Take the TMS Assessment
            </h3>
            <p
              style={{
                fontSize: '14px',
                color: '#6b7280',
                lineHeight: '1.5',
                marginBottom: '20px',
              }}
            >
              Complete our comprehensive questionnaire to evaluate whether your
              symptoms might be TMS-related. Get personalized recommendations
              based on your responses.
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 20px 0',
                fontSize: '13px',
                color: '#374151',
              }}
            >
              <li style={{ marginBottom: '4px' }}>
                ✓ 15-20 questions across 3 categories
              </li>
              <li style={{ marginBottom: '4px' }}>
                ✓ Instant personalized results
              </li>
              <li style={{ marginBottom: '4px' }}>
                ✓ Tailored healing recommendations
              </li>
              <li style={{ marginBottom: '4px' }}>
                ✓ Track your TMS likelihood score
              </li>
            </ul>
            <button
              onClick={onTakeAssessment}
              style={{
                backgroundColor: '#2563eb',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                width: '100%',
              }}
            >
              Start Assessment
            </button>
            <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '8px' }}>
              Takes about 5-10 minutes
            </p>
          </div>

          {/* Explore App Option */}
          <div
            style={{
              border: '2px solid #e5e7eb',
              borderRadius: '12px',
              padding: '24px',
              textAlign: 'center',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#059669';
              e.currentTarget.style.backgroundColor = '#f8fafc';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = '#e5e7eb';
              e.currentTarget.style.backgroundColor = 'white';
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚀</div>
            <h3
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '12px',
              }}
            >
              Explore the App
            </h3>
            <p
              style={{
                fontSize: '14px',
                color: '#6b7280',
                lineHeight: '1.5',
                marginBottom: '20px',
              }}
            >
              Dive right into learning about TMS, access resources from leading
              practitioners, and start your healing journey. Take the assessment
              anytime later.
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 20px 0',
                fontSize: '13px',
                color: '#374151',
              }}
            >
              <li style={{ marginBottom: '4px' }}>
                ✓ Learn TMS principles and theory
              </li>
              <li style={{ marginBottom: '4px' }}>
                ✓ Access expert videos and resources
              </li>
              <li style={{ marginBottom: '4px' }}>
                ✓ Start journaling and symptom tracking
              </li>
              <li style={{ marginBottom: '4px' }}>
                ✓ Take assessment when ready
              </li>
            </ul>
            <button
              onClick={onSkipToApp}
              style={{
                backgroundColor: '#059669',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                width: '100%',
              }}
            >
              Explore App
            </button>
            <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '8px' }}>
              Jump right in
            </p>
          </div>
        </div>
      </div>

      {/* App Features Preview */}
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '32px',
        }}
      >
        <h2
          style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          What's Inside the App
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
          }}
        >
          <div style={{ textAlign: 'center', padding: '16px' }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>📚</div>
            <h4
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '4px',
              }}
            >
              Learn
            </h4>
            <p style={{ fontSize: '12px', color: '#6b7280' }}>
              TMS principles and mind-body connection
            </p>
          </div>
          <div style={{ textAlign: 'center', padding: '16px' }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>🎥</div>
            <h4
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '4px',
              }}
            >
              Resources
            </h4>
            <p style={{ fontSize: '12px', color: '#6b7280' }}>
              Expert lectures and webinars
            </p>
          </div>
          <div style={{ textAlign: 'center', padding: '16px' }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>✏️</div>
            <h4
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '4px',
              }}
            >
              Journal
            </h4>
            <p style={{ fontSize: '12px', color: '#6b7280' }}>
              Emotional processing and reflection
            </p>
          </div>
          <div style={{ textAlign: 'center', padding: '16px' }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>📊</div>
            <h4
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '4px',
              }}
            >
              Track
            </h4>
            <p style={{ fontSize: '12px', color: '#6b7280' }}>
              Monitor symptoms and patterns
            </p>
          </div>
          <div style={{ textAlign: 'center', padding: '16px' }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>📋</div>
            <h4
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '4px',
              }}
            >
              Assess
            </h4>
            <p style={{ fontSize: '12px', color: '#6b7280' }}>
              Evaluate your TMS likelihood
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div
        style={{
          backgroundColor: '#fef3c7',
          borderRadius: '12px',
          padding: '20px',
          border: '1px solid #fcd34d',
        }}
      >
        <h4
          style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#92400e',
            marginBottom: '8px',
          }}
        >
          ⚠️ Medical Disclaimer
        </h4>
        <p
          style={{
            fontSize: '13px',
            color: '#92400e',
            lineHeight: '1.5',
            margin: 0,
          }}
        >
          This app is for educational purposes only and is not a substitute for
          professional medical advice, diagnosis, or treatment. Always consult
          with qualified healthcare providers for proper evaluation and
          treatment of your symptoms.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
