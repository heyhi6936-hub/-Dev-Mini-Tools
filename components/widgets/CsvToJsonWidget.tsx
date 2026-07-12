import React from 'react';
import CodeArea from '../CodeArea';

const CsvToJsonWidget: React.FC = () => {
  const [csv, setCsv] = React.useState('');
  const [json, setJson] = React.useState('');

  const convert = () => {
    try {
      const lines = csv.trim().split(/\r?\n/);
      if (lines.length < 2) {
        setJson('[]');
        return;
      }
      const headers = lines[0].split(',').map(h => h.trim());
      const rows = lines.slice(1).map(line => {
        const values = line.split(',').map(v => v.trim());
        const obj: any = {};
        headers.forEach((h, i) => {
          obj[h] = values[i] || '';
        });
        return obj;
      });
      setJson(JSON.stringify(rows, null, 2));
    } catch (e: any) {
      setJson(`Error: ${e.message}`);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CodeArea label="CSV Input" value={csv} onChange={setCsv} placeholder="name,age\nAlice,30\nBob,25" />
        <CodeArea label="JSON Output" value={json} readOnly />
      </div>
      <button onClick={convert} className="px-6 py-2 rounded-xl bg-slate-900 text-white font-semibold hover:-translate-y-0.5 transition-transform">Convert to JSON</button>
    </div>
  );
};

export default CsvToJsonWidget;
