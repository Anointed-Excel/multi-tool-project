# 🛠️ Multi-Tool Website Project - Student Instructions

## 📋 Project Overview

Welcome to the Multi-Tool Website Project! This is a collaborative GitHub project where **5 students** will each build **2 web tools** (10 tools total). Each student will run their tools on a **dedicated port** using Node.js and Express.

### 🎯 Your Mission
Build 2 fully functional web tools, run them on your assigned port, and integrate with the main landing page.

---

## 👥 Student Assignments

| Student | Port | Tool 1 | Tool 2 |
|---------|------|--------|--------|
| **Student 1** | 3001 | Web Scraper | QR Code Generator |
| **Student 2** | 3002 | AI Storybook Generator | Weather Dashboard |
| **Student 3** | 3003 | Todo List Manager | CSV to JSON Converter |
| **Student 4** | 3004 | Quiz Builder & Player | Live Markdown Previewer |
| **Student 5** | 3005 | Text Summarizer (AI) | Password Generator |

---

## 📂 Project Structure

```
multi-tool-project/
├── landing-page/
│   └── index.html (Landing page - already created by teacher)
│
├── student1-scraper/        (Your folder - Student 1)
│   ├── server.js             (Express server on port 3001)
│   ├── package.json
│   ├── .env                  (API keys if needed)
│   └── public/
│       ├── scraper.html      (Web Scraper UI)
│       └── qrcode.html       (QR Code Generator UI)
│
├── student2-ai/              (Your folder - Student 2)
│   ├── server.js             (Express server on port 3002)
│   ├── package.json
│   ├── .env
│   └── public/
│       ├── storybook.html
│       └── weather.html
│
├── student3-storage/         (Your folder - Student 3)
│   ├── server.js             (Express server on port 3003)
│   ├── package.json
│   └── public/
│       ├── todo.html
│       └── csv-converter.html
│
├── student4-interactive/     (Your folder - Student 4)
│   ├── server.js             (Express server on port 3004)
│   ├── package.json
│   └── public/
│       ├── quiz.html
│       └── markdown.html
│
└── student5-text/            (Your folder - Student 5)
    ├── server.js             (Express server on port 3005)
    ├── package.json
    ├── .env
    └── public/
        ├── summarizer.html
        └── password.html
```

---

## 🚀 Getting Started

### Step 1: Initialize Your Project
Navigate to your assigned folder and initialize Node.js:

```bash
cd multi-tool-project/student1-scraper  # Replace with your folder
npm init -y
```

### Step 2: Install Dependencies

#### For ALL Students:
```bash
npm install express cors dotenv
```

#### Student 1 (Web Scraping & QR):
```bash
npm install cheerio axios qrcode
```

#### Student 2 (AI & Weather):
```bash
npm install @anthropic-ai/sdk openai axios
# or just npm install openai
```

#### Student 3 (Storage & File):
```bash
npm install multer csv-parser
```

#### Student 4 (Interactive):
```bash
npm install marked
```

#### Student 5 (Text & Security):
```bash
npm install @anthropic-ai/sdk
# or npm install openai
```

### Step 3: Create Your Server

Create `server.js` in your folder:

```javascript
const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3001; // Change to your assigned port!

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Health check endpoint (for landing page status indicator)
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Your routes will go here
// Example: app.get('/scraper', ...)

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
```

---

## 📝 Detailed Tool Requirements

### 🧑‍💻 **Student 1: Web Scraping & File Processing** (Port 3001)

#### Tool 1: Web Scraper
**File:** `public/scraper.html`

**Requirements:**
- User inputs a URL
- Backend scrapes the page using Cheerio
- Extract: Page title, all h1-h6 headings, all links
- Display results in a formatted table
- Error handling for invalid URLs

**Backend Route:**
```javascript
app.post('/api/scrape', async (req, res) => {
    // Your scraping logic using cheerio
});
```

**UI Features:**
- URL input field
- "Scrape" button
- Loading spinner
- Results display (title, headings count, links count)
- Export results as JSON button

---

#### Tool 2: QR Code Generator
**File:** `public/qrcode.html`

**Requirements:**
- User inputs text or URL
- Generate QR code image
- Display QR code
- Download button (PNG format)
- Preview before download

**Backend Route:**
```javascript
app.post('/api/generate-qr', async (req, res) => {
    // QR code generation using qrcode library
});
```

**UI Features:**
- Text/URL input
- Size selector (small, medium, large)
- Color picker for QR code
- Live preview
- Download button

