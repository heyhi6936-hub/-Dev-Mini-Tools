import React from 'react';
import ToolPageLayout from '../components/ToolPageLayout';
import { content } from '../content/tools/html-beautifier';
import HtmlBeautifierWidget from '../components/widgets/HtmlBeautifierWidget';

const HtmlBeautifier: React.FC = () => (
  <ToolPageLayout content={content} widget={<HtmlBeautifierWidget />} />
);

export default HtmlBeautifier;
