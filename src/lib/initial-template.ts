export const initialTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blue Angels Cleaning Services</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

        body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', sans-serif;
            background-color: #f4f7fa;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 15px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #fff9c4, #ffe57f);
            padding: 30px;
            text-align: center;
            color: #ffffff;
        }
        .header img {
            max-width: 300px; /* Increased from 200px to 300px */
            height: auto;
        }
        .header p {
            color: #3498db;
            font-size: 16px;
            margin: 10px 0 0;
        }
        .content {
            padding: 20px 30px;
            color: #333333;
            line-height: 1.6;
        }
        .content h2 {
            color: #3498db;
            font-size: 22px;
            margin-bottom: 15px;
            text-align: center;
        }
        .content p {
            text-align: justify;
        }
        .card-container {
            display: block; /* Stack cards vertically */
        }
        .card {
            width: 100%; /* Full width to ensure stacking */
            background-color: #f9fbfc;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-align: center;
            margin-bottom: 20px; /* Added margin to separate cards */
        }
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        .card img {
            width: 30px;
            height: 30px;
            display: block;
            margin: 10px auto; /* Center the icons */
        }
        .card h3 {
            margin: 5px 0;
            font-size: 16px;
            color: #333333;
            font-weight: 600;
        }
        .card p {
            margin: 5px 0;
            font-size: 14px;
            color: #555555;
            text-align: center;
            font-weight: bold;
        }
        .link-card-container {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px; /* Added margin to separate from other content */
        }
        .link-card {
            flex: 1;
            background-color: #f9fbfc;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0 5px; /* Added margin between cards */
        }
        .link-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        .link-card a {
            color: #3498db;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
        }
        .link-card a:hover {
            text-decoration: underline;
        }
        .cta-button {
            display: inline-block;
            padding: 12px 25px;
            background: linear-gradient(135deg, #6ab8e3, #3498db);
            color: #ffffff;
            text-decoration: none;
            border-radius: 25px;
            font-weight: 600;
            margin: 20px 0;
            transition: background 0.3s ease;
        }
        .cta-button:hover {
            background: linear-gradient(135deg, #3498db, #6ab8e3);
        }
        .footer {
            background-color: #f4f7fa;
            padding: 20px;
            text-align: center;
            color: #777777;
            font-size: 14px;
        }
        .footer a {
            color: #3498db;
            text-decoration: none;
        }
        .footer a:hover {
            text-decoration: underline;
        }
        @media only screen and (max-width: 600px) {
            .card, .link-card {
                width: 100%; /* Ensure full width on mobile */
                margin: 0 0 20px 0; /* Stack cards vertically on mobile with margin */
            }
            .header img {
                max-width: 250px; /* Adjusted for mobile to prevent overflow */
            }
            .link-card-container {
                flex-direction: column;
                align-items: center;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://raw.githubusercontent.com/riquelima/Blue-Angels-Cleaning/main/logoTransparentbe.png" alt="Blue Angels Cleaning Services Logo">
            <p>Serving the San Francisco Bay Area</p>
        </div>
        <div class="content">
            <h2>Hi!</h2>
            <p>I hope you're doing well! I’m reaching out on behalf of Blue Angels Cleaning Services and E-Fast Junk Removal, serving the San Francisco Bay Area. We specialize in helping real estate professionals prepare homes quickly and professionally for sale, rental, or move-in.</p>
            
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
            </div>

            <div style="text-align: center;">
                <a href="mailto:blueangelsmaidservices@gmail.com" class="cta-button">Get a Custom Quote</a>
            </div>

            <h2>Learn More About Us</h2>
            <div class="link-card-container">
                <div class="link-card">
                    <a href="https://www.blueangelscleaning.com/">
                        <img src="https://cdn-icons-png.flaticon.com/512/5452/5452003.png" alt="Blue Angels Website" style="width: 30px; height: 30px; display: block; margin-bottom: 10px;">
                    </a>
                    <p style="font-size: 12px; margin: 0; white-space: nowrap;">Blue Angels Website</p>
                </div>
                <div class="link-card">
                    <a href="https://www.efastjunkremovalbayarea.com/">
                        <img src="https://cdn-icons-png.flaticon.com/512/5452/5452003.png" alt="E-Fast Junk Removal Website" style="width: 30px; height: 30px; display: block; margin-bottom: 10px;">
                    </a>
                    <p style="font-size: 12px; margin: 0; white-space: nowrap;">E-Fast Junk Removal Website</p>
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
`;
