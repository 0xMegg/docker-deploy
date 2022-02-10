const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.get('/', (req, res) => res.send('Hello Discord'));
app.listen(port, () => { console.log(`My REST API running on ${port}`); })
