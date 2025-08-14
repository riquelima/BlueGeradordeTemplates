
'use server';

/**
 * @fileOverview A flow that edits an email template based on a user prompt.
 *
 * - editTemplateWithPrompt - A function that edits an email template based on a user prompt.
 * - EditTemplateWithPromptInput - The input type for the editTemplateWithPrompt function.
 * - EditTemplateWithPromptOutput - The return type for the editTemplateWithPrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EditTemplateWithPromptInputSchema = z.object({
  template: z
    .string()
    .describe('The email template to edit, as an HTML string.'),
  prompt: z
    .string()
    .describe('The user\'s instruction on how to edit the template.'),
});
export type EditTemplateWithPromptInput = z.infer<typeof EditTemplateWithPromptInputSchema>;

const EditTemplateWithPromptOutputSchema = z.object({
  editedTemplate: z
    .string()
    .describe('The edited email template, as an HTML string.'),
});
export type EditTemplateWithPromptOutput = z.infer<typeof EditTemplateWithPromptOutputSchema>;

export async function editTemplateWithPrompt(input: EditTemplateWithPromptInput): Promise<EditTemplateWithPromptOutput> {
  return editTemplateWithPromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'editTemplateWithPromptPrompt',
  input: {schema: EditTemplateWithPromptInputSchema},
  output: {schema: EditTemplateWithPromptOutputSchema},
  prompt: `You are an expert web developer specializing in HTML email templates.
Your task is to modify the provided HTML email template based on the user's request.
Ensure that you only return the full, valid HTML for the modified template. Do not add any explanations.
Keep all existing images unless the user explicitly asks to remove or change them.
Make sure the final HTML is clean and well-formatted.

User's request: {{{prompt}}}

The template to edit is the following:

{{{template}}}`,
});

const editTemplateWithPromptFlow = ai.defineFlow(
  {
    name: 'editTemplateWithPromptFlow',
    inputSchema: EditTemplateWithPromptInputSchema,
    outputSchema: EditTemplateWithPromptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
