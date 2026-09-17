const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// ANSI color codes for terminal rendering
const G = '\x1b[42m  \x1b[0m'; // Green block
const B = '\x1b[40m  \x1b[0m'; // Black block

// 8x8 Creeper Face Grid
const creeperFace = [
  [G, G, G, G, G, G, G, G],
  [G, B, B, G, G, B, B, G],
  [G, B, B, G, G, B, B, G],
  [G, G, G, B, B, G, G, G],
  [G, G, B, B, B, B, G, G],
  [G, G, B, B, B, B, G, G],
  [G, G, B, G, G, B, G, G],
  [G, G, G, G, G, G, G, G]
];

// Start the server and display the Creeper face in the terminal
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:${PORT}\n');
  
  // Render the face line by line
  creeperFace.forEach(row => {
    console.log(row.join(''));
  });
});
