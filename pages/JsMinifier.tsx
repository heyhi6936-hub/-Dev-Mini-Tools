import React from 'react';
import ToolPageLayout from '../components/ToolPageLayout';
import { content } from '../content/tools/js-minifier';
import JsMinifierWidget from '../components/widgets/JsMinifierWidget';

const JsMinifier: React.FC = () => (
  <ToolPageLayout content={content} widget={<JsMinifierWidget />} />
);

export default JsMinifier;
