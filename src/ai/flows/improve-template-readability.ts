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
  prompt: `Deixe melhor, mas estiloso visualmente:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blue Angels Cleaning Services</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;800&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Outfit', sans-serif;
            background: linear-gradient(180deg, #e3f2fd, #bbdefb);
            color: #1a237e;
            line-height: 1.7;
        }

        .container {
            max-width: 700px;
            margin: 40px auto;
            background: #ffffff;
            border-radius: 25px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
            position: relative;
        }

        .header {
            background: linear-gradient(45deg, #3f51b5, #0288d1);
            padding: 60px 20px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .header::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.3), transparent);
            transform: rotate(45deg);
            z-index: 1;
        }

        .header img {
            max-width: 90%; /* Increased to 90% of the card width */
            width: 90%; /* Ensure responsiveness */
            height: auto;
            position: relative;
            z-index: 2;
            filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.2));
        }

        .header p {
            color: #e3f2fd;
            font-size: 18px;
            font-weight: 300;
            margin-top: 20px;
            position: relative;
            z-index: 2;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .content {
            padding: 40px 30px;
        }

        .content h2 {
            color: #3f51b5;
            font-size: 28px;
            font-weight: 800;
            text-align: center;
            margin-bottom: 25px;
            position: relative;
        }

        .content h2::after {
            content: '';
            display: block;
            width: 50px;
            height: 3px;
            background: #0288d1;
            margin: 10px auto;
            border-radius: 2px;
        }

        .content p {
            color: #263238;
            font-size: 16px;
            text-align: justify;
            margin-bottom: 25px;
            font-weight: 300;
        }

        .card-container {
            display: grid;
            gap: 25px;
            margin-bottom: 30px;
        }

        .card {
            background: linear-gradient(135deg, #e3f2fd, #bbdefb);
            padding: 25px;
            border-radius: 15px;
            text-align: center;
            transition: all 0.4s ease;
            border: 1px solid rgba(255, 255, 255, 0.5);
            position: relative;
            overflow: hidden;
        }

        .card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, rgba(255,255,255,0.2), transparent);
            transition: opacity 0.4s ease;
            opacity: 0;
        }

        .card:hover::before {
            opacity: 1;
        }

        .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .card img {
            width: 50px;
            height: 50px;
            margin: 0 auto 15px;
            transition: transform 0.3s ease;
        }

        .card:hover img {
            transform: scale(1.1);
        }

        .card h3 {
            color: #1a237e;
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 10px;
        }

        .card p {
            color: #37474f;
            font-size: 14px;
            font-weight: 300;
            text-align: center;
        }

        .cta-button {
            display: block;
            padding: 15px 35px;
            background: linear-gradient(45deg, #0288d1, #4fc3f7);
            color: #ffffff;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 500;
            font-size: 16px;
            text-align: center;
            margin: 30px auto;
            width: fit-content;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .cta-button:hover {
            background: linear-gradient(45deg, #4fc3f7, #0288d1);
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        .link-card-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .link-card {
            background: #e3f2fd;
            padding: 20px;
            border-radius: 15px;
            text-align: center;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .link-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .link-card a {
            color: #0288d1;
            text-decoration: none;
            font-weight: 500;
            font-size: 15px;
        }

        .link-card a:hover {
            text-decoration: underline;
            color: #3f51b5;
        }

        .footer {
            background: linear-gradient(180deg, #bbdefb, #90caf9);
            padding: 25px;
            text-align: center;
            font-size: 14px;
            color: #1a237e;
        }

        .footer a {
            color: #0288d1;
            text-decoration: none;
            font-weight: 500;
        }

        .footer a:hover {
            text-decoration: underline;
        }

        @media only screen and (max-width: 600px) {
            .container {
                margin: 20px;
                border-radius: 15px;
            }

            .header img {
                max-width: 90%; /* Adjusted for mobile */
            }

            .content {
                padding: 25px;
            }

            .card, .link-card {
                width: 100%;
            }

            .cta-button {
                padding: 12px 30px;
                font-size: 14px;
            }

            .content h2 {
                font-size: 24px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://raw.githubusercontent.com/riquelima/BlueGeradordeTemplates/refs/heads/master/3-Transparent.png" alt="Blue Angels Cleaning Services Logo">
            <p>Serving the San Francisco Bay Area</p>
        </div>
        <div class="content">
            <h2>Hi!</h2>
            <p>Need a hand getting your next listing ready? If you’re a real estate professional in the Bay Area, you know how crucial a clean, clutter-free home is to close a deal fast. At Blue Angels Cleaning Services and E-Fast Junk Removal, we specialize in getting properties market-ready — quickly, professionally, and hassle-free.</p>
            
            <h2>What We Offer</h2>
            <div class="card-container">
                <div class="card">
                    <img src="https://cdn-icons-png.flaticon.com/512/8755/8755245.png" alt="Cleaning">
                    <h3><strong>Cleaning</strong></h3>
                    <p><strong>Deep cleaning & move-in/out services for show-ready properties</strong></p>
                </div>
                <div class="card">
                    <img src="https://cdn-icons-png.flaticon.com/512/5909/5909516.png" alt="Junk Removal">
                    <h3><strong>Junk Removal</strong></h3>
                    <p><strong>Junk removal, including furniture, debris, and post-construction cleanups</strong></p>
                </div>
                <div class="card">
                    <img src="https://cdn-icons-png.flaticon.com/512/3964/3964963.png" alt="Fast Response">
                    <h3><strong>Fast Response</strong></h3>
                    <p><strong>Fast response and flexible scheduling — often with same-week options</strong></p>
                </div>
                <div class="card">
                    <img src="https://cdn-icons-png.flaticon.com/512/4411/4411360.png" alt="Eco-conscious">
                    <h3><strong>Eco-conscious</strong></h3>
                    <p><strong>Eco-conscious disposal with donation or recycling whenever possible</strong></p>
                </div>
                <div class="card">
                    <img src="https://cdn-icons-png.flaticon.com/512/2665/2665041.png" alt="Reliable">
                    <h3><strong>Reliable</strong></h3>
                    <p><strong>Reliable communication and a team that acts like an extension of yours</strong></p>
                </div>
                <div class="card">
                    <img src="https://cdn-icons-png.flaticon.com/512/1161/1161388.png" alt="Liability">
                    <h3><strong>Liability</strong></h3>
                    <p><strong>We're fully insured and take every precaution to protect your property while we clean</strong></p>
                </div>
            </div>

            <a href="mailto:blueangelsmaidservices@gmail.com" class="cta-button">Get a Custom Quote</a>

            <h2>Learn More About Us</h2>
            <div class="link-card-container">
                <div class="link-card">
                    <a href="https://www.blueangelscleaning.com">www.blueangelscleaning.com</a>
                </div>
                <div class="link-card">
                    <a href="https://www.efastjunkremovalbayarea.com">www.efastjunkremovalbayarea.com</a>
                </div>
            </div>
            <p>Let us make your listings shine and simplify your turnovers! We’d love to offer a custom quote or schedule a trial service for one of your properties.</p>
        </div>
        <div class="footer">
            <p>Looking forward to working together,<br>
            The Blue Angels & E-Fast Team<br>
            <a href="tel:+14155779956">📞 (415) 577-9956</a> | 
            <a href="mailto:blueangelsmaidservices@gmail.com">📧 blueangelsmaidservices@gmail.com</a></p>
        </div>
    </div>
</body>
</html>

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
