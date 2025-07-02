import React from 'react';

const Symptoms = ({
  symptoms,
  newSymptom,
  setNewSymptom,
  saveSymptom,
  deleteSymptom,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '24px',
        }}
      >
        <h3
          style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}
        >
          Log Symptoms
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px',
              }}
            >
              Symptom Description
            </label>
            <input
              type="text"
              value={newSymptom.description}
              onChange={(e) =>
                setNewSymptom({ ...newSymptom, description: e.target.value })
              }
              placeholder="e.g., Lower back pain, neck tension, headache..."
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px',
              }}
            >
              Intensity (1-10): {newSymptom.intensity}
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={newSymptom.intensity}
              onChange={(e) =>
                setNewSymptom({
                  ...newSymptom,
                  intensity: parseInt(e.target.value),
                })
              }
              style={{ width: '100%' }}
            />
          </div>

          <div>
            <label
              style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px',
              }}
            >
              Emotional State
            </label>
            <input
              type="text"
              value={newSymptom.emotional_state}
              onChange={(e) =>
                setNewSymptom({
                  ...newSymptom,
                  emotional_state: e.target.value,
                })
              }
              placeholder="e.g., stressed, anxious, angry, frustrated..."
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
              }}
            />
          </div>

          <button
            onClick={saveSymptom}
            style={{
              backgroundColor: '#059669',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            ➕ Log Symptom
          </button>
        </div>
      </div>

      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '24px',
        }}
      >
        <h3
          style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}
        >
          Symptom History
        </h3>
        {symptoms.length === 0 ? (
          <p style={{ color: '#6b7280', fontStyle: 'italic' }}>
            No symptoms logged yet. Start tracking to identify patterns!
          </p>
        ) : (
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {symptoms.slice(0, 10).map((symptom) => (
              <div
                key={symptom.id}
                style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '16px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '8px',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <h4
                      style={{
                        fontWeight: '500',
                        color: '#1f2937',
                        marginBottom: '4px',
                      }}
                    >
                      {symptom.description}
                    </h4>
                    <p style={{ fontSize: '14px', color: '#6b7280' }}>
                      {symptom.date}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteSymptom(symptom.id)}
                    style={{
                      color: '#ef4444',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      marginLeft: '8px',
                      fontSize: '14px',
                    }}
                  >
                    🗑️
                  </button>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    fontSize: '14px',
                  }}
                >
                  <span style={{ color: '#dc2626' }}>
                    Intensity: {symptom.intensity}/10
                  </span>
                  {symptom.emotional_state && (
                    <span style={{ color: '#2563eb' }}>
                      Emotion: {symptom.emotional_state}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Symptoms;
