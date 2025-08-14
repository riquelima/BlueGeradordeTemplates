export const templates = [
`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Convite de Aniversário - Buteco Pé de Serra</title>
  <style>
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: 'Roboto', Arial, sans-serif;
      background-color: #f9e9d4;
    }
    .container {
      max-width: 650px;
      width: 100%;
      margin: 20px auto;
      background-color: #fff8e1;
      border-collapse: collapse;
    }
    .header {
      text-align: center;
      padding: 0;
      position: relative;
    }
    .header-table {
      width: 100%;
      background: url('https://raw.githubusercontent.com/riquelima/BostonProCleaning/refs/heads/main/header2.png') no-repeat center center;
      background-size: cover;
      position: relative;
      height: 200px; /* Adjust based on header image height */
    }
    .logo {
      max-width: 550px;
      max-height: 250px;
      width: auto;
      height: auto;
      display: block;
      margin: 0 auto;
    }
    .content {
      padding: 20px;
      text-align: center;
      color: #2c3e50;
    }
    .content h1 {
      font-family: 'Lexend', Arial, sans-serif;
      font-size: 24px;
      color: #b71c1c !important;
      margin: 0 0 20px 0;
      text-align: center;
      line-height: 1.2;
    }
    .content p {
      font-size: 16px;
      line-height: 1.6;
      color: #000000 !important;
      margin: 0 0 15px 0;
    }
    .content .justified {
      text-align: justify;
    }
    .content .cta-button {
      display: inline-block;
      padding: 12px 30px;
      background-color: #d32f2f;
      color: #ffffff !important;
      text-decoration: none;
      font-weight: 700;
      border-radius: 25px;
    }
    .content .single-line {
      white-space: nowrap;
    }
    .content img {
      max-width: 100%;
      width: auto;
      height: auto;
      border-radius: 10px;
      margin-top: 15px;
    }
    .footer {
      background-color: #2c3e50;
      color: #ffffff !important;
      text-align: center;
      padding: 20px;
      font-size: 14px;
    }
    .footer a {
      color: #ffffff !important;
      text-decoration: none;
      font-weight: 400;
    }
    .footer img {
      width: 32px;
      height: 32px;
      margin: 10px 10px;
      vertical-align: middle;
    }
    @media only screen and (max-width: 600px) {
      .container {
        width: 100%;
        margin: 10px 0;
      }
      .content {
        padding: 15px;
      }
      .content h1 {
        font-size: 16px;
        line-height: 1.3;
      }
      .content p {
        font-size: 14px;
        color: #000000 !important;
      }
      .content .single-line {
        font-size: 12px;
        white-space: normal;
      }
      .content .cta-button {
        padding: 10px 20px;
        font-size: 14px;
      }
      .header-table {
        height: 150px; /* Adjust for smaller screens */
      }
      .logo {
        max-width: 350px;
        max-height: 150px;
      }
    }
  </style>
</head>
<body>
  <table class="container" width="100%" style="max-width: 650px; width: 100%; margin: 20px auto; background-color: #fff8e1; border-collapse: collapse;">
    <tr>
      <td class="header" style="text-align: center; padding: 0; position: relative;">
        <table class="header-table" style="width: 100%; background: url('https://raw.githubusercontent.com/riquelima/BostonProCleaning/refs/heads/main/header2.png') no-repeat center center; background-size: cover; position: relative; height: 200px;">
          <tr>
            <td style="text-align: center; vertical-align: middle;">
              <img src="https://raw.githubusercontent.com/riquelima/BostonProCleaning/refs/heads/main/newLogo-buteco.png" alt="Logo Buteco Pé de Serra" class="logo" style="max-width: 550px; max-height: 250px; width: auto; height: auto; display: block; margin: 0 auto;">
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td class="content" style="padding: 20px; text-align: center; color: #2c3e50;">
        <h1 style="font-family: 'Lexend', Arial, sans-serif; font-size: 24px; color: #b71c1c; margin: 0 0 20px 0; text-align: center; line-height: 1.2;">Seu Aniversário Merece uma Festa Especial!</h1>
        <p style="font-size: 16px; line-height: 1.6; color: #000000; margin: 0 0 15px 0;">Olá, {{ $json.primeiroNome }}!</p>
        <p class="justified" style="font-size: 16px; line-height: 1.6; color: #000000; margin: 0 0 15px 0; text-align: justify;">Seu grande dia está chegando, e o <strong>Buteco Pé de Serra</strong> quer fazer parte dessa celebração! Venha curtir seu aniversário com a gente, em um ambiente descontraído, com pratos deliciosos, drinks artesanais e a energia única do nosso buteco. Traga seus amigos e família para tornar esse momento inesquecível!</p>
        <p class="single-line" style="font-size: 16px; line-height: 1.6; color: #000000; margin: 0 0 15px 0;">Confira nossa promoção especial para aniversariantes e reserve sua mesa agora!</p>
        <a href="https://api.whatsapp.com/send?phone=558586657578&text=Ol%C3%A1!%20Sou%20aniversariante%20e%20gostaria%20de%20reservar%20uma%20mesa." class="cta-button" target="_blank" style="display: inline-block; padding: 12px 30px; background-color: #d32f2f; color: #ffffff; text-decoration: none; font-weight: 700; border-radius: 25px;">Reservar Minha Mesa</a>
        <img src="https://raw.githubusercontent.com/riquelima/BostonProCleaning/refs/heads/main/flyer1.png" alt="Flyer Promocional Aniversário" style="max-width: 100%; width: auto; height: auto; border-radius: 10px; margin-top: 15px; display: block;">
      </td>
    </tr>
    <tr>
      <td class="footer" style="background-color: #2c3e50; color: #ffffff; text-align: center; padding: 20px; font-size: 14px;">
        <p style="color: #ffffff; margin: 0 0 10px 0;">Junte-se à nossa comunidade no Instagram!</p>
        <a href="https://www.instagram.com/butecopedeserra?igsh=dHhhdXZ4ODh4ZTl2" style="color: #ffffff; text-decoration: none;">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" alt="Instagram" style="width: 32px; height: 32px; margin: 10px 10px; vertical-align: middle;">
        </a>
        <p style="color: #ffffff; margin: 0;">&copy; 2025 Buteco Pé de Serra. Todos os direitos reservados.</p>
      </td>
    </tr>
  </table>
</body>
</html>
`,
`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Convite de Aniversário - Buteco Pé de Serra</title>
  <style>
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: 'Roboto', Arial, sans-serif;
      background-color: #f9e9d4;
    }
    .container {
      max-width: 650px;
      width: 100%;
      margin: 20px auto;
      background-color: #fff8e1;
      border-collapse: collapse;
    }
    .header {
      text-align: center;
      padding: 0;
      position: relative;
    }
    .header-table {
      width: 100%;
      background: url('https://raw.githubusercontent.com/riquelima/BostonProCleaning/refs/heads/main/SELO-COMEMORE.png') no-repeat center center;
      background-size: cover;
      position: relative;
      height: 280px;
    }
    .content {
      padding: 20px;
      text-align: center;
      color: #2c3e50;
    }
    .content h1 {
      font-family: 'Lexend', Arial, sans-serif;
      font-size: 24px;
      color: #b71c1c !important;
      margin: 0 0 20px 0;
      text-align: center;
      line-height: 1.2;
    }
    .content p {
      font-size: 16px;
      line-height: 1.6;
      color: #000000 !important;
      margin: 0 0 15px 0;
    }
    .content .justified {
      text-align: justify;
    }
    .content .cta-button {
      display: inline-block;
      padding: 12px 30px;
      background-color: #d32f2f;
      color: #ffffff !important;
      text-decoration: none;
      font-weight: 700;
      border-radius: 25px;
    }
    .content .single-line {
      white-space: nowrap;
    }
    .content img {
      max-width: 100%;
      width: auto;
      height: auto;
      border-radius: 10px;
      margin-top: 15px;
      display: block;
    }
    .footer {
      background-color: #2c3e50;
      color: #ffffff !important;
      text-align: center;
      padding: 20px;
      font-size: 14px;
    }
    .footer a {
      color: #ffffff !important;
      text-decoration: none;
      font-weight: 400;
    }
    .footer img {
      width: 32px;
      height: 32px;
      margin: 10px 10px;
      vertical-align: middle;
    }
    @media only screen and (max-width: 600px) {
      .container {
        width: 100%;
        margin: 10px 0;
      }
      .content {
        padding: 15px;
      }
      .content h1 {
        font-size: 16px;
        line-height: 1.3;
      }
      .content p {
        font-size: 14px;
        color: #000000 !important;
      }
      .content .single-line {
        font-size: 12px;
        white-space: normal;
      }
      .content .cta-button {
        padding: 10px 20px;
        font-size: 14px;
      }
      .header-table {
        height: 230px;
        background-position: center center;
        background-size: cover;
      }
    }
  </style>
</head>
<body>
  <table class="container" width="100%" style="max-width: 650px; width: 100%; margin: 20px auto; background-color: #fff8e1; border-collapse: collapse;">
    <tr>
      <td class="header" style="text-align: center; padding: 0; position: relative;">
        <table class="header-table" style="width: 100%; background: url('https://raw.githubusercontent.com/riquelima/BostonProCleaning/refs/heads/main/SELO-COMEMORE.png') no-repeat center center; background-size: cover; position: relative; height: 280px;">
          <tr>
            <td style="text-align: center; vertical-align: middle;">
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td class="content" style="padding: 20px; text-align: center; color: #2c3e50;">
        <h1 style="font-family: 'Lexend', Arial, sans-serif; font-size: 24px; color: #b71c1c; margin: 0 0 20px 0; text-align: center; line-height: 1.2;">Seu Aniversário Merece uma Festa Especial!</h1>
        <p style="font-size: 16px; line-height: 1.6; color: #000000; margin: 0 0 15px 0;">Olá, {{ $json.primeiroNome }}!</p>
        <p class="justified" style="font-size: 16px; line-height: 1.6; color: #000000; margin: 0 0 15px 0; text-align: justify;">Seu grande dia está chegando, e o <strong>Buteco Pé de Serra</strong> quer fazer parte dessa celebração! Venha curtir seu aniversário com a gente, em um ambiente descontraído, com pratos deliciosos, drinks artesanais e a energia única do nosso buteco. Traga seus amigos e família para tornar esse momento inesquecível!</p>
        <p class="single-line" style="font-size: 16px; line-height: 1.6; color: #000000; margin: 0 0 15px 0;">Confira nossa promoção especial para aniversariantes e reserve sua mesa agora!</p>
        <a href="https://api.whatsapp.com/send?phone=558586657578&text=Ol%C3%A1!%20Sou%20aniversariante%20e%20gostaria%20de%20reservar%20uma%20mesa." class="cta-button" target="_blank" style="display: inline-block; padding: 12px 30px; background-color: #d32f2f; color: #ffffff; text-decoration: none; font-weight: 700; border-radius: 25px;">Reservar Minha Mesa</a>
        <img src="https://raw.githubusercontent.com/riquelima/BostonProCleaning/refs/heads/main/flyer1.png" alt="Flyer Promocional Aniversário" style="max-width: 100%; width: auto; height: auto; border-radius: 10px; margin-top: 15px; display: block;">
        <img src="https://raw.githubusercontent.com/riquelima/BostonProCleaning/refs/heads/main/COMBO-ANIVERS%C3%81RIO.png" alt="Flyer Combo Aniversário" style="max-width: 100%; width: auto; height: auto; border-radius: 10px; margin-top: 15px; display: block;">
        <img src="https://raw.githubusercontent.com/riquelima/BostonProCleaning/refs/heads/main/REGRAS-ANIVERS%C3%81RIO-TERREO.png" alt="Flyer Regras Aniversário Térreo" style="max-width: 100%; width: auto; height: auto; border-radius: 10px; margin-top: 15px; display: block;">
        <img src="https://raw.githubusercontent.com/riquelima/BostonProCleaning/refs/heads/main/REGRAS-ANIVERS%C3%81RIO-SUPERIOR.png" alt="Flyer Regras Aniversário Superior" style="max-width: 100%; width: auto; height: auto; border-radius: 10px; margin-top: 15px; display: block;">
      </td>
    </tr>
    <tr>
      <td class="footer" style="background-color: #2c3e50; color: #ffffff; text-align: center; padding: 20px; font-size: 14px;">
        <p style="color: #ffffff; margin: 0 0 10px 0;">Junte-se à nossa comunidade no Instagram!</p>
        <a href="https://www.instagram.com/butecopedeserra?igsh=dHhhdXZ4ODh4ZTl2" style="color: #ffffff; text-decoration: none;">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" alt="Instagram" style="width: 32px; height: 32px; margin: 10px 10px; vertical-align: middle;">
        </a>
        <p style="color: #ffffff; margin: 0;">&copy; 2025 Buteco Pé de Serra. Todos os direitos reservados.</p>
      </td>
    </tr>
  </table>
</body>
</html>
`
];
