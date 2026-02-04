# 🛠️ Multi-Tool Website Project

A collaborative GitHub project where 5 students each build 2 web tools (10 tools total) using Node.js, Express, and various APIs.

## 🎯 Project Overview

This project teaches:
- **Node.js & Express** server development
- **API Integration** (Anthropic Claude, OpenAI, OpenWeatherMap)
- **Web Scraping** with Cheerio
- **File Processing** (CSV, QR codes)
- **DOM Manipulation** & Real-time updates
- **Local Storage** for data persistence
- **Git Collaboration** workflows

---

## 👥 Team Structure

| Student | Port | Tools |
|---------|------|-------|
| **Student 1** | 3001 | Web Scraper, QR Code Generator |
| **Student 2** | 3002 | AI Storybook, Weather Dashboard |
| **Student 3** | 3003 | Todo List, CSV→JSON Converter |
| **Student 4** | 3004 | Quiz Builder, Markdown Previewer |
| **Student 5** | 3005 | AI Summarizer, Password Generator |

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd Dunamis/multi-tool-project
```

### 2. Start the Landing Page
```bash
cd landing-page
# If using Live Server
live-server index.html

# Or open directly in browser
# file:///path/to/multi-tool-project/landing-page/index.html
```

### 3. Students: Set Up Your Tools
Navigate to your assigned folder and follow `INSTRUCTIONS.md`:
```bash
cd student1-scraper  # Your assigned folder
npm install
node server.js
```

### 4. Access Your Tools
- **Landing Page**: http://localhost:8080 (or your live-server port)
- **Student 1 Tools**: http://localhost:3001
- **Student 2 Tools**: http://localhost:3002
- **Student 3 Tools**: http://localhost:3003
- **Student 4 Tools**: http://localhost:3004
- **Student 5 Tools**: http://localhost:3005

---

## 📂 Project Structure

```
multi-tool-project/
│
├── landing-page/               # Main hub (Teacher creates)
│   ├── index.html             # Landing page with all tool cards
│   └── README.md
│
├── student1-scraper/          # Student 1's workspace
│   ├── server.js              # Express server (port 3001)
│   ├── package.json
│   ├── .env                   # API keys (gitignored)
│   └── public/
│       ├── scraper.html       # Tool 1: Web Scraper
│       └── qrcode.html        # Tool 2: QR Generator
│
├── student2-ai/               # Student 2's workspace
│   ├── server.js              # Express server (port 3002)
│   ├── package.json
│   ├── .env
│   └── public/
│       ├── storybook.html     # Tool 3: AI Storybook
│       └── weather.html       # Tool 4: Weather Dashboard
│
├── student3-storage/          # Student 3's workspace
│   ├── server.js              # Express server (port 3003)
│   ├── package.json
│   └── public/
│       ├── todo.html          # Tool 5: Todo Manager
│       └── csv-converter.html # Tool 6: CSV to JSON
│
├── student4-interactive/      # Student 4's workspace
│   ├── server.js              # Express server (port 3004)
│   ├── package.json
│   └── public/
│       ├── quiz.html          # Tool 7: Quiz Builder
│       └── markdown.html      # Tool 8: Markdown Previewer
│
├── student5-text/             # Student 5's workspace
│   ├── server.js              # Express server (port 3005)
│   ├── package.json
│   ├── .env
│   └── public/
│       ├── summarizer.html    # Tool 9: AI Summarizer
│       └── password.html      # Tool 10: Password Generator
│
├── INSTRUCTIONS.md            # Detailed student guide
├── README.md                  # This file
└── .gitignore                 # Ignore node_modules, .env
```

---

## 🛠️ Technology Stack

### Frontend:
- HTML5
- CSS3 (Bootstrap 5)
- JavaScript (ES6+)
- Bootstrap Icons

### Backend:
- Node.js
- Express.js
- CORS middleware

### Libraries & APIs:

**Student 1:**
- `cheerio` - Web scraping
- `axios` - HTTP requests
- `qrcode` - QR code generation

**Student 2:**
- `@anthropic-ai/sdk` or `openai` - AI story generation
- `axios` - OpenWeatherMap API

**Student 3:**
- `multer` - File uploads
- `csv-parser` - CSV parsing
- Browser `localStorage`

**Student 4:**
- `marked` - Markdown parsing
- DOM API - Dynamic manipulation

**Student 5:**
- `@anthropic-ai/sdk` or `openai` - Text summarization
- Crypto API - Secure passwords

---

## 🔐 Environment Setup

Students using APIs need to create `.env` files:

### Student 2 & 5 (.env):
```env
# Choose ONE:
ANTHROPIC_API_KEY=sk-ant-xxx
# OR
OPENAI_API_KEY=sk-xxx

