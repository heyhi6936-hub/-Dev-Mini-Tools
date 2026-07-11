import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, Link } from 'react-router-dom';
import { ToolContent } from '../content/schema';

interface ToolPageLayoutProps {
  content: ToolContent;
  widget: ReactNode;
}

const ToolPageLayout: React.FC<ToolPageLayoutProps> = ({ content, widget }) => {
  const location = useLocation();
  const url = `https://devminitools.xyz${location.pathname}`;

  const generatedSchema = {
    "@context": "https://schema.org",
    "@type": content.schema_type || "WebApplication",
    "name": content.name,
    "url": url,
    "applicationCategory": content.category,
    "operatingSystem": "All",
    "description": content.meta_description,
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
        <title>{content.meta_title}</title>
        <meta name="description" content={content.meta_description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={content.meta_title} />
        <meta property="og:description" content={content.meta_description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.meta_title} />
        <meta name="twitter:description" content={content.meta_description} />
        <script type="application/ld+json">
          {JSON.stringify(generatedSchema)}
        </script>
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-100 text-xs font-semibold tracking-[0.2em] uppercase">
            {content.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {content.name}
          </h1>
          <p className="direct-answer text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {content.direct_answer}
          </p>
        </div>

        {/* Interactive Tool Widget */}
        <div className="p-[1px] rounded-3xl bg-gradient-to-br from-brand-500/25 via-glow-500/25 to-slate-900 shadow-xl shadow-brand-500/10">
          <div className="bg-white/90 dark:bg-slate-950/85 rounded-[26px] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 backdrop-blur-xl">
            {widget}
          </div>
        </div>

        {/* SEO / Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            <section id="what-is" className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">What is {content.name}?</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-wrap">
                {content.what_is}
              </p>
            </section>

            <section id="how-to" className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">How to use {content.name}</h2>
              <ol className="list-decimal pl-5 space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                {content.how_to_steps.map((step, idx) => (
                  <li key={idx} className="pl-2">{step}</li>
                ))}
              </ol>
            </section>

            {content.example && (
              <section id="example" className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{content.name} Example</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900 text-slate-300 font-mono text-sm overflow-x-auto border border-slate-800">
                    <div className="text-xs text-slate-500 mb-2 uppercase font-sans">Input</div>
                    <pre>{content.example.input}</pre>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-slate-300 font-mono text-sm overflow-x-auto border border-brand-500/30">
                    <div className="text-xs text-brand-400 mb-2 uppercase font-sans">Output</div>
                    <pre>{content.example.output}</pre>
                  </div>
                </div>
              </section>
            )}

            <section id="faqs" className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {content.faqs.map((f, idx) => (
                  <details key={idx} className="group p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 open:bg-white dark:open:bg-slate-900 open:shadow-md transition-all">
                    <summary className="font-semibold text-slate-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                      {f.q}
                      <span className="transition group-open:rotate-180">
                        <i className="fas fa-chevron-down text-sm text-slate-400"></i>
                      </span>
                    </summary>
                    <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {content.related_tools.length > 0 && (
              <nav id="related-tools" className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Related Tools</h3>
                <ul className="space-y-3">
                  {content.related_tools.map(tool => (
                    <li key={tool}>
                      <Link to={`/${tool}`} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 flex items-center gap-2 transition-colors">
                        <i className="fas fa-link text-xs opacity-50"></i>
                        {tool.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {content.related_articles.length > 0 && (
              <nav id="related-articles" className="p-6 rounded-2xl bg-brand-50/50 dark:bg-brand-900/10 border border-brand-100 dark:border-brand-900/30 shadow-sm">
                <h3 className="text-lg font-bold text-brand-900 dark:text-brand-100 mb-4">Related Guides</h3>
                <ul className="space-y-3">
                  {content.related_articles.map(article => (
                    <li key={article}>
                      <Link to={`/${article}`} className="text-sm font-medium text-brand-700 dark:text-brand-300 hover:text-brand-500 flex items-center gap-2 transition-colors">
                        <i className="far fa-file-alt text-xs opacity-70"></i>
                        {article.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
            
            <div className="text-xs text-slate-400 text-center">
              Last updated: {content.last_updated}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ToolPageLayout;
