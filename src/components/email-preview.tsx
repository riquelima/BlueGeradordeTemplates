
'use client';

import type { Dispatch, SetStateAction } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { templates } from '@/lib/initial-templates';

interface EmailPreviewProps {
  template: string;
  setTemplate: Dispatch<SetStateAction<string>>;
}

export function EmailPreview({ template, setTemplate }: EmailPreviewProps) {
  const handleTemplateChange = (templateName: string) => {
    const selectedTemplate = templates.find(t => t.name === templateName);
    if (selectedTemplate) {
      setTemplate(selectedTemplate.html);
    }
  };

  const getSelectedTemplateName = () => {
    const selectedTemplate = templates.find(t => t.html === template);
    return selectedTemplate ? selectedTemplate.name : "Personalizado";
  }

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-2xl bg-white/30 backdrop-blur-md border-black/10">
      <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-black/10">
        <h2 className="text-lg font-semibold tracking-wider">Visualização ao Vivo</h2>
        <Select onValueChange={handleTemplateChange} value={getSelectedTemplateName()}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Selecionar Template" />
          </SelectTrigger>
          <SelectContent>
            {templates.map((t, index) => (
              <SelectItem key={index} value={t.name}>
                {t.name}
              </SelectItem>
            ))}
             {getSelectedTemplateName() === 'Personalizado' && (
                <SelectItem value="Personalizado" disabled>Personalizado</SelectItem>
            )}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="p-0 flex-grow bg-white">
        <iframe
          srcDoc={template}
          title="Email Preview"
          className="w-full h-full border-0"
        />
      </CardContent>
    </Card>
  );
}
