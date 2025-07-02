import React, { useState, useEffect } from 'react';
import TabButton from './components/TabButton.jsx';
import Dashboard from './components/Dashboard.jsx';
import Education from './components/Education.jsx';
import Resources from './components/Resources.jsx';
import Journal from './components/Journal.jsx';
import Symptoms from './components/Symptoms.jsx';
import Intake from './components/Intake.jsx';
import Welcome from './components/Welcome.jsx';
import LegalDisclaimer from './components/LegalDisclaimer.jsx';
import Testimonials from './components/Testimonials.jsx';

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
  const [intakeCompleted, setIntakeCompleted] = useState(false);
  const [intakeResults, setIntakeResults] = useState(null);
  const [intakeState, setIntakeState] = useState({
    currentSection: 0,
    answers: {},
    showResults: false,
  });
  const [hasVisited, setHasVisited] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [legalAccepted, setLegalAccepted] = useState(false);
  const [showLegalDisclaimer, setShowLegalDisclaimer] = useState(false);

  // Load data from memory on component mount
  useEffect(() => {
    console.log('Loading data from localStorage...');
    try {
      const savedJournal = JSON.parse(
        localStorage.getItem('tms_journal') || '[]'
      );
      const savedSymptoms = JSON.parse(
        localStorage.getItem('tms_symptoms') || '[]'
      );
      const savedIntakeCompleted =
        localStorage.getItem('tms_intake_completed') === 'true';
      const savedIntakeResults = JSON.parse(
        localStorage.getItem('tms_intake_results') || 'null'
      );
      const savedIntakeState = JSON.parse(
        localStorage.getItem('tms_intake_state') || 'null'
      );
      const savedHasVisited =
        localStorage.getItem('tms_has_visited') === 'true';
      const savedLegalAccepted =
        localStorage.getItem('tms_legal_accepted') === 'true';
      const legalAcceptanceDate = localStorage.getItem('tms_legal_date');

      console.log('Loaded intake results:', savedIntakeResults);
      console.log('Intake completed:', savedIntakeCompleted);

      setJournalEntries(savedJournal);
      setSymptoms(savedSymptoms);
      setIntakeCompleted(savedIntakeCompleted);
      setIntakeResults(savedIntakeResults);
      setHasVisited(savedHasVisited);

      if (savedIntakeState) {
        setIntakeState(savedIntakeState);
      }

      // Check if legal acceptance is still valid (expires after 1 year)
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
      const isLegalAcceptanceValid =
        legalAcceptanceDate && new Date(legalAcceptanceDate) > oneYearAgo;

      if (savedLegalAccepted && isLegalAcceptanceValid) {
        setLegalAccepted(true);
        // Show welcome screen for new users (after legal acceptance)
        if (!savedHasVisited) {
          setShowWelcome(true);
        }
      } else {
        // Show legal disclaimer for new users or expired acceptance
        setShowLegalDisclaimer(true);
        setLegalAccepted(false);
      }
    } catch (error) {
      console.log('Error loading data:', error);
      // If there's an error reading data, treat as new user
      setShowLegalDisclaimer(true);
    }
  }, []);

  // Save data whenever intakeResults changes
  useEffect(() => {
    if (intakeResults) {
      console.log('Saving intake results:', intakeResults);
      try {
        localStorage.setItem('tms_intake_completed', 'true');
        localStorage.setItem(
          'tms_intake_results',
          JSON.stringify(intakeResults)
        );
      } catch (error) {
        console.log('Could not save intake results:', error);
      }
    }
  }, [intakeResults]);

  // Handle intake state changes
  const handleIntakeStateChange = (newState) => {
    setIntakeState(newState);
    try {
      localStorage.setItem('tms_intake_state', JSON.stringify(newState));
    } catch (error) {
      console.log('Could not save intake state:', error);
    }
  };

  // Handle legal disclaimer acceptance
  const handleLegalAccept = () => {
    setLegalAccepted(true);
    setShowLegalDisclaimer(false);

    const currentDate = new Date().toISOString();
    try {
      localStorage.setItem('tms_legal_accepted', 'true');
      localStorage.setItem('tms_legal_date', currentDate);
    } catch (error) {
      console.log('Could not save legal acceptance');
    }

    // Show welcome screen for new users after legal acceptance
    const savedHasVisited = localStorage.getItem('tms_has_visited') === 'true';
    if (!savedHasVisited) {
      setShowWelcome(true);
    }
  };

  // Handle legal disclaimer decline
  const handleLegalDecline = () => {
    // Clear all data and close app
    try {
      localStorage.clear();
    } catch (error) {
      console.log('Could not clear storage');
    }

    // Show exit message
    if (
      window.confirm(
        'You have declined the terms. The application will now close. Thank you for your time.'
      )
    ) {
      window.close();
    }
  };

  // Handle welcome screen choices
  const handleTakeAssessment = () => {
    setShowWelcome(false);
    setHasVisited(true);
    setCurrentTab('intake');
    try {
      localStorage.setItem('tms_has_visited', 'true');
    } catch (error) {
      console.log('Could not save visit status');
    }
  };

  const handleSkipToApp = () => {
    setShowWelcome(false);
    setHasVisited(true);
    setCurrentTab('dashboard');
    try {
      localStorage.setItem('tms_has_visited', 'true');
    } catch (error) {
      console.log('Could not save visit status');
    }
  };

  // Handle intake completion
  const handleIntakeComplete = (score, recommendation) => {
    console.log(
      'Intake completed with score:',
      score,
      'recommendation:',
      recommendation
    );
    const results = {
      score,
      recommendation,
      completedDate: new Date().toISOString(),
    };

    // Update state immediately
    setIntakeResults(results);
    setIntakeCompleted(true);

    // Save to localStorage immediately
    try {
      localStorage.setItem('tms_intake_completed', 'true');
      localStorage.setItem('tms_intake_results', JSON.stringify(results));
      console.log('Saved to localStorage successfully');
    } catch (error) {
      console.log('Could not save intake results:', error);
    }

    // Redirect to dashboard after completion
    setCurrentTab('dashboard');
  };

  // Navigate to intake (for taking or retaking assessment)
  const goToIntake = () => {
    console.log('Navigating to intake tab');
    setCurrentTab('intake');
  };

  // Reset intake completely (for retaking)
  const resetIntake = () => {
    console.log('Resetting intake');
    setIntakeCompleted(false);
    setIntakeResults(null);
    setIntakeState({
      currentSection: 0,
      answers: {},
      showResults: false,
    });
    setCurrentTab('intake');

    try {
      localStorage.removeItem('tms_intake_completed');
      localStorage.removeItem('tms_intake_results');
      localStorage.removeItem('tms_intake_state');
    } catch (error) {
      console.log('Could not clear intake data');
    }
  };

  // Reset everything (for testing)
  const resetAll = () => {
    setShowLegalDisclaimer(true);
    setLegalAccepted(false);
    setShowWelcome(false);
    setHasVisited(false);
    setIntakeCompleted(false);
    setIntakeResults(null);
    setIntakeState({
      currentSection: 0,
      answers: {},
      showResults: false,
    });
    setCurrentTab('dashboard');

    try {
      localStorage.clear();
    } catch (error) {
      console.log('Could not clear all data');
    }
  };

  // Show legal disclaimer link in footer
  const showLegalInfo = () => {
    setShowLegalDisclaimer(true);
  };

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

  // Data constants
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

  const tmsResources = [
    {
      category: 'Featured Lectures',
      items: [
        {
          title: 'Dr. John Sarno - Healing Back Pain: The Mind-Body Connection',
          speaker: 'Dr. John Sarno',
          duration: '60 min',
          description:
            'The foundational lecture explaining TMS theory and the psychological basis of chronic pain.',
          url: 'https://www.youtube.com/watch?v=vsR4wydiIBI',
          type: 'video',
        },
        {
          title: 'The Divided Mind: Understanding TMS',
          speaker: 'Dr. John Sarno',
          duration: '45 min',
          description:
            'Dr. Sarno discusses the unconscious emotions that create physical symptoms.',
          url: 'https://www.youtube.com/watch?v=BLr1sNNdHWE',
          type: 'video',
        },
      ],
    },
    {
      category: 'Current TMS Practitioners',
      items: [
        {
          title: 'Dr. Howard Schubiner - Unlearn Your Pain Program',
          speaker: 'Dr. Howard Schubiner',
          duration: '75 min',
          description:
            'Comprehensive approach to neuroplastic pain and mind-body healing techniques.',
          url: 'https://www.unlearnyourpain.com',
          type: 'website',
        },
        {
          title: 'Dr. Alan Gordon - Pain Psychology Center Approach',
          speaker: 'Dr. Alan Gordon',
          duration: '50 min',
          description:
            'Fear-based approach to treating chronic pain and the Pain Reprocessing Therapy method.',
          url: 'https://www.painpsychologycenter.com',
          type: 'website',
        },
        {
          title: 'Dr. Ira Rashbaum - TMS Recovery Methods',
          speaker: 'Dr. Ira Rashbaum',
          duration: '40 min',
          description:
            'Practical techniques for applying TMS principles in daily life.',
          url: 'https://www.youtube.com/watch?v=example',
          type: 'video',
        },
      ],
    },
    {
      category: 'Educational Webinars',
      items: [
        {
          title: 'Understanding Chronic Pain: A Mind-Body Perspective',
          speaker: 'Dr. David Hanscom',
          duration: '90 min',
          description:
            'Comprehensive webinar on the DOC (Direct your Own Care) approach to chronic pain.',
          url: 'https://backincontrol.com',
          type: 'website',
        },
        {
          title: 'The TMS Recovery Program Series',
          speaker: 'Nicole Sachs',
          duration: '8 x 45 min',
          description:
            'Complete series on journaling and emotional processing for TMS recovery.',
          url: 'https://www.youtube.com/c/TheCureBradyBunch',
          type: 'video',
        },
        {
          title: 'Mindfulness and TMS Recovery',
          speaker: 'Dr. David Schechter',
          duration: '60 min',
          description:
            'Integrating mindfulness practices with TMS healing principles.',
          url: 'https://www.youtube.com/watch?v=example2',
          type: 'video',
        },
      ],
    },
    {
      category: 'Patient Success Stories',
      items: [
        {
          title: 'Monte Hueftle - 20 Years of Back Pain Healed',
          speaker: 'Monte Hueftle',
          duration: '30 min',
          description:
            'Personal journey of healing chronic back pain through TMS principles.',
          url: 'https://www.youtube.com/watch?v=example3',
          type: 'video',
        },
        {
          title: 'TMS Success Stories Compilation',
          speaker: 'Various Patients',
          duration: '120 min',
          description:
            'Collection of patient testimonials and recovery journeys.',
          url: 'https://www.tmswiki.org/ppd/Success_Stories',
          type: 'website',
        },
      ],
    },
  ];

  // Render different tabs
  const renderCurrentTab = () => {
    switch (currentTab) {
      case 'intake':
        return (
          <Intake
            onComplete={handleIntakeComplete}
            intakeState={intakeState}
            onStateChange={handleIntakeStateChange}
          />
        );
      case 'dashboard':
        return (
          <Dashboard
            journalEntries={journalEntries}
            symptoms={symptoms}
            sarnoAffirmations={sarnoAffirmations}
            intakeResults={intakeResults}
            onRetakeIntake={resetIntake}
            onTakeAssessment={goToIntake}
          />
        );
      case 'education':
        return <Education educationalContent={educationalContent} />;
      case 'resources':
        return <Resources tmsResources={tmsResources} />;
      case 'testimonials':
        return <Testimonials />;
      case 'journal':
        return (
          <Journal
            journalEntries={journalEntries}
            currentJournalEntry={currentJournalEntry}
            setCurrentJournalEntry={setCurrentJournalEntry}
            saveJournalEntry={saveJournalEntry}
            deleteJournalEntry={deleteJournalEntry}
            journalPrompts={journalPrompts}
          />
        );
      case 'symptoms':
        return (
          <Symptoms
            symptoms={symptoms}
            newSymptom={newSymptom}
            setNewSymptom={setNewSymptom}
            saveSymptom={saveSymptom}
            deleteSymptom={deleteSymptom}
          />
        );
      default:
        return (
          <Dashboard
            journalEntries={journalEntries}
            symptoms={symptoms}
            sarnoAffirmations={sarnoAffirmations}
            intakeResults={intakeResults}
            onRetakeIntake={resetIntake}
            onTakeAssessment={goToIntake}
          />
        );
    }
  };

  // Show legal disclaimer first for new users or re-acceptance
  if (showLegalDisclaimer) {
    return (
      <LegalDisclaimer
        onAccept={handleLegalAccept}
        onDecline={handleLegalDecline}
      />
    );
  }

  // Show welcome screen for new users (after legal acceptance)
  if (showWelcome && legalAccepted) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #eff6ff 0%, #faf5ff 100%)',
          padding: '20px',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <Welcome
            onTakeAssessment={handleTakeAssessment}
            onSkipToApp={handleSkipToApp}
          />

          {/* Debug Button - Remove in production */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              onClick={resetAll}
              style={{
                backgroundColor: '#6b7280',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '12px',
                opacity: 0.7,
              }}
            >
              Reset App (for testing)
            </button>
          </div>
        </div>
      </div>
    );
  }

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
            id="resources"
            label="Resources"
            active={currentTab === 'resources'}
            onClick={() => setCurrentTab('resources')}
          />
          <TabButton
            id="testimonials"
            label="Success Stories"
            active={currentTab === 'testimonials'}
            onClick={() => setCurrentTab('testimonials')}
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
          <TabButton
            id="intake"
            label="Assessment"
            active={currentTab === 'intake'}
            onClick={() => setCurrentTab('intake')}
          />
        </div>

        {/* Render Current Tab */}
        {renderCurrentTab()}

        {/* Debug Info */}
        <div
          style={{
            fontSize: '10px',
            color: '#9ca3af',
            textAlign: 'center',
            marginTop: '20px',
          }}
        >
          Debug: Intake Results = {intakeResults ? 'exists' : 'null'} |
          Completed = {intakeCompleted ? 'true' : 'false'} | Score ={' '}
          {intakeResults?.score || 'none'} | Section ={' '}
          {intakeState.currentSection} | Answers ={' '}
          {Object.keys(intakeState.answers).length}
        </div>

        {/* Legal Footer */}
        <div
          style={{
            marginTop: '60px',
            padding: '20px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            borderTop: '1px solid #e5e7eb',
            textAlign: 'center',
          }}
        >
          <p
            style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}
          >
            This application is for educational purposes only and is not
            intended for medical use.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={showLegalInfo}
              style={{
                background: 'none',
                border: 'none',
                color: '#2563eb',
                cursor: 'pointer',
                fontSize: '12px',
                textDecoration: 'underline',
              }}
            >
              Terms & Privacy
            </button>
            <span style={{ fontSize: '12px', color: '#9ca3af' }}>
              Legal Acceptance:{' '}
              {localStorage.getItem('tms_legal_date')
                ? new Date(
                    localStorage.getItem('tms_legal_date')
                  ).toLocaleDateString()
                : 'Unknown'}
            </span>
            <span style={{ fontSize: '12px', color: '#9ca3af' }}>
              © 2024 TMS Healing Journey
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TMSHealingApp;
