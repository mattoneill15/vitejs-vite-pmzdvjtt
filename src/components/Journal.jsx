import React, { useState } from 'react';

const Journal = ({
  journalEntries,
  currentJournalEntry,
  setCurrentJournalEntry,
  saveJournalEntry,
  deleteJournalEntry,
  journalPrompts,
  isMobile = false,
}) => {
  const [selectedPrompt, setSelectedPrompt] = useState('');
  const [showPrompts, setShowPrompts] = useState(false);

  const handlePromptSelect = (prompt) => {
    setCurrentJournalEntry(prompt + '\n\n');
    setSelectedPrompt(prompt);
    setShowPrompts(false);
  };

  const handleSave = () => {
    saveJournalEntry();
    setSelectedPrompt('');
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString();
    } catch {
      return dateString;
    }
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
          📝 Emotional Awareness Journal
        </h2>
        <p
          style={{
            color: '#6b7280',
            fontSize: isMobile ? '14px' : '16px',
            lineHeight: '1.4',
          }}
        >
          Express your thoughts and emotions to support healing
        </p>
      </div>

      {/* Writing Area */}
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: isMobile ? '16px' : '24px',
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
          <h3
            style={{
              fontSize: isMobile ? '18px' : '20px',
              fontWeight: '600',
              color: '#1f2937',
              margin: 0,
            }}
          >
            ✍️ Write Your Entry
          </h3>
          <button
            onClick={() => setShowPrompts(!showPrompts)}
            style={{
              backgroundColor: showPrompts ? '#2563eb' : '#f3f4f6',
              color: showPrompts ? 'white' : '#374151',
              border: 'none',
              borderRadius: '8px',
              padding: isMobile ? '12px 16px' : '8px 12px',
              cursor: 'pointer',
              fontSize: isMobile ? '14px' : '13px',
              fontWeight: '500',
              minHeight: '44px',
              width: isMobile ? '100%' : 'auto',
              transition: 'all 0.2s ease',
            }}
          >
            {showPrompts ? 'Hide Prompts' : '💡 Need Inspiration?'}
          </button>
        </div>

        {/* Journal Prompts */}
        {showPrompts && (
          <div
            style={{
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              padding: isMobile ? '12px' : '16px',
              marginBottom: '16px',
              border: '1px solid #e2e8f0',
            }}
          >
            <h4
              style={{
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '12px',
              }}
            >
              🌟 Healing Prompts
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '8px',
              }}
            >
              {journalPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handlePromptSelect(prompt)}
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    padding: isMobile ? '12px' : '10px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: isMobile ? '13px' : '14px',
                    color: '#374151',
                    lineHeight: '1.4',
                    transition: 'all 0.2s ease',
                    minHeight: '44px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f1f5f9';
                    e.target.style.borderColor = '#cbd5e1';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.borderColor = '#e2e8f0';
                  }}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Selected Prompt Display */}
        {selectedPrompt && (
          <div
            style={{
              backgroundColor: '#dbeafe',
              border: '1px solid #93c5fd',
              borderRadius: '8px',
              padding: isMobile ? '12px' : '16px',
              marginBottom: '16px',
            }}
          >
            <p
              style={{
                fontSize: isMobile ? '13px' : '14px',
                color: '#1e40af',
                margin: '0 0 8px 0',
                fontWeight: '500',
              }}
            >
              💭 Current Prompt:
            </p>
            <p
              style={{
                fontSize: isMobile ? '13px' : '14px',
                color: '#1e40af',
                margin: 0,
                fontStyle: 'italic',
                lineHeight: '1.4',
              }}
            >
              {selectedPrompt}
            </p>
          </div>
        )}

        {/* Text Area */}
        <textarea
          value={currentJournalEntry}
          onChange={(e) => setCurrentJournalEntry(e.target.value)}
          placeholder="Start writing your thoughts and feelings here... Remember, this is a safe space for honest self-reflection."
          style={{
            width: '100%',
            minHeight: isMobile ? '200px' : '300px',
            padding: isMobile ? '12px' : '16px',
            borderRadius: '8px',
            border: '2px solid #e5e7eb',
            fontSize: isMobile ? '16px' : '16px', // 16px on mobile prevents zoom
            lineHeight: '1.6',
            resize: 'vertical',
            outline: 'none',
            fontFamily: 'inherit',
            backgroundColor: '#fafafa',
            transition: 'border-color 0.2s ease',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#2563eb')}
          onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
        />

        {/* Character Count and Save Button */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '12px',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '12px' : '0',
          }}
        >
          <span
            style={{
              fontSize: isMobile ? '12px' : '13px',
              color: '#6b7280',
              order: isMobile ? 2 : 1,
            }}
          >
            {currentJournalEntry.length} characters
          </span>
          <button
            onClick={handleSave}
            disabled={!currentJournalEntry.trim()}
            style={{
              backgroundColor: currentJournalEntry.trim()
                ? '#2563eb'
                : '#d1d5db',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: isMobile ? '14px 24px' : '10px 20px',
              cursor: currentJournalEntry.trim() ? 'pointer' : 'not-allowed',
              fontSize: isMobile ? '16px' : '14px',
              fontWeight: '500',
              minHeight: '44px',
              width: isMobile ? '100%' : 'auto',
              transition: 'background-color 0.2s ease',
              order: isMobile ? 1 : 2,
            }}
          >
            💾 Save Entry
          </button>
        </div>
      </div>

      {/* Journal Entries */}
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: isMobile ? '16px' : '24px',
        }}
      >
        <h3
          style={{
            fontSize: isMobile ? '18px' : '20px',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          📚 Your Journal Entries ({journalEntries.length})
        </h3>

        {journalEntries.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: isMobile ? '24px 16px' : '40px 20px',
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              border: '1px dashed #cbd5e1',
            }}
          >
            <div
              style={{
                fontSize: isMobile ? '32px' : '48px',
                marginBottom: '16px',
              }}
            >
              ✍️
            </div>
            <h4
              style={{
                fontSize: isMobile ? '16px' : '18px',
                fontWeight: '600',
                color: '#475569',
                marginBottom: '8px',
              }}
            >
              No entries yet
            </h4>
            <p
              style={{
                fontSize: isMobile ? '14px' : '16px',
                color: '#64748b',
                lineHeight: '1.5',
                margin: 0,
              }}
            >
              Start your healing journey by writing your first journal entry
              above
            </p>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '12px' : '16px',
            }}
          >
            {journalEntries.map((entry) => (
              <div
                key={entry.id}
                style={{
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                  padding: isMobile ? '16px' : '20px',
                  border: '1px solid #e2e8f0',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '12px',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? '8px' : '0',
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: isMobile ? '12px' : '13px',
                        color: '#6b7280',
                        fontWeight: '500',
                      }}
                    >
                      📅 {formatDate(entry.date)}
                    </span>
                  </div>
                  <button
                    onClick={() => deleteJournalEntry(entry.id)}
                    style={{
                      backgroundColor: '#fee2e2',
                      color: '#dc2626',
                      border: '1px solid #fecaca',
                      borderRadius: '6px',
                      padding: isMobile ? '8px 12px' : '6px 10px',
                      cursor: 'pointer',
                      fontSize: isMobile ? '12px' : '11px',
                      fontWeight: '500',
                      minHeight: '36px',
                      minWidth: isMobile ? '60px' : 'auto',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#fecaca';
                      e.target.style.borderColor = '#f87171';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#fee2e2';
                      e.target.style.borderColor = '#fecaca';
                    }}
                  >
                    🗑️ Delete
                  </button>
                </div>
                <div
                  style={{
                    fontSize: isMobile ? '14px' : '15px',
                    color: '#374151',
                    lineHeight: '1.6',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }}
                >
                  {entry.content}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tips Section */}
      <div
        style={{
          background: 'linear-gradient(135deg, #fef3c7 0%, #fef7cd 100%)',
          borderRadius: '12px',
          padding: isMobile ? '16px' : '20px',
          border: '1px solid #fcd34d',
        }}
      >
        <h3
          style={{
            fontSize: isMobile ? '16px' : '18px',
            fontWeight: '600',
            color: '#92400e',
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          💡 Journaling Tips for TMS Healing
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? '1fr'
              : 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: isMobile ? '8px' : '12px',
          }}
        >
          <div
            style={{
              fontSize: isMobile ? '13px' : '14px',
              color: '#92400e',
              lineHeight: '1.5',
            }}
          >
            • <strong>Be honest:</strong> Write about emotions you might usually
            suppress
          </div>
          <div
            style={{
              fontSize: isMobile ? '13px' : '14px',
              color: '#92400e',
              lineHeight: '1.5',
            }}
          >
            • <strong>Focus on feelings:</strong> Not just events, but how they
            made you feel
          </div>
          <div
            style={{
              fontSize: isMobile ? '13px' : '14px',
              color: '#92400e',
              lineHeight: '1.5',
            }}
          >
            • <strong>Write regularly:</strong> Even 5 minutes daily can help
          </div>
          <div
            style={{
              fontSize: isMobile ? '13px' : '14px',
              color: '#92400e',
              lineHeight: '1.5',
            }}
          >
            • <strong>Don't judge:</strong> There are no wrong thoughts or
            feelings
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;
