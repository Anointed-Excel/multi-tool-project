#!/bin/bash

# Multi-Tool Project - Stop All Servers
# This script stops all running student servers

echo "🛑 Stopping all Multi-Tool servers..."

# Find and kill all node processes running on ports 3001-3005
for port in 3001 3002 3003 3004 3005; do
    pid=$(lsof -ti:$port)
    if [ ! -z "$pid" ]; then
        echo "   Stopping server on port $port (PID: $pid)"
        kill -9 $pid 2>/dev/null
    fi
done

echo "✅ All servers stopped!"
