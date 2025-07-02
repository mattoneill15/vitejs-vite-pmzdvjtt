import React, { useState } from 'react';

const Testimonials = ({ isMobile = false }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showAllStories, setShowAllStories] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      age: 34,
      condition: 'Chronic back pain',
      duration: '5 years',
      story:
        "I suffered from debilitating lower back pain for 5 years. Multiple doctors, MRIs, and treatments provided no lasting relief. After discovering Dr. Sarno's work and understanding TMS, I began journaling about my suppressed emotions and perfectionist tendencies. Within 3 months, my pain decreased by 90%. Understanding the mind-body connection changed my life.",
      keyInsight:
        'Recognizing my perfectionism and people-pleasing patterns was the breakthrough moment.',
      timeToRelief: '3 months',
      painReduction: '90%',
      quote:
        'Knowledge truly is the cure. Once I understood TMS, the fear left and so did the pain.',
    },
    {
      id: 2,
      name: 'Michael R.',
      age: 42,
      condition: 'Chronic fatigue & muscle tension',
      duration: '8 years',
      story:
        "After years of unexplained fatigue and muscle tension, I was skeptical about TMS. But traditional medicine had failed me. I started with Dr. Sarno's books, then began emotional awareness work. The connection between my work stress, repressed anger, and physical symptoms became clear. Gradual return to activities I'd avoided, combined with daily journaling, restored my energy and eliminated the tension.",
      keyInsight:
        'My body was holding onto years of work-related stress and anger I never expressed.',
      timeToRelief: '6 months',
      painReduction: '85%',
      quote:
        'I got my life back. TMS healing taught me that my emotions needed attention, not just my body.',
    },
    {
      id: 3,
      name: 'Jennifer L.',
      age: 28,
      condition: 'Fibromyalgia symptoms',
      duration: '3 years',
      story:
        "Diagnosed with fibromyalgia at 25, I was told I'd have to manage pain for life. Nothing made sense until I learned about TMS. My symptoms had started after a traumatic period - relationship ending, job loss, family issues. Through TMS work, I realized my body was expressing emotional pain. Daily emotional check-ins, reducing self-criticism, and gradually resuming normal activities led to remarkable improvement.",
      keyInsight:
        "My symptoms started exactly when my life fell apart - the timing wasn't coincidental.",
      timeToRelief: '4 months',
      painReduction: '80%',
      quote:
        'TMS taught me to listen to my emotions instead of just my symptoms.',
    },
    {
      id: 4,
      name: 'David K.',
      age: 51,
      condition: 'Neck pain & headaches',
      duration: '10 years',
      story:
        "A decade of chronic neck pain and daily headaches controlled my life. I'd tried everything - physical therapy, medications, injections. When a friend mentioned TMS, I was desperate enough to try. Reading about the emotional roots of pain resonated deeply. I began exploring my tendency to carry others' burdens and my fear of expressing needs. As I became more emotionally honest, the physical symptoms gradually faded.",
      keyInsight:
        'I was literally carrying the weight of the world on my shoulders - emotionally and physically.',
      timeToRelief: '5 months',
      painReduction: '95%',
      quote:
        'Learning to say no and express my needs freed me from a decade of pain.',
    },
    {
      id: 5,
      name: 'Lisa T.',
      age: 39,
      condition: 'Multiple symptoms',
      duration: '7 years',
      story:
        "My journey with TMS involved multiple shifting symptoms - back pain, then migraines, then digestive issues. This pattern itself confirmed TMS for me. Each time I addressed one symptom psychologically, another would appear. Understanding this 'symptom imperative' was crucial. Through consistent emotional work, mindfulness, and refusing to fear my symptoms, I broke the cycle completely.",
      keyInsight:
        "The moving symptoms were my unconscious mind's desperate attempts to keep me distracted.",
      timeToRelief: '8 months',
      painReduction: '100%',
      quote:
        'When you stop fearing the symptoms, they lose their power over you.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const current = testimonials[currentTestimonial];

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
          🌟 Success Stories
        </h2>
        <p
          style={{
            color: '#6b7280',
            fontSize: isMobile ? '14px' : '16px',
            lineHeight: '1.4',
          }}
        >
          Real people, real healing journeys with TMS recovery
        </p>
      </div>

      {/* Main Testimonial Display */}
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
          padding: isMobile ? '20px' : '32px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100px',
            height: '100px',
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
            borderRadius: '50%',
            transform: 'translate(50%, -50%)',
            opacity: 0.5,
          }}
        />

        {/* Profile Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            position: 'relative',
            zIndex: 1,
            flexDirection: isMobile ? 'column' : 'row',
            textAlign: isMobile ? 'center' : 'left',
            gap: isMobile ? '12px' : '16px',
          }}
        >
          <div
            style={{
              width: isMobile ? '60px' : '80px',
              height: isMobile ? '60px' : '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: isMobile ? '20px' : '28px',
              fontWeight: 'bold',
              flexShrink: 0,
            }}
          >
            {current.name.charAt(0)}
          </div>
          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontSize: isMobile ? '18px' : '22px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '4px',
              }}
            >
              {current.name}
            </h3>
            <p
              style={{
                fontSize: isMobile ? '13px' : '14px',
                color: '#6b7280',
                margin: 0,
              }}
            >
              Age {current.age} • {current.condition} • {current.duration}
            </p>
          </div>
        </div>

        {/* Quote */}
        <div
          style={{
            backgroundColor: '#f0f9ff',
            borderRadius: '12px',
            padding: isMobile ? '16px' : '20px',
            marginBottom: '20px',
            borderLeft: '4px solid #3b82f6',
            position: 'relative',
          }}
        >
          <div
            style={{
              fontSize: isMobile ? '20px' : '24px',
              color: '#3b82f6',
              position: 'absolute',
              top: isMobile ? '8px' : '12px',
              left: isMobile ? '12px' : '16px',
            }}
          >
            "
          </div>
          <p
            style={{
              fontSize: isMobile ? '15px' : '16px',
              color: '#1e40af',
              fontStyle: 'italic',
              lineHeight: '1.6',
              margin: '0',
              paddingLeft: isMobile ? '16px' : '20px',
            }}
          >
            {current.quote}
          </p>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '12px' : '16px',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              backgroundColor: '#dcfce7',
              borderRadius: '8px',
              padding: isMobile ? '12px' : '16px',
              textAlign: 'center',
              border: '1px solid #bbf7d0',
            }}
          >
            <div
              style={{
                fontSize: isMobile ? '18px' : '24px',
                fontWeight: 'bold',
                color: '#15803d',
                marginBottom: '4px',
              }}
            >
              {current.painReduction}
            </div>
            <div
              style={{
                fontSize: isMobile ? '11px' : '12px',
                color: '#15803d',
                fontWeight: '500',
              }}
            >
              Pain Reduction
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#fef3c7',
              borderRadius: '8px',
              padding: isMobile ? '12px' : '16px',
              textAlign: 'center',
              border: '1px solid #fcd34d',
            }}
          >
            <div
              style={{
                fontSize: isMobile ? '18px' : '24px',
                fontWeight: 'bold',
                color: '#d97706',
                marginBottom: '4px',
              }}
            >
              {current.timeToRelief}
            </div>
            <div
              style={{
                fontSize: isMobile ? '11px' : '12px',
                color: '#d97706',
                fontWeight: '500',
              }}
            >
              Time to Relief
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#e0e7ff',
              borderRadius: '8px',
              padding: isMobile ? '12px' : '16px',
              textAlign: 'center',
              border: '1px solid #c7d2fe',
              gridColumn: isMobile ? '1 / -1' : 'auto',
            }}
          >
            <div
              style={{
                fontSize: isMobile ? '18px' : '24px',
                fontWeight: 'bold',
                color: '#4338ca',
                marginBottom: '4px',
              }}
            >
              {current.duration}
            </div>
            <div
              style={{
                fontSize: isMobile ? '11px' : '12px',
                color: '#4338ca',
                fontWeight: '500',
              }}
            >
              Pain Duration
            </div>
          </div>
        </div>

        {/* Story */}
        <div style={{ marginBottom: '20px' }}>
          <h4
            style={{
              fontSize: isMobile ? '16px' : '18px',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '12px',
            }}
          >
            🌱 The Journey
          </h4>
          <p
            style={{
              fontSize: isMobile ? '14px' : '15px',
              color: '#374151',
              lineHeight: '1.6',
              marginBottom: '16px',
            }}
          >
            {current.story}
          </p>
        </div>

        {/* Key Insight */}
        <div
          style={{
            backgroundColor: '#fffbeb',
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
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            💡 Key Breakthrough
          </h4>
          <p
            style={{
              fontSize: isMobile ? '13px' : '14px',
              color: '#92400e',
              lineHeight: '1.5',
              margin: 0,
              fontStyle: 'italic',
            }}
          >
            {current.keyInsight}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: isMobile ? '12px' : '16px',
          flexWrap: 'wrap',
        }}
      >
        <button
          onClick={prevTestimonial}
          style={{
            backgroundColor: '#f3f4f6',
            border: '2px solid #e5e7eb',
            borderRadius: '50%',
            width: isMobile ? '44px' : '48px',
            height: isMobile ? '44px' : '48px',
            cursor: 'pointer',
            fontSize: isMobile ? '16px' : '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#e5e7eb';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#f3f4f6';
            e.target.style.transform = 'scale(1)';
          }}
        >
          ←
        </button>

        {/* Dots Navigation */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              style={{
                width: isMobile ? '12px' : '14px',
                height: isMobile ? '12px' : '14px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor:
                  currentTestimonial === index ? '#3b82f6' : '#d1d5db',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            />
          ))}
        </div>

        <button
          onClick={nextTestimonial}
          style={{
            backgroundColor: '#f3f4f6',
            border: '2px solid #e5e7eb',
            borderRadius: '50%',
            width: isMobile ? '44px' : '48px',
            height: isMobile ? '44px' : '48px',
            cursor: 'pointer',
            fontSize: isMobile ? '16px' : '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#e5e7eb';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#f3f4f6';
            e.target.style.transform = 'scale(1)';
          }}
        >
          →
        </button>
      </div>

      {/* Story Counter */}
      <div style={{ textAlign: 'center' }}>
        <p
          style={{
            fontSize: isMobile ? '12px' : '14px',
            color: '#6b7280',
            margin: 0,
          }}
        >
          Story {currentTestimonial + 1} of {testimonials.length}
        </p>
      </div>

      {/* All Stories Toggle */}
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={() => setShowAllStories(!showAllStories)}
          style={{
            backgroundColor: showAllStories ? '#2563eb' : '#f8fafc',
            color: showAllStories ? 'white' : '#374151',
            border: `2px solid ${showAllStories ? '#2563eb' : '#e2e8f0'}`,
            borderRadius: '8px',
            padding: isMobile ? '12px 20px' : '10px 16px',
            cursor: 'pointer',
            fontSize: isMobile ? '14px' : '13px',
            fontWeight: '500',
            minHeight: '44px',
            transition: 'all 0.2s ease',
          }}
        >
          {showAllStories ? 'Hide All Stories' : 'View All Stories'}
        </button>
      </div>

      {/* All Stories List */}
      {showAllStories && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? '1fr'
              : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: isMobile ? '12px' : '16px',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                padding: isMobile ? '16px' : '20px',
                border:
                  currentTestimonial === index
                    ? '2px solid #3b82f6'
                    : '1px solid #e5e7eb',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onClick={() => {
                goToTestimonial(index);
                setShowAllStories(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onMouseEnter={(e) => {
                if (currentTestimonial !== index) {
                  e.target.style.borderColor = '#cbd5e1';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (currentTestimonial !== index) {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.transform = 'translateY(0px)';
                }
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px',
                }}
              >
                <div
                  style={{
                    width: isMobile ? '40px' : '48px',
                    height: isMobile ? '40px' : '48px',
                    borderRadius: '50%',
                    background:
                      'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: isMobile ? '16px' : '18px',
                    fontWeight: 'bold',
                  }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: isMobile ? '15px' : '16px',
                      fontWeight: '600',
                      color: '#1f2937',
                      marginBottom: '2px',
                    }}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    style={{
                      fontSize: isMobile ? '12px' : '13px',
                      color: '#6b7280',
                      margin: 0,
                    }}
                  >
                    {testimonial.condition}
                  </p>
                </div>
              </div>

              <p
                style={{
                  fontSize: isMobile ? '13px' : '14px',
                  color: '#374151',
                  lineHeight: '1.5',
                  margin: '0 0 12px 0',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {testimonial.story}
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    backgroundColor: '#dcfce7',
                    color: '#15803d',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: isMobile ? '10px' : '11px',
                    fontWeight: '600',
                  }}
                >
                  {testimonial.painReduction} relief
                </span>
                <span
                  style={{
                    fontSize: isMobile ? '11px' : '12px',
                    color: '#6b7280',
                    fontWeight: '500',
                  }}
                >
                  Click to read full story
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Encouragement Section */}
      <div
        style={{
          background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
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
          💚 Your Healing Story Awaits
        </h3>
        <p
          style={{
            fontSize: isMobile ? '14px' : '16px',
            color: '#15803d',
            lineHeight: '1.6',
            marginBottom: '16px',
          }}
        >
          Every person featured here once felt hopeless about their pain. Their
          stories prove that healing is possible when you address both the
          emotional and physical aspects of symptoms. Your journey to recovery
          can start today.
        </p>
        <div
          style={{
            fontSize: isMobile ? '13px' : '14px',
            color: '#15803d',
            fontWeight: '500',
          }}
        >
          ✨ Remember: Knowledge + Emotional Awareness = Healing ✨
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
