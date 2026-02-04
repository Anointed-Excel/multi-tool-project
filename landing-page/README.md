# Multi-Tool Project Landing Page

This is the main hub/landing page for the Multi-Tool Website Project. It displays cards for all 5 students and their 10 tools.

## 🚀 Quick Start

### Option 1: Using Live Server (Recommended)

```bash
# Install dependencies
npm install

# Start the landing page
npm start
```

The landing page will open at `http://localhost:8080`

### Option 2: Direct Browser Access

Simply open `index.html` in your browser:
```bash
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

## ✨ Features

- **Beautiful Card Layout** - Each student has a color-coded card
- **Tool Links** - Direct links to all 10 tools
- **Live Status Indicators** - Shows which servers are online (green) or offline (red)
- **Port Information** - Displays which port each student's tools run on
- **Tech Stack Badges** - Shows technologies used for each tool
- **Responsive Design** - Works on mobile, tablet, and desktop

## 🎨 Design

### Color Scheme (by Student):
- Student 1: Purple (#6c5ce7)
- Student 2: Green (#00b894)
- Student 3: Blue (#0984e3)
- Student 4: Red (#d63031)
- Student 5: Yellow (#fdcb6e)

### Layout:
- Gradient background
- Card-based interface
- Hover animations
- Status pulse indicators

## 🔗 Tool Links

Make sure student servers are running before clicking tool links:

### Student 1 (Port 3001):
- http://localhost:3001/scraper
- http://localhost:3001/qrcode

### Student 2 (Port 3002):
- http://localhost:3002/storybook
- http://localhost:3002/weather

### Student 3 (Port 3003):
- http://localhost:3003/todo
- http://localhost:3003/csv-converter

### Student 4 (Port 3004):
- http://localhost:3004/quiz
- http://localhost:3004/markdown

### Student 5 (Port 3005):
- http://localhost:3005/summarizer
- http://localhost:3005/password

## 🔍 Status Indicators

The landing page checks each server's `/health` endpoint every 10 seconds:
- **Green dot** = Server is online
- **Red dot** = Server is offline

## 📱 Responsive Breakpoints

- **Desktop**: > 1200px
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with gradients, animations
- **Bootstrap 5** - Responsive grid system
- **Bootstrap Icons** - Icon library
- **JavaScript** - Status checking, dynamic updates
- **Google Fonts** - Poppins font family

## 🎯 How It Works

1. **Landing Page** loads and displays all tool cards
2. **Status Check Script** runs every 10 seconds
3. For each port (3001-3005), it tries to fetch `/health` endpoint
4. **Indicator updates** based on server response
5. **User clicks** tool link → Opens tool in new tab

## 📝 Customization

### To change a tool name or description:
Edit the corresponding card in `index.html`

### To add a new student/tool:
1. Copy an existing student card
2. Update the student number, name, and tool details
3. Change the color class (student1, student2, etc.)
4. Add the port to the status check script

### To change colors:
Modify the CSS variables in the `<style>` section:
```css
:root {
    --purple: #6c5ce7;
    --green: #00b894;
    /* etc. */
}
```

## ⚠️ Important Notes

- This is a **static HTML page** - no backend needed
- **Student servers must be running** for tool links to work
- Status indicators use `fetch()` with `no-cors` mode
- Links open in **new tabs** (target="_blank")

## 🐛 Troubleshooting

**Status indicators always red?**
- Check that student servers have `/health` endpoint
- Verify CORS is enabled on student servers
- Check browser console for errors

**Tool links don't work?**
- Make sure student server is running
- Check the port number is correct
- Verify the route exists in student's server.js

**Page doesn't look right?**
- Clear browser cache
- Check that Bootstrap CSS is loading
- Verify internet connection (for CDN resources)

## 📚 Files

- `index.html` - Main landing page
- `package.json` - NPM configuration
- `README.md` - This file

## 🎓 Learning Outcomes

By building this landing page, you learn:
- HTML structure and semantic markup
- CSS gradients and animations
- Bootstrap grid system
- JavaScript fetch API
- Responsive design principles
- Status monitoring techniques

---

**Built by TechMasters Class 2026** 🚀
