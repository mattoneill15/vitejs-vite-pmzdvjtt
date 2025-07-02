import React, { useState, useEffect } from 'react';

const GuidedProgram = ({ isMobile = false }) => {
  const [programState, setProgramState] = useState({
    isEnrolled: false,
    currentDay: 1,
    completedDays: [],
    startDate: null,
    lastCompletedDate: null,
  });
  const [selectedDay, setSelectedDay] = useState(1);
  const [showDayDetail, setShowDayDetail] = useState(false);

  // Load program state from localStorage
  useEffect(() => {
    try {
      const savedState = localStorage.getItem('tms_guided_program');
      if (savedState) {
        const parsed = JSON.parse(savedState);
        setProgramState(parsed);
        setSelectedDay(parsed.currentDay);
      }
    } catch (error) {
      console.log('Error loading program state:', error);
    }
  }, []);

  // Save program state to localStorage
  const saveProgramState = (newState) => {
    try {
      localStorage.setItem('tms_guided_program', JSON.stringify(newState));
      setProgramState(newState);
    } catch (error) {
      console.log('Error saving program state:', error);
    }
  };

  // 30-Day Program Content
  const programDays = [
    // Week 1: Understanding & Foundation
    {
      day: 1,
      title: 'Welcome to Your Healing Journey',
      theme: 'Foundation',
      focus: 'Understanding TMS',
      activity: "Read Dr. Sarno's basic principles",
      journalPrompt:
        'Write about your pain history and what brought you to TMS healing.',
      affirmation: 'I am open to understanding my pain in a new way.',
      education:
        'TMS is real physical pain caused by emotional tension, not structural damage.',
      exercises: [
        'Read about mind-body connection',
        'Take the TMS assessment if not done',
      ],
      timeEstimate: '20-30 minutes',
    },
    {
      day: 2,
      title: 'Your Pain Story',
      theme: 'Foundation',
      focus: 'Personal History',
      activity: 'Map your pain timeline',
      journalPrompt:
        'When did your pain start? What was happening in your life at that time?',
      affirmation:
        'My pain has a story, and understanding it leads to healing.',
      education:
        'Pain often begins during stressful life events - this connection is important.',
      exercises: [
        'Create a timeline of pain onset',
        'Note major life stressors',
      ],
      timeEstimate: '25-35 minutes',
    },
    {
      day: 3,
      title: 'The Perfectionist Within',
      theme: 'Foundation',
      focus: 'Personality Patterns',
      activity: 'Identify perfectionist tendencies',
      journalPrompt:
        'How do I put pressure on myself? Where am I overly critical?',
      affirmation: 'I am enough as I am. I release the need to be perfect.',
      education:
        'Perfectionism creates internal pressure that manifests as physical symptoms.',
      exercises: ['List perfectionist behaviors', 'Practice self-compassion'],
      timeEstimate: '20-30 minutes',
    },
    {
      day: 4,
      title: 'People-Pleasing Patterns',
      theme: 'Foundation',
      focus: 'Relationship Dynamics',
      activity: 'Examine people-pleasing behaviors',
      journalPrompt:
        'How do I sacrifice my needs for others? When do I struggle to say no?',
      affirmation: 'My needs matter. I can set healthy boundaries.',
      education:
        'People-pleasers often suppress their own needs, creating internal conflict.',
      exercises: [
        'Identify people-pleasing moments',
        'Practice saying no in small ways',
      ],
      timeEstimate: '25-30 minutes',
    },
    {
      day: 5,
      title: 'Anger: The Hidden Emotion',
      theme: 'Foundation',
      focus: 'Emotional Suppression',
      activity: 'Explore suppressed anger',
      journalPrompt:
        "What makes me angry that I don't express? Who or what frustrates me?",
      affirmation:
        "I acknowledge my anger without judgment. It's safe to feel.",
      education:
        'Suppressed anger is often the root emotion behind TMS symptoms.',
      exercises: [
        "Write an uncensored anger letter (don't send)",
        'Identify anger triggers',
      ],
      timeEstimate: '30-40 minutes',
    },
    {
      day: 6,
      title: 'Fear and Anxiety',
      theme: 'Foundation',
      focus: 'Emotional Awareness',
      activity: 'Understand your fears',
      journalPrompt:
        'What am I afraid of? How does anxiety show up in my body?',
      affirmation: 'I face my fears with courage. Anxiety is temporary.',
      education:
        'Fear and anxiety create muscle tension that can manifest as pain.',
      exercises: ['List current fears and worries', 'Practice deep breathing'],
      timeEstimate: '20-30 minutes',
    },
    {
      day: 7,
      title: 'Week 1 Reflection',
      theme: 'Foundation',
      focus: 'Integration',
      activity: 'Review and integrate',
      journalPrompt:
        'What have I learned about myself this week? What patterns do I see?',
      affirmation:
        'I am gaining valuable insights about my mind-body connection.',
      education:
        "Awareness is the first step toward healing. You're already making progress.",
      exercises: ["Review week's journal entries", 'Celebrate insights gained'],
      timeEstimate: '25-35 minutes',
    },

    // Week 2: Emotional Exploration
    {
      day: 8,
      title: 'Childhood Patterns',
      theme: 'Emotional Exploration',
      focus: 'Early Programming',
      activity: 'Explore childhood influences',
      journalPrompt:
        'How was I taught to handle emotions as a child? What messages did I receive?',
      affirmation: 'I can heal patterns that no longer serve me.',
      education:
        'Early emotional patterns often influence how we handle stress as adults.',
      exercises: [
        'Reflect on family emotional patterns',
        'Practice reparenting yourself',
      ],
      timeEstimate: '30-40 minutes',
    },
    {
      day: 9,
      title: 'The Inner Critic',
      theme: 'Emotional Exploration',
      focus: 'Self-Talk',
      activity: 'Identify critical inner voice',
      journalPrompt: 'What does my inner critic say? How do I talk to myself?',
      affirmation: 'I speak to myself with kindness and compassion.',
      education:
        'Harsh self-criticism creates stress that manifests physically.',
      exercises: [
        'Notice critical self-talk',
        'Practice compassionate responses',
      ],
      timeEstimate: '25-30 minutes',
    },
    {
      day: 10,
      title: 'Guilt and Shame',
      theme: 'Emotional Exploration',
      focus: 'Hidden Emotions',
      activity: 'Explore guilt and shame',
      journalPrompt:
        'What do I feel guilty about? Where do I experience shame?',
      affirmation:
        'I release guilt and shame. I am worthy of love and healing.',
      education:
        'Guilt and shame create deep emotional tension that affects the body.',
      exercises: ['Write about guilt and shame', 'Practice self-forgiveness'],
      timeEstimate: '30-40 minutes',
    },
    {
      day: 11,
      title: 'Sadness and Grief',
      theme: 'Emotional Exploration',
      focus: 'Processing Loss',
      activity: 'Honor your sadness',
      journalPrompt:
        'What losses have I not fully grieved? What makes me deeply sad?',
      affirmation:
        "It's safe to feel sadness. Grief is love with nowhere to go.",
      education:
        'Unprocessed grief and sadness can manifest as physical symptoms.',
      exercises: ['Write about losses', 'Allow yourself to feel sadness'],
      timeEstimate: '30-40 minutes',
    },
    {
      day: 12,
      title: 'Joy and Pleasure',
      theme: 'Emotional Exploration',
      focus: 'Positive Emotions',
      activity: 'Reconnect with joy',
      journalPrompt: 'When do I feel truly joyful? What brings me pleasure?',
      affirmation: 'I deserve joy and pleasure in my life.',
      education:
        'Reconnecting with positive emotions helps balance the nervous system.',
      exercises: [
        'List what brings you joy',
        'Schedule one pleasurable activity',
      ],
      timeEstimate: '20-30 minutes',
    },
    {
      day: 13,
      title: 'Emotional Body Scan',
      theme: 'Emotional Exploration',
      focus: 'Body Awareness',
      activity: 'Connect emotions to body sensations',
      journalPrompt:
        'Where do I feel emotions in my body? How does stress manifest physically?',
      affirmation: "I listen to my body's wisdom with compassion.",
      education:
        'Emotions are felt in the body. Learning this connection aids healing.',
      exercises: [
        'Practice body scan meditation',
        'Map emotions to body sensations',
      ],
      timeEstimate: '25-35 minutes',
    },
    {
      day: 14,
      title: 'Week 2 Integration',
      theme: 'Emotional Exploration',
      focus: 'Emotional Patterns',
      activity: 'Integrate emotional awareness',
      journalPrompt:
        'What emotional patterns have I discovered? How do they connect to my pain?',
      affirmation: 'I am becoming more emotionally aware and authentic.',
      education:
        'Emotional awareness is a powerful tool for healing and self-understanding.',
      exercises: [
        'Review emotional discoveries',
        'Practice emotional check-ins',
      ],
      timeEstimate: '30-40 minutes',
    },

    // Week 3: Challenging Fear and Building Confidence
    {
      day: 15,
      title: 'Challenging Pain Fear',
      theme: 'Building Confidence',
      focus: 'Fear Reduction',
      activity: 'Question pain-related fears',
      journalPrompt:
        'What am I afraid my pain means? How can I challenge these fears?',
      affirmation: 'My pain is not dangerous. I am safe in my body.',
      education:
        'Fear of pain often perpetuates symptoms. Challenging fear is healing.',
      exercises: [
        'List pain fears',
        'Find evidence against catastrophic thinking',
      ],
      timeEstimate: '25-35 minutes',
    },
    {
      day: 16,
      title: 'Resume Physical Activity',
      theme: 'Building Confidence',
      focus: 'Physical Confidence',
      activity: 'Gradually increase activity',
      journalPrompt:
        'What activities have I been avoiding? How can I gradually resume them?',
      affirmation: 'My body is strong and capable. Movement is healing.',
      education:
        'Gradually resuming activity helps retrain the brain that movement is safe.',
      exercises: ['Choose one avoided activity', 'Start very gradually'],
      timeEstimate: '20-30 minutes + activity',
    },
    {
      day: 17,
      title: 'Stress Response Patterns',
      theme: 'Building Confidence',
      focus: 'Stress Management',
      activity: 'Understand your stress response',
      journalPrompt:
        'How do I typically respond to stress? What are my stress triggers?',
      affirmation: 'I can choose how I respond to stress. I have options.',
      education:
        'Understanding your stress response helps you manage it more effectively.',
      exercises: ['Map stress triggers', 'Practice stress response techniques'],
      timeEstimate: '25-30 minutes',
    },
    {
      day: 18,
      title: 'Boundary Setting',
      theme: 'Building Confidence',
      focus: 'Healthy Boundaries',
      activity: 'Practice setting boundaries',
      journalPrompt:
        'Where do I need better boundaries? How can I protect my energy?',
      affirmation: 'Healthy boundaries protect my well-being. I can say no.',
      education:
        'Poor boundaries create stress and resentment that manifests physically.',
      exercises: ['Identify boundary needs', 'Practice one small boundary'],
      timeEstimate: '25-35 minutes',
    },
    {
      day: 19,
      title: 'Self-Advocacy',
      theme: 'Building Confidence',
      focus: 'Personal Power',
      activity: 'Practice advocating for yourself',
      journalPrompt:
        'How can I better advocate for my needs? Where do I give my power away?',
      affirmation: 'I have the right to advocate for myself. My voice matters.',
      education: 'Self-advocacy reduces internal stress and builds confidence.',
      exercises: [
        'Practice assertive communication',
        'Identify self-advocacy opportunities',
      ],
      timeEstimate: '25-30 minutes',
    },
    {
      day: 20,
      title: 'Challenging Perfectionism',
      theme: 'Building Confidence',
      focus: 'Perfectionism Recovery',
      activity: "Practice being 'good enough'",
      journalPrompt:
        "Where can I accept 'good enough'? How can I embrace imperfection?",
      affirmation:
        'Good enough is perfect. I embrace my beautiful imperfections.',
      education:
        "Perfectionism creates constant stress. 'Good enough' is actually perfect.",
      exercises: [
        'Do something imperfectly on purpose',
        'Practice self-compassion',
      ],
      timeEstimate: '20-30 minutes',
    },
    {
      day: 21,
      title: 'Week 3 Empowerment',
      theme: 'Building Confidence',
      focus: 'Personal Power',
      activity: 'Celebrate your progress',
      journalPrompt:
        'How have I grown stronger this week? What courage have I shown?',
      affirmation: 'I am becoming more confident and empowered every day.',
      education:
        'Building confidence and challenging fears directly reduces TMS symptoms.',
      exercises: ['List confidence victories', 'Plan continued growth'],
      timeEstimate: '25-35 minutes',
    },

    // Week 4: Integration and Sustainable Practices
    {
      day: 22,
      title: 'Daily Emotional Check-ins',
      theme: 'Sustainable Practices',
      focus: 'Daily Awareness',
      activity: 'Establish daily emotional awareness',
      journalPrompt:
        'How can I maintain daily emotional awareness? What system works for me?',
      affirmation: 'I check in with my emotions regularly and with compassion.',
      education:
        'Daily emotional awareness prevents emotional buildup that causes symptoms.',
      exercises: [
        'Design your daily check-in system',
        'Practice morning/evening check-ins',
      ],
      timeEstimate: '20-25 minutes',
    },
    {
      day: 23,
      title: 'Stress Prevention',
      theme: 'Sustainable Practices',
      focus: 'Proactive Wellness',
      activity: 'Build stress prevention habits',
      journalPrompt:
        'What habits can help me manage stress before it builds up?',
      affirmation:
        'I take proactive care of my emotional and physical well-being.',
      education:
        'Preventing stress buildup is more effective than managing stress after it occurs.',
      exercises: [
        'List stress prevention strategies',
        'Commit to one daily practice',
      ],
      timeEstimate: '25-30 minutes',
    },
    {
      day: 24,
      title: 'Support Systems',
      theme: 'Sustainable Practices',
      focus: 'Community & Connection',
      activity: 'Strengthen your support network',
      journalPrompt:
        'Who supports my healing journey? How can I deepen these connections?',
      affirmation: 'I am surrounded by love and support. I am not alone.',
      education:
        'Strong support systems are crucial for sustained healing and well-being.',
      exercises: [
        'Map your support network',
        'Reach out to one supportive person',
      ],
      timeEstimate: '20-30 minutes',
    },
    {
      day: 25,
      title: 'Meaningful Activities',
      theme: 'Sustainable Practices',
      focus: 'Purpose & Joy',
      activity: 'Reconnect with meaningful activities',
      journalPrompt:
        'What activities give my life meaning? How can I make more time for them?',
      affirmation:
        'I prioritize activities that bring meaning and joy to my life.',
      education:
        'Meaningful activities provide natural stress relief and life satisfaction.',
      exercises: [
        'List meaningful activities',
        'Schedule one meaningful activity',
      ],
      timeEstimate: '25-30 minutes',
    },
    {
      day: 26,
      title: 'Self-Care Without Guilt',
      theme: 'Sustainable Practices',
      focus: 'Self-Compassion',
      activity: 'Practice guilt-free self-care',
      journalPrompt:
        'How can I care for myself without guilt? What would I tell a friend?',
      affirmation: 'Self-care is not selfish. I deserve to be cared for.',
      education:
        'Self-care is essential for maintaining physical and emotional health.',
      exercises: [
        'Plan weekly self-care activities',
        'Practice guilt-free self-care',
      ],
      timeEstimate: '20-30 minutes',
    },
    {
      day: 27,
      title: 'Handling Setbacks',
      theme: 'Sustainable Practices',
      focus: 'Resilience',
      activity: 'Prepare for challenges',
      journalPrompt:
        "How will I handle setbacks or symptom flare-ups? What's my plan?",
      affirmation: 'Setbacks are temporary. I have tools to handle challenges.',
      education:
        'Setbacks are normal. Having a plan reduces their impact and duration.',
      exercises: [
        'Create a setback action plan',
        'Practice self-compassion for setbacks',
      ],
      timeEstimate: '25-35 minutes',
    },
    {
      day: 28,
      title: 'Celebrating Progress',
      theme: 'Sustainable Practices',
      focus: 'Acknowledgment',
      activity: 'Acknowledge your journey',
      journalPrompt: 'How have I grown in these 28 days? What am I proud of?',
      affirmation: 'I celebrate my courage, growth, and commitment to healing.',
      education:
        'Acknowledging progress reinforces positive changes and builds confidence.',
      exercises: ['List all progress made', 'Celebrate in a meaningful way'],
      timeEstimate: '30-40 minutes',
    },
    {
      day: 29,
      title: 'Your Future Vision',
      theme: 'Sustainable Practices',
      focus: 'Future Planning',
      activity: 'Envision your healed self',
      journalPrompt:
        'What does my life look like as I continue healing? What are my hopes?',
      affirmation:
        'I am creating a future filled with health, joy, and authenticity.',
      education:
        'A clear vision of healing helps maintain motivation and direction.',
      exercises: [
        'Write your healing vision',
        'Set intentions for continued growth',
      ],
      timeEstimate: '30-40 minutes',
    },
    {
      day: 30,
      title: 'Graduation & New Beginnings',
      theme: 'Sustainable Practices',
      focus: 'Completion & Continuation',
      activity: 'Complete the program',
      journalPrompt:
        'What have I learned about myself? How will I continue this journey?',
      affirmation:
        'I have everything I need within me to continue healing and growing.',
      education:
        'Completing this program is just the beginning of your ongoing healing journey.',
      exercises: [
        'Write a letter to your future self',
        'Plan your ongoing practices',
      ],
      timeEstimate: '40-50 minutes',
    },
  ];

  const startProgram = () => {
    const newState = {
      isEnrolled: true,
      currentDay: 1,
      completedDays: [],
      startDate: new Date().toISOString(),
      lastCompletedDate: null,
    };
    saveProgramState(newState);
    setSelectedDay(1);
  };

  const completeDay = (dayNumber) => {
    if (!programState.completedDays.includes(dayNumber)) {
      const newState = {
        ...programState,
        completedDays: [...programState.completedDays, dayNumber],
        currentDay: Math.min(dayNumber + 1, 30),
        lastCompletedDate: new Date().toISOString(),
      };
      saveProgramState(newState);
    }
  };

  const resetProgram = () => {
    const newState = {
      isEnrolled: false,
      currentDay: 1,
      completedDays: [],
      startDate: null,
      lastCompletedDate: null,
    };
    saveProgramState(newState);
    setSelectedDay(1);
    setShowDayDetail(false);
  };

  const getDayStatus = (dayNumber) => {
    if (programState.completedDays.includes(dayNumber)) return 'completed';
    if (dayNumber === programState.currentDay) return 'current';
    if (dayNumber < programState.currentDay) return 'available';
    return 'locked';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return { bg: '#dcfce7', border: '#16a34a', text: '#15803d' };
      case 'current':
        return { bg: '#dbeafe', border: '#2563eb', text: '#1e40af' };
      case 'available':
        return { bg: '#fef3c7', border: '#d97706', text: '#b45309' };
      case 'locked':
        return { bg: '#f3f4f6', border: '#9ca3af', text: '#6b7280' };
      default:
        return { bg: '#f3f4f6', border: '#9ca3af', text: '#6b7280' };
    }
  };

  const getThemeColor = (theme) => {
    switch (theme) {
      case 'Foundation':
        return { bg: '#eff6ff', border: '#2563eb', text: '#1e40af' };
      case 'Emotional Exploration':
        return { bg: '#f0fdf4', border: '#16a34a', text: '#15803d' };
      case 'Building Confidence':
        return { bg: '#fef3c7', border: '#d97706', text: '#b45309' };
      case 'Sustainable Practices':
        return { bg: '#faf5ff', border: '#7c3aed', text: '#6b21a8' };
      default:
        return { bg: '#f3f4f6', border: '#9ca3af', text: '#6b7280' };
    }
  };

  const calculateProgress = () => {
    return Math.round((programState.completedDays.length / 30) * 100);
  };

  const getCurrentWeek = () => {
    return Math.ceil(programState.currentDay / 7);
  };

  if (!programState.isEnrolled) {
    // Program Introduction/Enrollment Screen
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
          <div
            style={{
              fontSize: isMobile ? '48px' : '64px',
              marginBottom: '16px',
            }}
          >
            🌟
          </div>
          <h2
            style={{
              fontSize: isMobile ? 'clamp(20px, 5vw, 28px)' : '28px',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '8px',
              lineHeight: '1.2',
            }}
          >
            30-Day TMS Recovery Program
          </h2>
          <p
            style={{
              color: '#6b7280',
              fontSize: isMobile ? '14px' : '16px',
              lineHeight: '1.4',
            }}
          >
            A guided journey to emotional awareness and physical healing
          </p>
        </div>

        {/* Program Overview */}
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
            🎯 What You'll Achieve
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: isMobile ? '12px' : '16px',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                backgroundColor: '#f0f9ff',
                borderRadius: '8px',
                padding: isMobile ? '16px' : '20px',
                border: '1px solid #bae6fd',
              }}
            >
              <div
                style={{
                  fontSize: isMobile ? '24px' : '32px',
                  marginBottom: '8px',
                }}
              >
                🧠
              </div>
              <h4
                style={{
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: '600',
                  color: '#0369a1',
                  marginBottom: '8px',
                }}
              >
                Understand Your Pain
              </h4>
              <p
                style={{
                  fontSize: isMobile ? '12px' : '13px',
                  color: '#0369a1',
                  lineHeight: '1.4',
                  margin: 0,
                }}
              >
                Learn how emotions create physical symptoms and break the pain
                cycle
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#f0fdf4',
                borderRadius: '8px',
                padding: isMobile ? '16px' : '20px',
                border: '1px solid #bbf7d0',
              }}
            >
              <div
                style={{
                  fontSize: isMobile ? '24px' : '32px',
                  marginBottom: '8px',
                }}
              >
                💭
              </div>
              <h4
                style={{
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: '600',
                  color: '#15803d',
                  marginBottom: '8px',
                }}
              >
                Process Emotions
              </h4>
              <p
                style={{
                  fontSize: isMobile ? '12px' : '13px',
                  color: '#15803d',
                  lineHeight: '1.4',
                  margin: 0,
                }}
              >
                Safely explore and express emotions that may be causing symptoms
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#fef3c7',
                borderRadius: '8px',
                padding: isMobile ? '16px' : '20px',
                border: '1px solid #fcd34d',
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
                  color: '#d97706',
                  marginBottom: '8px',
                }}
              >
                Build Confidence
              </h4>
              <p
                style={{
                  fontSize: isMobile ? '12px' : '13px',
                  color: '#d97706',
                  lineHeight: '1.4',
                  margin: 0,
                }}
              >
                Overcome fear and gradually resume activities you've been
                avoiding
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#faf5ff',
                borderRadius: '8px',
                padding: isMobile ? '16px' : '20px',
                border: '1px solid #e9d5ff',
              }}
            >
              <div
                style={{
                  fontSize: isMobile ? '24px' : '32px',
                  marginBottom: '8px',
                }}
              >
                🌱
              </div>
              <h4
                style={{
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: '600',
                  color: '#7c3aed',
                  marginBottom: '8px',
                }}
              >
                Create Lasting Change
              </h4>
              <p
                style={{
                  fontSize: isMobile ? '12px' : '13px',
                  color: '#7c3aed',
                  lineHeight: '1.4',
                  margin: 0,
                }}
              >
                Develop sustainable practices for ongoing emotional and physical
                wellness
              </p>
            </div>
          </div>
        </div>

        {/* 4-Week Structure */}
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
            📅 Your 4-Week Journey
          </h3>

          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: isMobile ? '12px' : '16px',
                backgroundColor: '#eff6ff',
                borderRadius: '8px',
                border: '1px solid #bfdbfe',
              }}
            >
              <div
                style={{
                  backgroundColor: '#2563eb',
                  color: 'white',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
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
                    color: '#1e40af',
                    marginBottom: '4px',
                  }}
                >
                  Week 1: Foundation
                </h4>
                <p
                  style={{
                    fontSize: isMobile ? '12px' : '13px',
                    color: '#1e40af',
                    margin: 0,
                  }}
                >
                  Understanding TMS, exploring personality patterns, and
                  identifying emotional triggers
                </p>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
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
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
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
                    color: '#15803d',
                    marginBottom: '4px',
                  }}
                >
                  Week 2: Emotional Exploration
                </h4>
                <p
                  style={{
                    fontSize: isMobile ? '12px' : '13px',
                    color: '#15803d',
                    margin: 0,
                  }}
                >
                  Deep dive into emotions, processing childhood patterns, and
                  connecting feelings to body
                </p>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
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
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
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
                    color: '#d97706',
                    marginBottom: '4px',
                  }}
                >
                  Week 3: Building Confidence
                </h4>
                <p
                  style={{
                    fontSize: isMobile ? '12px' : '13px',
                    color: '#d97706',
                    margin: 0,
                  }}
                >
                  Challenging fears, resuming activities, setting boundaries,
                  and building self-advocacy
                </p>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: isMobile ? '12px' : '16px',
                backgroundColor: '#faf5ff',
                borderRadius: '8px',
                border: '1px solid #e9d5ff',
              }}
            >
              <div
                style={{
                  backgroundColor: '#7c3aed',
                  color: 'white',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  flexShrink: 0,
                }}
              >
                4
              </div>
              <div>
                <h4
                  style={{
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: '600',
                    color: '#7c3aed',
                    marginBottom: '4px',
                  }}
                >
                  Week 4: Sustainable Practices
                </h4>
                <p
                  style={{
                    fontSize: isMobile ? '12px' : '13px',
                    color: '#7c3aed',
                    margin: 0,
                  }}
                >
                  Creating lasting habits, building support systems, and
                  planning for continued growth
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div
          style={{
            backgroundColor: '#f8fafc',
            borderRadius: '12px',
            padding: isMobile ? '20px' : '24px',
            border: '1px solid #e2e8f0',
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
            ⏰ Daily Commitment
          </h3>

          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <div
              style={{
                fontSize: isMobile ? '32px' : '48px',
                marginBottom: '8px',
              }}
            >
              ⏱️
            </div>
            <p
              style={{
                fontSize: isMobile ? '16px' : '18px',
                fontWeight: '600',
                color: '#2563eb',
                marginBottom: '8px',
              }}
            >
              20-40 minutes per day
            </p>
            <p
              style={{
                fontSize: isMobile ? '13px' : '14px',
                color: '#6b7280',
                lineHeight: '1.5',
              }}
            >
              Each day includes guided journaling, educational content, and
              practical exercises
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: '12px',
            }}
          >
            <div style={{ textAlign: 'center', padding: '12px' }}>
              <div
                style={{
                  fontSize: isMobile ? '20px' : '24px',
                  marginBottom: '8px',
                }}
              >
                📝
              </div>
              <h4
                style={{
                  fontSize: isMobile ? '12px' : '14px',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '4px',
                }}
              >
                Journal Prompts
              </h4>
              <p
                style={{
                  fontSize: isMobile ? '11px' : '12px',
                  color: '#6b7280',
                  margin: 0,
                }}
              >
                Guided questions for emotional exploration
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '12px' }}>
              <div
                style={{
                  fontSize: isMobile ? '20px' : '24px',
                  marginBottom: '8px',
                }}
              >
                📚
              </div>
              <h4
                style={{
                  fontSize: isMobile ? '12px' : '14px',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '4px',
                }}
              >
                Education
              </h4>
              <p
                style={{
                  fontSize: isMobile ? '11px' : '12px',
                  color: '#6b7280',
                  margin: 0,
                }}
              >
                Learn key concepts about TMS healing
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '12px' }}>
              <div
                style={{
                  fontSize: isMobile ? '20px' : '24px',
                  marginBottom: '8px',
                }}
              >
                🎯
              </div>
              <h4
                style={{
                  fontSize: isMobile ? '12px' : '14px',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '4px',
                }}
              >
                Exercises
              </h4>
              <p
                style={{
                  fontSize: isMobile ? '11px' : '12px',
                  color: '#6b7280',
                  margin: 0,
                }}
              >
                Practical activities to apply what you learn
              </p>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={startProgram}
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: isMobile ? '16px 32px' : '16px 40px',
              cursor: 'pointer',
              fontSize: isMobile ? '18px' : '20px',
              fontWeight: '600',
              minHeight: '60px',
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#1d4ed8';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 16px rgba(37, 99, 235, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#2563eb';
              e.target.style.transform = 'translateY(0px)';
              e.target.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
            }}
          >
            🚀 Start My 30-Day Journey
          </button>
          <p
            style={{
              fontSize: isMobile ? '12px' : '13px',
              color: '#6b7280',
              marginTop: '12px',
              fontStyle: 'italic',
            }}
          >
            Your progress will be automatically saved
          </p>
        </div>
      </div>
    );
  }

  // Program Dashboard (when enrolled)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '16px' : '24px',
        padding: isMobile ? '0 8px' : '0',
      }}
    >
      {/* Progress Header */}
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: isMobile ? '20px' : '24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '12px' : '0',
          }}
        >
          <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
            <h2
              style={{
                fontSize: isMobile ? '20px' : '24px',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '4px',
              }}
            >
              30-Day TMS Recovery Program
            </h2>
            <p
              style={{
                fontSize: isMobile ? '13px' : '14px',
                color: '#6b7280',
                margin: 0,
              }}
            >
              Week {getCurrentWeek()} • Day {programState.currentDay} of 30
            </p>
          </div>
          <button
            onClick={resetProgram}
            style={{
              backgroundColor: '#fee2e2',
              color: '#b91c1c',
              border: '1px solid #fecaca',
              borderRadius: '6px',
              padding: isMobile ? '8px 12px' : '6px 10px',
              cursor: 'pointer',
              fontSize: isMobile ? '12px' : '11px',
              fontWeight: '500',
              minHeight: '36px',
            }}
          >
            Reset Program
          </button>
        </div>

        {/* Progress Bar */}
        <div
          style={{
            backgroundColor: '#f3f4f6',
            borderRadius: '8px',
            height: '12px',
            marginBottom: '12px',
          }}
        >
          <div
            style={{
              backgroundColor: '#2563eb',
              height: '100%',
              borderRadius: '8px',
              width: `${calculateProgress()}%`,
              transition: 'width 0.3s ease',
            }}
          />
        </div>
        <p
          style={{
            fontSize: isMobile ? '13px' : '14px',
            color: '#6b7280',
            textAlign: 'center',
            margin: 0,
          }}
        >
          {programState.completedDays.length} of 30 days completed (
          {calculateProgress()}%)
        </p>
      </div>

      {/* Current Day Highlight */}
      {!showDayDetail && (
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: isMobile ? '20px' : '24px',
            border: '2px solid #2563eb',
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
            🎯 Today's Focus: Day {programState.currentDay}
          </h3>

          {programDays[programState.currentDay - 1] && (
            <div>
              <div
                style={{
                  backgroundColor: getThemeColor(
                    programDays[programState.currentDay - 1].theme
                  ).bg,
                  borderRadius: '8px',
                  padding: isMobile ? '16px' : '20px',
                  border: `1px solid ${
                    getThemeColor(
                      programDays[programState.currentDay - 1].theme
                    ).border
                  }`,
                  marginBottom: '16px',
                }}
              >
                <h4
                  style={{
                    fontSize: isMobile ? '16px' : '18px',
                    fontWeight: '600',
                    color: getThemeColor(
                      programDays[programState.currentDay - 1].theme
                    ).text,
                    marginBottom: '8px',
                  }}
                >
                  {programDays[programState.currentDay - 1].title}
                </h4>
                <p
                  style={{
                    fontSize: isMobile ? '13px' : '14px',
                    color: getThemeColor(
                      programDays[programState.currentDay - 1].theme
                    ).text,
                    marginBottom: '8px',
                  }}
                >
                  <strong>Focus:</strong>{' '}
                  {programDays[programState.currentDay - 1].focus}
                </p>
                <p
                  style={{
                    fontSize: isMobile ? '13px' : '14px',
                    color: getThemeColor(
                      programDays[programState.currentDay - 1].theme
                    ).text,
                    margin: 0,
                  }}
                >
                  <strong>Time:</strong>{' '}
                  {programDays[programState.currentDay - 1].timeEstimate}
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={() => {
                    setSelectedDay(programState.currentDay);
                    setShowDayDetail(true);
                  }}
                  style={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: isMobile ? '14px 28px' : '12px 24px',
                    cursor: 'pointer',
                    fontSize: isMobile ? '16px' : '14px',
                    fontWeight: '500',
                    minHeight: '44px',
                  }}
                >
                  Start Today's Session
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Day Detail View */}
      {showDayDetail && programDays[selectedDay - 1] && (
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: isMobile ? '20px' : '24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? '12px' : '0',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: isMobile ? '18px' : '20px',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '4px',
                }}
              >
                Day {selectedDay}: {programDays[selectedDay - 1].title}
              </h3>
              <p
                style={{
                  fontSize: isMobile ? '13px' : '14px',
                  color: '#6b7280',
                  margin: 0,
                }}
              >
                {programDays[selectedDay - 1].theme} •{' '}
                {programDays[selectedDay - 1].timeEstimate}
              </p>
            </div>
            <button
              onClick={() => setShowDayDetail(false)}
              style={{
                backgroundColor: '#f3f4f6',
                color: '#374151',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                padding: isMobile ? '8px 12px' : '6px 10px',
                cursor: 'pointer',
                fontSize: isMobile ? '12px' : '11px',
                fontWeight: '500',
                minHeight: '36px',
              }}
            >
              ← Back to Overview
            </button>
          </div>

          {/* Daily Content */}
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            {/* Affirmation */}
            <div
              style={{
                backgroundColor: '#f0f9ff',
                borderRadius: '8px',
                padding: isMobile ? '16px' : '20px',
                border: '1px solid #bae6fd',
              }}
            >
              <h4
                style={{
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: '600',
                  color: '#0369a1',
                  marginBottom: '8px',
                }}
              >
                💫 Today's Affirmation
              </h4>
              <p
                style={{
                  fontSize: isMobile ? '14px' : '15px',
                  color: '#0369a1',
                  fontStyle: 'italic',
                  lineHeight: '1.5',
                  margin: 0,
                }}
              >
                "{programDays[selectedDay - 1].affirmation}"
              </p>
            </div>

            {/* Education */}
            <div
              style={{
                backgroundColor: '#f0fdf4',
                borderRadius: '8px',
                padding: isMobile ? '16px' : '20px',
                border: '1px solid #bbf7d0',
              }}
            >
              <h4
                style={{
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: '600',
                  color: '#15803d',
                  marginBottom: '8px',
                }}
              >
                📚 Key Learning
              </h4>
              <p
                style={{
                  fontSize: isMobile ? '13px' : '14px',
                  color: '#15803d',
                  lineHeight: '1.5',
                  margin: 0,
                }}
              >
                {programDays[selectedDay - 1].education}
              </p>
            </div>

            {/* Journal Prompt */}
            <div
              style={{
                backgroundColor: '#fef3c7',
                borderRadius: '8px',
                padding: isMobile ? '16px' : '20px',
                border: '1px solid #fcd34d',
              }}
            >
              <h4
                style={{
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: '600',
                  color: '#d97706',
                  marginBottom: '8px',
                }}
              >
                ✍️ Journal Prompt
              </h4>
              <p
                style={{
                  fontSize: isMobile ? '13px' : '14px',
                  color: '#d97706',
                  lineHeight: '1.5',
                  margin: 0,
                }}
              >
                {programDays[selectedDay - 1].journalPrompt}
              </p>
            </div>

            {/* Exercises */}
            <div
              style={{
                backgroundColor: '#faf5ff',
                borderRadius: '8px',
                padding: isMobile ? '16px' : '20px',
                border: '1px solid #e9d5ff',
              }}
            >
              <h4
                style={{
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: '600',
                  color: '#7c3aed',
                  marginBottom: '12px',
                }}
              >
                🎯 Today's Exercises
              </h4>
              <ul
                style={{
                  fontSize: isMobile ? '13px' : '14px',
                  color: '#7c3aed',
                  lineHeight: '1.5',
                  marginLeft: '16px',
                }}
              >
                {programDays[selectedDay - 1].exercises.map(
                  (exercise, index) => (
                    <li key={index} style={{ marginBottom: '4px' }}>
                      {exercise}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Complete Day Button */}
            <div style={{ textAlign: 'center', marginTop: '16px' }}>
              {!programState.completedDays.includes(selectedDay) ? (
                <button
                  onClick={() => completeDay(selectedDay)}
                  style={{
                    backgroundColor: '#16a34a',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: isMobile ? '14px 28px' : '12px 24px',
                    cursor: 'pointer',
                    fontSize: isMobile ? '16px' : '14px',
                    fontWeight: '500',
                    minHeight: '44px',
                  }}
                >
                  ✅ Mark Day {selectedDay} Complete
                </button>
              ) : (
                <div
                  style={{
                    backgroundColor: '#dcfce7',
                    color: '#15803d',
                    borderRadius: '8px',
                    padding: isMobile ? '14px 28px' : '12px 24px',
                    fontSize: isMobile ? '16px' : '14px',
                    fontWeight: '500',
                    border: '1px solid #bbf7d0',
                  }}
                >
                  ✅ Day {selectedDay} Completed!
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Calendar View */}
      {!showDayDetail && (
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
              textAlign: 'center',
            }}
          >
            📅 Program Calendar
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile
                ? 'repeat(5, 1fr)'
                : 'repeat(7, 1fr)',
              gap: isMobile ? '8px' : '12px',
            }}
          >
            {programDays.map((day, index) => {
              const status = getDayStatus(day.day);
              const colors = getStatusColor(status);
              const isClickable = status !== 'locked';

              return (
                <button
                  key={day.day}
                  onClick={() => {
                    if (isClickable) {
                      setSelectedDay(day.day);
                      setShowDayDetail(true);
                    }
                  }}
                  disabled={!isClickable}
                  style={{
                    backgroundColor: colors.bg,
                    border: `2px solid ${colors.border}`,
                    borderRadius: '8px',
                    padding: isMobile ? '8px' : '12px',
                    cursor: isClickable ? 'pointer' : 'not-allowed',
                    transition: 'all 0.2s ease',
                    minHeight: isMobile ? '60px' : '80px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                  }}
                >
                  <div
                    style={{
                      fontSize: isMobile ? '14px' : '16px',
                      fontWeight: '600',
                      color: colors.text,
                    }}
                  >
                    {day.day}
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? '10px' : '11px',
                      color: colors.text,
                      textAlign: 'center',
                      lineHeight: '1.2',
                    }}
                  >
                    {status === 'completed'
                      ? '✅'
                      : status === 'current'
                      ? '👈'
                      : status === 'available'
                      ? '📖'
                      : '🔒'}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div
            style={{
              marginTop: '16px',
              display: 'grid',
              gridTemplateColumns: isMobile
                ? 'repeat(2, 1fr)'
                : 'repeat(4, 1fr)',
              gap: '8px',
              fontSize: isMobile ? '11px' : '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#dcfce7',
                  borderRadius: '2px',
                }}
              ></div>
              <span style={{ color: '#6b7280' }}>Completed</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#dbeafe',
                  borderRadius: '2px',
                }}
              ></div>
              <span style={{ color: '#6b7280' }}>Current</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#fef3c7',
                  borderRadius: '2px',
                }}
              ></div>
              <span style={{ color: '#6b7280' }}>Available</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '2px',
                }}
              ></div>
              <span style={{ color: '#6b7280' }}>Locked</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuidedProgram;
