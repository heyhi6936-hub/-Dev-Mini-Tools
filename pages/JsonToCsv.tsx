import React from 'react';
import ToolPageLayout from '../components/ToolPageLayout';
import { content } from '../content/tools/json-to-csv';
import JsonToCsvWidget from '../components/widgets/JsonToCsvWidget';

const JsonToCsv: React.FC = () => (
  <ToolPageLayout content={content} widget={<JsonToCsvWidget />} />
);

export default JsonToCsv;
