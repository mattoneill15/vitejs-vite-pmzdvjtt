import React, { useState, useEffect } from 'react';

const TMSHealingApp = () => {
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [journalEntries, setJournalEntries] = useState([]);
  const [symptoms, setSymptoms] = useState([]);
  const [currentJournalEntry, setCurrentJournalEntry] = useState('');
  const [newSymptom, setNewSymptom] = useState({
    description: '',
    intensity: 5,
    emotional_state: '',
  });

  // Load data from memory on component mount
  useEffect(() => {
    try {
      const savedJournal = JSON.parse(
        localStorage.getItem('tms_journal') || '[]'
      );
      const savedSymptoms = JSON.parse(
        localStorage.getItem('tms_symptoms') || '[]'
      );
      setJournalEntries(savedJournal);
      setSymptoms(savedSymptoms);
    } catch (error) {
      console.log('No saved data found');
    }
  }, []);

  // Save journal entries
  const saveJournalEntry = () => {
    if (currentJournalEntry.trim()) {
      const newEntry = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        content: currentJournalEntry,
        timestamp: new Date().toISOString(),
      };
      const updatedEntries = [newEntry, ...journalEntries];
      setJournalEntries(updatedEntries);
      try {
        localStorage.setItem('tms_journal', JSON.stringify(updatedEntries));
      } catch (error) {
        console.log('Could not save to localStorage');
      }
      setCurrentJournalEntry('');
    }
  };

  // Save symptom entry
  const saveSymptom = () => {
    if (newSymptom.description.trim()) {
      const symptomEntry = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        ...newSymptom,
        timestamp: new Date().toISOString(),
      };
      const updatedSymptoms = [symptomEntry, ...symptoms];
      setSymptoms(updatedSymptoms);
      try {
        localStorage.setItem('tms_symptoms', JSON.stringify(updatedSymptoms));
      } catch (error) {
        console.log('Could not save to localStorage');
      }
      setNewSymptom({ description: '', intensity: 5, emotional_state: '' });
    }
  };

  const deleteJournalEntry = (id) => {
    const updatedEntries = journalEntries.filter((entry) => entry.id !== id);
    setJournalEntries(updatedEntries);
    try {
      localStorage.setItem('tms_journal', JSON.stringify(updatedEntries));
    } catch (error) {
      console.log('Could not save to localStorage');
    }
  };

  const deleteSymptom = (id) => {
    const updatedSymptoms = symptoms.filter((symptom) => symptom.id !== id);
    setSymptoms(updatedSymptoms);
    try {
      localStorage.setItem('tms_symptoms', JSON.stringify(updatedSymptoms));
    } catch (error) {
      console.log('Could not save to localStorage');
    }
  };

  const journalPrompts = [
    'What emotions am I avoiding or suppressing today?',
    'What perfectionist expectations am I placing on myself?',
    'What situations make me feel angry or frustrated?',
    'What fears or anxieties am I carrying?',
    'How am I being overly critical of myself?',
    'What relationships are causing me stress?',
    'What would I say if I knew my pain was emotionally driven?',
  ];

  const sarnoAffirmations = [
    "My pain is real, but it's not due to structural damage.",
    'I am safe. My body is strong and healthy.',
    'I acknowledge my emotions without fear.',
    'Stress and repressed emotions can create physical symptoms.',
    'Understanding the mind-body connection leads to healing.',
    'I give myself permission to feel all emotions.',
    'My unconscious mind is trying to protect me through distraction.',
  ];

  const educationalContent = [
    {
      title: 'Understanding TMS',
      content:
        'Tension Myositis Syndrome is a condition where emotional stress manifests as physical pain. Dr. Sarno discovered that many chronic pain conditions are actually the result of psychological tension rather than structural problems.',
    },
    {
      title: 'The Mind-Body Connection',
      content:
        'Our emotions and thoughts directly impact our physical well-being. Repressed anger, fear, and stress can create real physical symptoms as the unconscious mind attempts to distract us from emotional pain.',
    },
    {
      title: 'The Role of Perfectionism',
      content:
        'People with TMS often exhibit perfectionist tendencies and are highly self-critical. Recognizing these patterns is crucial for healing, as they create internal pressure that manifests physically.',
    },
    {
      title: 'Emotional Awareness',
      content:
        'Healing begins with acknowledging and accepting our full range of emotions. Rather than suppressing difficult feelings, we must learn to experience them without judgment.',
    },
  ];

  const TabButton = ({ id, label, active, onClick }) => (
    <button
      onClick={onClick}
      style={{
        padding: '8px 16px',
        margin: '4px',
        backgroundColor: active ? '#2563eb' : '#f3f4f6',
        color: active ? 'white' : '#374151',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '500',
      }}
    >
      {label}
    </button>
  );

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #eff6ff 0%, #faf5ff 100%)',
        padding: '20px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1
            style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '8px',
            }}
          >
            TMS Healing Journey
          </h1>
          <p style={{ color: '#6b7280' }}>
            Based on Dr. John Sarno's Mind-Body Approach
          </p>
        </div>

        {/* Navigation */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '40px',
          }}
        >
          <TabButton
            id="dashboard"
            label="Dashboard"
            active={currentTab === 'dashboard'}
            onClick={() => setCurrentTab('dashboard')}
          />
          <TabButton
            id="education"
            label="Learn"
            active={currentTab === 'education'}
            onClick={() => setCurrentTab('education')}
          />
          <TabButton
            id="journal"
            label="Journal"
            active={currentTab === 'journal'}
            onClick={() => setCurrentTab('journal')}
          />
          <TabButton
            id="symptoms"
            label="Symptoms"
            active={currentTab === 'symptoms'}
            onClick={() => setCurrentTab('symptoms')}
          />
        </div>

        {/* Dashboard */}
        {currentTab === 'dashboard' && (
          <div style={{ display: 'grid', gap: '24px' }}>
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
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <p style={{ fontSize: '14px', color: '#6b7280' }}>
                    Journal Entries: {journalEntries.length}
                  </p>
                  <p style={{ fontSize: '14px', color: '#6b7280' }}>
                    Symptom Logs: {symptoms.length}
                  </p>
                  <p style={{ fontSize: '14px', color: '#6b7280' }}>
                    Days Active:{' '}
                    {new Set(journalEntries.map((e) => e.date)).size}
                  </p>
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
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '16px',
                }}
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
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Education Tab */}
        {currentTab === 'education' && (
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <h2
                style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '8px',
                }}
              >
                Understanding TMS
              </h2>
              <p style={{ color: '#6b7280' }}>
                Learn the principles behind Dr. Sarno's approach
              </p>
            </div>

            {educationalContent.map((section, index) => (
              <div
                key={index}
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
                    marginBottom: '12px',
                    color: '#1e40af',
                  }}
                >
                  {section.title}
                </h3>
                <p style={{ color: '#374151', lineHeight: '1.6' }}>
                  {section.content}
                </p>
              </div>
            ))}

            <div
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                color: 'white',
                borderRadius: '12px',
                padding: '24px',
              }}
            >
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '12px',
                }}
              >
                Key Principles
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '8px',
                  }}
                >
                  <span style={{ marginRight: '8px' }}>→</span>
                  <span>Pain is real but often psychologically generated</span>
                </li>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '8px',
                  }}
                >
                  <span style={{ marginRight: '8px' }}>→</span>
                  <span>
                    Emotional awareness and acceptance are crucial for healing
                  </span>
                </li>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '8px',
                  }}
                >
                  <span style={{ marginRight: '8px' }}>→</span>
                  <span>Fear of pain often perpetuates the condition</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ marginRight: '8px' }}>→</span>
                  <span>Resume normal activities despite pain</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Journal Tab */}
        {currentTab === 'journal' && (
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
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
                Daily Journal
              </h3>

              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ fontWeight: '500', marginBottom: '8px' }}>
                  Today's Prompt:
                </h4>
                <p
                  style={{
                    color: '#2563eb',
                    fontStyle: 'italic',
                    marginBottom: '16px',
                  }}
                >
                  {
                    journalPrompts[
                      Math.floor(Math.random() * journalPrompts.length)
                    ]
                  }
                </p>
              </div>

              <textarea
                value={currentJournalEntry}
                onChange={(e) => setCurrentJournalEntry(e.target.value)}
                placeholder="Write about your emotions, thoughts, and any insights..."
                style={{
                  width: '100%',
                  height: '128px',
                  padding: '12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  resize: 'none',
                  fontSize: '14px',
                  fontFamily: 'inherit',
                }}
              />

              <button
                onClick={saveJournalEntry}
                style={{
                  marginTop: '12px',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                }}
              >
                ➕ Save Entry
              </button>
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
                Previous Entries
              </h3>
              {journalEntries.length === 0 ? (
                <p style={{ color: '#6b7280', fontStyle: 'italic' }}>
                  No journal entries yet. Start writing to track your emotional
                  journey!
                </p>
              ) : (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  {journalEntries.slice(0, 5).map((entry) => (
                    <div
                      key={entry.id}
                      style={{
                        borderLeft: '4px solid #2563eb',
                        paddingLeft: '16px',
                        paddingTop: '8px',
                        paddingBottom: '8px',
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
                        <span style={{ fontSize: '14px', color: '#6b7280' }}>
                          {entry.date}
                        </span>
                        <button
                          onClick={() => deleteJournalEntry(entry.id)}
                          style={{
                            color: '#ef4444',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '14px',
                          }}
                        >
                          🗑️
                        </button>
                      </div>
                      <p style={{ color: '#374151' }}>{entry.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Symptoms Tab */}
        {currentTab === 'symptoms' && (
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
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
                Log Symptoms
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
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
                      setNewSymptom({
                        ...newSymptom,
                        description: e.target.value,
                      })
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
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '16px',
                }}
              >
                Symptom History
              </h3>
              {symptoms.length === 0 ? (
                <p style={{ color: '#6b7280', fontStyle: 'italic' }}>
                  No symptoms logged yet. Start tracking to identify patterns!
                </p>
              ) : (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
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
        )}
      </div>
    </div>
  );
};

export default TMSHealingApp;
