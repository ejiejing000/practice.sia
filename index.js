const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Terminal ANSI Colors
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';
const GREEN = '\x1b[32m';
const DARK_GREEN = '\x1b[38;5;22m';
const GOLD = '\x1b[33m';
const CYAN = '\x1b[36m';
const GRAY = '\x1b[90m';

// Creeper Blocks
const G = '\x1b[42m  \x1b[0m'; // Green block
const B = '\x1b[40m  \x1b[0m'; // Black block

// 8x8 Creeper Grid
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

// Banner Content
const message = [
 '${GREEN}========================================${RESET}',
  '${BOLD}${GOLD}   ★ HAPPY BIRTHDAY JANINE! ★ ${RESET}',
  '${GREEN}========================================${RESET}',
  '${CYAN}         /[\\/\\${RESET}  ${GRAY}<- Diamond Sword${RESET}',
  '${CYAN}        / /  \\${RESET}',
  '${CYAN}  *====/ /${RESET}',
  '${DARK_GREEN}      ( )${RESET}',
  '${GREEN}----------------------------------------${RESET}'
];

app.listen(PORT, () => {
  console.log('Server running on http://localhost:${PORT}\n');

  // Side-by-side rendering: Creeper on the left, Message on the right
  creeper.forEach((row, i) => {
    const creeperRow = row.join('');
    const textRow = message[i] || '';
    console.log('${creeperRow}   ${textRow}');
  });

  console.log('\n${BOLD}${GREEN}Have a legendary adventure! 🎉${RESET}\n');
});