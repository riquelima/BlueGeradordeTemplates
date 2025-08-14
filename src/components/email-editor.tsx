'use client';

import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Download, Sparkles, LoaderCircle } from 'lucide-react';
import { improveTemplateReadability } from '@/ai/flows/improve-template-readability';
import { useToast } from '@/hooks/use-toast';

interface EmailEditorProps {
  template: string;
  setTemplate: Dispatch<SetStateAction<string>>;
}

export function EmailEditor({ template, setTemplate }: EmailEditorProps) {
  const [isImproving, setIsImproving] = useState(false);
  const { toast } = useToast();

  const handleDownload = () => {
    try {
      const blob = new Blob([template], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'email-template.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      toast({
        title: 'Download Failed',
        description: 'Could not prepare the template for download.',
        variant: 'destructive',
      });
    }
  };

  const handleImproveReadability = async () => {
    setIsImproving(true);
    try {
      const result = await improveTemplateReadability({ template });
      if (result.improvedTemplate) {
        setTemplate(result.improvedTemplate);
        toast({
          title: 'Template Improved',
          description: 'The AI has improved the style of your template.',
        });
      }
    } catch (error) {
      console.error('AI improvement failed:', error);
      toast({
        title: 'Improvement Failed',
        description: 'The AI could not improve the template. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsImproving(false);
    }
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-2xl bg-black/30 backdrop-blur-md border-white/10">
      <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-white/10">
        <h2 className="text-lg font-semibold tracking-wider">HTML Editor</h2>
        <div className="flex items-center gap-4">
          <Button
            onClick={handleImproveReadability}
            disabled={isImproving}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {isImproving ? (
                  <LoaderCircle className="animate-spin" />
                ) : (
                  <Sparkles className="mr-2" />
                )}
                Improve Style
             </span>
          </Button>
          <Button onClick={handleDownload} variant="outline" className="bg-transparent border-white/20 hover:bg-white/10 hover:text-white">
            <Download />
            Download
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0 flex-grow">
        <Textarea
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
          placeholder="Paste your email HTML here..."
          className="w-full h-full resize-none border-0 rounded-none focus-visible:ring-0 font-code text-sm bg-transparent"
        />
      </CardContent>
    </Card>
  );
}
