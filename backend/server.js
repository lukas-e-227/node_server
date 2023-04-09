const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('port', port);

const frontendPath = path.join(__dirname, '..', 'frontend');

app.use('/', express.static(frontendPath));

app.use((req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'))
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});