---

### 🤖 **Student 2: AI & External APIs** (Port 3002)

#### Tool 3: AI Storybook Generator
**File:** `public/storybook.html`

**Requirements:**
- User submits story prompt (genre, character, setting)
- Call Anthropic Claude or OpenAI API
- Generate a creative story (200-500 words)
- Display formatted story
- Save stories to localStorage

**Backend Route:**
```javascript
app.post('/api/generate-story', async (req, res) => {
    // AI story generation using Claude/OpenAI
});
```

**UI Features:**
- Genre dropdown (Fantasy, Sci-Fi, Mystery, Romance)
- Character name input
- Setting input
- "Generate Story" button
- Story display area with nice typography
- Save/favorite stories
- Story history

---

#### Tool 4: Weather Dashboard
**File:** `public/weather.html`

**Requirements:**
- User enters city name
- Fetch from OpenWeatherMap API
- Display: Current temp, humidity, wind speed, weather icon
- Show 5-day forecast
- Beautiful weather cards

**Backend Route:**
```javascript
app.get('/api/weather/:city', async (req, res) => {
    // Weather API call
});
```

**UI Features:**
- City search with autocomplete
- Current weather card (animated)
- 5-day forecast cards
- Temperature unit toggle (°C/°F)
- Weather icons
- Recent searches

---

### 💾 **Student 3: Local Storage & File Upload** (Port 3003)

#### Tool 5: Todo List Manager
**File:** `public/todo.html`

**Requirements:**
- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark as complete/incomplete
- Filter: All, Active, Completed
- Data persists via localStorage
- No backend needed (pure frontend)

**UI Features:**
- Task input field
- Add button
- Task list with checkboxes
- Edit/Delete buttons per task
- Filter tabs
- Task counter
- Clear completed button
- Priority levels (high, medium, low)

---

#### Tool 6: CSV to JSON Converter
**File:** `public/csv-converter.html`

**Requirements:**
- Upload CSV file
- Parse CSV and convert to JSON
- Display preview of JSON
- Download JSON file
- Error handling for malformed CSV

**Backend Route:**
```bash
app.post('/api/convert-csv', upload.single('csvFile'), (req, res) => {
    // CSV parsing using csv-parser
});
```

**UI Features:**
- Drag-and-drop file upload
- File size validation (max 5MB)
- Preview first 10 rows
- Download JSON button
- Pretty-print JSON option
- Sample CSV download

---

### 🎮 **Student 4: DOM Manipulation & Real-time** (Port 3004)

#### Tool 7: Quiz Builder & Player
**File:** `public/quiz.html`

**Requirements:**
- **Build Mode:** Create quizzes with questions, 4 options, correct answer
- **Play Mode:** Take quizzes, select answers, see score
- Dynamic DOM manipulation (add/remove questions)
- Quiz saved to localStorage
- Timer for each quiz

**UI Features:**
- Two tabs: Build Quiz / Take Quiz
- Question builder form (dynamic add/remove)
- Quiz player with progress bar
- Live score calculation
- Results page with correct answers highlighted
- Quiz history

---

#### Tool 8: Live Markdown Previewer
**File:** `public/markdown.html`

**Requirements:**
- Split-pane layout (editor | preview)
- Type markdown on left, see HTML preview on right
- Real-time conversion using Marked.js
- Support: headers, lists, links, images, code blocks
- Export as HTML or PDF

**UI Features:**
- Two-column layout
- Syntax highlighting for code
- Sample markdown template
- Download as HTML
- Dark mode toggle
- Markdown cheat sheet

---

### 📝 **Student 5: Text Processing & Security** (Port 3005)

#### Tool 9: AI Text Summarizer
**File:** `public/summarizer.html`

**Requirements:**
- User pastes long text
- AI generates summary (using Claude/OpenAI)
- Summary length option (short, medium, long)
- Highlight key points
- Copy summary to clipboard

**Backend Route:**
```javascript
app.post('/api/summarize', async (req, res) => {
    // AI summarization logic
});
```

**UI Features:**
- Large textarea for input text
- Word count display
- Summary length selector
- "Summarize" button
- Output area with formatted summary
- Copy to clipboard button
- Export as TXT/PDF

---

#### Tool 10: Password Generator
**File:** `public/password.html`