# Student 2 only:
OPENWEATHER_API_KEY=xxx
```

### Get API Keys:
- **Anthropic Claude**: https://console.anthropic.com/
- **OpenAI**: https://platform.openai.com/
- **OpenWeatherMap**: https://openweathermap.org/api

⚠️ **Never commit `.env` files!** They're in `.gitignore`.

---

## 📋 Tool Descriptions

### 🌐 Student 1: Web Scraping & File Processing

#### 1. Web Scraper
- Input: Website URL
- Output: Page title, headings (h1-h6), all links
- Tech: Cheerio, Axios, Node.js

#### 2. QR Code Generator
- Input: Text or URL
- Output: Downloadable QR code image (PNG)
- Tech: qrcode library, Canvas

---

### 🤖 Student 2: AI & External APIs

#### 3. AI Storybook Generator
- Input: Genre, character, setting prompts
- Output: AI-generated creative story
- Tech: Claude/OpenAI API

#### 4. Weather Dashboard
- Input: City name
- Output: Current weather + 5-day forecast
- Tech: OpenWeatherMap API, Chart.js

---

### 💾 Student 3: Local Storage & File Upload

#### 5. Todo List Manager
- Features: Add, edit, delete, filter tasks
- Persistence: Browser localStorage
- Tech: Pure JavaScript, DOM API

#### 6. CSV to JSON Converter
- Input: Upload CSV file
- Output: Download JSON file
- Tech: Multer, csv-parser, Node.js

---

### 🎮 Student 4: DOM Manipulation & Real-time

#### 7. Quiz Builder & Player
- Build: Create quizzes with questions/answers
- Play: Take quizzes, see live scores
- Tech: JavaScript, localStorage, DOM manipulation

#### 8. Live Markdown Previewer
- Features: Split-pane editor with real-time preview
- Tech: Marked.js, JavaScript events

---

### 📝 Student 5: Text Processing & Security

#### 9. AI Text Summarizer
- Input: Long text
- Output: AI-generated summary
- Tech: Claude/OpenAI API

#### 10. Password Generator
- Features: Customizable length, characters, strength meter
- Tech: Crypto API, Clipboard API

---

## 🎨 Design Guidelines

### Color Palette (Per Student):
- **Student 1**: Purple (#6c5ce7)
- **Student 2**: Green (#00b894)
- **Student 3**: Blue (#0984e3)
- **Student 4**: Red (#d63031)
- **Student 5**: Yellow (#fdcb6e)

### UI Requirements:
- ✅ Bootstrap 5 for responsive layout
- ✅ Mobile-friendly (works on all screen sizes)
- ✅ Loading states during API calls
- ✅ Error handling with user-friendly messages
- ✅ Success feedback for actions

---

## 📤 Git Workflow

### Initial Setup (One-time):
```bash
git init
git add .
git commit -m "Initial project setup"
git remote add origin <your-github-repo>
git push -u origin main
```

### Student Workflow:
```bash
# Pull latest changes
git pull origin main

# Work on your tools
# ... code, code, code ...

# Add your changes (ONLY your folder!)
git add student1-scraper/

# Commit with clear message
git commit -m "Add Student 1: Web Scraper and QR Generator tools"

