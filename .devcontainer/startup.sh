#!/bin/bash

# Start npm development server in the background
npm start &

# Wait for the server to be ready on port 3000
echo "Waiting for React app to start..."
for i in {1..60}; do
  if nc -z localhost 3000 2>/dev/null; then
    echo "React app is ready on http://localhost:3000"
    break
  fi
  sleep 1
done

# Open the browser in VS Code using the simple browser
code --open-url "simpleBrowser:http://localhost:3000" || true

# Keep the script running
wait
