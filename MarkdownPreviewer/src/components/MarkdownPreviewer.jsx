import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

function MarkdownPreviewer() {
  const defaultMarkdown = `# Welcome to Markdown Previewer!  
## Features  
- Live preview  
- **Bold**, _Italic_, \`Inline Code\`  
- [Links](https://reactjs.org)  
- ![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)  
`;

  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [darkMode, setDarkMode] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-white' : 'bg-light text-dark';
  }, [darkMode]);

  const resetMarkdown = () => {
    setMarkdown('');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      alert('Copy failed. Please try again.');
    }
  };

  return (
    <div className={`container-fluid py-4 ${darkMode ? 'bg-secondary text-white' : ''}`}>
      {/* Header with Dark Mode */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="m-0">📝 Markdown Previewer</h3>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="darkModeSwitch"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <label className="form-check-label" htmlFor="darkModeSwitch">🌙</label>
        </div>
      </div>

      {/* Buttons */}
      <div className="mb-3 d-flex gap-2">
        <button className="btn btn-outline-primary" onClick={resetMarkdown}>♻️ Reset</button>
        <button className="btn btn-outline-success" onClick={copyToClipboard}>
          📋 {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      <div className="row g-3">
        {/* Markdown Input */}
        <div className="col-md-6">
          <label><strong>Markdown Input:</strong></label>
          <textarea
            className="form-control"
            rows="15"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
        </div>

        {/* HTML Preview */}
        <div className="col-md-6">
          <label><strong>Preview:</strong></label>
          <div
            className="border rounded p-3"
            style={{ minHeight: '300px', backgroundColor: darkMode ? '#2c2c2c' : '#f8f9fa' }}
            dangerouslySetInnerHTML={{ __html: marked(markdown, { breaks: true }) }}
          />
        </div>
      </div>
    </div>
  );
}

export default MarkdownPreviewer;