# Push to GitHub
git push origin main
```

### Best Practices:
- ✅ Commit often with clear messages
- ✅ Only add your own folder
- ✅ Never commit `node_modules/` or `.env`
- ✅ Pull before you push to avoid conflicts
- ✅ Test before committing

---

## ✅ Completion Checklist

### For Students:
- [ ] Both tools implemented and working
- [ ] Server runs on assigned port
- [ ] No console errors
- [ ] Responsive design (mobile/tablet/desktop)
- [ ] Error handling implemented
- [ ] Code well-commented
- [ ] README.md in your folder
- [ ] All dependencies in package.json
- [ ] .env not committed
- [ ] Tested all features

### For Teacher:
- [ ] Landing page created
- [ ] Instructions document complete
- [ ] Folder structure set up
- [ ] GitHub repo initialized
- [ ] Students added as collaborators
- [ ] API keys/accounts created (if providing)

---

## 🧪 Testing

### Manual Testing:
1. Start all 5 student servers (ports 3001-3005)
2. Open landing page
3. Click each tool card
4. Test happy path (correct inputs)
5. Test error cases (invalid inputs, network failures)
6. Test on different devices

### Automated Testing (Optional):
```bash
# Install testing framework
npm install --save-dev jest supertest

# Run tests
npm test
```

---

## 🐛 Common Issues & Solutions

### Port Already in Use:
```bash
# Find process using port
lsof -i :3001

# Kill process
kill -9 <PID>

# Or change port in server.js
```

### Modules Not Found:
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### CORS Errors:
```javascript
// Make sure you have this in server.js
const cors = require('cors');
app.use(cors());
```

### API Key Not Working:
```javascript
// Load dotenv at the top of server.js
require('dotenv').config();

// Use it like this
const apiKey = process.env.API_KEY_NAME;
```

---

## 📚 Learning Resources

### Node.js & Express:
- [Express.js Official Docs](https://expressjs.com/)
- [Node.js Docs](https://nodejs.org/docs/)
- [freeCodeCamp - Node.js Tutorial](https://www.freecodecamp.org/)

### APIs:
- [Anthropic Claude API](https://docs.anthropic.com/)
- [OpenAI API](https://platform.openai.com/docs/)
- [OpenWeatherMap API](https://openweathermap.org/api)

### Frontend:
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3/)
- [MDN Web Docs](https://developer.mozilla.org/)

### Git:
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials)

---

## 🎓 Grading Rubric

| Criteria | Weight | Description |
|----------|--------|-------------|
| **Functionality** | 40% | Both tools work as specified |
| **Code Quality** | 25% | Clean, organized, well-commented |
| **UI/UX Design** | 20% | Responsive, user-friendly interface |
| **Error Handling** | 10% | Proper validation and error messages |
| **Git Usage** | 5% | Proper commits, clean repo |

**Total:** 100 points

---

## 👨‍🏫 For Teachers

### Setup Time: ~2 hours
1. Create landing page (30 min)
2. Write instructions (45 min)
3. Set up GitHub repo (15 min)
4. Create example tool (30 min)

### Teaching Points:
- Backend development with Express
- REST API design
- Working with external APIs
- File handling and uploads
- Client-side storage
- DOM manipulation
- Git collaboration workflows

### Assessment:
- Individual tool functionality
- Code quality review
- Git commit history
- Peer code reviews (optional)

---

## 📄 License

This project is for educational purposes. Students retain ownership of their code.

---

## 🤝 Contributing

Students should only modify their assigned folders. Pull requests must:
- Only contain changes to their folder
- Include clear commit messages
- Pass basic functionality tests
- Not break existing code

---

## 📞 Support

- **Technical Issues**: Open a GitHub issue
- **Questions**: Use GitHub Discussions
- **Emergency**: Contact instructor

---

## 🎉 Acknowledgments

Built by Class of 2026 students learning:
- Full-stack web development
- API integration
- Collaborative coding with Git

---

**Happy Coding! 🚀**

Built with ❤️ by the TechMasters team
