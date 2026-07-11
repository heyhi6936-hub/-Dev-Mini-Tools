import React from 'react';
import CodeArea from '../CodeArea';

const PasswordGeneratorWidget: React.FC = () => {
  const [length, setLength] = React.useState(16);
  const [upper, setUpper] = React.useState(true);
  const [lower, setLower] = React.useState(true);
  const [numbers, setNumbers] = React.useState(true);
  const [symbols, setSymbols] = React.useState(true);
  const [password, setPassword] = React.useState('');

  const generate = () => {
    const chars = {
      upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lower: 'abcdefghijklmnopqrstuvwxyz',
      numbers: '0123456789',
      symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
    };
    let pool = '';
    if (upper) pool += chars.upper;
    if (lower) pool += chars.lower;
    if (numbers) pool += chars.numbers;
    if (symbols) pool += chars.symbols;
    if (!pool) { setPassword('Select at least one character set'); return; }

    // Use crypto API for true randomness
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    let result = '';
    for (let i = 0; i < length; i++) {
      result += pool[array[i] % pool.length];
    }
    setPassword(result);
  };

  const entropyBits = () => {
    let poolSize = 0;
    if (upper) poolSize += 26;
    if (lower) poolSize += 26;
    if (numbers) poolSize += 10;
    if (symbols) poolSize += 28;
    if (!poolSize) return 0;
    return Math.round(length * Math.log2(poolSize));
  };

  const strengthLabel = () => {
    const bits = entropyBits();
    if (bits < 40) return { label: 'Weak', color: 'text-red-500' };
    if (bits < 60) return { label: 'Fair', color: 'text-orange-500' };
    if (bits < 80) return { label: 'Strong', color: 'text-yellow-500' };
    return { label: 'Very Strong', color: 'text-green-500' };
  };

  const strength = strengthLabel();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-[0.15em]">Length</label>
            <span className="text-2xl font-bold text-brand-600 dark:text-brand-400">{length}</span>
          </div>
          <input
            type="range" min={4} max={128} value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            aria-label="Password length"
            className="w-full accent-brand-500"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>4</span><span>128</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Uppercase (A–Z)', state: upper, setState: setUpper },
            { label: 'Lowercase (a–z)', state: lower, setState: setLower },
            { label: 'Numbers (0–9)', state: numbers, setState: setNumbers },
            { label: 'Symbols (!@#…)', state: symbols, setState: setSymbols },
          ].map(({ label, state, setState }) => (
            <label key={label} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 cursor-pointer">
              <input type="checkbox" checked={state} onChange={(e) => setState(e.target.checked)} className="accent-brand-500 w-4 h-4" />
              {label}
            </label>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500">Entropy: <strong className={strength.color}>{entropyBits()} bits — {strength.label}</strong></span>
        </div>

        <button
          onClick={generate}
          className="w-full px-6 py-3 bg-gradient-to-r from-brand-500 to-glow-600 text-white font-bold rounded-xl shadow-lg shadow-brand-500/25 hover:-translate-y-0.5 transition-transform"
        >
          <i className="fas fa-shield-alt mr-2"></i>Generate Password
        </button>
      </div>

      <CodeArea label="Generated Password" value={password} readOnly placeholder="Click 'Generate Password' to start" />
    </div>
  );
};

export default PasswordGeneratorWidget;
