'use server';

/**
 * @fileOverview A flow that improves the readability of an email template.
 *
 * - improveTemplateReadability - A function that improves the readability of an email template.
 * - ImproveTemplateReadabilityInput - The input type for the improveTemplateReadability function.
 * - ImproveTemplateReadabilityOutput - The return type for the improveTemplateReadability function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ImproveTemplateReadabilityInputSchema = z.object({
  template: z
    .string()
    .describe('The email template to improve, as an HTML string.'),
});
export type ImproveTemplateReadabilityInput = z.infer<typeof ImproveTemplateReadabilityInputSchema>;

const ImproveTemplateReadabilityOutputSchema = z.object({
  improvedTemplate: z
    .string()
    .describe('The improved email template, as an HTML string.'),
});
export type ImproveTemplateReadabilityOutput = z.infer<typeof ImproveTemplateReadabilityOutputSchema>;

export async function improveTemplateReadability(input: ImproveTemplateReadabilityInput): Promise<ImproveTemplateReadabilityOutput> {
  return improveTemplateReadabilityFlow(input);
}

const prompt = ai.definePrompt({
  name: 'improveTemplateReadabilityPrompt',
  input: {schema: ImproveTemplateReadabilityInputSchema},
  output: {schema: ImproveTemplateReadabilityOutputSchema},
  prompt: `Crie variações elegantes do meu template HTML de e-mail, alterando a identidade visual de forma criativa e única em cada versão. Mantenha a logo (https://raw.githubusercontent.com/riquelima/BlueGeradordeTemplates/refs/heads/master/3-Transparent.png), os ícones (https://cdn-icons-png.flaticon.com/512/8755/8755245.png, https://cdn-icons-png.flaticon.com/512/5909/5909516.png, https://cdn-icons-png.flaticon.com/512/3964/3964963.png, https://cdn-icons-png.flaticon.com/512/4411/4411360.png, https://cdn-icons-png.flaticon.com/512/2665/2665041.png, https://cdn-icons-png.flaticon.com/512/1161/1161388.png), os textos e os links (https://www.blueangelscleaning.com, https://www.efastjunkremovalbayarea.com, mailto:blueangelsmaidservices@gmail.com, tel:+14155779956) exatamente como estão. As alterações devem incluir:

Reorganização dos cards (card-container) em diferentes disposições (ex.: em linha, em grade com colunas variadas, ou em blocos empilhados).

Uso de diferentes padrões de cores e efeitos visuais, como fundos sólidos, gradientes, efeitos neon, blur suave ou texturas sutis, aplicados ao container, header, cards e footer.

Ajustes na diagramação, como alterar espaçamentos, tamanhos de fontes, bordas e sombras, para criar layouts distintos e sofisticados.

Manter a funcionalidade do botão "Get a Custom Quote" com variações visuais (ex.: formas, gradientes, animações sutis) que o tornem atraente.

Gere pelo menos três modelos diferentes, cada um com uma estética única, e assegure que o código HTML e CSS seja preciso, sem erros, e compatível com clientes de e-mail. Ao clicar em "Improve Style", a IA deve aplicar uma dessas variações aleatoriamente, preservando todos os elementos originais não visuais.

O template a ser melhorado é o seguinte:

{{{template}}}`,
});

const improveTemplateReadabilityFlow = ai.defineFlow(
  {
    name: 'improveTemplateReadabilityFlow',
    inputSchema: ImproveTemplateReadabilityInputSchema,
    outputSchema: ImproveTemplateReadabilityOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
