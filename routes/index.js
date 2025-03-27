const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const userAgent = req.headers['user-agent'].toLowerCase();
  const isApple = /iphone|ipad|ipod/.test(userAgent);
  const isAndroid = /android/.test(userAgent);

  if (isApple) {
    res.send(`
            <html>
            <head>
                <meta charset="UTF-8">
                <title>Redirection...</title>
                <script>
                    setTimeout(() => {
                        window.location.href = "https://www.google.com";
                    }, 5000);
                </script>
            </head>
            <body>
                <p>Vous êtes sur un appareil Apple. Redirection dans 5 secondes...</p>
            </body>
            </html>
        `);
  } else if (isAndroid) {
    res.send(`
            <html>
            <head>
                <meta charset="UTF-8">
                <title>Redirection...</title>
                <script>
                    setTimeout(() => {
                        window.location.href = "https://www.amazon.com";
                    }, 5000);
                </script>
            </head>
            <body>
                <p>Vous êtes sur un appareil Android. Redirection dans 5 secondes...</p>
            </body>
            </html>
        `);
  } else {
    res.send(`
            <html>
            <head>
                <meta charset="UTF-8">
                <title>Bienvenue</title>
            </head>
            <body>
                <p>Bienvenue sur notre site. Aucune redirection pour les PC.</p>
            </body>
            </html>
        `);
  }
});

module.exports = router;
