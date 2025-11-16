/**
 * Script to Serve Static Docs
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.DOCS_PORT || 8080;

app.use(express.static(path.join(__dirname, '../api-docs')));

app.listen(PORT, () => {
  console.log(`Documentation server running on http://localhost:${PORT}`);
});
