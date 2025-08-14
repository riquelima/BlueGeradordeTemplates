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
  prompt: `When improving the style, you must generate widely diverse and visually distinct versions of the template each time.
Suggest impactful visual changes to this email template to increase its aesthetic appeal and conversion rate.

These suggestions can include:
- A new, modern, and harmonious color palette, including modern and neon options.
- Improved typography (font sizes, spacing, and weights).
- Adjustments to alignment and proportions.
- The insertion of subtle dividers, borders, or shadows.
- Repositioning of elements for a better visual hierarchy, such as placing flyers in different positions or creating grids and cards.
- The addition of relevant icons and emojis to enhance visual communication.
- More eye-catching button styles.
- Different layouts and diagramming for the flyers, including changing their size and arrangement.
- Creative backgrounds, such as light patterns, subtle gradients, or blurred image effects in the email body.

You must keep all original images and text content intact, only adjusting the styles and layout.

The template to improve is the following:

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
