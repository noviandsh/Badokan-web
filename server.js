const path = require('path');
const express = require('express');
const enforce = require('express-sslify');

const PORT = 8080;

const app = express();

app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(express.static('dist'));

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

// eslint-disable-next-line no-unused-vars
const listener = app.listen(process.env.PORT || PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
