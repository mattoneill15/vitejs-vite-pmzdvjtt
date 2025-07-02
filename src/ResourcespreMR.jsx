import React from 'react';

const ResourceCard = ({ resource }) => (
  <div
    style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      marginBottom: '16px',
      border: '1px solid #e5e7eb',
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '12px',
      }}
    >
      <h4
        style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#1f2937',
          margin: '0 0 8px 0',
        }}
      >
        {resource.title}
      </h4>
      <span
        style={{
          backgroundColor: resource.type === 'video' ? '#fef3c7' : '#dbeafe',
          color: resource.type === 'video' ? '#d97706' : '#1d4ed8',
          padding: '4px 8px',
          borderRadius: '6px',
          fontSize: '12px',
          fontWeight: '500',
        }}
      >
        {resource.type === 'video' ? '🎥 Video' : '🌐 Website'}
      </span>
    </div>

    <p
      style={{
        fontSize: '14px',
        color: '#6366f1',
        fontWeight: '500',
        margin: '0 0 8px 0',
      }}
    >
      {resource.speaker} • {resource.duration}
    </p>

    <p
      style={{
        fontSize: '14px',
        color: '#6b7280',
        lineHeight: '1.5',
        marginBottom: '16px',
      }}
    >
      {resource.description}
    </p>

    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        backgroundColor: '#2563eb',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontSize: '14px',
        fontWeight: '500',
        transition: 'background-color 0.2s',
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = '#1d4ed8')}
      onMouseOut={(e) => (e.target.style.backgroundColor = '#2563eb')}
    >
      {resource.type === 'video' ? '▶️ Watch Now' : '🔗 Visit Resource'}
    </a>
  </div>
);

const Resources = ({ tmsResources }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h2
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '8px',
          }}
        >
          TMS Resources & Learning
        </h2>
        <p style={{ color: '#6b7280', fontSize: '16px' }}>
          Webinars, lectures, and educational content from leading TMS
          practitioners
        </p>
      </div>

      {tmsResources.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h3
            style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '20px',
              borderBottom: '2px solid #e5e7eb',
              paddingBottom: '8px',
            }}
          >
            {category.category}
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '20px',
            }}
          >
            {category.items.map((resource, resourceIndex) => (
              <ResourceCard key={resourceIndex} resource={resource} />
            ))}
          </div>
        </div>
      ))}

      {/* Additional Resources Section */}
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '24px',
          border: '1px solid #e5e7eb',
        }}
      >
        <h3
          style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '16px',
          }}
        >
          📚 Additional Learning Resources
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px',
          }}
        >
          <div
            style={{
              padding: '16px',
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
            }}
          >
            <h4 style={{ fontWeight: '500', marginBottom: '8px' }}>📖 Books</h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '14px',
                color: '#6b7280',
              }}
            >
              <li>• Healing Back Pain - Dr. John Sarno</li>
              <li>• The Divided Mind - Dr. John Sarno</li>
              <li>• Unlearn Your Pain - Dr. Howard Schubiner</li>
              <li>• The Way Out - Alan Gordon</li>
            </ul>
          </div>
          <div
            style={{
              padding: '16px',
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
            }}
          >
            <h4 style={{ fontWeight: '500', marginBottom: '8px' }}>
              🌐 Websites
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '14px',
                color: '#6b7280',
              }}
            >
              <li>• TMSWiki.org</li>
              <li>• PainScienceCenter.com</li>
              <li>• UnlearnYourPain.com</li>
              <li>• BackInControl.com</li>
            </ul>
          </div>
          <div
            style={{
              padding: '16px',
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
            }}
          >
            <h4 style={{ fontWeight: '500', marginBottom: '8px' }}>
              🎧 Podcasts
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '14px',
                color: '#6b7280',
              }}
            >
              <li>• The Cure for Chronic Pain</li>
              <li>• Like Mind, Like Body</li>
              <li>• Tell Me About Your Pain</li>
              <li>• The Mind and Fitness Podcast</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
