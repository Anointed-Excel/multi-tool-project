# 🎉 Multi-Tool Project - Quick Start Guide

## What You Have

✅ **Landing Page** - Beautiful hub showing all 10 tools  
✅ **5 Student Folders** - Ready for each student to build their 2 tools  
✅ **Comprehensive Instructions** - Step-by-step guide for students  
✅ **Server Template** - Ready-to-use Express server starter  
✅ **Startup Scripts** - Start/stop all servers with one command  
✅ **Documentation** - READMEs for every component  

---

## 🚀 For Teachers: How to Use This

### 1. **Show Students the Landing Page**
```bash
cd multi-tool-project/landing-page
open index.html  # or just double-click it
```

### 2. **Share the Instructions**
Direct students to read: `INSTRUCTIONS.md`

### 3. **Assign Students**
Each student gets one folder:
- Student 1 → `student1-scraper/`
- Student 2 → `student2-ai/`
- Student 3 → `student3-storage/`
- Student 4 → `student4-interactive/`
- Student 5 → `student5-text/`

### 4. **Set Up GitHub Repo** (if not already done)
```bash
cd multi-tool-project
git init
git add .
git commit -m "Initial multi-tool project setup"
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 5. **Add Students as Collaborators**
In GitHub: Settings → Collaborators → Add people

---

## 📝 For Students: Getting Started

### Step 1: Read the Instructions
Open `INSTRUCTIONS.md` and find your assigned student number

### Step 2: Navigate to Your Folder
```bash
cd multi-tool-project/student1-scraper  # Your assigned folder
```

### Step 3: Initialize Your Project
```bash
npm init -y
```

### Step 4: Install Dependencies
See your section in `INSTRUCTIONS.md` for exact packages

### Step 5: Copy the Server Template
```bash
cp ../server-template.js server.js
```

### Step 6: Update Port Number
Edit `server.js` and change:
```javascript
const PORT = 3001; // Your assigned port!
```

### Step 7: Create Your HTML Files
```bash
mkdir -p public
# Create your two tool HTML files in public/
```

### Step 8: Start Your Server
```bash
node server.js
```

### Step 9: Test Your Tools
- Open `http://localhost:300X/tool1`  (replace X with your port)
- Open `http://localhost:300X/tool2`

### Step 10: Commit Your Work
```bash
git add student1-scraper/  # Your folder only!
git commit -m "Add Student 1 tools: Web Scraper and QR Generator"
git push origin main
```

---

## 🎨 The 10 Tools at a Glance

| # | Tool Name | Student | Port | Tech Stack |
|---|-----------|---------|------|------------|
| 1 | Web Scraper | Student 1 | 3001 | Cheerio, Axios |
| 2 | QR Code Generator | Student 1 | 3001 | qrcode |
| 3 | AI Storybook | Student 2 | 3002 | Claude/OpenAI |
| 4 | Weather Dashboard | Student 2 | 3002 | OpenWeatherMap |
| 5 | Todo List | Student 3 | 3003 | localStorage |
| 6 | CSV → JSON | Student 3 | 3003 | Multer, csv-parser |
| 7 | Quiz Builder | Student 4 | 3004 | DOM API |
| 8 | Markdown Previewer | Student 4 | 3004 | Marked.js |
| 9 | Text Summarizer | Student 5 | 3005 | Claude/OpenAI |
| 10 | Password Generator | Student 5 | 3005 | Crypto API |

---

## ⚡ Quick Commands

### Start All Servers (once students have built them)
```bash
./start-all.sh
```

### Stop All Servers
```bash
./stop-all.sh
```

### Start Landing Page
```bash
cd landing-page
npm install  # First time only
npm start
```

### Check a Specific Port
```bash
curl http://localhost:3001/health
```

---

## 📂 File Structure Explained

```
multi-tool-project/
│
├── landing-page/           ← YOU CREATED THIS
│   ├── index.html          ← Main hub page
│   ├── package.json
│   └── README.md
│
├── student1-scraper/       ← STUDENTS FILL THESE IN
├── student2-ai/
├── student3-storage/
├── student4-interactive/
├── student5-text/
│
├── INSTRUCTIONS.md         ← Student guide
├── README.md               ← Project overview
├── server-template.js      ← Server starter for students
├── start-all.sh           ← Start all servers
├── stop-all.sh            ← Stop all servers
└── .gitignore             ← Ignore node_modules, .env
```

---

## ✅ What Students Need to Do

For each student:
1. ✅ Read INSTRUCTIONS.md (their section)
2. ✅ Set up their folder with npm
3. ✅ Install dependencies
4. ✅ Copy and customize server-template.js
5. ✅ Create 2 HTML files (their tools)
6. ✅ Implement backend routes
7. ✅ Test thoroughly
8. ✅ Commit and push to GitHub
9. ✅ Fill out their README.md

---

## 🎯 Learning Objectives

By completing this project, students will learn:
- ✅ **Backend Development** with Node.js and Express
- ✅ **API Integration** (external APIs like Claude, OpenAI, OpenWeatherMap)
- ✅ **Web Scraping** techniques
- ✅ **File Processing** (uploads, CSV parsing, QR generation)
- ✅ **DOM Manipulation** and real-time updates
- ✅ **Data Persistence** (localStorage)
- ✅ **Git Collaboration** (branches, commits, pull requests)
- ✅ **Error Handling** and validation
- ✅ **Responsive Design** with Bootstrap
- ✅ **Project Organization** and documentation

---

## 🆘 Common Issues

### "Port already in use"
```bash
lsof -i :3001    # Find the process
kill -9 <PID>    # Kill it
```

### "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### "Git conflict"
Students should only modify their own folders, so conflicts should be rare.

---

## 🎓 Grading Checklist

For each student, check:
- [ ] Both tools are functional
- [ ] Server runs on correct port
- [ ] No console errors
- [ ] Responsive design
- [ ] Error handling implemented
- [ ] Code is clean and commented
- [ ] Git commits are meaningful
- [ ] README.md filled out
- [ ] .env not committed (if applicable)

---

## 📚 Files Created

Here's what we created for you:

### Core Files:
- ✅ `landing-page/index.html` - Beautiful landing page
- ✅ `INSTRUCTIONS.md` - Detailed student guide
- ✅ `README.md` - Project overview
- ✅ `server-template.js` - Server starter
- ✅ `.gitignore` - Git ignore rules

### Scripts:
- ✅ `start-all.sh` - Start all servers
- ✅ `stop-all.sh` - Stop all servers

### Documentation:
- ✅ `landing-page/README.md` - Landing page guide
- ✅ `student1-scraper/README.md` - Student 1 readme
- ✅ `student2-ai/README.md` - Student 2 readme
- ✅ `student3-storage/README.md` - Student 3 readme
- ✅ `student4-interactive/README.md` - Student 4 readme
- ✅ `student5-text/README.md` - Student 5 readme

---

## 🎉 You're All Set!

Everything is ready for your students to start building. Just:

1. Show them the landing page
2. Point them to INSTRUCTIONS.md
3. Assign their folders
4. Let them code!

**Happy Teaching! 🚀**

---

**Questions?**  
Check the README files or raise a GitHub issue.

**Built by TechMasters Class 2026** ❤️
