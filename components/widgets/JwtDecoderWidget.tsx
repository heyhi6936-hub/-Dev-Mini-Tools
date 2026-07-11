import React, { useState } from 'react';
import CodeArea from '../CodeArea';

const decodeBase64Url = (input: string) => {
  const normalized = input.replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized + '==='.slice((normalized.length + 3) % 4);
  return atob(padded);
};

const JwtDecoderWidget: React.FC = () => {
  const [token, setToken] = useState('');
  const [header, setHeader] = useState('');
  const [payload, setPayload] = useState('');
  const [error, setError] = useState<string | null>(null);

  const decodeJwt = () => {
    if (!token.trim()) return;
    try {
      const parts = token.split('.');
      if (parts.length < 2) throw new Error('Token must have header and payload parts');
      const [rawHeader, rawPayload] = parts;
      setHeader(JSON.stringify(JSON.parse(decodeBase64Url(rawHeader)), null, 2));
      setPayload(JSON.stringify(JSON.parse(decodeBase64Url(rawPayload)), null, 2));
      setError(null);
    } catch (e: any) {
      setError(e.message || 'Could not decode token');
      setHeader('');
      setPayload('');
    }
  };

  const clearAll = () => { setToken(''); setHeader(''); setPayload(''); setError(null); };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-slate-500 uppercase tracking-[0.18em] mb-2">JWT Token</label>
        <textarea
          className="w-full h-32 p-4 font-mono text-sm rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/90 text-slate-900 dark:text-slate-200 focus:ring-2 focus:ring-brand-500 outline-none resize-none"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Paste your JWT here (header.payload.signature)"
          spellCheck={false}
          aria-label="JWT token input"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <button onClick={decodeJwt} className="px-7 py-3 bg-gradient-to-r from-brand-500 to-glow-600 text-white font-bold rounded-xl shadow-lg shadow-brand-500/25 hover:-translate-y-0.5 transition-transform">Decode</button>
        <button onClick={clearAll} className="px-7 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl transition-all hover:border-brand-500 dark:hover:border-brand-400">Clear</button>
        <span className="text-xs uppercase tracking-[0.2em] text-slate-400 self-center">No verification performed</span>
      </div>

      {error && (
        <div className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-xs font-mono">
          <i className="fas fa-exclamation-triangle mr-2"></i>{error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CodeArea label="Header" value={header} readOnly placeholder="Decoded header will appear here" />
        <CodeArea label="Payload" value={payload} readOnly placeholder="Decoded payload will appear here" />
      </div>
    </div>
  );
};

export default JwtDecoderWidget;
