import React from 'react';
import CodeArea from '../CodeArea';

const HashGeneratorWidget: React.FC = () => {
  const [text, setText] = React.useState('');
  const [sha1, setSha1] = React.useState('');
  const [sha256, setSha256] = React.useState('');
  const [sha512, setSha512] = React.useState('');

  const hashAll = async (value: string) => {
    if (!value) { setSha1(''); setSha256(''); setSha512(''); return; }
    const encoder = new TextEncoder();
    const data = encoder.encode(value);

    const toHex = (buf: ArrayBuffer) =>
      Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');

    const [s1, s256, s512] = await Promise.all([
      crypto.subtle.digest('SHA-1', data),
      crypto.subtle.digest('SHA-256', data),
      crypto.subtle.digest('SHA-512', data),
    ]);
    setSha1(toHex(s1));
    setSha256(toHex(s256));
    setSha512(toHex(s512));
  };

  const handleChange = (val: string) => { setText(val); hashAll(val); };

  const HashRow = ({ label, value }: { label: string; value: string }) => (
    <div>
      <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-[0.15em]">{label}</label>
      <div className="flex gap-2">
        <input
          readOnly
          value={value}
          aria-label={`${label} hash result`}
          className="flex-1 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 font-mono text-xs"
        />
        <button
          onClick={() => navigator.clipboard.writeText(value)}
          className="px-3 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-semibold hover:-translate-y-0.5 transition-transform"
        >
          Copy
        </button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <CodeArea label="Input Text" value={text} onChange={handleChange} placeholder="Enter text to hash — output updates live" />
      <div className="space-y-4">
        <HashRow label="SHA-1 (deprecated — avoid for security)" value={sha1} />
        <HashRow label="SHA-256 (recommended)" value={sha256} />
        <HashRow label="SHA-512 (maximum security)" value={sha512} />
      </div>
      <p className="text-xs text-slate-400 italic">Note: MD5 is not available in the Web Crypto API. Use SHA-256 or SHA-512 for all security-sensitive use cases.</p>
    </div>
  );
};

export default HashGeneratorWidget;
