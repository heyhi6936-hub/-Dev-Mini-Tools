import React from 'react';
import ToolPageLayout from '../components/ToolPageLayout';
import { content } from '../content/tools/cron-generator';
import CronJobGeneratorWidget from '../components/widgets/CronJobGeneratorWidget';

const CronJobGenerator: React.FC = () => (
  <ToolPageLayout content={content} widget={<CronJobGeneratorWidget />} />
);

export default CronJobGenerator;
