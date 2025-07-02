import React from 'react';

const Dashboard = ({
  journalEntries,
  symptoms,
  sarnoAffirmations,
  intakeResults,
  onRetakeIntake,
  onTakeAssessment,
  isMobile = false,
}) => {
  const getRandomAffirmation = () => {
    return sarnoAffirmations[
      Math.floor(Math.random() * sarnoAffirmations.length)
    ];
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString();
    } catch {
      return dateString;
    }
  };

  const getRecentEntries = (entries, limit = 3) => {
    return entries.slice(0, limit);
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
          Your Healing Dashboard
        </h2>
        <p
          style={{
            color: '#6b7280',
            fontSize: isMobile ? '14px' : '16px',
            lineHeight: '1.4',
          }}
        >
          Track your progress and continue your TMS healing journey
        </p>
      </div>

      {/* Assessment Status */}
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: isMobile ? '20px' : '24px',
          border: intakeResults
            ? `2px solid ${intakeResults.recommendation?.color || '#2563eb'}`
            : '2px solid #e5e7eb',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'space-between',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '16px' : '0',
          }}
        >
          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontSize: isMobile ? '18px' : '20px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '8px',
              }}
            >
              {intakeResults ? '✅ Assessment Complete' : '📋 TMS Assessment'}
            </h3>
            {intakeResults ? (
              <div>
                <p
                  style={{
                    color: '#6b7280',
                    marginBottom: '8px',
                    fontSize: isMobile ? '14px' : '16px',
                    lineHeight: '1.4',
                  }}
                >
                  <strong
                    style={{
                      color: intakeResults.recommendation?.color || '#2563eb',
                    }}
                  >
                    {intakeResults.score}% -{' '}
                    {intakeResults.recommendation?.level}
                  </strong>{' '}
                  for TMS healing approach
                </p>
                <p
                  style={{
                    color: '#6b7280',
                    fontSize: isMobile ? '13px' : '14px',
                    lineHeight: '1.4',
                  }}
                >
                  Completed: {formatDate(intakeResults.completedDate)}
                </p>
              </div>
            ) : (
              <p
                style={{
                  color: '#6b7280',
                  fontSize: isMobile ? '14px' : '16px',
                  lineHeight: '1.4',
                }}
              >
                Take our comprehensive assessment to understand your TMS healing
                potential
              </p>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              gap: '8px',
              flexDirection: isMobile ? 'column' : 'row',
              width: isMobile ? '100%' : 'auto',
            }}
          >
            {intakeResults ? (
              <button
                onClick={onRetakeIntake}
                style={{
                  backgroundColor: '#6b7280',
                  color: 'white',
                  padding: isMobile ? '14px 20px' : '10px 16px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: isMobile ? '15px' : '14px',
                  fontWeight: '500',
                  minHeight: '44px',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = '#4b5563')
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = '#6b7280')
                }
              >
                Retake Assessment
              </button>
            ) : (
              <button
                onClick={onTakeAssessment}
                style={{
                  backgroundColor: '#2563eb',
                  color: 'white',
                  padding: isMobile ? '14px 20px' : '10px 16px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: isMobile ? '15px' : '14px',
                  fontWeight: '500',
                  minHeight: '44px',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = '#1d4ed8')
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = '#2563eb')
                }
              >
                Take Assessment
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Daily Affirmation */}
      <div
        style={{
          background: 'linear-gradient(135deg, #eff6ff 0%, #faf5ff 100%)',
          borderRadius: '12px',
          padding: isMobile ? '20px' : '24px',
          border: '1px solid #e0e7ff',
          textAlign: 'center',
        }}
      >
        <h3
          style={{
            fontSize: isMobile ? '18px' : '20px',
            fontWeight: '600',
            color: '#4338ca',
            marginBottom: '12px',
          }}
        >
          💫 Daily Affirmation
        </h3>
        <p
          style={{
            fontSize: isMobile ? '15px' : '16px',
            color: '#4338ca',
            fontStyle: 'italic',
            lineHeight: '1.6',
            margin: 0,
          }}
        >
          "{getRandomAffirmation()}"
        </p>
      </div>

      {/* Stats Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile
            ? '1fr'
            : 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: isMobile ? '12px' : '16px',
        }}
      >
        {/* Journal Stats */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: isMobile ? '16px' : '20px',
            textAlign: 'center',
            border: '1px solid #f3f4f6',
          }}
        >
          <div
            style={{
              width: isMobile ? '40px' : '50px',
              height: isMobile ? '40px' : '50px',
              borderRadius: '50%',
              backgroundColor: '#dbeafe',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px',
            }}
          >
            <span style={{ fontSize: isMobile ? '18px' : '24px' }}>📝</span>
          </div>
          <h4
            style={{
              fontSize: isMobile ? '16px' : '18px',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '4px',
            }}
          >
            Journal Entries
          </h4>
          <p
            style={{
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 'bold',
              color: '#2563eb',
              margin: 0,
            }}
          >
            {journalEntries.length}
          </p>
        </div>

        {/* Symptoms Tracked */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: isMobile ? '16px' : '20px',
            textAlign: 'center',
            border: '1px solid #f3f4f6',
          }}
        >
          <div
            style={{
              width: isMobile ? '40px' : '50px',
              height: isMobile ? '40px' : '50px',
              borderRadius: '50%',
              backgroundColor: '#fef3c7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px',
            }}
          >
            <span style={{ fontSize: isMobile ? '18px' : '24px' }}>📊</span>
          </div>
          <h4
            style={{
              fontSize: isMobile ? '16px' : '18px',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '4px',
            }}
          >
            Symptoms Tracked
          </h4>
          <p
            style={{
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 'bold',
              color: '#d97706',
              margin: 0,
            }}
          >
            {symptoms.length}
          </p>
        </div>

        {/* Days Active */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: isMobile ? '16px' : '20px',
            textAlign: 'center',
            border: '1px solid #f3f4f6',
            gridColumn: isMobile ? '1' : 'auto',
          }}
        >
          <div
            style={{
              width: isMobile ? '40px' : '50px',
              height: isMobile ? '40px' : '50px',
              borderRadius: '50%',
              backgroundColor: '#dcfce7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px',
            }}
          >
            <span style={{ fontSize: isMobile ? '18px' : '24px' }}>🔥</span>
          </div>
          <h4
            style={{
              fontSize: isMobile ? '16px' : '18px',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '4px',
            }}
          >
            Days Active
          </h4>
          <p
            style={{
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 'bold',
              color: '#16a34a',
              margin: 0,
            }}
          >
            {
              new Set(
                [...journalEntries, ...symptoms].map((item) =>
                  new Date(item.timestamp || item.date).toDateString()
                )
              ).size
            }
          </p>
        </div>
      </div>

      {/* Recent Activity */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '16px' : '24px',
        }}
      >
        {/* Recent Journal Entries */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: isMobile ? '16px' : '20px',
          }}
        >
          <h3
            style={{
              fontSize: isMobile ? '16px' : '18px',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span style={{ fontSize: isMobile ? '16px' : '18px' }}>📝</span>
            Recent Journal Entries
          </h3>
          {journalEntries.length === 0 ? (
            <p
              style={{
                color: '#6b7280',
                fontStyle: 'italic',
                fontSize: isMobile ? '14px' : '15px',
                textAlign: 'center',
                padding: '20px 0',
              }}
            >
              No journal entries yet. Start writing to track your emotional
              journey!
            </p>
          ) : (
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
              {getRecentEntries(journalEntries).map((entry) => (
                <div
                  key={entry.id}
                  style={{
                    padding: isMobile ? '12px' : '16px',
                    backgroundColor: '#f8fafc',
                    borderRadius: '8px',
                    borderLeft: '4px solid #2563eb',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '8px',
                      flexDirection: isMobile ? 'column' : 'row',
                      gap: isMobile ? '4px' : '0',
                    }}
                  >
                    <span
                      style={{
                        fontSize: isMobile ? '11px' : '12px',
                        color: '#6b7280',
                        fontWeight: '500',
                      }}
                    >
                      {entry.date}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: isMobile ? '13px' : '14px',
                      color: '#374151',
                      margin: 0,
                      lineHeight: '1.4',
                      display: '-webkit-box',
                      WebkitLineClamp: isMobile ? 2 : 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {entry.content}
                  </p>
                </div>
              ))}
              {journalEntries.length > 3 && (
                <p
                  style={{
                    fontSize: isMobile ? '12px' : '13px',
                    color: '#6b7280',
                    textAlign: 'center',
                    margin: '8px 0 0 0',
                    fontStyle: 'italic',
                  }}
                >
                  And {journalEntries.length - 3} more entries...
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
            padding: isMobile ? '16px' : '20px',
          }}
        >
          <h3
            style={{
              fontSize: isMobile ? '16px' : '18px',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span style={{ fontSize: isMobile ? '16px' : '18px' }}>📊</span>
            Recent Symptoms
          </h3>
          {symptoms.length === 0 ? (
            <p
              style={{
                color: '#6b7280',
                fontStyle: 'italic',
                fontSize: isMobile ? '14px' : '15px',
                textAlign: 'center',
                padding: '20px 0',
              }}
            >
              No symptoms tracked yet. Start logging to identify patterns!
            </p>
          ) : (
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
              {getRecentEntries(symptoms).map((symptom) => (
                <div
                  key={symptom.id}
                  style={{
                    padding: isMobile ? '12px' : '16px',
                    backgroundColor: '#fef3c7',
                    borderRadius: '8px',
                    borderLeft: '4px solid #d97706',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '8px',
                      flexDirection: isMobile ? 'column' : 'row',
                      gap: isMobile ? '4px' : '0',
                    }}
                  >
                    <span
                      style={{
                        fontSize: isMobile ? '11px' : '12px',
                        color: '#92400e',
                        fontWeight: '500',
                      }}
                    >
                      {symptom.date}
                    </span>
                    <span
                      style={{
                        backgroundColor: '#d97706',
                        color: 'white',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontSize: isMobile ? '10px' : '11px',
                        fontWeight: '500',
                      }}
                    >
                      {symptom.intensity}/10
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: isMobile ? '13px' : '14px',
                      color: '#92400e',
                      margin: '0 0 4px 0',
                      lineHeight: '1.4',
                      display: '-webkit-box',
                      WebkitLineClamp: isMobile ? 2 : 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {symptom.description}
                  </p>
                  {symptom.emotional_state && (
                    <p
                      style={{
                        fontSize: isMobile ? '12px' : '13px',
                        color: '#b45309',
                        margin: 0,
                        fontStyle: 'italic',
                      }}
                    >
                      Emotional state: {symptom.emotional_state}
                    </p>
                  )}
                </div>
              ))}
              {symptoms.length > 3 && (
                <p
                  style={{
                    fontSize: isMobile ? '12px' : '13px',
                    color: '#6b7280',
                    textAlign: 'center',
                    margin: '8px 0 0 0',
                    fontStyle: 'italic',
                  }}
                >
                  And {symptoms.length - 3} more symptoms...
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: isMobile ? '20px' : '24px',
        }}
      >
        <h3
          style={{
            fontSize: isMobile ? '18px' : '20px',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '16px',
            textAlign: 'center',
          }}
        >
          🚀 Quick Actions
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? '1fr'
              : 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: isMobile ? '12px' : '16px',
          }}
        >
          <div
            style={{
              padding: isMobile ? '16px' : '20px',
              backgroundColor: '#f0f9ff',
              borderRadius: '8px',
              border: '1px solid #bae6fd',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: isMobile ? '24px' : '32px',
                marginBottom: '8px',
              }}
            >
              📝
            </div>
            <h4
              style={{
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '600',
                color: '#0369a1',
                margin: '0 0 4px 0',
              }}
            >
              Write in Journal
            </h4>
            <p
              style={{
                fontSize: isMobile ? '12px' : '13px',
                color: '#0369a1',
                margin: 0,
              }}
            >
              Process your emotions
            </p>
          </div>

          <div
            style={{
              padding: isMobile ? '16px' : '20px',
              backgroundColor: '#fef3c7',
              borderRadius: '8px',
              border: '1px solid #fcd34d',
              textAlign: 'center',
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
            <h4
              style={{
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '600',
                color: '#d97706',
                margin: '0 0 4px 0',
              }}
            >
              Track Symptoms
            </h4>
            <p
              style={{
                fontSize: isMobile ? '12px' : '13px',
                color: '#d97706',
                margin: 0,
              }}
            >
              Monitor your patterns
            </p>
          </div>

          <div
            style={{
              padding: isMobile ? '16px' : '20px',
              backgroundColor: '#f0fdf4',
              borderRadius: '8px',
              border: '1px solid #bbf7d0',
              textAlign: 'center',
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
            <h4
              style={{
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '600',
                color: '#16a34a',
                margin: '0 0 4px 0',
              }}
            >
              Learn About TMS
            </h4>
            <p
              style={{
                fontSize: isMobile ? '12px' : '13px',
                color: '#16a34a',
                margin: 0,
              }}
            >
              Expand your knowledge
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
