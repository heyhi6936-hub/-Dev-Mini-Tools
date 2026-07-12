import React, { useState } from 'react';
import CodeArea from '../CodeArea';

const HtmlBeautifierWidget: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const beautifyHtml = () => {
    if (!input.trim()) return;

    let formatted = '';
    let pad = 0;
    const reg = /(>)(<)(\/*)/g;
    let html = input.replace(reg, '$1\r\n$2$3');
    
    html.split('\r\n').forEach((node) => {
        let indent = 0;
        if (node.match(/.+<\/\w[^>]*>$/)) {
            indent = 0;
        } else if (node.match(/^<\/\w/)) {
            if (pad !== 0) {
                pad -= 1;
            }
        } else if (node.match(/^<\w[^>]*[^\/]>.*$/)) {
            indent = 1;
        } else {
            indent = 0;
        }

        let padding = '';
        for (let i = 0; i < pad; i++) {
            padding += '  ';
        }

        formatted += padding + node + '\r\n';
        pad += indent;
    });

    setOutput(formatted.trim());
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CodeArea 
          label="Input HTML" 
          value={input} 
          onChange={setInput} 
          placeholder="Paste your unformatted HTML here..."
        />
        <CodeArea 
          label="Formatted Output" 
          value={output} 
          readOnly 
          placeholder="Beautified HTML will appear here"
        />
      </div>

      <div className="flex gap-4">
        <button onClick={beautifyHtml} className="px-8 py-3 bg-gradient-to-r from-brand-500 to-glow-600 text-white font-bold rounded-xl shadow-lg shadow-brand-500/25 hover:-translate-y-0.5 transition-transform">Beautify HTML</button>
        <button onClick={() => {setInput(''); setOutput('');}} className="px-8 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl transition-all hover:border-brand-500 dark:hover:border-brand-400">Clear</button>
      </div>
    </div>
  );
};

export default HtmlBeautifierWidget;
