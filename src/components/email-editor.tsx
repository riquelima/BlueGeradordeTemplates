'use client';

import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Download, Sparkles, LoaderCircle, MessageSquarePlus } from 'lucide-react';
import { improveTemplateReadability } from '@/ai/flows/improve-template-readability';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { editTemplateWithPrompt } from '@/ai/flows/edit-template-with-prompt';

interface EmailEditorProps {
  template: string;
  setTemplate: Dispatch<SetStateAction<string>>;
}

export function EmailEditor({ template, setTemplate }: EmailEditorProps) {
  const [isImproving, setIsImproving] = useState(false);
  const [isAskingAI, setIsAskingAI] = useState(false);
  const [showAskAIDialog, setShowAskAIDialog] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
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
        title: 'Falha no Download',
        description: 'Não foi possível preparar o template para download.',
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
          title: 'Template Melhorado',
          description: 'A IA melhorou o estilo do seu template.',
        });
      }
    } catch (error) {
      console.error('AI improvement failed:', error);
      toast({
        title: 'Falha na Melhoria',
        description: 'A IA não conseguiu melhor o template. Por favor, tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsImproving(false);
    }
  };

  const handleAskAI = async () => {
    if (!aiPrompt) return;
    setIsAskingAI(true);
    try {
      const result = await editTemplateWithPrompt({ template, prompt: aiPrompt });
      if (result.editedTemplate) {
        setTemplate(result.editedTemplate);
        toast({
          title: 'Template Atualizado',
          description: 'A IA atualizou seu template com base na sua solicitação.',
        });
      }
      setShowAskAIDialog(false);
      setAiPrompt('');
    } catch (error) {
      console.error('Ask AI failed:', error);
      toast({
        title: 'Falha na Atualização',
        description: 'A IA não conseguiu atualizar o template. Por favor, tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsAskingAI(false);
    }
  };


  return (
    <>
      <Card className="flex flex-col h-full overflow-hidden shadow-2xl bg-white/30 backdrop-blur-md border-black/10">
        <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 border-b border-black/10">
          <h2 className="text-lg font-semibold tracking-wider">Editor de HTML</h2>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              onClick={() => setShowAskAIDialog(true)}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200"
              size="sm"
            >
              <span className="relative px-3 py-2 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-gray-900 hover:text-white flex items-center">
                <MessageSquarePlus className="mr-2 h-4 w-4" />
                Perguntar à IA
              </span>
            </Button>
            <Button
              onClick={handleImproveReadability}
              disabled={isImproving}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
              size="sm"
            >
              <span className="relative px-3 py-2 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-gray-900 hover:text-white flex items-center">
                {isImproving ? (
                  <LoaderCircle className="animate-spin h-4 w-4" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                Melhorar Estilo
              </span>
            </Button>
            <Button onClick={handleDownload} variant="outline" size="sm" className="bg-transparent border-black/20 hover:bg-black/10 hover:text-white text-black">
              <Download className="h-4 w-4 mr-2" />
              Baixar
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0 flex-grow">
          <Textarea
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            placeholder="Cole seu HTML de e-mail aqui..."
            className="w-full h-full resize-none border-0 rounded-none focus-visible:ring-0 font-code text-sm bg-transparent"
          />
        </CardContent>
      </Card>

      <Dialog open={showAskAIDialog} onOpenChange={setShowAskAIDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Pedir para a IA Editar</DialogTitle>
            <DialogDescription>
              Diga à IA quais alterações você deseja fazer no template.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Input
              id="ai-prompt"
              placeholder="ex: 'Mude a cor de fundo para azul'"
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancelar
              </Button>
            </DialogClose>
            <Button onClick={handleAskAI} disabled={isAskingAI}>
              {isAskingAI ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                'Enviar'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
