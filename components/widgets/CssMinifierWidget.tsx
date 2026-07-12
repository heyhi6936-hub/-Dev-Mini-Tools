import React, { useState } from 'react';
import CodeArea from '../CodeArea';

const CssMinifierWidget: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [stats, setStats] = useState<{ original: number; minified: number } | null>(null);

  const minifyCss = () => {
    if (!input.trim()) return;
    
    const minified = input
      .replace(/\/\*[\s\S]*?\*\//g, '') 
      .replace(/\s+/g, ' ')             
      .replace(/\s*([{}:;,])\s*/g, '$1') 
      .replace(/;}/g, '}')              
      .trim();

    setOutput(minified);
    setStats({
      original: new Blob([input]).size,
      minified: new Blob([minified]).size
    });
  };

  const savings = stats ? Math.round((1 - stats.minified / stats.original) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CodeArea 
          label="Input CSS" 
          value={input} 
          onChange={setInput} 
          placeholder="Paste your CSS styles here..."
        />
        <CodeArea 
          label="Minified Output" 
          value={output} 
          readOnly 
          placeholder="Minified CSS will appear here"
        />
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <button onClick={minifyCss} className="px-8 py-3 bg-gradient-to-r from-brand-500 to-glow-600 text-white font-bold rounded-xl shadow-lg shadow-brand-500/25 hover:-translate-y-0.5 transition-transform">Minify CSS</button>
        {stats && (
          <div className="flex items-center gap-4 text-sm font-medium">
            <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full">
              Reduced by {savings}%
            </span>
            <span className="text-slate-500 dark:text-slate-400">{stats.original}B → {stats.minified}B</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CssMinifierWidget;
