import React from 'react';
import ToolPageLayout from '../components/ToolPageLayout';
import { content } from '../content/tools/regex-tester';
import RegexTesterWidget from '../components/widgets/RegexTesterWidget';

const RegexTester: React.FC = () => (
  <ToolPageLayout content={content} widget={<RegexTesterWidget />} />
);

export default RegexTester;
