/**
 * Server Entry Point
 * Starts the Express server
 */

import app from './server/server';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📚 Health check: http://localhost:${PORT}/health`);
  console.log(`🔗 Example endpoint: http://localhost:${PORT}/api/example`);
});

