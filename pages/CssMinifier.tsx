import React from 'react';
import ToolPageLayout from '../components/ToolPageLayout';
import { content } from '../content/tools/css-minifier';
import CssMinifierWidget from '../components/widgets/CssMinifierWidget';

const CssMinifier: React.FC = () => (
  <ToolPageLayout content={content} widget={<CssMinifierWidget />} />
);

export default CssMinifier;
