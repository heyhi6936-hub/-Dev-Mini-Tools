import React from 'react';
import ToolPageLayout from '../components/ToolPageLayout';
import { content } from '../content/tools/csv-to-json';
import CsvToJsonWidget from '../components/widgets/CsvToJsonWidget';

const CsvToJson: React.FC = () => (
  <ToolPageLayout content={content} widget={<CsvToJsonWidget />} />
);

export default CsvToJson;
