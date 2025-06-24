import React, { useState, useRef, useEffect } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [laps, setLaps] = useState([]);
  const [mode, setMode] = useState('stopwatch');
  const [darkMode, setDarkMode] = useState(false);
  const [countdownInput, setCountdownInput] = useState({ min: '', sec: '' });

  const timerRef = useRef(null);

  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-white' : 'bg-light text-dark';
  }, [darkMode]);

  const formatDisplayTime = (ms) => {
    const hours = String(Math.floor(ms / 3600000)).padStart(2, '0');
    const minutes = String(Math.floor((ms % 3600000) / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
    const milliseconds = String(ms % 1000).padStart(3, '0');
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  const start = () => {
    if (isActive) return;

    if (mode === 'countdown') {
      const totalMs = (+countdownInput.min * 60000 || 0) + (+countdownInput.sec * 1000 || 0);
      if (totalMs <= 0) return alert('Enter a valid countdown time.');
      setTime(totalMs);
      const endTime = Date.now() + totalMs;
      timerRef.current = setInterval(() => {
        const remaining = endTime - Date.now();
        if (remaining <= 0) {
          clearInterval(timerRef.current);
          setTime(0);
          setIsActive(false);
          alert('Countdown Complete!');
        } else {
          setTime(remaining);
        }
      }, 10);
    } else {
      const startTime = Date.now() - time;
      timerRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    }

    setIsActive(true);
  };

  const stop = () => {
    clearInterval(timerRef.current);
    setIsActive(false);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setIsActive(false);
    setLaps([]);
    setCountdownInput({ min: '', sec: '' });
  };

  const lap = () => {
    if (isActive && mode === 'stopwatch') {
      setLaps(prev => [formatDisplayTime(time), ...prev]);
    }
  };

  return (
    <div className={`card shadow-lg p-4 text-center ${darkMode ? 'bg-secondary text-white' : ''}`}>
      <div className="d-flex justify-content-between mb-3">
        <h2>{mode === 'stopwatch' ? 'Stopwatch' : 'Countdown Timer'}</h2>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="darkModeToggle"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <label className="form-check-label" htmlFor="darkModeToggle">🌙</label>
        </div>
      </div>

      {/* Mode Toggle */}
      <div className="mb-3">
        <button
          className={`btn me-2 ${mode === 'stopwatch' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => { reset(); setMode('stopwatch'); }}
        >
          Stopwatch
        </button>
        <button
          className={`btn ${mode === 'countdown' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => { reset(); setMode('countdown'); }}
        >
          Countdown
        </button>
      </div>

      {/* Countdown Input */}
      {mode === 'countdown' && !isActive && (
        <div className="d-flex justify-content-center gap-2 mb-3">
          <input
            type="number"
            className="form-control w-auto"
            placeholder="Min"
            value={countdownInput.min}
            onChange={(e) => setCountdownInput({ ...countdownInput, min: e.target.value })}
          />
          <input
            type="number"
            className="form-control w-auto"
            placeholder="Sec"
            value={countdownInput.sec}
            onChange={(e) => setCountdownInput({ ...countdownInput, sec: e.target.value })}
          />
        </div>
      )}

      {/* Timer Display */}
      <div
        className="d-flex justify-content-center align-items-center mb-4 border rounded overflow-hidden"
        style={{ fontFamily: 'monospace', fontSize: '2rem', maxWidth: '600px', margin: '0 auto' }}
      >
        {[
          {
            label: 'h',
            value: String(Math.floor(time / 3600000)).padStart(2, '0'),
          },
          {
            label: 'm',
            value: String(Math.floor((time / 60000) % 60)).padStart(2, '0'),
          },
          {
            label: 's',
            value: String(Math.floor((time / 1000) % 60)).padStart(2, '0'),
            bold: true,
          },
          {
            label: 'ms',
            value: String(time % 1000).padStart(3, '0'),
          },
        ].map((unit, index, arr) => (
          <div
            key={unit.label}
            className={`d-flex flex-column align-items-center justify-content-center px-2 py-2 ${
              index < arr.length - 1 ? 'border-end' : ''
            }`}
            style={{ flex: 1 }}
          >
            <div className={unit.bold ? 'fw-bold text-dark' : 'fw-semibold'}>
              {unit.value}
            </div>
            <small className="text-muted">{unit.label}</small>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-4">
        {!isActive ? (
          <button className="btn btn-success me-2" onClick={start}>Start</button>
        ) : (
          <button className="btn btn-danger me-2" onClick={stop}>Stop</button>
        )}
        <button className="btn btn-warning me-2" onClick={lap} disabled={!isActive || mode === 'countdown'}>Lap</button>
        <button className="btn btn-secondary" onClick={reset}>Reset</button>
      </div>

      {/* Laps */}
      {laps.length > 0 && (
        <div className="mt-4 text-start">
          <h5>Laps:</h5>
          <ul className="list-group">
            {laps.map((lap, index) => (
              <li key={index} className="list-group-item">
                Lap {laps.length - index}: {lap}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Stopwatch;
