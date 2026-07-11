import React from 'react';
import ToolPageLayout from '../components/ToolPageLayout';
import { content } from '../content/tools/hash-generator';
import HashGeneratorWidget from '../components/widgets/HashGeneratorWidget';

const HashGenerator: React.FC = () => (
  <ToolPageLayout content={content} widget={<HashGeneratorWidget />} />
);

export default HashGenerator;
