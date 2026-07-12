import React from 'react';
import ToolPageLayout from '../components/ToolPageLayout';
import { content } from '../content/tools/timestamp-converter';
import TimestampWidget from '../components/widgets/TimestampWidget';

const TimestampTool: React.FC = () => (
  <ToolPageLayout content={content} widget={<TimestampWidget />} />
);

export default TimestampTool;
