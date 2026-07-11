import React, { useState } from 'react';
import CodeArea from '../CodeArea';

const UrlEncoderWidget: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleEncode = () => {
    try {
      if (!input) return;
      setOutput(encodeURIComponent(input));
      setError(null);
    } catch (e: any) {
      setError(e.message || 'Encoding failed');
    }
  };

  const handleDecode = () => {
    try {
      if (!input) return;
      setOutput(decodeURIComponent(input));
      setError(null);
    } catch {
      setError('Invalid percent-encoded string. Ensure the input is a valid encoded URL.');
    }
  };

  const clearAll = () => { setInput(''); setOutput(''); setError(null); };

  return (
    <div className="space-y-6">
      <CodeArea label="Input" value={input} onChange={setInput} placeholder="Paste text or encoded URL here" />
      <CodeArea label="Result" value={output} readOnly placeholder="Output will appear here" />

      {error && (
        <div className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-xs font-mono">
          <i className="fas fa-exclamation-circle mr-2"></i>{error}
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        <button onClick={handleEncode} className="px-7 py-3 bg-gradient-to-r from-brand-500 to-glow-600 text-white font-bold rounded-xl shadow-lg shadow-brand-500/25 hover:-translate-y-0.5 transition-transform">Encode</button>
        <button onClick={handleDecode} className="px-7 py-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold hover:-translate-y-0.5 transition-transform shadow-sm">Decode</button>
        <button onClick={clearAll} className="px-7 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl transition-all hover:border-brand-500 dark:hover:border-brand-400">Clear</button>
      </div>
    </div>
  );
};

export default UrlEncoderWidget;
