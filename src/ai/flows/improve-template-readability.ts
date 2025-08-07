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
  prompt: `You are an expert email designer. You will receive an email template as an HTML string.
Your task is to stylistically redesign the template. You should modify elements like colors, fonts, design, layout, and visual elements to make it more professional and stylish.
However, you must preserve all the existing text, links, and logos from the original template.
Do not add, remove, or change any of the content.
Also, ensure the icons follow a consistent visual style.
The output should be a single HTML file with inline CSS.`,
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
