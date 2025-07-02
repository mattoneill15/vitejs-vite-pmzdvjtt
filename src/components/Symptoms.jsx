import React from 'react';

const Symptoms = ({
  symptoms,
  newSymptom,
  setNewSymptom,
  saveSymptom,
  deleteSymptom,
  isMobile = false,
}) => {
  const handleInputChange = (field, value) => {
    setNewSymptom((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    if (newSymptom.description.trim()) {
      saveSymptom();
    }
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString();
    } catch {
      return dateString;
    }
  };

  const getIntensityColor = (intensity) => {
    if (intensity <= 3)
      return { bg: '#dcfce7', border: '#16a34a', text: '#15803d' };
    if (intensity <= 6)
      return { bg: '#fef3c7', border: '#d97706', text: '#b45309' };
    return { bg: '#fee2e2', border: '#dc2626', text: '#b91c1c' };
  };

  const getIntensityLabel = (intensity) => {
    if (intensity <= 2) return 'Mild';
    if (intensity <= 4) return 'Low';
    if (intensity <= 6) return 'Moderate';
    if (intensity <= 8) return 'High';
    return 'Severe';
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '16px' : '24px',
        padding: isMobile ? '0 8px' : '0',
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: isMobile ? '16px' : '24px',
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? 'clamp(20px, 5vw, 28px)' : '28px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '8px',
            lineHeight: '1.2',
          }}
        >
          📊 Symptom Tracking
        </h2>
        <p
          style={{
            color: '#6b7280',
            fontSize: isMobile ? '14px' : '16px',
            lineHeight: '1.4',
          }}
        >
          Monitor your symptoms to identify patterns and triggers
        </p>
      </div>

      {/* Add New Symptom */}
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: isMobile ? '16px' : '24px',
        }}
      >
        <h3
          style={{
            fontSize: isMobile ? '18px' : '20px',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          ➕ Log New Symptom
        </h3>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '16px' : '20px',
          }}
        >
          {/* Symptom Description */}
          <div>
            <label
              style={{
                display: 'block',
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px',
              }}
            >
              🏥 Symptom Description
            </label>
            <textarea
              value={newSymptom.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Describe your symptom (e.g., lower back pain, headache, neck tension, fatigue...)"
              style={{
                width: '100%',
                minHeight: isMobile ? '80px' : '100px',
                padding: isMobile ? '12px' : '12px',
                borderRadius: '8px',
                border: '2px solid #e5e7eb',
                fontSize: isMobile ? '16px' : '14px', // 16px on mobile prevents zoom
                lineHeight: '1.4',
                resize: 'vertical',
                outline: 'none',
                fontFamily: 'inherit',
                backgroundColor: '#fafafa',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#d97706')}
              onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
            />
          </div>

          {/* Intensity Scale */}
          <div>
            <label
              style={{
                display: 'block',
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px',
              }}
            >
              📈 Pain/Discomfort Level (1-10)
            </label>
            <div style={{ marginBottom: '12px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '8px' : '12px',
                  marginBottom: '8px',
                }}
              >
                <span
                  style={{
                    fontSize: isMobile ? '12px' : '14px',
                    color: '#6b7280',
                    minWidth: '30px',
                  }}
                >
                  1
                </span>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={newSymptom.intensity}
                  onChange={(e) =>
                    handleInputChange('intensity', parseInt(e.target.value))
                  }
                  style={{
                    flex: 1,
                    height: isMobile ? '8px' : '6px',
                    borderRadius: '3px',
                    background: `linear-gradient(to right, #16a34a 0%, #d97706 50%, #dc2626 100%)`,
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                />
                <span
                  style={{
                    fontSize: isMobile ? '12px' : '14px',
                    color: '#6b7280',
                    minWidth: '30px',
                  }}
                >
                  10
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    backgroundColor: getIntensityColor(newSymptom.intensity).bg,
                    color: getIntensityColor(newSymptom.intensity).text,
                    padding: isMobile ? '8px 16px' : '6px 12px',
                    borderRadius: '20px',
                    fontSize: isMobile ? '16px' : '14px',
                    fontWeight: '600',
                    border: `2px solid ${
                      getIntensityColor(newSymptom.intensity).border
                    }`,
                  }}
                >
                  {newSymptom.intensity}/10 -{' '}
                  {getIntensityLabel(newSymptom.intensity)}
                </span>
              </div>
            </div>
          </div>

          {/* Emotional State */}
          <div>
            <label
              style={{
                display: 'block',
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px',
              }}
            >
              💭 Emotional State (Optional)
            </label>
            <input
              type="text"
              value={newSymptom.emotional_state}
              onChange={(e) =>
                handleInputChange('emotional_state', e.target.value)
              }
              placeholder="How are you feeling emotionally? (stressed, anxious, angry, sad...)"
              style={{
                width: '100%',
                padding: isMobile ? '12px' : '12px',
                borderRadius: '8px',
                border: '2px solid #e5e7eb',
                fontSize: isMobile ? '16px' : '14px', // 16px on mobile prevents zoom
                outline: 'none',
                fontFamily: 'inherit',
                backgroundColor: '#fafafa',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#d97706')}
              onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
            />
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            disabled={!newSymptom.description.trim()}
            style={{
              backgroundColor: newSymptom.description.trim()
                ? '#d97706'
                : '#d1d5db',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: isMobile ? '14px 24px' : '12px 20px',
              cursor: newSymptom.description.trim() ? 'pointer' : 'not-allowed',
              fontSize: isMobile ? '16px' : '14px',
              fontWeight: '500',
              minHeight: '44px',
              width: isMobile ? '100%' : 'auto',
              alignSelf: isMobile ? 'stretch' : 'flex-start',
              transition: 'background-color 0.2s ease',
            }}
          >
            💾 Save Symptom
          </button>
        </div>
      </div>

      {/* Symptoms List */}
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: isMobile ? '16px' : '24px',
        }}
      >
        <h3
          style={{
            fontSize: isMobile ? '18px' : '20px',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          📋 Your Symptom History ({symptoms.length})
        </h3>

        {symptoms.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: isMobile ? '24px 16px' : '40px 20px',
              backgroundColor: '#fef3c7',
              borderRadius: '8px',
              border: '1px dashed #fcd34d',
            }}
          >
            <div
              style={{
                fontSize: isMobile ? '32px' : '48px',
                marginBottom: '16px',
              }}
            >
              📊
            </div>
            <h4
              style={{
                fontSize: isMobile ? '16px' : '18px',
                fontWeight: '600',
                color: '#92400e',
                marginBottom: '8px',
              }}
            >
              No symptoms tracked yet
            </h4>
            <p
              style={{
                fontSize: isMobile ? '14px' : '16px',
                color: '#b45309',
                lineHeight: '1.5',
                margin: 0,
              }}
            >
              Start tracking your symptoms to identify patterns and triggers
            </p>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '12px' : '16px',
            }}
          >
            {symptoms.map((symptom) => {
              const colors = getIntensityColor(symptom.intensity);
              return (
                <div
                  key={symptom.id}
                  style={{
                    backgroundColor: colors.bg,
                    borderRadius: '8px',
                    padding: isMobile ? '16px' : '20px',
                    border: `2px solid ${colors.border}`,
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '12px',
                      flexDirection: isMobile ? 'column' : 'row',
                      gap: isMobile ? '8px' : '0',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        flexWrap: 'wrap',
                      }}
                    >
                      <span
                        style={{
                          fontSize: isMobile ? '12px' : '13px',
                          color: colors.text,
                          fontWeight: '500',
                        }}
                      >
                        📅 {formatDate(symptom.date)}
                      </span>
                      <span
                        style={{
                          backgroundColor: colors.border,
                          color: 'white',
                          padding: isMobile ? '4px 8px' : '2px 6px',
                          borderRadius: '12px',
                          fontSize: isMobile ? '11px' : '10px',
                          fontWeight: '600',
                        }}
                      >
                        {symptom.intensity}/10
                      </span>
                      <span
                        style={{
                          backgroundColor: 'white',
                          color: colors.text,
                          padding: isMobile ? '4px 8px' : '2px 6px',
                          borderRadius: '12px',
                          fontSize: isMobile ? '11px' : '10px',
                          fontWeight: '500',
                          border: `1px solid ${colors.border}`,
                        }}
                      >
                        {getIntensityLabel(symptom.intensity)}
                      </span>
                    </div>
                    <button
                      onClick={() => deleteSymptom(symptom.id)}
                      style={{
                        backgroundColor: '#fee2e2',
                        color: '#dc2626',
                        border: '1px solid #fecaca',
                        borderRadius: '6px',
                        padding: isMobile ? '8px 12px' : '6px 10px',
                        cursor: 'pointer',
                        fontSize: isMobile ? '12px' : '11px',
                        fontWeight: '500',
                        minHeight: '36px',
                        minWidth: isMobile ? '70px' : 'auto',
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
                      🗑️ Delete
                    </button>
                  </div>

                  <div
                    style={{
                      fontSize: isMobile ? '14px' : '15px',
                      color: colors.text,
                      lineHeight: '1.5',
                      marginBottom: symptom.emotional_state ? '8px' : '0',
                      fontWeight: '500',
                    }}
                  >
                    {symptom.description}
                  </div>

                  {symptom.emotional_state && (
                    <div
                      style={{
                        fontSize: isMobile ? '13px' : '14px',
                        color: colors.text,
                        fontStyle: 'italic',
                        opacity: 0.8,
                      }}
                    >
                      💭 Emotional state: {symptom.emotional_state}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Tips Section */}
      <div
        style={{
          background: 'linear-gradient(135deg, #fee2e2 0%, #fef2f2 100%)',
          borderRadius: '12px',
          padding: isMobile ? '16px' : '20px',
          border: '1px solid #fca5a5',
        }}
      >
        <h3
          style={{
            fontSize: isMobile ? '16px' : '18px',
            fontWeight: '600',
            color: '#b91c1c',
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          💡 Symptom Tracking Tips
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? '1fr'
              : 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: isMobile ? '8px' : '12px',
          }}
        >
          <div
            style={{
              fontSize: isMobile ? '13px' : '14px',
              color: '#b91c1c',
              lineHeight: '1.5',
            }}
          >
            • <strong>Be specific:</strong> Include location, type, and quality
            of pain
          </div>
          <div
            style={{
              fontSize: isMobile ? '13px' : '14px',
              color: '#b91c1c',
              lineHeight: '1.5',
            }}
          >
            • <strong>Note emotions:</strong> Track your emotional state when
            symptoms occur
          </div>
          <div
            style={{
              fontSize: isMobile ? '13px' : '14px',
              color: '#b91c1c',
              lineHeight: '1.5',
            }}
          >
            • <strong>Track patterns:</strong> Look for triggers and timing
          </div>
          <div
            style={{
              fontSize: isMobile ? '13px' : '14px',
              color: '#b91c1c',
              lineHeight: '1.5',
            }}
          >
            • <strong>Regular logging:</strong> Track even mild symptoms for
            complete picture
          </div>
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
