const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle the POST request
app.post('/publishQuestion', (req, res) => {
  const jsonData = req.body;

  // Write the JSON data to a file
  fs.writeFile('./data/Questions.json', JSON.stringify(jsonData), err => {
    if (err) {
      console.error('Error writing JSON file:', err);
      res.status(500).send('Error writing JSON file');
    } else {
      console.log('JSON file published successfully!');
      res.status(200).send('JSON file published');
    }
  });
});

// Start the server on port 3001
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
