import React from 'react';
import ToolPageLayout from '../components/ToolPageLayout';
import { content } from '../content/tools/sql-formatter';
import SqlFormatterWidget from '../components/widgets/SqlFormatterWidget';

const SqlFormatter: React.FC = () => (
  <ToolPageLayout content={content} widget={<SqlFormatterWidget />} />
);

export default SqlFormatter;
