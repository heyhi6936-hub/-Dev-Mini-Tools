import React from 'react';
import ToolPageLayout from '../components/ToolPageLayout';
import { content } from '../content/tools/json-formatter';
import JsonFormatterWidget from '../components/widgets/JsonFormatterWidget';

const JsonFormatter: React.FC = () => (
  <ToolPageLayout content={content} widget={<JsonFormatterWidget />} />
);

export default JsonFormatter;
