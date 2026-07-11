import React from 'react';
import ToolPageLayout from '../components/ToolPageLayout';
import { content } from '../content/tools/password-generator';
import PasswordGeneratorWidget from '../components/widgets/PasswordGeneratorWidget';

const PasswordGenerator: React.FC = () => (
  <ToolPageLayout content={content} widget={<PasswordGeneratorWidget />} />
);

export default PasswordGenerator;
