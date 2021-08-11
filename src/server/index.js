const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();

const port = 3000;

app.use(cors());
app.use('/api', router);

app.listen(port, () => {
  console.log(`Starting server on ${port}`);
});
