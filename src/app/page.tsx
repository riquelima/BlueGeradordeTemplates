'use client';

import { useState } from 'react';
import { EmailEditor } from '@/components/email-editor';
import { EmailPreview } from '@/components/email-preview';
import { initialTemplate } from '@/lib/initial-template';

export default function Home() {
  const [template, setTemplate] = useState<string>(initialTemplate);

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <header className="px-6 py-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="https://raw.githubusercontent.com/riquelima/BlueGeradordeTemplates/refs/heads/master/1-Transparente.png" alt="Blue Angels Cleaning Logo" className="h-12" />
            <span className="ml-4 text-xl font-semibold text-gray-700">E-mail Template Generator</span>
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