**Requirements:**
- Generate random passwords
- Options: length, uppercase, lowercase, numbers, symbols
- Password strength meter (weak, medium, strong)
- Copy to clipboard
- Generate multiple passwords at once

**UI Features:**
- Length slider (8-32 characters)
- Checkboxes for character types
- Strength meter (visual bar)
- Generate button
- Copy button with feedback
- Password history (last 5)
- Exclude similar characters option

---

## 🎨 Design Requirements

### General Rules for ALL Students:

1. **Color Scheme:**
   - Use Bootstrap 5 for layout
   - Each student has an assigned accent color:
     - Student 1: Purple (#6c5ce7)
     - Student 2: Green (#00b894)
     - Student 3: Blue (#0984e3)
     - Student 4: Red (#d63031)
     - Student 5: Yellow (#fdcb6e)

2. **Responsive Design:**
   - Must work on mobile, tablet, desktop
   - Use Bootstrap grid system

3. **User Experience:**
   - Loading states for API calls
   - Error messages for failures
   - Success feedback
   - Smooth transitions/animations

4. **Code Quality:**
   - Clean, commented code
   - Proper error handling
   - API keys in `.env` file (never commit!)

---

## 🔐 Environment Variables

For students using APIs (Student 2 & 5), create a `.env` file:

```env
# Student 2 & 5
ANTHROPIC_API_KEY=your_api_key_here
OPENAI_API_KEY=your_api_key_here

# Student 2
OPENWEATHER_API_KEY=your_api_key_here
```

**⚠️ IMPORTANT:** Add `.env` to `.gitignore`!

---

## 🧪 Testing Your Tools

1. Start your server:
```bash
node server.js
```

2. Open browser and test:
   - Tool 1: `http://localhost:300X/tool1.html`
   - Tool 2: `http://localhost:300X/tool2.html`

3. Test all features:
   - Happy path (correct inputs)
   - Error cases (invalid inputs)
   - Edge cases (empty inputs, large files, etc.)

---

## 📤 Git Workflow

### Initial Setup:
```bash
# Make sure you're in the multi-tool-project directory
cd multi-tool-project

# Initialize git (if not already done)
git init

# Create .gitignore
echo "node_modules/
.env
*.log" > .gitignore
```

### Your Workflow:
```bash
# Add your files
git add student1-scraper/  # Replace with your folder

# Commit with descriptive message
git commit -m "Add Student 1: Web Scraper and QR Code Generator"

# Push to GitHub
git push origin main
```

---

## ✅ Checklist Before Submission

- [ ] Both tools are fully functional
- [ ] Server runs on correct port
- [ ] No errors in browser console
- [ ] All routes work correctly
- [ ] UI is responsive (mobile, tablet, desktop)
- [ ] Error handling implemented
- [ ] Code is well-commented
- [ ] `.env` file not committed
- [ ] `package.json` includes all dependencies
- [ ] README.md created in your folder
- [ ] Tested all edge cases

---

## 🆘 Troubleshooting

**Port already in use?**
```bash
# Find process using the port
lsof -i :3001  # Replace with your port

# Kill the process
kill -9 <PID>
```

**Cannot connect to API?**
- Check that your API key is in `.env`
- Verify you're using `process.env.API_KEY_NAME`
- Check API documentation for correct endpoint

**CORS errors?**
- Make sure you have `cors` middleware enabled
- Check that you're using `app.use(cors())`

---

## 🎓 Grading Criteria

| Category | Points | Description |
|----------|--------|-------------|
| **Functionality** | 40% | Both tools work as specified |
| **Code Quality** | 25% | Clean, organized, commented code |
| **UI/UX** | 20% | User-friendly, responsive design |
| **Error Handling** | 10% | Proper validation and error messages |
| **Git** | 5% | Proper commits, no `.env` in repo |

---

## 📚 Useful Resources

### Documentation:
- [Express.js Docs](https://expressjs.com/)
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3/)
- [Cheerio Docs](https://cheerio.js.org/)
- [Anthropic API](https://docs.anthropic.com/)
- [OpenAI API](https://platform.openai.com/docs/)

### Tutorials:
- MDN Web Docs
- W3Schools
- freeCodeCamp

---

## 🎉 Good Luck!

Remember:
- **Start early** - Don't wait until the last minute
- **Test often** - Test each feature as you build it
- **Ask for help** - Don't struggle alone
- **Have fun** - This is a chance to build cool stuff!

---

**Questions?** Contact your instructor or check the project discussion board.

**Happy Coding! 🚀**
