
'use client';

import { useState, useEffect } from 'react';
import { EmailEditor } from '@/components/email-editor';
import { EmailPreview } from '@/components/email-preview';
import { templates } from '@/lib/initial-templates';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Home() {
  const [template, setTemplate] = useState<string>('');
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Randomly select one of the templates to display on initial load.
    // This runs only on the client to avoid server-client mismatch.
    if (templates.length > 0) {
      setTemplate(templates[Math.floor(Math.random() * templates.length)].html);
    }
  }, []);


  return (
    <>
      <div className="flex flex-col h-screen bg-transparent text-foreground">
        <header className="px-4 md:px-6 py-2 border-b border-black/10">
          <div className="flex items-center justify-between gap-2 md:gap-4 w-full">
            <div className="flex-1">
              <img src="https://raw.githubusercontent.com/riquelima/BostonProCleaning/refs/heads/main/Nova-Logo-PDS-2024-02.png" alt="Buteco Pé de Serra Logo" className="h-20 md:h-24" />
            </div>
            <div className="flex-1 text-center">
               <h1 className="text-base sm:text-lg md:text-5xl lg:text-6xl font-headline tracking-wider whitespace-nowrap">Buteco Pé de Serra - Gerador de Templates</h1>
            </div>
            <div className="flex-1 flex justify-end">
              <Button onClick={() => setShowInfoModal(true)} variant="ghost" size="icon">
                <Info className="h-6 w-6 md:h-8 md:w-8" />
              </Button>
            </div>
          </div>
        </header>
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 p-4 overflow-auto md:overflow-hidden">
          <div className="h-[70vh] md:h-auto">
            <EmailEditor template={template} setTemplate={setTemplate} />
          </div>
          <div className="h-[90vh] md:h-auto">
            <EmailPreview template={template} setTemplate={setTemplate} />
          </div>
        </div>
      </div>

      <Dialog open={showInfoModal} onOpenChange={setShowInfoModal}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">Como Usar a Plataforma</DialogTitle>
            <DialogDescription>
              Um guia rápido para você aproveitar ao máximo o gerador de templates.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh] p-4">
            <div className="space-y-6 text-sm">
              <div>
                <h3 className="font-semibold text-lg mb-2">Editor de HTML e Visualização ao Vivo</h3>
                <p>À esquerda, você tem o <strong className="text-primary">Editor de HTML</strong>. Aqui, você pode colar seu próprio código HTML ou editar o template carregado.</p>
                <p>À direita, a <strong className="text-primary">Visualização ao Vivo</strong> mostra como seu e-mail ficará. Todas as alterações no editor são refletidas instantaneamente.</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Funcionalidades dos Botões</h3>
                <ul className="list-disc list-outside ml-5 space-y-2">
                  <li>
                    <strong>Selecionar Template:</strong> No canto superior direito da tela de visualização, você pode alternar entre os modelos de template pré-existentes para começar a editar.
                  </li>
                  <li>
                    <strong>Perguntar à IA:</strong> Permite que você dê instruções em texto para a IA fazer alterações específicas no seu template. É a forma mais flexível de personalizar seu design.
                  </li>
                  <li>
                    <strong>Melhorar Estilo:</strong> A IA irá analisar o template atual e aplicar melhorias de estilo, como cores, fontes e layout, para deixá-lo mais moderno e atraente. Os resultados são criativos e podem variar a cada clique.
                  </li>
                  <li>
                    <strong>Baixar:</strong> Faz o download do código HTML do template atual, pronto para ser usado em suas campanhas de e-mail.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Dicas para Usar a IA (Perguntar à IA)</h3>
                <p>Seja claro e específico em seus pedidos. Quanto mais detalhado o prompt, melhor será o resultado. Aqui estão alguns exemplos:</p>
                <ul className="list-disc list-outside ml-5 space-y-1 mt-2 bg-muted p-3 rounded-md">
                  <li><code className="text-sm">"Mude a cor de fundo do e-mail para um tom de azul escuro e o texto para branco."</code></li>
                  <li><code className="text-sm">"Adicione uma borda vermelha de 2px ao redor da imagem principal."</code></li>
                  <li><code className="text-sm">"Altere a fonte de todos os parágrafos para 'Arial'."</code></li>
                  <li><code className="text-sm">"Remova a última imagem do template."</code></li>
                  <li><code className="text-sm">"Centralize todo o texto do e-mail."</code></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Utilizando Seus Próprios Templates</h3>
                <p>
                  Você não precisa se limitar aos modelos existentes! Simplesmente copie o código HTML de qualquer outro template de e-mail e cole diretamente no <strong className="text-primary">Editor de HTML</strong>. A partir daí, você pode usar o botão <strong className="text-primary">"Melhorar Estilo"</strong> para que a IA crie novas versões ou o <strong className="text-primary">"Perguntar à IA"</strong> para fazer ajustes finos.
                </p>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
