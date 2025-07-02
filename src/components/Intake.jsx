import React, { useState, useEffect } from 'react';

const Intake = ({
  onComplete,
  intakeState,
  onStateChange,
  isMobile = false,
}) => {
  // Use props for state if available, otherwise use defaults
  const [currentSection, setCurrentSection] = useState(
    intakeState?.currentSection || 0
  );
  const [answers, setAnswers] = useState(intakeState?.answers || {});
  const [showResults, setShowResults] = useState(
    intakeState?.showResults || false
  );

  // Update parent whenever state changes
  useEffect(() => {
    onStateChange({
      currentSection,
      answers,
      showResults,
    });
  }, [currentSection, answers, showResults, onStateChange]);

  const questionnaire = [
    {
      title: 'Physical Symptoms',
      questions: [
        {
          id: 'chronic_pain',
          question:
            'Do you have chronic pain that has persisted for more than 3 months?',
          type: 'yes_no',
          weight: 3,
        },
        {
          id: 'structural_tests',
          question:
            'Have medical tests (MRI, X-rays, CT scans) shown minimal or no structural abnormalities that would explain your pain level?',
          type: 'yes_no',
          weight: 4,
        },
        {
          id: 'moving_pain',
          question: 'Does your pain move around or change locations?',
          type: 'yes_no',
          weight: 3,
        },
        {
          id: 'symptom_variety',
          question:
            'Do you experience multiple symptoms (back pain, neck pain, headaches, digestive issues, etc.)?',
          type: 'yes_no',
          weight: 2,
        },
        {
          id: 'pain_triggers',
          question:
            'Does your pain worsen with stress, emotions, or certain thoughts about the pain?',
          type: 'yes_no',
          weight: 4,
        },
        {
          id: 'good_bad_days',
          question:
            "Do you have 'good days' and 'bad days' with your pain for no clear physical reason?",
          type: 'yes_no',
          weight: 3,
        },
      ],
    },
    {
      title: 'Psychological Factors',
      questions: [
        {
          id: 'perfectionist',
          question:
            'Would others describe you as a perfectionist, high achiever, or very self-critical?',
          type: 'scale',
          scale: 'Not at all (1) to Extremely (5)',
          weight: 3,
        },
        {
          id: 'people_pleaser',
          question:
            "Do you often put others' needs before your own or have difficulty saying no?",
          type: 'scale',
          scale: 'Not at all (1) to Extremely (5)',
          weight: 2,
        },
        {
          id: 'anger_expression',
          question:
            'Do you have difficulty expressing anger or often suppress your emotions?',
          type: 'scale',
          scale: 'Not at all (1) to Extremely (5)',
          weight: 3,
        },
        {
          id: 'anxiety_worry',
          question:
            'Are you frequently anxious, worried, or have racing thoughts?',
          type: 'scale',
          scale: 'Not at all (1) to Extremely (5)',
          weight: 2,
        },
        {
          id: 'trauma_stress',
          question:
            'Have you experienced significant emotional trauma, stress, or major life changes?',
          type: 'scale',
          scale: 'Not at all (1) to Extremely (5)',
          weight: 3,
        },
      ],
    },
    {
      title: 'Pain History',
      questions: [
        {
          id: 'onset_stress',
          question:
            'Did your pain begin during or after a period of high stress?',
          type: 'yes_no',
          weight: 4,
        },
        {
          id: 'treatment_response',
          question:
            'Have traditional medical treatments provided limited or temporary relief?',
          type: 'yes_no',
          weight: 3,
        },
        {
          id: 'fear_movement',
          question:
            'Are you afraid that movement or activity will worsen your pain?',
          type: 'yes_no',
          weight: 2,
        },
        {
          id: 'pain_focus',
          question:
            'Do you think about your pain frequently throughout the day?',
          type: 'yes_no',
          weight: 2,
        },
        {
          id: 'identity_pain',
          question:
            'Has pain become a central part of your identity or daily life?',
          type: 'yes_no',
          weight: 2,
        },
      ],
    },
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const calculateScore = () => {
    let totalScore = 0;
    let maxScore = 0;

    questionnaire.forEach((section) => {
      section.questions.forEach((question) => {
        maxScore += question.weight * (question.type === 'yes_no' ? 1 : 5);
        const answer = answers[question.id];
        if (answer !== undefined) {
          if (question.type === 'yes_no') {
            totalScore += answer === 'yes' ? question.weight : 0;
          } else {
            totalScore += answer * question.weight;
          }
        }
      });
    });

    return Math.round((totalScore / maxScore) * 100);
  };

  const getRecommendation = (score) => {
    if (score >= 75) {
      return {
        level: 'Strong Match',
        color: '#059669',
        bgColor: '#f0fdf4',
        borderColor: '#bbf7d0',
        icon: '✨',
        message:
          'Your responses suggest you may be an excellent candidate for the TMS healing approach! This is wonderful news - it means your pain may be more treatable than you thought.',
        encouragement:
          "Many people with similar patterns have found significant relief through mind-body healing. You're taking an important step toward recovery.",
        recommendations: [
          "Start with Dr. Sarno's books: 'Healing Back Pain' and 'The Divided Mind' - many find immediate relief just from reading",
          'Consider working with a TMS-trained therapist or physician who understands this approach',
          'Begin daily emotional awareness and journaling practices using our app tools',
          'Connect with others on similar healing journeys through TMS communities',
          'Remember: your pain is real, but it may be more treatable than traditional medicine suggests',
        ],
      };
    } else if (score >= 50) {
      return {
        level: 'Good Match',
        color: '#0369a1',
        bgColor: '#eff6ff',
        borderColor: '#bfdbfe',
        icon: '🌟',
        message:
          'Your responses show several characteristics that align with TMS. The mind-body approach could be a valuable addition to your healing journey.',
        encouragement:
          "Even if TMS isn't the complete picture, addressing emotional factors often helps with any type of pain.",
        recommendations: [
          'Learn about TMS through educational resources and see what resonates with you',
          "Start gentle journaling about emotions and stress - it's helpful for everyone",
          'Consider stress reduction techniques as part of your overall wellness plan',
          'Discuss mind-body approaches with your healthcare provider',
          'Keep an open mind - healing can come from many different approaches',
        ],
      };
    } else {
      return {
        level: 'Exploring Options',
        color: '#7c3aed',
        bgColor: '#faf5ff',
        borderColor: '#e9d5ff',
        icon: '🔍',
        message:
          'While your responses show fewer typical TMS patterns, exploring the mind-body connection can benefit anyone dealing with chronic symptoms.',
        encouragement:
          'Every healing journey is unique. The tools and insights here may still provide valuable support for your overall wellness.',
        recommendations: [
          'Continue working with your healthcare providers on appropriate medical care',
          'Consider stress management and emotional wellness as part of your overall health',
          'Explore mindfulness and emotional awareness practices for general wellbeing',
          'Stay open to different healing approaches - what works is what matters',
          'Use our journaling and tracking tools to better understand your patterns',
        ],
      };
    }
  };

  const nextSection = () => {
    if (currentSection < questionnaire.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const resetQuestionnaire = () => {
    setCurrentSection(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const score = calculateScore();
    const recommendation = getRecommendation(score);

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: isMobile ? '16px' : '24px',
          padding: isMobile ? '0 8px' : '0',
        }}
      >
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
            Your Healing Path Assessment
          </h2>
          <p
            style={{
              color: '#6b7280',
              fontSize: isMobile ? '14px' : '16px',
              lineHeight: '1.4',
            }}
          >
            Understanding your unique journey toward wellness
          </p>
        </div>

        {/* Main Results Card */}
        <div
          style={{
            backgroundColor: recommendation.bgColor,
            borderRadius: isMobile ? '12px' : '16px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: isMobile ? '20px' : '32px',
            textAlign: 'center',
            border: `2px solid ${recommendation.borderColor}`,
          }}
        >
          <div style={{ marginBottom: isMobile ? '16px' : '24px' }}>
            <div
              style={{
                width: isMobile ? '80px' : '120px',
                height: isMobile ? '80px' : '120px',
                borderRadius: '50%',
                border: `${isMobile ? '4px' : '6px'} solid ${
                  recommendation.color
                }`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                backgroundColor: 'white',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div
                style={{
                  fontSize: isMobile ? '18px' : '24px',
                  marginBottom: '4px',
                }}
              >
                {recommendation.icon}
              </div>
              <div
                style={{
                  fontSize: isMobile ? '16px' : '20px',
                  fontWeight: 'bold',
                  color: recommendation.color,
                }}
              >
                {score}%
              </div>
            </div>
            <h3
              style={{
                fontSize: isMobile ? 'clamp(18px, 4vw, 24px)' : '24px',
                fontWeight: '600',
                color: recommendation.color,
                marginBottom: '12px',
                lineHeight: '1.2',
              }}
            >
              {recommendation.level} for TMS Healing
            </h3>
            <p
              style={{
                fontSize: isMobile ? '14px' : '16px',
                color: '#374151',
                lineHeight: '1.6',
                marginBottom: '16px',
              }}
            >
              {recommendation.message}
            </p>
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: isMobile ? '12px' : '16px',
                border: `1px solid ${recommendation.borderColor}`,
                marginTop: '16px',
              }}
            >
              <p
                style={{
                  fontSize: isMobile ? '13px' : '14px',
                  color: recommendation.color,
                  fontStyle: 'italic',
                  margin: 0,
                  fontWeight: '500',
                  lineHeight: '1.4',
                }}
              >
                💚 {recommendation.encouragement}
              </p>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: isMobile ? '16px' : '24px',
          }}
        >
          <h4
            style={{
              fontSize: isMobile ? '18px' : '20px',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '16px',
              textAlign: 'center',
            }}
          >
            🌱 Your Personalized Next Steps
          </h4>
          <div style={{ display: 'grid', gap: isMobile ? '8px' : '12px' }}>
            {recommendation.recommendations.map((rec, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  padding: isMobile ? '12px' : '16px',
                  backgroundColor: recommendation.bgColor,
                  borderRadius: '8px',
                  borderLeft: `4px solid ${recommendation.color}`,
                }}
              >
                <div
                  style={{
                    minWidth: isMobile ? '20px' : '24px',
                    height: isMobile ? '20px' : '24px',
                    borderRadius: '50%',
                    backgroundColor: recommendation.color,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: isMobile ? '10px' : '12px',
                    fontWeight: 'bold',
                    marginRight: isMobile ? '8px' : '12px',
                    marginTop: '2px',
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </div>
                <span
                  style={{
                    fontSize: isMobile ? '13px' : '14px',
                    color: '#374151',
                    lineHeight: '1.5',
                  }}
                >
                  {rec}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hope and Encouragement Section */}
        <div
          style={{
            background: 'linear-gradient(135deg, #eff6ff 0%, #faf5ff 100%)',
            borderRadius: '12px',
            padding: isMobile ? '16px' : '24px',
            border: '1px solid #e0e7ff',
            textAlign: 'center',
          }}
        >
          <h4
            style={{
              fontSize: isMobile ? '16px' : '18px',
              fontWeight: '600',
              color: '#4338ca',
              marginBottom: '12px',
            }}
          >
            🌈 Remember: Healing is Possible
          </h4>
          <p
            style={{
              fontSize: isMobile ? '13px' : '14px',
              color: '#4338ca',
              lineHeight: '1.6',
              marginBottom: '16px',
            }}
          >
            Thousands of people have found relief using mind-body approaches.
            Your pain is real, your journey is valid, and taking this assessment
            shows you're committed to exploring all paths to wellness. That
            courage is the first step toward healing.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile
                ? '1fr'
                : 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '12px',
              marginTop: '16px',
            }}
          >
            <div
              style={{ fontSize: isMobile ? '11px' : '12px', color: '#6366f1' }}
            >
              <strong>✨ You're not alone</strong>
              <br />
              Join a community of healers
            </div>
            <div
              style={{ fontSize: isMobile ? '11px' : '12px', color: '#6366f1' }}
            >
              <strong>🧠 Knowledge is power</strong>
              <br />
              Understanding brings relief
            </div>
            <div
              style={{ fontSize: isMobile ? '11px' : '12px', color: '#6366f1' }}
            >
              <strong>💪 You have strength</strong>
              <br />
              Your body wants to heal
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div
          style={{
            backgroundColor: '#fffbeb',
            borderRadius: '12px',
            padding: isMobile ? '16px' : '20px',
            border: '1px solid #fcd34d',
          }}
        >
          <h4
            style={{
              fontSize: isMobile ? '13px' : '14px',
              fontWeight: '600',
              color: '#92400e',
              marginBottom: '8px',
            }}
          >
            💡 Important Note
          </h4>
          <p
            style={{
              fontSize: isMobile ? '12px' : '13px',
              color: '#92400e',
              lineHeight: '1.5',
              margin: 0,
            }}
          >
            This assessment is for educational purposes and self-reflection.
            It's not a medical diagnosis. Please work with healthcare providers
            who understand both traditional and mind-body approaches for the
            best care.
          </p>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <button
            onClick={resetQuestionnaire}
            style={{
              backgroundColor: '#6b7280',
              color: 'white',
              padding: isMobile ? '14px 24px' : '12px 24px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontSize: isMobile ? '16px' : '14px',
              fontWeight: '500',
              minHeight: '44px',
              flex: isMobile ? '1' : 'none',
            }}
          >
            Retake Assessment
          </button>
          <button
            onClick={() => onComplete(score, recommendation)}
            style={{
              backgroundColor: recommendation.color,
              color: 'white',
              padding: isMobile ? '14px 24px' : '12px 24px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontSize: isMobile ? '16px' : '14px',
              fontWeight: '500',
              minHeight: '44px',
              flex: isMobile ? '1' : 'none',
            }}
          >
            Continue Your Journey
          </button>
        </div>
      </div>
    );
  }

  const currentQuestions = questionnaire[currentSection];
  const progress = ((currentSection + 1) / questionnaire.length) * 100;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '16px' : '24px',
        padding: isMobile ? '0 8px' : '0',
      }}
    >
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
          TMS Healing Assessment
        </h2>
        <p
          style={{
            color: '#6b7280',
            fontSize: isMobile ? '14px' : '16px',
            lineHeight: '1.4',
          }}
        >
          Understanding your unique path to wellness
        </p>
      </div>

      {/* Progress Bar */}
      <div
        style={{
          backgroundColor: '#f3f4f6',
          borderRadius: '8px',
          height: isMobile ? '6px' : '8px',
          marginBottom: isMobile ? '16px' : '24px',
        }}
      >
        <div
          style={{
            backgroundColor: '#2563eb',
            height: '100%',
            borderRadius: '8px',
            width: `${progress}%`,
            transition: 'width 0.3s ease',
          }}
        />
      </div>

      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: isMobile ? '20px' : '32px',
        }}
      >
        <h3
          style={{
            fontSize: isMobile ? 'clamp(18px, 4vw, 24px)' : '24px',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: isMobile ? '16px' : '24px',
            lineHeight: '1.2',
          }}
        >
          {currentQuestions.title}
        </h3>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '16px' : '24px',
          }}
        >
          {currentQuestions.questions.map((question, index) => (
            <div
              key={question.id}
              style={{
                padding: isMobile ? '16px' : '20px',
                backgroundColor: '#f8fafc',
                borderRadius: '8px',
              }}
            >
              <h4
                style={{
                  fontSize: isMobile ? '15px' : '16px',
                  fontWeight: '500',
                  color: '#1f2937',
                  marginBottom: '16px',
                  lineHeight: '1.4',
                }}
              >
                {question.question}
              </h4>

              {question.type === 'yes_no' ? (
                <div
                  style={{
                    display: 'flex',
                    gap: isMobile ? '8px' : '12px',
                    flexDirection: isMobile ? 'column' : 'row',
                  }}
                >
                  <button
                    onClick={() => handleAnswer(question.id, 'yes')}
                    style={{
                      padding: isMobile ? '14px 16px' : '8px 16px',
                      borderRadius: '6px',
                      border: '2px solid',
                      borderColor:
                        answers[question.id] === 'yes' ? '#2563eb' : '#d1d5db',
                      backgroundColor:
                        answers[question.id] === 'yes' ? '#2563eb' : 'white',
                      color:
                        answers[question.id] === 'yes' ? 'white' : '#374151',
                      cursor: 'pointer',
                      fontSize: isMobile ? '16px' : '14px',
                      fontWeight: '500',
                      minHeight: '44px',
                      flex: isMobile ? '1' : 'none',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleAnswer(question.id, 'no')}
                    style={{
                      padding: isMobile ? '14px 16px' : '8px 16px',
                      borderRadius: '6px',
                      border: '2px solid',
                      borderColor:
                        answers[question.id] === 'no' ? '#2563eb' : '#d1d5db',
                      backgroundColor:
                        answers[question.id] === 'no' ? '#2563eb' : 'white',
                      color:
                        answers[question.id] === 'no' ? 'white' : '#374151',
                      cursor: 'pointer',
                      fontSize: isMobile ? '16px' : '14px',
                      fontWeight: '500',
                      minHeight: '44px',
                      flex: isMobile ? '1' : 'none',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    No
                  </button>
                </div>
              ) : (
                <div>
                  <p
                    style={{
                      fontSize: isMobile ? '11px' : '12px',
                      color: '#6b7280',
                      marginBottom: '12px',
                    }}
                  >
                    {question.scale}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      gap: isMobile ? '6px' : '8px',
                      alignItems: 'center',
                      justifyContent: isMobile ? 'space-between' : 'flex-start',
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((value) => (
                      <button
                        key={value}
                        onClick={() => handleAnswer(question.id, value)}
                        style={{
                          width: isMobile ? '50px' : '40px',
                          height: isMobile ? '50px' : '40px',
                          borderRadius: '50%',
                          border: '2px solid',
                          borderColor:
                            answers[question.id] === value
                              ? '#2563eb'
                              : '#d1d5db',
                          backgroundColor:
                            answers[question.id] === value
                              ? '#2563eb'
                              : 'white',
                          color:
                            answers[question.id] === value
                              ? 'white'
                              : '#374151',
                          cursor: 'pointer',
                          fontSize: isMobile ? '16px' : '14px',
                          fontWeight: '600',
                          transition: 'all 0.2s ease',
                          flex: isMobile ? '1' : 'none',
                          maxWidth: isMobile ? '50px' : '40px',
                        }}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '16px' : '0',
        }}
      >
        <button
          onClick={prevSection}
          disabled={currentSection === 0}
          style={{
            backgroundColor: currentSection === 0 ? '#f3f4f6' : '#6b7280',
            color: currentSection === 0 ? '#9ca3af' : 'white',
            padding: isMobile ? '14px 24px' : '12px 24px',
            borderRadius: '8px',
            border: 'none',
            cursor: currentSection === 0 ? 'not-allowed' : 'pointer',
            fontSize: isMobile ? '16px' : '14px',
            fontWeight: '500',
            minHeight: '44px',
            minWidth: isMobile ? '120px' : 'auto',
          }}
        >
          Previous
        </button>

        <span
          style={{
            fontSize: isMobile ? '16px' : '14px',
            color: '#6b7280',
            order: isMobile ? '-1' : '0',
          }}
        >
          Section {currentSection + 1} of {questionnaire.length}
        </span>

        <button
          onClick={nextSection}
          style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: isMobile ? '14px 24px' : '12px 24px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontSize: isMobile ? '16px' : '14px',
            fontWeight: '500',
            minHeight: '44px',
            minWidth: isMobile ? '120px' : 'auto',
          }}
        >
          {currentSection === questionnaire.length - 1
            ? 'See My Results'
            : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default Intake;
