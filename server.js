const express = require('express');
const app = express();
const path = require('path');

// Serve static files from current directory
app.use(express.static(path.join(__dirname)));

// Start server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});