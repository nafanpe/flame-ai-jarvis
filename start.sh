#!/bin/bash
gnome-terminal -- bash -c "cd frontend && npm run dev; exec bash"
gnome-terminal -- bash -c "cd backend && nodemon server.js; exec bash"
gnome-terminal -- bash -c "cd engine && source venv/bin/activate && nodemon --ext py --exec python main.py; exec bash"
