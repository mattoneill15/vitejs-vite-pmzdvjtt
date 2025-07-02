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
import GuidedProgram from './components/GuidedProgram.jsx';

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
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      category: 'Essential Dr. Sarno Content',
      items: [
        {
          title: 'All The Rage: Saved by Sarno (Documentary)',
          speaker: 'Dr. John Sarno',
          duration: '90 min',
          description:
            'Award-winning documentary featuring Dr. Sarno, Howard Stern, Larry David, and Bernie Sanders. Chronicles the life-changing impact of TMS healing.',
          url: 'https://vimeo.com/ondemand/alltherage',
          type: 'video',
        },
        {
          title: 'John Sarno & John Stossel 20/20 Segment',
          speaker: 'Dr. John Sarno',
          duration: '15 min',
          description:
            'Classic ABC News 20/20 segment where journalist John Stossel shares his own TMS recovery story with Dr. Sarno.',
          url: 'https://www.tmswiki.org/ppd/The_20/20_segment_on_John_Sarno_and_TMS',
          type: 'video',
        },
        {
          title: 'Thank You Dr. Sarno - Patient Letters',
          speaker: 'Patients',
          duration: 'Various',
          description:
            "Hundreds of heartfelt thank you letters from patients who recovered using Dr. Sarno's methods.",
          url: 'https://www.thankyoudrsarno.org/',
          type: 'website',
        },
      ],
    },
    {
      category: 'Current TMS Practitioners & Research',
      items: [
        {
          title: 'Dr. Howard Schubiner - Google Tech Talk',
          speaker: 'Dr. Howard Schubiner',
          duration: '60 min',
          description:
            'Comprehensive lecture on mind-body medicine and chronic pain. Over 140,000 views. "Reign of Pain Lies Mostly in the Brain."',
          url: 'https://unlearnyourpain.com/mind-body-videos/',
          type: 'video',
        },
        {
          title: 'Unlearn Your Pain - Free Course',
          speaker: 'Dr. Howard Schubiner',
          duration: '4 weeks',
          description:
            'Complete free online course on Coursera. No paid account needed. Comprehensive mind-body medicine program.',
          url: 'https://unlearnyourpain.com/',
          type: 'website',
        },
        {
          title: 'Pain Psychology Center',
          speaker: 'Alan Gordon, LCSW',
          duration: 'Ongoing',
          description:
            'Leading treatment center for chronic pain. Developed Pain Reprocessing Therapy (PRT) with 98% success rate in Boulder study.',
          url: 'https://painpsychologycenter.com/',
          type: 'website',
        },
        {
          title: 'The Way Out - Pain Reprocessing Therapy',
          speaker: 'Alan Gordon',
          duration: 'Book',
          description:
            'Groundbreaking book on Pain Reprocessing Therapy, backed by University of Colorado Boulder research study.',
          url: 'https://painpsychologycenter.com/the-book',
          type: 'website',
        },
      ],
    },
    {
      category: 'Free Recovery Programs',
      items: [
        {
          title: "Alan Gordon's 21-Day Pain Recovery Program",
          speaker: 'Alan Gordon, LCSW',
          duration: '21 days',
          description:
            'Completely free program on TMS Wiki. One of the most widely used online TMS recovery tools. Includes video and audio segments.',
          url: 'https://www.tmswiki.org/forum/painrecovery/',
          type: 'website',
        },
        {
          title: 'TMS Wiki - Structured Educational Program',
          speaker: 'Community',
          duration: '6 weeks',
          description:
            'Free comprehensive recovery program with daily activities, journaling prompts, and educational content.',
          url: 'https://www.tmswiki.org/',
          type: 'website',
        },
        {
          title: 'This Might Hurt - Recovery Resources',
          speaker: 'Various Experts',
          duration: 'Various',
          description:
            'Comprehensive resource page with free tools, articles, and practitioner directory for neuroplastic pain.',
          url: 'https://www.thismighthurtfilm.com/chronic-pain',
          type: 'website',
        },
      ],
    },
    {
      category: 'Educational Videos & Lectures',
      items: [
        {
          title: 'Neural Pathways Animation',
          speaker: 'Alan Gordon',
          duration: '5 min',
          description:
            'Animated explanation of how pain neural pathways develop and can be rewired. Perfect introduction to neuroplastic pain.',
          url: 'https://unlearnyourpain.com/mind-body-videos/',
          type: 'video',
        },
        {
          title: 'Why Things Hurt - TED Talk',
          speaker: 'Dr. Lorimer Moseley',
          duration: '15 min',
          description:
            'Brilliant TED talk explaining pain science in accessible terms. Shows how the brain creates pain experiences.',
          url: 'https://www.thismighthurtfilm.com/chronic-pain',
          type: 'video',
        },
        {
          title: 'Curable App Podcast - Tell Me About Your Pain',
          speaker: 'Alan Gordon & Alon Ziv',
          duration: 'Various',
          description:
            'Popular podcast featuring real patient stories and cutting-edge neuroscience methods for chronic pain.',
          url: 'https://painpsychologycenter.com/',
          type: 'podcast',
        },
        {
          title: 'The Cure for Chronic Pain Podcast',
          speaker: 'Nicole Sachs, LCSW',
          duration: 'Weekly',
          description:
            'Weekly podcast delivering TMS recovery insights, journaling help, and real-time healing stories.',
          url: 'https://mytmsjourney.com/',
          type: 'podcast',
        },
      ],
    },
    {
      category: 'Success Stories & Testimonials',
      items: [
        {
          title: "Howard Stern's TMS Recovery",
          speaker: 'Howard Stern',
          duration: '10 min',
          description:
            "Radio personality Howard Stern discusses how Dr. Sarno's approach cured his chronic back pain and OCD.",
          url: 'https://www.tmswiki.org/',
          type: 'video',
        },
        {
          title: 'TMS Success Stories Collection',
          speaker: 'Various Patients',
          duration: 'Various',
          description:
            'Hundreds of detailed recovery stories from people who healed using TMS approaches. Organized by condition.',
          url: 'https://www.tmswiki.org/ppd/Success_Stories',
          type: 'website',
        },
        {
          title: 'My TMS Journey - Recovery Stories',
          speaker: 'Recovery Community',
          duration: 'Various',
          description:
            'Personal recovery blog with detailed accounts of healing journeys, tools, and expert interviews.',
          url: 'https://mytmsjourney.com/',
          type: 'website',
        },
        {
          title: 'Pain Recovery Program Success Stories',
          speaker: 'Program Graduates',
          duration: 'Various',
          description:
            'Real testimonials from people who completed structured TMS recovery programs with dramatic results.',
          url: 'https://www.thepainrecoveryprogram.com/success-stories',
          type: 'website',
        },
      ],
    },
    {
      category: 'Books & Scientific Research',
      items: [
        {
          title: 'Healing Back Pain by Dr. John Sarno',
          speaker: 'Dr. John Sarno',
          duration: 'Book',
          description:
            'The foundational book that started the TMS movement. Over 1 million copies sold. Many people heal just from reading it.',
          url: 'https://www.amazon.com/Healing-Back-Pain-Mind-Body-Connection/dp/0446557684',
          type: 'book',
        },
        {
          title: 'Unlearn Your Pain (4th Edition)',
          speaker: 'Dr. Howard Schubiner',
          duration: 'Book + Program',
          description:
            'Comprehensive book with guided 28-day recovery program. Includes access to online meditation exercises.',
          url: 'https://unlearnyourpain.com/unlearn-your-pain-book/',
          type: 'book',
        },
        {
          title: 'Boulder Back Pain Study Results',
          speaker: 'University of Colorado',
          duration: 'Research',
          description:
            'Groundbreaking randomized controlled trial showing 66% of chronic pain patients became pain-free with PRT.',
          url: 'https://painpsychologycenter.com/the-book',
          type: 'research',
        },
        {
          title: 'Association for Treatment of Neuroplastic Symptoms',
          speaker: 'ATNS',
          duration: 'Ongoing',
          description:
            'Non-profit organization advancing research and education in neuroplastic symptoms. Scientific resources and practitioner directory.',
          url: 'https://ppdassociation.org/',
          type: 'website',
        },
      ],
    },
  ];

  // Render different tabs
  const renderCurrentTab = () => {
    switch (currentTab) {
      case 'guided-program':
        return <GuidedProgram isMobile={isMobile} />;
      case 'intake':
        return (
          <Intake
            onComplete={handleIntakeComplete}
            intakeState={intakeState}
            onStateChange={handleIntakeStateChange}
            isMobile={isMobile}
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
            isMobile={isMobile}
          />
        );
      case 'education':
        return (
          <Education
            educationalContent={educationalContent}
            isMobile={isMobile}
          />
        );
      case 'resources':
        return <Resources tmsResources={tmsResources} isMobile={isMobile} />;
      case 'testimonials':
        return <Testimonials isMobile={isMobile} />;
      case 'journal':
        return (
          <Journal
            journalEntries={journalEntries}
            currentJournalEntry={currentJournalEntry}
            setCurrentJournalEntry={setCurrentJournalEntry}
            saveJournalEntry={saveJournalEntry}
            deleteJournalEntry={deleteJournalEntry}
            journalPrompts={journalPrompts}
            isMobile={isMobile}
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
            isMobile={isMobile}
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
            isMobile={isMobile}
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
        isMobile={isMobile}
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
          padding: isMobile ? '16px' : '20px',
        }}
      >
        <div
          style={{
            maxWidth: isMobile ? '100%' : '1000px',
            margin: '0 auto',
          }}
        >
          <Welcome
            onTakeAssessment={handleTakeAssessment}
            onSkipToApp={handleSkipToApp}
            isMobile={isMobile}
          />

          {/* Debug Button - Remove in production */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              onClick={resetAll}
              style={{
                backgroundColor: '#6b7280',
                color: 'white',
                padding: isMobile ? '8px 16px' : '6px 12px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontSize: isMobile ? '14px' : '12px',
                opacity: 0.7,
                minHeight: '44px',
                minWidth: '44px',
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
        padding: isMobile ? '12px' : '20px',
      }}
    >
      <div
        style={{
          maxWidth: isMobile ? '100%' : '1200px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '24px' : '40px',
            padding: isMobile ? '0 8px' : '0',
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? 'clamp(24px, 6vw, 32px)' : '32px',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '8px',
              lineHeight: '1.2',
            }}
          >
            TMS Healing Journey
          </h1>
          <p
            style={{
              color: '#6b7280',
              fontSize: isMobile ? '14px' : '16px',
              lineHeight: '1.4',
            }}
          >
            Based on Dr. John Sarno's Mind-Body Approach
          </p>
        </div>

        {/* Navigation */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? 'repeat(2, 1fr)'
              : 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: isMobile ? '8px' : '12px',
            marginBottom: isMobile ? '24px' : '40px',
            maxWidth: isMobile ? '100%' : '1000px',
            margin: isMobile ? '0 auto 24px' : '0 auto 40px',
          }}
        >
          <TabButton
            id="dashboard"
            label="Dashboard"
            active={currentTab === 'dashboard'}
            onClick={() => setCurrentTab('dashboard')}
            isMobile={isMobile}
          />
          <TabButton
            id="guided-program"
            label={isMobile ? 'Program' : '30-Day Program'}
            active={currentTab === 'guided-program'}
            onClick={() => setCurrentTab('guided-program')}
            isMobile={isMobile}
          />
          <TabButton
            id="education"
            label="Learn"
            active={currentTab === 'education'}
            onClick={() => setCurrentTab('education')}
            isMobile={isMobile}
          />
          <TabButton
            id="resources"
            label="Resources"
            active={currentTab === 'resources'}
            onClick={() => setCurrentTab('resources')}
            isMobile={isMobile}
          />
          <TabButton
            id="testimonials"
            label="Stories"
            active={currentTab === 'testimonials'}
            onClick={() => setCurrentTab('testimonials')}
            isMobile={isMobile}
          />
          <TabButton
            id="journal"
            label="Journal"
            active={currentTab === 'journal'}
            onClick={() => setCurrentTab('journal')}
            isMobile={isMobile}
          />
          <TabButton
            id="symptoms"
            label="Symptoms"
            active={currentTab === 'symptoms'}
            onClick={() => setCurrentTab('symptoms')}
            isMobile={isMobile}
          />
          <TabButton
            id="intake"
            label="Assessment"
            active={currentTab === 'intake'}
            onClick={() => setCurrentTab('intake')}
            isMobile={isMobile}
          />
        </div>

        {/* Render Current Tab */}
        {renderCurrentTab()}

        {/* Debug Info */}
        {!isMobile && (
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
            {Object.keys(intakeState.answers).length} | Mobile ={' '}
            {isMobile ? 'true' : 'false'}
          </div>
        )}

        {/* Legal Footer */}
        <div
          style={{
            marginTop: isMobile ? '40px' : '60px',
            padding: isMobile ? '16px' : '20px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            borderTop: '1px solid #e5e7eb',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: isMobile ? '11px' : '12px',
              color: '#6b7280',
              marginBottom: '8px',
              lineHeight: '1.4',
            }}
          >
            This application is for educational purposes only and is not
            intended for medical use.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: isMobile ? '12px' : '20px',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <button
              onClick={showLegalInfo}
              style={{
                background: 'none',
                border: 'none',
                color: '#2563eb',
                cursor: 'pointer',
                fontSize: isMobile ? '11px' : '12px',
                textDecoration: 'underline',
                minHeight: '44px',
                padding: '8px',
              }}
            >
              Terms & Privacy
            </button>
            <span
              style={{
                fontSize: isMobile ? '10px' : '12px',
                color: '#9ca3af',
              }}
            >
              Legal Acceptance:{' '}
              {localStorage.getItem('tms_legal_date')
                ? new Date(
                    localStorage.getItem('tms_legal_date')
                  ).toLocaleDateString()
                : 'Unknown'}
            </span>
            <span
              style={{
                fontSize: isMobile ? '10px' : '12px',
                color: '#9ca3af',
              }}
            >
              © 2024 TMS Healing Journey
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TMSHealingApp;
