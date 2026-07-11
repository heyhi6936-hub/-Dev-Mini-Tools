import React from 'react';
import ToolPageLayout from '../components/ToolPageLayout';
import { content } from '../content/tools/uuid-generator';
import UuidWidget from '../components/widgets/UuidWidget';

const UuidTool: React.FC = () => (
  <ToolPageLayout content={content} widget={<UuidWidget />} />
);

export default UuidTool;
