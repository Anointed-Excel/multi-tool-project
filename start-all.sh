#!/bin/bash

# Multi-Tool Project - Start All Servers
# This script starts all 5 student servers simultaneously

echo "🚀 Starting Multi-Tool Project Servers..."
echo "========================================="

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to check if a port is in use
check_port() {
    if lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null 2>&1 ; then
        echo -e "${YELLOW}⚠️  Port $1 is already in use. Skipping...${NC}"
        return 1
    else
        return 0
    fi
}

# Function to start a student server
start_server() {
    local student_dir=$1
    local port=$2
    local student_name=$3
    
    if [ -d "$student_dir" ] && [ -f "$student_dir/server.js" ]; then
        if check_port $port; then
            echo -e "${GREEN}✓ Starting $student_name on port $port...${NC}"
            cd "$student_dir"
            node server.js > "../logs/${student_name}.log" 2>&1 &
            cd ..
        fi
    else
        echo -e "${YELLOW}⚠️  $student_name not found or incomplete${NC}"
    fi
}

# Create logs directory
mkdir -p logs

# Start each student's server
start_server "student1-scraper" 3001 "Student 1"
start_server "student2-ai" 3002 "Student 2"
start_server "student3-storage" 3003 "Student 3"
start_server "student4-interactive" 3004 "Student 4"
start_server "student5-text" 3005 "Student 5"

echo "========================================="
echo -e "${GREEN}✨ All available servers started!${NC}"
echo ""
echo "📍 Access your tools:"
echo "   Student 1: http://localhost:3001"
echo "   Student 2: http://localhost:3002"
echo "   Student 3: http://localhost:3003"
echo "   Student 4: http://localhost:3004"
echo "   Student 5: http://localhost:3005"
echo ""
echo "🌐 Landing Page: Open landing-page/index.html in your browser"
echo ""
echo "📝 Logs are in: logs/"
echo ""
echo "🛑 To stop all servers, run: ./stop-all.sh"
echo "   Or press Ctrl+C and run: killall node"
