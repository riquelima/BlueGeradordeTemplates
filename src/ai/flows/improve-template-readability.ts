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
  prompt: `
- Deixe melhor, mas estiloso visualmente
- Realizar alterações significativas de tamanho de ícone, cor, posição dos elementos e criação de novos ícones baseados nos atuais
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
