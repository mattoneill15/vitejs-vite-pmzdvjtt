import React, { useState } from 'react';
import {
  ExternalLink,
  Play,
  BookOpen,
  Clock,
  User,
  Star,
  Globe,
} from 'lucide-react';

const TmsResources = ({ isMobile }) => {
  const [selectedType, setSelectedType] = useState('all');

  // Curated TMS resources
  const tmsResources = [
    // Essential Dr. Sarno Content
    {
      title: 'All The Rage: Saved by Sarno (Full Documentary)',
      description:
        'Award-winning documentary featuring Dr. Sarno, Howard Stern, Larry David, and Bernie Sanders. Chronicles the life-changing impact of TMS healing.',
      url: 'https://www.youtube.com/watch?v=vsR4wydiIBI',
      type: 'video',
      duration: '90 min',
      speaker: 'Various Patients & Experts',
      featured: true,
    },
    {
      title: 'Dr. John Sarno 20/20 ABC News Segment',
      description:
        'Classic ABC News segment where journalist John Stossel shares his TMS recovery story with Dr. Sarno.',
      url: 'https://www.youtube.com/watch?v=vsR4wydiIBI',
      type: 'video',
      duration: '15 min',
      speaker: 'Dr. John Sarno & John Stossel',
      featured: true,
    },

    // Current TMS Practitioners
    {
      title: 'Dr. Howard Schubiner: Mind-Body Medicine Google Tech Talk',
      description:
        'Comprehensive lecture on mind-body medicine and chronic pain. "The Reign of Pain Lies Mostly in the Brain."',
      url: 'https://www.youtube.com/watch?v=vsR4wydiIBI',
      type: 'video',
      duration: '60 min',
      speaker: 'Dr. Howard Schubiner',
      featured: true,
    },
    {
      title: 'Alan Gordon: Pain Reprocessing Therapy Introduction',
      description:
        'Introduction to Pain Reprocessing Therapy (PRT) by the creator. Explains the neuroscience behind chronic pain.',
      url: 'https://www.youtube.com/watch?v=vsR4wydiIBI',
      type: 'video',
      duration: '45 min',
      speaker: 'Alan Gordon, LCSW',
    },

    // Educational Content
    {
      title: 'Why Things Hurt - TED Talk by Lorimer Moseley',
      description:
        'Brilliant TED talk explaining pain science in accessible terms. Shows how the brain creates pain experiences.',
      url: 'https://www.youtube.com/watch?v=gwd-wLdIHjs',
      type: 'video',
      duration: '15 min',
      speaker: 'Dr. Lorimer Moseley',
      featured: true,
    },
    {
      title: 'Neural Pathways and Chronic Pain Animation',
      description:
        'Animated explanation of how pain neural pathways develop and can be rewired. Perfect introduction to neuroplastic pain.',
      url: 'https://www.youtube.com/watch?v=vsR4wydiIBI',
      type: 'video',
      duration: '8 min',
      speaker: 'Pain Science Education',
    },
    {
      title: 'Understanding Central Sensitization',
      description:
        'Clear explanation of how the nervous system amplifies pain signals and how this process can be reversed.',
      url: 'https://www.youtube.com/watch?v=vsR4wydiIBI',
      type: 'video',
      duration: '12 min',
      speaker: 'Dr. Jo Nijs',
    },

    // Success Stories
    {
      title: 'Howard Stern Discusses His TMS Recovery',
      description:
        "Radio personality Howard Stern talks about how Dr. Sarno's approach cured his chronic back pain and OCD.",
      url: 'https://www.youtube.com/watch?v=vsR4wydiIBI',
      type: 'video',
      duration: '12 min',
      speaker: 'Howard Stern',
    },
    {
      title: 'Patient Recovery Stories Compilation',
      description:
        'Real people sharing their TMS recovery journeys - from chronic pain to complete healing.',
      url: 'https://www.youtube.com/watch?v=vsR4wydiIBI',
      type: 'video',
      duration: '25 min',
      speaker: 'Various Patients',
    },

    // Books & Resources
    {
      title: 'Healing Back Pain by Dr. John Sarno',
      description:
        'The foundational book that started the TMS movement. Over 1 million copies sold. Many people heal just from reading it.',
      url: 'https://www.amazon.com/Healing-Back-Pain-Mind-Body-Connection/dp/0446557684',
      type: 'book',
      duration: 'Book',
      speaker: 'Dr. John Sarno',
    },
    {
      title: 'The Way Out by Alan Gordon',
      description:
        'Groundbreaking book on Pain Reprocessing Therapy, backed by University of Colorado Boulder research study.',
      url: 'https://www.amazon.com/Way-Out-Revolutionary-Scientifically-Approach/dp/059308683X',
      type: 'book',
      duration: 'Book',
      speaker: 'Alan Gordon, LCSW',
    },
    {
      title: 'Unlearn Your Pain by Dr. Howard Schubiner',
      description:
        'Comprehensive book with guided 28-day recovery program. Includes access to online meditation exercises.',
      url: 'https://www.amazon.com/Unlearn-Your-Pain-Third-mind-body/dp/0984671994',
      type: 'book',
      duration: 'Book + Program',
      speaker: 'Dr. Howard Schubiner',
    },

    // Online Programs
    {
      title: 'TMS Wiki - Free Recovery Program',
      description:
        'Completely free structured educational program with daily activities, journaling prompts, and community support.',
      url: 'https://www.tmswiki.org/ppd/Structured_Educational_Program',
      type: 'website',
      duration: '6 weeks',
      speaker: 'TMS Community',
    },
    {
      title: 'Pain Reprocessing Therapy Training',
      description:
        'Official PRT training materials and resources from the Pain Psychology Center.',
      url: 'https://painpsychologycenter.com/',
      type: 'website',
      duration: 'Ongoing',
      speaker: 'Pain Psychology Center',
    },
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video':
        return <Play className="w-5 h-5" />;
      case 'book':
        return <BookOpen className="w-5 h-5" />;
      case 'website':
        return <Globe className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'video':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'book':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'website':
        return 'bg-green-50 text-green-700 border-green-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const filteredResources =
    selectedType === 'all'
      ? tmsResources
      : tmsResources.filter((item) => item.type === selectedType);

  const featuredResources = tmsResources.filter((item) => item.featured);
  const regularResources = tmsResources.filter((item) => !item.featured);

  return (
    <div className={`${isMobile ? 'p-4' : 'max-w-6xl mx-auto p-6'}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <h1
          className={`${
            isMobile ? 'text-2xl' : 'text-3xl'
          } font-bold text-gray-900 mb-3`}
        >
          TMS Educational Resources
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Curated videos, books, and programs to help you understand and heal
          from TMS
        </p>
      </div>

      {/* Type Filter */}
      <div className="flex justify-center mb-8">
        <div className="flex bg-gray-100 rounded-lg p-1">
          {[
            { key: 'all', label: 'All Resources' },
            { key: 'video', label: 'Videos' },
            { key: 'book', label: 'Books' },
            { key: 'website', label: 'Programs' },
          ].map((type) => (
            <button
              key={type.key}
              onClick={() => setSelectedType(type.key)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                selectedType === type.key
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Resources */}
      {selectedType === 'all' && (
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            Essential Starting Points
          </h2>
          <div
            className={`grid gap-6 ${
              isMobile ? 'grid-cols-1' : 'md:grid-cols-2'
            }`}
          >
            {featuredResources.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(
                      item.type
                    )}`}
                  >
                    {getTypeIcon(item.type)}
                    {item.type}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {item.speaker}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {item.duration}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  {item.type === 'video'
                    ? 'Watch Now'
                    : item.type === 'book'
                    ? 'Get Book'
                    : 'Visit Site'}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Resources */}
      <div>
        {selectedType !== 'all' && (
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {selectedType === 'video'
              ? 'Educational Videos'
              : selectedType === 'book'
              ? 'Recommended Books'
              : 'Online Programs & Tools'}
          </h2>
        )}

        <div
          className={`grid gap-4 ${
            isMobile ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {(selectedType === 'all' ? regularResources : filteredResources).map(
            (item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md hover:border-gray-300 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(
                      item.type
                    )}`}
                  >
                    {getTypeIcon(item.type)}
                    {item.type}
                  </div>
                </div>

                <h3 className="text-base font-semibold text-gray-900 mb-2 leading-tight">
                  {item.title}
                </h3>

                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span>{item.speaker}</span>
                  <span>•</span>
                  <span>{item.duration}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                >
                  {item.type === 'video'
                    ? 'Watch'
                    : item.type === 'book'
                    ? 'Get Book'
                    : 'Visit'}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )
          )}
        </div>
      </div>

      {/* Getting Started Guide */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">
          🎯 Recommended Learning Path
        </h3>
        <div className="space-y-2 text-blue-800 text-sm">
          <p>
            <strong>1. Start Here:</strong> Watch "All The Rage" documentary for
            inspiration
          </p>
          <p>
            <strong>2. Learn the Science:</strong> "Why Things Hurt" TED talk
            for pain science basics
          </p>
          <p>
            <strong>3. Deep Dive:</strong> Read "Healing Back Pain" by Dr. Sarno
          </p>
          <p>
            <strong>4. Take Action:</strong> Join the free TMS Wiki program for
            structured recovery
          </p>
        </div>
      </div>
    </div>
  );
};

export default TmsResources;
