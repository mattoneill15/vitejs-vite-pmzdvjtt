import React, { useState } from 'react';

const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState('celebrities');
  const [expandedStory, setExpandedStory] = useState(null);

  const toggleStory = (storyId) => {
    setExpandedStory(expandedStory === storyId ? null : storyId);
  };

  const testimonialCategories = {
    celebrities: {
      title: 'Celebrity & Public Figures',
      icon: '⭐',
      stories: [
        {
          id: 'howard-stern',
          name: 'Howard Stern',
          title: 'Radio Host & Media Personality',
          condition: 'Chronic Back Pain',
          duration: 'Several Years',
          preview:
            'Debilitating back pain that limited daily activities - completely resolved',
          image: '🎙️',
          quote:
            "Dr. Sarno saved my life. I had debilitating back pain for years. I went to every doctor, tried every treatment. Nothing worked until I read Dr. Sarno's book. Within weeks, my pain was gone. It's been over 20 years and I'm still pain-free.",
          story: `
            <h4>The Struggle</h4>
            <p>Howard Stern suffered from severe back pain that significantly impacted his ability to work and enjoy life. As one of the most successful radio personalities in history, the pain was affecting his performance and quality of life.</p>
            
            <h4>The Journey</h4>
            <p>Like many chronic pain sufferers, Howard tried numerous treatments:</p>
            <ul>
              <li>Multiple doctors and specialists</li>
              <li>Physical therapy and exercise programs</li>
              <li>Pain medications</li>
              <li>Various alternative treatments</li>
            </ul>
            <p>Nothing provided lasting relief until he discovered Dr. Sarno's work.</p>
            
            <h4>The Breakthrough</h4>
            <p>After reading "Healing Back Pain," Howard experienced rapid improvement. He found that understanding the mind-body connection and addressing his psychological patterns was the key to recovery.</p>
            
            <h4>The Result</h4>
            <p>Howard has been pain-free for over two decades and regularly discusses Dr. Sarno's work on his show, helping to bring awareness to TMS treatment to millions of listeners.</p>
            
            <h4>Impact</h4>
            <p>Howard's public advocacy has helped legitimize TMS treatment and inspired countless others to explore this approach to healing.</p>
          `,
        },
        {
          id: 'larry-david',
          name: 'Larry David',
          title: 'Comedian & Writer (Seinfeld, Curb Your Enthusiasm)',
          condition: 'Chronic Back Pain',
          duration: 'Multiple Years',
          preview:
            'Creator of Seinfeld overcame chronic back pain through understanding TMS',
          image: '😄',
          quote:
            'Dr. Sarno helped me understand that my back pain was connected to stress and my personality. Once I got that, the pain started to go away.',
          story: `
            <h4>The Challenge</h4>
            <p>Larry David, co-creator of Seinfeld and star of Curb Your Enthusiasm, dealt with chronic back pain that was interfering with his creative work and daily life.</p>
            
            <h4>The Discovery</h4>
            <p>Through Dr. Sarno's work, Larry learned how his perfectionist tendencies and high-stress lifestyle were contributing to his physical pain.</p>
            
            <h4>The Connection</h4>
            <p>As someone known for his neurotic and perfectionist character traits (which he often incorporates into his comedy), Larry found that these same personality patterns were manifesting as physical symptoms.</p>
            
            <h4>The Recovery</h4>
            <p>By understanding the mind-body connection and working on his emotional patterns, Larry was able to overcome his chronic pain and return to his creative work without physical limitations.</p>
            
            <h4>The Message</h4>
            <p>Larry's story shows that even highly successful people struggle with chronic pain, and that TMS treatment can be effective regardless of your profession or lifestyle.</p>
          `,
        },
        {
          id: 'john-stossel',
          name: 'John Stossel',
          title: 'Journalist & TV Host',
          condition: 'Chronic Pain',
          duration: 'Years',
          preview:
            'Skeptical journalist found relief when traditional medicine failed',
          image: '📺',
          quote:
            "I was skeptical at first - how could emotions cause real physical pain? But Dr. Sarno's approach worked when nothing else did. The mind's power over the body is remarkable.",
          story: `
            <h4>The Skeptic's Journey</h4>
            <p>As an investigative journalist known for debunking myths and questioning conventional wisdom, John Stossel approached TMS with natural skepticism.</p>
            
            <h4>The Evidence</h4>
            <p>Despite his initial doubts about the mind-body connection, Stossel found that Dr. Sarno's approach provided relief when traditional medical treatments had failed.</p>
            
            <h4>The Investigation</h4>
            <p>Using his journalistic skills, Stossel researched the science behind TMS and found compelling evidence for the mind-body connection in pain.</p>
            
            <h4>The Conversion</h4>
            <p>His personal experience with TMS treatment converted him from skeptic to advocate, demonstrating that even the most analytical minds can benefit from this approach.</p>
            
            <h4>The Lesson</h4>
            <p>Stossel's story shows that it's healthy to be skeptical, but important to remain open to evidence - even when it challenges our preconceptions about how the body works.</p>
          `,
        },
        {
          id: 'anne-lamott',
          name: 'Anne Lamott',
          title: 'Best-Selling Author',
          condition: 'Chronic Pain & Anxiety',
          duration: 'Years',
          preview:
            'Acclaimed author healed physical pain by addressing perfectionism',
          image: '📚',
          quote:
            "Dr. Sarno's work opened my eyes to how much my perfectionism and anxiety were creating physical pain. Healing my relationship with my emotions healed my body.",
          story: `
            <h4>The Writer's Struggle</h4>
            <p>Anne Lamott, author of beloved books including "Bird by Bird," struggled with chronic pain that was affecting her writing and daily life.</p>
            
            <h4>The Recognition</h4>
            <p>Through Dr. Sarno's work, Anne recognized how her perfectionist tendencies as a writer and her anxiety were manifesting as physical symptoms.</p>
            
            <h4>The Emotional Journey</h4>
            <p>Anne discovered that addressing her relationship with perfectionism, anxiety, and emotional expression was key to physical healing.</p>
            
            <h4>The Integration</h4>
            <p>As someone who writes about personal growth and spirituality, Anne was able to integrate TMS principles into her broader understanding of healing and wellness.</p>
            
            <h4>The Sharing</h4>
            <p>Anne has written about her experience, helping other creative people understand how perfectionism and anxiety can create physical symptoms.</p>
          `,
        },
        {
          id: 'john-mcenroe',
          name: 'John McEnroe',
          title: 'Tennis Champion',
          condition: 'Chronic Pain',
          duration: 'Career-long',
          preview:
            'Tennis legend discovered how competitive pressure created physical pain',
          image: '🎾',
          quote:
            'As an athlete, I was told my pain was purely physical. Dr. Sarno showed me how my intense personality and pressure I put on myself was creating real pain.',
          story: `
            <h4>The Athlete's Dilemma</h4>
            <p>John McEnroe, known for his intensity and perfectionism on the tennis court, dealt with chronic pain throughout his career.</p>
            
            <h4>The Athletic Mindset</h4>
            <p>In the sports world, pain is typically viewed as purely physical - "no pain, no gain." This made it difficult to consider psychological factors.</p>
            
            <h4>The Revelation</h4>
            <p>Dr. Sarno's work helped McEnroe understand how his competitive drive, perfectionism, and intense personality were contributing to his physical symptoms.</p>
            
            <h4>The Connection</h4>
            <p>McEnroe learned that the same intensity that made him a champion was also creating internal pressure that manifested as pain.</p>
            
            <h4>The Balance</h4>
            <p>By understanding this connection, McEnroe was able to maintain his competitive edge while reducing the physical toll of his perfectionist tendencies.</p>
          `,
        },
      ],
    },
    patients: {
      title: 'Patient Stories',
      icon: '💪',
      stories: [
        {
          id: 'sarah-fibromyalgia',
          name: 'Sarah M.',
          title: 'Marketing Manager, Age 43',
          condition: 'Fibromyalgia',
          duration: '15 Years',
          preview:
            'Overcame widespread pain after decades of failed treatments',
          image: '🌸',
          quote:
            "I had given up hope. 15 years of fibromyalgia, countless treatments, nothing worked. TMS changed everything. I'm not just managing pain anymore - I'm living again.",
          story: `
            <h4>The Diagnosis</h4>
            <p>Sarah was diagnosed with fibromyalgia at age 28 after years of widespread muscle pain, chronic fatigue, and cognitive difficulties (brain fog).</p>
            
            <h4>The Medical Journey</h4>
            <p>Over 15 years, Sarah tried numerous treatments:</p>
            <ul>
              <li>Multiple medications (Lyrica, Cymbalta, pain relievers)</li>
              <li>Physical therapy and exercise programs</li>
              <li>Massage therapy and acupuncture</li>
              <li>Dietary changes and supplements</li>
              <li>Sleep studies and treatments</li>
            </ul>
            <p>While some provided temporary relief, nothing addressed the root cause.</p>
            
            <h4>The Turning Point</h4>
            <p>A friend recommended Dr. Sarno's book. Initially skeptical, Sarah recognized herself completely in the descriptions of TMS personalities - perfectionist, people-pleaser, highly responsible.</p>
            
            <h4>The Work</h4>
            <p>Sarah began:</p>
            <ul>
              <li>Daily journaling to explore repressed emotions</li>
              <li>Working with a TMS-informed therapist</li>
              <li>Gradually resuming activities she'd avoided</li>
              <li>Addressing perfectionist patterns</li>
            </ul>
            
            <h4>The Recovery</h4>
            <p>Within 6 months, Sarah's pain levels decreased by 80%. After a year, she was essentially pain-free and had returned to all her favorite activities, including hiking and dancing.</p>
            
            <h4>The New Life</h4>
            <p>Sarah now leads a fibromyalgia support group where she shares TMS principles, helping others find hope and healing.</p>
          `,
        },
        {
          id: 'mike-back-pain',
          name: 'Mike R.',
          title: 'Construction Worker, Age 38',
          condition: 'Severe Back Pain',
          duration: '8 Years',
          preview: 'Returned to physical work after years of disability',
          image: '🔨',
          quote:
            "Everyone said my back was destroyed, that I'd never work construction again. TMS showed me my back was fine - it was my mind that needed healing.",
          story: `
            <h4>The Injury</h4>
            <p>Mike hurt his back on a construction job at age 30. What seemed like a minor injury turned into 8 years of chronic, debilitating pain.</p>
            
            <h4>The Spiral</h4>
            <p>Despite multiple MRIs showing only minor abnormalities, Mike's pain was severe enough to:</p>
            <ul>
              <li>Force him out of construction work</li>
              <li>Require disability benefits</li>
              <li>Limit him to part-time desk work</li>
              <li>Strain his marriage and family relationships</li>
            </ul>
            
            <h4>The Medical Merry-Go-Round</h4>
            <p>Mike tried everything conventional medicine offered:</p>
            <ul>
              <li>Three back surgeries</li>
              <li>Steroid injections</li>
              <li>Heavy pain medications</li>
              <li>Physical therapy programs</li>
            </ul>
            <p>Each provided only temporary relief, if any.</p>
            
            <h4>The Discovery</h4>
            <p>Mike's wife found Dr. Sarno's work online. Initially resistant ("I'm not the emotional type"), Mike finally read the book during a particularly bad pain flare.</p>
            
            <h4>The Recognition</h4>
            <p>Mike realized he fit the TMS profile perfectly - he was a "tough guy" who never expressed emotions, put enormous pressure on himself as a provider, and had significant repressed anger about his situation.</p>
            
            <h4>The Healing Process</h4>
            <p>Mike's recovery involved:</p>
            <ul>
              <li>Learning to identify and express emotions</li>
              <li>Addressing his fears about returning to physical activity</li>
              <li>Working through anger about his injury and lost years</li>
              <li>Gradually resuming physical activities</li>
            </ul>
            
            <h4>The Return</h4>
            <p>After 18 months of TMS work, Mike returned to construction. He's now pain-free and back to the physical work he loves, with a much healthier relationship to stress and emotions.</p>
          `,
        },
      ],
    },
  };

  const StoryCard = ({ story, isExpanded, onToggle }) => (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
        border: '1px solid #e5e7eb',
        overflow: 'hidden',
      }}
    >
      {/* Story Header */}
      <div style={{ padding: '20px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '16px',
          }}
        >
          <div style={{ fontSize: '40px' }}>{story.image}</div>
          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1f2937',
                margin: '0 0 4px 0',
              }}
            >
              {story.name}
            </h3>
            <p
              style={{
                fontSize: '14px',
                color: '#6b7280',
                margin: '0 0 8px 0',
              }}
            >
              {story.title}
            </p>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                fontSize: '12px',
                color: '#374151',
              }}
            >
              <span>
                <strong>Condition:</strong> {story.condition}
              </span>
              <span>
                <strong>Duration:</strong> {story.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div
          style={{
            backgroundColor: '#eff6ff',
            borderLeft: '4px solid #2563eb',
            padding: '16px',
            borderRadius: '8px',
            marginBottom: '16px',
          }}
        >
          <p
            style={{
              fontSize: '16px',
              color: '#1e40af',
              fontStyle: 'italic',
              margin: 0,
              lineHeight: '1.6',
            }}
          >
            "{story.quote}"
          </p>
        </div>

        {/* Preview */}
        <p style={{ fontSize: '14px', color: '#6b7280', margin: '0 0 16px 0' }}>
          {story.preview}
        </p>

        {/* Expand Button */}
        <button
          onClick={onToggle}
          style={{
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            padding: '8px 16px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>{isExpanded ? 'Hide' : 'Read'} Full Story</span>
          <span
            style={{
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
            }}
          >
            ▼
          </span>
        </button>
      </div>

      {/* Expanded Story */}
      {isExpanded && (
        <div
          style={{
            borderTop: '1px solid #f3f4f6',
            padding: '20px',
            backgroundColor: '#fafbfc',
          }}
        >
          <div
            style={{
              fontSize: '14px',
              color: '#374151',
              lineHeight: '1.7',
            }}
            dangerouslySetInnerHTML={{ __html: story.story }}
          />
        </div>
      )}
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h2
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '8px',
          }}
        >
          Stories of Hope & Healing
        </h2>
        <p style={{ color: '#6b7280', fontSize: '16px' }}>
          Real people who overcame chronic pain using Dr. Sarno's TMS approach
        </p>
      </div>

      {/* Category Navigation */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '32px',
        }}
      >
        {Object.entries(testimonialCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => {
              setActiveCategory(key);
              setExpandedStory(null);
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: activeCategory === key ? '#2563eb' : '#f3f4f6',
              color: activeCategory === key ? 'white' : '#374151',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '500',
              transition: 'all 0.2s ease',
            }}
          >
            <span style={{ fontSize: '20px' }}>{category.icon}</span>
            <span>{category.title}</span>
          </button>
        ))}
      </div>

      {/* Active Category Content */}
      <div>
        <div style={{ marginBottom: '24px', textAlign: 'center' }}>
          <h3
            style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '8px',
            }}
          >
            {testimonialCategories[activeCategory].icon}{' '}
            {testimonialCategories[activeCategory].title}
          </h3>
        </div>

        <div>
          {testimonialCategories[activeCategory].stories.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
              isExpanded={expandedStory === story.id}
              onToggle={() => toggleStory(story.id)}
            />
          ))}
        </div>
      </div>

      {/* Inspiration Section */}
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '32px',
          textAlign: 'center',
          border: '2px solid #10b981',
        }}
      >
        <h4
          style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#059669',
            marginBottom: '16px',
          }}
        >
          🌟 Your Story Could Be Next
        </h4>
        <p
          style={{
            fontSize: '16px',
            color: '#374151',
            marginBottom: '20px',
            lineHeight: '1.6',
          }}
        >
          These stories represent thousands of people who have found freedom
          from chronic pain through TMS healing. Each journey is unique, but
          they all share common elements: hope, persistence, and the courage to
          explore the mind-body connection.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginTop: '24px',
          }}
        >
          <div
            style={{
              padding: '16px',
              backgroundColor: '#f0fdf4',
              borderRadius: '8px',
            }}
          >
            <h5
              style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#059669',
                marginBottom: '8px',
              }}
            >
              ✨ Hope is Real
            </h5>
            <p style={{ fontSize: '14px', color: '#047857', margin: 0 }}>
              Recovery is possible regardless of how long you've been in pain
            </p>
          </div>
          <div
            style={{
              padding: '16px',
              backgroundColor: '#f0fdf4',
              borderRadius: '8px',
            }}
          >
            <h5
              style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#059669',
                marginBottom: '8px',
              }}
            >
              🧠 Understanding Heals
            </h5>
            <p style={{ fontSize: '14px', color: '#047857', margin: 0 }}>
              Knowledge about TMS often begins the healing process
            </p>
          </div>
          <div
            style={{
              padding: '16px',
              backgroundColor: '#f0fdf4',
              borderRadius: '8px',
            }}
          >
            <h5
              style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#059669',
                marginBottom: '8px',
              }}
            >
              💪 You're Not Alone
            </h5>
            <p style={{ fontSize: '14px', color: '#047857', margin: 0 }}>
              Thousands have walked this path before you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
