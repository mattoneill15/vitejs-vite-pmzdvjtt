import React from 'react';

const Journal = ({
  journalEntries,
  currentJournalEntry,
  setCurrentJournalEntry,
  saveJournalEntry,
  deleteJournalEntry,
  journalPrompts,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '24px',
        }}
      >
        <h3
          style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}
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
            {journalPrompts[Math.floor(Math.random() * journalPrompts.length)]}
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
          style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}
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
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
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
  );
};

export default Journal;
