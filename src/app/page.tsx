
'use client';

import { useState, useEffect } from 'react';
import { EmailEditor } from '@/components/email-editor';
import { EmailPreview } from '@/components/email-preview';
import { templates } from '@/lib/initial-templates';

export default function Home() {
  const [template, setTemplate] = useState<string>('');

  useEffect(() => {
    // Randomly select one of the templates to display on initial load.
    // This runs only on the client to avoid server-client mismatch.
    setTemplate(templates[Math.floor(Math.random() * templates.length)]);
  }, []);


  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <header className="px-6 py-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="https://raw.githubusercontent.com/riquelima/BostonProCleaning/refs/heads/main/newLogo-buteco.png" alt="Buteco Pé de Serra Logo" className="h-24" />
            <span className="ml-4 text-xl font-semibold text-gray-700">Buteco Pé de Serra - Gerador de Templates HTML</span>
          </div>
        </div>
      </header>
      <main className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 p-4 overflow-hidden">
        <EmailEditor template={template} setTemplate={setTemplate} />
        <EmailPreview template={template} />
      </main>
    </div>
  );
}
