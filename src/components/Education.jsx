import React, { useState } from 'react';

const Education = ({ educationalContent, isMobile = false }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const getCardIcon = (title) => {
    if (title.toLowerCase().includes('understanding')) return '🧠';
    if (title.toLowerCase().includes('mind-body')) return '💫';
    if (title.toLowerCase().includes('perfectionism')) return '✨';
    if (title.toLowerCase().includes('emotional')) return '❤️';
    return '📚';
  };

  const getCardColor = (index) => {
    const colors = [
      { bg: '#eff6ff', border: '#2563eb', text: '#1e40af' },
      { bg: '#f0fdf4', border: '#16a34a', text: '#15803d' },
      { bg: '#fef3c7', border: '#d97706', text: '#b45309' },
      { bg: '#faf5ff', border: '#7c3aed', text: '#6b21a8' },
    ];
    return colors[index % colors.length];
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
          📚 Learn About TMS
        </h2>
        <p
          style={{
            color: '#6b7280',
            fontSize: isMobile ? '14px' : '16px',
            lineHeight: '1.4',
          }}
        >
          Understanding the science behind mind-body healing
        </p>
      </div>

      {/* Introduction Card */}
      <div
        style={{
          background: 'linear-gradient(135deg, #eff6ff 0%, #faf5ff 100%)',
          borderRadius: '12px',
          padding: isMobile ? '20px' : '24px',
          border: '2px solid #e0e7ff',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: isMobile ? '32px' : '48px',
            marginBottom: '16px',
          }}
        >
          👨‍⚕️
        </div>
        <h3
          style={{
            fontSize: isMobile ? '18px' : '22px',
            fontWeight: '600',
            color: '#4338ca',
            marginBottom: '12px',
            lineHeight: '1.2',
          }}
        >
          Dr. John Sarno's Revolutionary Approach
        </h3>
        <p
          style={{
            fontSize: isMobile ? '14px' : '16px',
            color: '#4338ca',
            lineHeight: '1.6',
            margin: 0,
          }}
        >
          Dr. Sarno discovered that many chronic pain conditions are caused by
          emotional stress rather than structural damage. His mind-body approach
          has helped thousands of people find relief from persistent pain.
        </p>
      </div>

      {/* Educational Content Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile
            ? '1fr'
            : 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: isMobile ? '12px' : '16px',
        }}
      >
        {educationalContent.map((content, index) => {
          const colors = getCardColor(index);
          const isExpanded = expandedCard === index;

          return (
            <div
              key={index}
              style={{
                backgroundColor: colors.bg,
                borderRadius: '12px',
                border: `2px solid ${colors.border}`,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onClick={() => toggleCard(index)}
            >
              <div
                style={{
                  padding: isMobile ? '16px' : '20px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: isExpanded ? '16px' : '0',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      flex: 1,
                    }}
                  >
                    <div
                      style={{
                        fontSize: isMobile ? '20px' : '24px',
                        width: isMobile ? '32px' : '40px',
                        height: isMobile ? '32px' : '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        border: `2px solid ${colors.border}`,
                      }}
                    >
                      {getCardIcon(content.title)}
                    </div>
                    <h3
                      style={{
                        fontSize: isMobile ? '16px' : '18px',
                        fontWeight: '600',
                        color: colors.text,
                        margin: 0,
                        lineHeight: '1.3',
                        flex: 1,
                      }}
                    >
                      {content.title}
                    </h3>
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? '16px' : '20px',
                      color: colors.text,
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      marginLeft: '8px',
                    }}
                  >
                    ▼
                  </div>
                </div>

                {isExpanded && (
                  <div
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      padding: isMobile ? '16px' : '20px',
                      border: `1px solid ${colors.border}`,
                      animation: 'fadeIn 0.3s ease',
                    }}
                  >
                    <p
                      style={{
                        fontSize: isMobile ? '14px' : '15px',
                        color: '#374151',
                        lineHeight: '1.6',
                        margin: 0,
                      }}
                    >
                      {content.content}
                    </p>
                  </div>
                )}

                {!isExpanded && (
                  <div
                    style={{
                      marginTop: '12px',
                      padding: isMobile ? '8px 12px' : '6px 10px',
                      backgroundColor: 'white',
                      borderRadius: '6px',
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    <p
                      style={{
                        fontSize: isMobile ? '11px' : '12px',
                        color: colors.text,
                        margin: 0,
                        fontWeight: '500',
                        textAlign: 'center',
                      }}
                    >
                      Tap to learn more
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Key Principles Section */}
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          🎯 Core TMS Principles
        </h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? '1fr'
              : 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: isMobile ? '12px' : '16px',
          }}
        >
          <div
            style={{
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              padding: isMobile ? '16px' : '20px',
              border: '1px solid #e2e8f0',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: isMobile ? '24px' : '32px',
                marginBottom: '8px',
              }}
            >
              🧩
            </div>
            <h4
              style={{
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '8px',
              }}
            >
              Mind-Body Connection
            </h4>
            <p
              style={{
                fontSize: isMobile ? '12px' : '13px',
                color: '#6b7280',
                lineHeight: '1.4',
                margin: 0,
              }}
            >
              Your thoughts and emotions directly affect your physical
              well-being
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              padding: isMobile ? '16px' : '20px',
              border: '1px solid #e2e8f0',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: isMobile ? '24px' : '32px',
                marginBottom: '8px',
              }}
            >
              🎭
            </div>
            <h4
              style={{
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '8px',
              }}
            >
              Emotional Awareness
            </h4>
            <p
              style={{
                fontSize: isMobile ? '12px' : '13px',
                color: '#6b7280',
                lineHeight: '1.4',
                margin: 0,
              }}
            >
              Acknowledging repressed emotions is key to healing
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              padding: isMobile ? '16px' : '20px',
              border: '1px solid #e2e8f0',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: isMobile ? '24px' : '32px',
                marginBottom: '8px',
              }}
            >
              🔍
            </div>
            <h4
              style={{
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '8px',
              }}
            >
              Knowledge is Cure
            </h4>
            <p
              style={{
                fontSize: isMobile ? '12px' : '13px',
                color: '#6b7280',
                lineHeight: '1.4',
                margin: 0,
              }}
            >
              Understanding TMS often leads to symptom relief
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              padding: isMobile ? '16px' : '20px',
              border: '1px solid #e2e8f0',
              textAlign: 'center',
              gridColumn: isMobile ? '1' : 'auto',
            }}
          >
            <div
              style={{
                fontSize: isMobile ? '24px' : '32px',
                marginBottom: '8px',
              }}
            >
              💪
            </div>
            <h4
              style={{
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '8px',
              }}
            >
              Resume Activity
            </h4>
            <p
              style={{
                fontSize: isMobile ? '12px' : '13px',
                color: '#6b7280',
                lineHeight: '1.4',
                margin: 0,
              }}
            >
              Gradually returning to normal activities without fear
            </p>
          </div>
        </div>
      </div>

      {/* How TMS Works Section */}
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          ⚡ How TMS Works
        </h3>

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
              backgroundColor: '#fef2f2',
              borderRadius: '8px',
              border: '1px solid #fecaca',
            }}
          >
            <div
              style={{
                backgroundColor: '#dc2626',
                color: 'white',
                borderRadius: '50%',
                width: isMobile ? '24px' : '28px',
                height: isMobile ? '24px' : '28px',
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
                  color: '#dc2626',
                  marginBottom: '4px',
                }}
              >
                Emotional Stress Builds
              </h4>
              <p
                style={{
                  fontSize: isMobile ? '12px' : '14px',
                  color: '#7f1d1d',
                  lineHeight: '1.4',
                  margin: 0,
                }}
              >
                Unconscious emotions like anger, fear, or perfectionism create
                internal tension
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: isMobile ? '12px' : '16px',
              padding: isMobile ? '12px' : '16px',
              backgroundColor: '#fef3c7',
              borderRadius: '8px',
              border: '1px solid #fcd34d',
            }}
          >
            <div
              style={{
                backgroundColor: '#d97706',
                color: 'white',
                borderRadius: '50%',
                width: isMobile ? '24px' : '28px',
                height: isMobile ? '24px' : '28px',
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
                  color: '#d97706',
                  marginBottom: '4px',
                }}
              >
                Brain Creates Distraction
              </h4>
              <p
                style={{
                  fontSize: isMobile ? '12px' : '14px',
                  color: '#92400e',
                  lineHeight: '1.4',
                  margin: 0,
                }}
              >
                Your unconscious mind creates physical symptoms to divert
                attention from emotional pain
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: isMobile ? '12px' : '16px',
              padding: isMobile ? '12px' : '16px',
              backgroundColor: '#f0fdf4',
              borderRadius: '8px',
              border: '1px solid #bbf7d0',
            }}
          >
            <div
              style={{
                backgroundColor: '#16a34a',
                color: 'white',
                borderRadius: '50%',
                width: isMobile ? '24px' : '28px',
                height: isMobile ? '24px' : '28px',
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
                  color: '#16a34a',
                  marginBottom: '4px',
                }}
              >
                Understanding Breaks the Cycle
              </h4>
              <p
                style={{
                  fontSize: isMobile ? '12px' : '14px',
                  color: '#15803d',
                  lineHeight: '1.4',
                  margin: 0,
                }}
              >
                When you understand this process and address the emotions,
                symptoms often disappear
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started Section */}
      <div
        style={{
          background: 'linear-gradient(135deg, #dcfce7 0%, #f0fdf4 100%)',
          borderRadius: '12px',
          padding: isMobile ? '20px' : '24px',
          border: '1px solid #bbf7d0',
          textAlign: 'center',
        }}
      >
        <h3
          style={{
            fontSize: isMobile ? '18px' : '20px',
            fontWeight: '600',
            color: '#15803d',
            marginBottom: '12px',
          }}
        >
          🚀 Ready to Start Your Healing Journey?
        </h3>
        <p
          style={{
            fontSize: isMobile ? '14px' : '16px',
            color: '#15803d',
            lineHeight: '1.6',
            marginBottom: '16px',
          }}
        >
          Take the TMS assessment, start journaling your emotions, and track
          your symptoms. Knowledge and emotional awareness are your most
          powerful healing tools.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'center',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: isMobile ? '12px' : '14px',
              color: '#15803d',
              fontWeight: '500',
            }}
          >
            📚 Continue exploring: Resources • Success Stories • Assessment
          </span>
        </div>
      </div>
    </div>
  );
};

export default Education;
