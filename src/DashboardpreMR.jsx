import React from 'react';

const Dashboard = ({
  journalEntries,
  symptoms,
  sarnoAffirmations,
  intakeResults,
  onRetakeIntake,
  onTakeAssessment,
}) => {
  // Function to get encouraging colors based on assessment level
  const getAssessmentColors = (recommendation) => {
    if (!recommendation)
      return { color: '#6b7280', bgColor: '#f9fafb', icon: '📋' };

    if (recommendation.level === 'Strong Match') {
      return { color: '#059669', bgColor: '#f0fdf4', icon: '✨' };
    } else if (recommendation.level === 'Good Match') {
      return { color: '#0369a1', bgColor: '#eff6ff', icon: '🌟' };
    } else {
      return { color: '#7c3aed', bgColor: '#faf5ff', icon: '🔍' };
    }
  };

  const assessmentColors = intakeResults
    ? getAssessmentColors(intakeResults.recommendation)
    : null;

  return (
    <div style={{ display: 'grid', gap: '24px' }}>
      {/* Intake Results Section - Show if available */}
      {intakeResults && intakeResults.recommendation && (
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '24px',
            border: `2px solid ${assessmentColors.color}20`,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <h3
              style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937' }}
            >
              {assessmentColors.icon} Your Healing Path Assessment
            </h3>
            <button
              onClick={onRetakeIntake}
              style={{
                backgroundColor: '#f3f4f6',
                color: '#374151',
                padding: '6px 12px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '500',
              }}
            >
              Retake Assessment
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '20px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                border: `4px solid ${assessmentColors.color}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: assessmentColors.bgColor,
              }}
            >
              <div style={{ fontSize: '16px', marginBottom: '2px' }}>
                {assessmentColors.icon}
              </div>
              <div
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: assessmentColors.color,
                }}
              >
                {intakeResults.score}%
              </div>
            </div>

            <div>
              <h4
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: assessmentColors.color,
                  marginBottom: '4px',
                }}
              >
                {intakeResults.recommendation.level} for TMS Healing
              </h4>
              <p
                style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  lineHeight: '1.5',
                  margin: '0 0 8px 0',
                }}
              >
                {intakeResults.recommendation.level === 'Strong Match' &&
                  'Excellent potential for mind-body healing approaches'}
                {intakeResults.recommendation.level === 'Good Match' &&
                  'Good alignment with TMS characteristics'}
                {intakeResults.recommendation.level === 'Exploring Options' &&
                  'Exploring all healing possibilities'}
              </p>
              <div
                style={{
                  backgroundColor: assessmentColors.bgColor,
                  borderRadius: '6px',
                  padding: '8px 12px',
                  border: `1px solid ${assessmentColors.color}30`,
                }}
              >
                <p
                  style={{
                    fontSize: '12px',
                    color: assessmentColors.color,
                    margin: 0,
                    fontWeight: '500',
                  }}
                >
                  💚 You're on a path to healing and understanding
                </p>
              </div>
              <p
                style={{
                  fontSize: '12px',
                  color: '#9ca3af',
                  marginTop: '8px',
                  margin: '8px 0 0 0',
                }}
              >
                Completed:{' '}
                {new Date(intakeResults.completedDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Show prompt to take assessment if not completed */}
      {!intakeResults && (
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '24px',
            border: '2px solid #3b82f6',
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '12px',
            }}
          >
            🎯 Ready to Begin Your Healing Journey?
          </h3>
          <p
            style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}
          >
            Take our comprehensive TMS assessment to understand your symptoms
            and get personalized healing recommendations.
          </p>
          <button
            onClick={onTakeAssessment || onRetakeIntake}
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            Take Assessment Now
          </button>
        </div>
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '24px',
          }}
        >
          <h3
            style={{
              fontSize: '20px',
              fontWeight: '600',
              marginBottom: '16px',
            }}
          >
            ❤️ Daily Affirmation
          </h3>
          <p style={{ color: '#374151', fontStyle: 'italic' }}>
            "
            {
              sarnoAffirmations[
                Math.floor(Math.random() * sarnoAffirmations.length)
              ]
            }
            "
          </p>
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
            style={{
              fontSize: '20px',
              fontWeight: '600',
              marginBottom: '16px',
            }}
          >
            📅 Quick Stats
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p style={{ fontSize: '14px', color: '#6b7280' }}>
              Journal Entries: {journalEntries.length}
            </p>
            <p style={{ fontSize: '14px', color: '#6b7280' }}>
              Symptom Logs: {symptoms.length}
            </p>
            <p style={{ fontSize: '14px', color: '#6b7280' }}>
              Days Active: {new Set(journalEntries.map((e) => e.date)).size}
            </p>
            {intakeResults && assessmentColors && (
              <p
                style={{
                  fontSize: '14px',
                  color: assessmentColors.color,
                  fontWeight: '500',
                }}
              >
                Healing Path: {intakeResults.recommendation.level}
              </p>
            )}
          </div>
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
          Your Healing Journey
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
          }}
        >
          <div
            style={{
              backgroundColor: '#f0fdf4',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #bbf7d0',
            }}
          >
            <h4
              style={{
                fontWeight: '500',
                color: '#166534',
                marginBottom: '4px',
              }}
            >
              ✅ Awareness
            </h4>
            <p style={{ fontSize: '14px', color: '#15803d' }}>
              Understand the mind-body connection
            </p>
            {intakeResults && (
              <div
                style={{ marginTop: '8px', fontSize: '12px', color: '#059669' }}
              >
                Assessment completed ✓
              </div>
            )}
          </div>
          <div
            style={{
              backgroundColor: '#eff6ff',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #bfdbfe',
            }}
          >
            <h4
              style={{
                fontWeight: '500',
                color: '#1e40af',
                marginBottom: '4px',
              }}
            >
              ✏️ Expression
            </h4>
            <p style={{ fontSize: '14px', color: '#1d4ed8' }}>
              Journal your emotions regularly
            </p>
            {journalEntries.length > 0 && (
              <div
                style={{ marginTop: '8px', fontSize: '12px', color: '#2563eb' }}
              >
                {journalEntries.length} entries logged
              </div>
            )}
          </div>
          <div
            style={{
              backgroundColor: '#faf5ff',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #e9d5ff',
            }}
          >
            <h4
              style={{
                fontWeight: '500',
                color: '#7c3aed',
                marginBottom: '4px',
              }}
            >
              📊 Tracking
            </h4>
            <p style={{ fontSize: '14px', color: '#8b5cf6' }}>
              Monitor symptoms and patterns
            </p>
            {symptoms.length > 0 && (
              <div
                style={{ marginTop: '8px', fontSize: '12px', color: '#8b5cf6' }}
              >
                {symptoms.length} symptoms tracked
              </div>
            )}
          </div>
          <div
            style={{
              backgroundColor: '#fffbeb',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #fde68a',
            }}
          >
            <h4
              style={{
                fontWeight: '500',
                color: '#d97706',
                marginBottom: '4px',
              }}
            >
              💛 Healing
            </h4>
            <p style={{ fontSize: '14px', color: '#f59e0b' }}>
              Trust in your body's wisdom
            </p>
            <div
              style={{ marginTop: '8px', fontSize: '12px', color: '#d97706' }}
            >
              Journey in progress...
            </div>
          </div>
        </div>
      </div>

      {/* Personalized Recommendations Based on Intake */}
      {intakeResults && intakeResults.recommendation && (
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '24px',
            border: `2px solid ${assessmentColors.color}20`,
          }}
        >
          <h3
            style={{
              fontSize: '20px',
              fontWeight: '600',
              marginBottom: '16px',
              color: assessmentColors.color,
            }}
          >
            🎯 Your Personalized Healing Steps
          </h3>
          <div style={{ display: 'grid', gap: '12px' }}>
            {intakeResults.recommendation.recommendations &&
              intakeResults.recommendation.recommendations
                .slice(0, 3)
                .map((rec, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      padding: '12px',
                      backgroundColor: assessmentColors.bgColor,
                      borderRadius: '8px',
                      borderLeft: `4px solid ${assessmentColors.color}`,
                    }}
                  >
                    <div
                      style={{
                        minWidth: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: assessmentColors.color,
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '11px',
                        fontWeight: 'bold',
                        marginRight: '10px',
                        marginTop: '1px',
                      }}
                    >
                      {index + 1}
                    </div>
                    <span style={{ fontSize: '14px', color: '#374151' }}>
                      {rec}
                    </span>
                  </div>
                ))}
            {intakeResults.recommendation.recommendations &&
              intakeResults.recommendation.recommendations.length > 3 && (
                <p
                  style={{
                    fontSize: '12px',
                    color: '#6b7280',
                    textAlign: 'center',
                    fontStyle: 'italic',
                    margin: '8px 0 0 0',
                  }}
                >
                  View your full healing plan in the Assessment tab
                </p>
              )}
          </div>
        </div>
      )}

      {/* Recent Activity */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}
      >
        {/* Recent Journal Entries */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '24px',
          }}
        >
          <h3
            style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '16px',
            }}
          >
            📝 Recent Journal Entries
          </h3>
          {journalEntries.length === 0 ? (
            <p
              style={{
                color: '#6b7280',
                fontStyle: 'italic',
                fontSize: '14px',
              }}
            >
              No journal entries yet. Start your emotional healing journey!
            </p>
          ) : (
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
              {journalEntries.slice(0, 3).map((entry) => (
                <div
                  key={entry.id}
                  style={{
                    borderLeft: '3px solid #2563eb',
                    paddingLeft: '12px',
                    paddingTop: '4px',
                    paddingBottom: '4px',
                  }}
                >
                  <span style={{ fontSize: '12px', color: '#6b7280' }}>
                    {entry.date}
                  </span>
                  <p
                    style={{
                      fontSize: '14px',
                      color: '#374151',
                      margin: '4px 0 0 0',
                      lineHeight: '1.4',
                    }}
                  >
                    {entry.content.length > 100
                      ? entry.content.substring(0, 100) + '...'
                      : entry.content}
                  </p>
                </div>
              ))}
              {journalEntries.length > 3 && (
                <p
                  style={{
                    fontSize: '12px',
                    color: '#6b7280',
                    textAlign: 'center',
                    margin: '8px 0 0 0',
                  }}
                >
                  ...and {journalEntries.length - 3} more entries
                </p>
              )}
            </div>
          )}
        </div>

        {/* Recent Symptoms */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '24px',
          }}
        >
          <h3
            style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '16px',
            }}
          >
            🩺 Recent Symptoms
          </h3>
          {symptoms.length === 0 ? (
            <p
              style={{
                color: '#6b7280',
                fontStyle: 'italic',
                fontSize: '14px',
              }}
            >
              No symptoms logged yet. Track patterns to aid your healing!
            </p>
          ) : (
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
              {symptoms.slice(0, 3).map((symptom) => (
                <div
                  key={symptom.id}
                  style={{
                    padding: '12px',
                    backgroundColor: '#f8fafc',
                    borderRadius: '6px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '4px',
                    }}
                  >
                    <h4
                      style={{
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#1f2937',
                        margin: 0,
                      }}
                    >
                      {symptom.description}
                    </h4>
                    <span
                      style={{
                        fontSize: '12px',
                        color:
                          symptom.intensity > 7
                            ? '#dc2626'
                            : symptom.intensity > 4
                            ? '#d97706'
                            : '#059669',
                        fontWeight: '600',
                      }}
                    >
                      {symptom.intensity}/10
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ fontSize: '12px', color: '#6b7280' }}>
                      {symptom.date}
                    </span>
                    {symptom.emotional_state && (
                      <span style={{ fontSize: '12px', color: '#2563eb' }}>
                        {symptom.emotional_state}
                      </span>
                    )}
                  </div>
                </div>
              ))}
              {symptoms.length > 3 && (
                <p
                  style={{
                    fontSize: '12px',
                    color: '#6b7280',
                    textAlign: 'center',
                    margin: '8px 0 0 0',
                  }}
                >
                  ...and {symptoms.length - 3} more symptoms
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
