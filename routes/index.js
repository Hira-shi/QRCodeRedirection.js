const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
        <html>
            <head>
                <script>
                    setTimeout(() => {
                        window.close();
                    }, 0);
                </script>
            </head>
            <body>
                <h1>La page se fermera maintenant</h1>
            </body>
        </html>
    `);
});

module.exports = router;
