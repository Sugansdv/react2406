import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CurrencyConverter() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios.get('https://open.er-api.com/v6/latest/USD')
      .then(res => {
        const currencyList = Object.keys(res.data.rates);
        setCurrencies(currencyList);
      });
  }, []);

  const convert = () => {
    if (!amount || isNaN(amount)) return;
    axios.get(`https://open.er-api.com/v6/latest/${fromCurrency}`)
      .then(res => {
        const rate = res.data.rates[toCurrency];
        setResult((amount * rate).toFixed(2));
      });
  };

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResult(null);
  };

  const getFlagUrl = (currencyCode) => {
    const countryCode = currencyCode.slice(0, 2).toLowerCase();
    return `https://flagcdn.com/24x18/${countryCode}.png`;
  };

  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-white' : 'bg-light text-dark';
  }, [darkMode]);

  return (
    <div className={`card p-4 shadow-lg ${darkMode ? 'bg-secondary text-white' : ''}`}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="m-0">Currency Converter</h4>
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

      <div className="row g-3 mb-3">
        <div className="col-md-5">
          <label>From:</label>
          <div className="input-group">
            <span className="input-group-text">
              <img src={getFlagUrl(fromCurrency)} alt={fromCurrency} width="24" />
            </span>
            <select
              className="form-select"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {currencies.map(cur => (
                <option key={cur} value={cur}>{cur}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-md-2 d-flex align-items-end justify-content-center">
          <button className="btn btn-secondary w-100" onClick={swap}>⇄</button>
        </div>

        <div className="col-md-5">
          <label>To:</label>
          <div className="input-group">
            <span className="input-group-text">
              <img src={getFlagUrl(toCurrency)} alt={toCurrency} width="24" />
            </span>
            <select
              className="form-select"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {currencies.map(cur => (
                <option key={cur} value={cur}>{cur}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label>Amount:</label>
        <input
          type="number"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
        />
      </div>

      <div className="text-center">
        <button className="btn btn-primary px-4" onClick={convert}>Convert</button>
      </div>

      {result && (
        <div className="alert alert-success mt-4 text-center">
          {amount} {fromCurrency} = <strong>{result}</strong> {toCurrency}
        </div>
      )}
    </div>
  );
}

export default CurrencyConverter;
