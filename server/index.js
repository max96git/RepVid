const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('RepVid Backend');
});

app.post('/upload', (req, res) => {
  res.send('Video upload endpoint');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
