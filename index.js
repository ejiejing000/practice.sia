const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Terminal ANSI Colors
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';
const GREEN = '\x1b[32m';
const GOLD = '\x1b[33m';

// Pixel Blocks
const G = '\x1b[42m  \x1b[0m'; // Green
const B = '\x1b[40m  \x1b[0m'; // Black
const W = '\x1b[47m  \x1b[0m'; // White
const R = '\x1b[41m  \x1b[0m'; // Red
const Y = '\x1b[43m  \x1b[0m'; // Yellow
const BR = '\x1b[48;5;94m  \x1b[0m'; // Brown
const E = '  '; // Empty

// 1. Creeper
const creeper = [
  [G, G, G, G, G, G, G, G],
  [G, B, B, G, G, B, B, G],
  [G, B, B, G, G, B, B, G],
  [G, G, G, B, B, G, G, G],
  [G, G, B, B, B, B, G, G],
  [G, G, B, B, B, B, G, G],
  [G, G, B, G, G, B, G, G],
  [G, G, G, G, G, G, G, G]
];

// 2. Cake
const cake = [
  [E, E, E, E, E, E, E, E],
  [E, E, R, E, E, R, E, E],
  [E, W, W, W, W, W, W, E],
  [E, W, W, W, W, W, W, E],
  [E, BR, W, BR, BR, W, BR, E],
  [E, BR, BR, BR, BR, BR, BR, E],
  [E, E, E, E, E, E, E, E],
  [E, E, E, E, E, E, E, E]
];

// 3. Chicken
const chicken = [
  [W, W, W, W, W, W, W, W],
  [W, B, W, W, W, B, W, W],
  [W, W, Y, Y, Y, W, W, W],
  [W, W, R, R, W, W, W, W],
  [W, W, W, W, W, W, W, W],
  [W, W, W, W, W, W, W, W],
  [E, Y, Y, E, E, Y, Y, E],
  [E, Y, Y, E, E, Y, Y, E]
];

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}\n`);
  
  // Centered Header
  console.log(`         ${GREEN}=========================================${RESET}`);
  console.log(`         ${BOLD}${GOLD}        ★ HAPPY BIRTHDAY JANINE! ★ ${RESET}`);
  console.log(`         ${GREEN}=========================================${RESET}\n`);

  // Centered items in the middle bottom of the name
  for (let i = 0; i < 8; i++) {
    const creeperRow = creeper[i].join('');
    const cakeRow = cake[i].join('');
    const chickenRow = chicken[i].join('');
    
    // Indented to center under the header
    console.log(`            ${creeperRow}   ${cakeRow}   ${chickenRow}`);
  }

  console.log(`\n         ${BOLD}${GREEN}     🐔 Have a legendary adventure! 🐔${RESET}\n`);
});