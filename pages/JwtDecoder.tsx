import React from 'react';
import ToolPageLayout from '../components/ToolPageLayout';
import { content } from '../content/tools/jwt-decoder';
import JwtDecoderWidget from '../components/widgets/JwtDecoderWidget';

const JwtDecoder: React.FC = () => (
  <ToolPageLayout content={content} widget={<JwtDecoderWidget />} />
);

export default JwtDecoder;
