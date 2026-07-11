import React from 'react';
import ToolPageLayout from '../components/ToolPageLayout';
import { content } from '../content/tools/url-encoder';
import UrlEncoderWidget from '../components/widgets/UrlEncoderWidget';

const UrlEncoder: React.FC = () => (
  <ToolPageLayout content={content} widget={<UrlEncoderWidget />} />
);

export default UrlEncoder;
