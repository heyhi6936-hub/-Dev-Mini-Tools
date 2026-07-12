
import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface ToolTemplateProps {
  title: string;
  description: string;
  children: ReactNode;
  faq: { q: string; a: string }[];
}

const ToolTemplate: React.FC<ToolTemplateProps> = ({ title, description, children, faq }) => {
  const location = useLocation();
  const url = `https://devminitools.xyz${location.pathname}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": title,
    "url": url,
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "All",
    "description": description,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "Dev Mini Tools",
      "url": "https://devminitools.xyz"
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${title} | Dev Mini Tools`}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={`${title} | Dev Mini Tools`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | Dev Mini Tools`} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-100 text-xs font-semibold tracking-[0.2em] uppercase">Toolkit</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {title}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="p-[1px] rounded-3xl bg-gradient-to-br from-brand-500/25 via-glow-500/25 to-slate-900 shadow-xl shadow-brand-500/10 mb-16">
          <div className="bg-white/90 dark:bg-slate-950/85 rounded-[26px] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 backdrop-blur-xl">
            {children}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {faq.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50/90 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.q}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolTemplate;
