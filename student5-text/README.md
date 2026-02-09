# Student 5: Text Processing & Security

**Port:** 3005  
**Student:** [obinna the Habitualist]

## 🛠️ Tools

### 9. AI Text Summarizer
Uses Claude or OpenAI to summarize long texts

### 10. Password Generator
Generate secure passwords with customizable options

## 📦 Dependencies

```bash
npm install express cors dotenv @anthropic-ai/sdk
# OR
npm install express cors dotenv openai
```

## 🔐 Environment Variables

Create a `.env` file:
```
ANTHROPIC_API_KEY=your_key_here
# OR
OPENAI_API_KEY=your_key_here
```

## 🚀 How to Run

```bash
node server.js
```

Then access:
- Text Summarizer: http://localhost:3005/summarizer
- Password Generator: http://localhost:3005/password

## 📋 Checklist

- [ ] Text Summarizer UI created
- [ ] AI summarization API working
- [ ] Summary length options implemented
- [ ] Copy to clipboard working
- [ ] Password Generator UI created
- [ ] Password generation algorithm working
- [ ] Customization options (length, types)
- [ ] Strength meter implemented
- [ ] Copy to clipboard working

## 🧪 Testing

1. Test text summarization with long text
2. Test summary length variations
3. Test API error handling
4. Test password generation with different lengths
5. Test password with different character types
6. Test strength meter accuracy
7. Test clipboard copy functionality

## 📝 Notes

Add any additional notes, security considerations, or extra features implemented here.

# 📝 Student 5: Text Processing & Security Tools

**Port:** 3005  
**Student Color:** Yellow (#fdcb6e)

## 🛠️ Tools Built

1. **AI Text Summarizer** - Summarize long articles and documents using AI
2. **Password Generator** - Create secure, customizable passwords

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd student5-text
npm install
```

### 2. Set Up Environment Variables
```bash
# Copy the example file
cp .env.example .env

# Edit .env and add your Anthropic API key
# Get it from: https://console.anthropic.com/
```

### 3. Start the Server
```bash
node server.js
```

### 4. Access Your Tools
- **AI Text Summarizer:** http://localhost:3005/summarizer
- **Password Generator:** http://localhost:3005/password
- **Health Check:** http://localhost:3005/health

---

## 📦 Dependencies

```json
{
  "express": "^4.18.2",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1",
  "@anthropic-ai/sdk": "^0.24.0"
}
```

### Installation Command:
```bash
npm install express cors dotenv @anthropic-ai/sdk
```

---

## 🔧 Tool 1: AI Text Summarizer

### Features
- ✅ Paste long articles or documents
- ✅ Choose summary length (short, medium, long)
- ✅ AI-powered summarization using Claude
- ✅ Word count tracking
- ✅ Size reduction statistics
- ✅ Copy summary to clipboard
- ✅ Download summary as TXT file

### API Endpoint
**POST** `/api/summarize`

**Request Body:**
```json
{
  "text": "Your long text here...",
  "length": "medium"  // "short" | "medium" | "long"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "summary": "AI-generated summary...",
    "originalLength": 5000,
    "summaryLength": 500,
    "wordCount": {
      "original": 850,
      "summary": 85
    }
  }
}
```

### How It Works
1. User pastes text (minimum 50 words)
2. Selects desired summary length
3. Text is sent to Claude API
4. AI generates concise summary
5. Statistics are calculated and displayed
6. User can copy or download the summary

### Technical Implementation
- Uses Anthropic Claude Sonnet 4 model
- Validates minimum word count
- Dynamic token limits based on length
- Real-time word counting
- Error handling for API failures

---

## 🔐 Tool 2: Password Generator

### Features
- ✅ Customizable password length (8-32 characters)
- ✅ Character type selection (uppercase, lowercase, numbers, symbols)
- ✅ Exclude similar characters option (I, l, 1, O, 0)
- ✅ Password strength meter
- ✅ Generate multiple passwords at once
- ✅ Password history (last 10)
- ✅ One-click copy to clipboard

### API Endpoint
**POST** `/api/generate-password`

**Request Body:**
```json
{
  "length": 16,
  "includeUppercase": true,
  "includeLowercase": true,
  "includeNumbers": true,
  "includeSymbols": true,
  "excludeSimilar": false,
  "count": 1
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "passwords": ["a3B$xK9@pL2mN7!q"],
    "strength": {
      "score": 90,
      "level": "Strong",
      "color": "#00b894"
    }
  }
}
```

### How It Works
1. User configures password settings
2. Clicks "Generate Password"
3. Server uses Node.js crypto module
4. Ensures at least one character from each selected type
5. Shuffles characters randomly
6. Calculates strength score
7. Returns password(s) with strength rating

### Strength Calculation
- **Weak (0-39):** Short length or limited character types
- **Medium (40-69):** Moderate length with some variety
- **Strong (70-100):** Long with all character types

### Technical Implementation
- Uses Node.js crypto module for secure randomness
- No external API required (works offline)
- Client-side history tracking
- Visual strength indicator with color coding

---

## 🎨 Design Guidelines

### Color Scheme
- **Primary:** #fdcb6e (Yellow)
- **Dark:** #f39c12 (Orange)
- **Light:** #fff3cd (Light Yellow)

### UI Components
- Bootstrap 5 framework
- Bootstrap Icons
- Responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Loading states for API calls
- Error handling with user-friendly messages

---

## 📁 File Structure

```
student5-text/
├── server.js              # Express server (port 3005)
├── package.json           # Dependencies
├── .env                   # API keys (NOT committed)
├── .env.example          # Example environment file
├── README.md             # This file
└── public/
    ├── summarizer.html   # AI Text Summarizer UI
    └── password.html     # Password Generator UI
```

---

## 🔑 Environment Setup

### Get Your Anthropic API Key

1. Go to: https://console.anthropic.com/
2. Sign up or log in
3. Navigate to "API Keys"
4. Create a new key
5. Copy it to your `.env` file

**Example `.env` file:**
```env
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxx
PORT=3005
```

⚠️ **IMPORTANT:** Never commit your `.env` file to Git!

---

## ✅ Testing Checklist

### AI Text Summarizer
- [ ] Can paste text and see word count update
- [ ] Short summary (2-3 sentences) works
- [ ] Medium summary (paragraph) works
- [ ] Long summary (detailed) works
- [ ] Error shown for text < 50 words
- [ ] Statistics display correctly
- [ ] Copy to clipboard works
- [ ] Download as TXT works
- [ ] Loading spinner appears during API call
- [ ] Error handling for API failures

### Password Generator
- [ ] Generate button creates a password
- [ ] Length slider updates password length
- [ ] All character type checkboxes work
- [ ] At least one type must be selected
- [ ] Exclude similar characters option works
- [ ] Strength meter updates correctly
- [ ] Copy to clipboard works
- [ ] Multiple password generation works
- [ ] Password history saves last 10
- [ ] Clear history button works

---

## 🐛 Common Issues

### Issue: "API key is invalid"
**Solution:** Check your `.env` file has the correct API key

### Issue: "Module not found"
**Solution:** Run `npm install` to install dependencies

### Issue: "Port 3005 already in use"
**Solution:**
```bash
# Find the process
lsof -i :3005

# Kill it
kill -9 <PID>
```

### Issue: "Network error"
**Solution:** Make sure the server is running with `node server.js`

---

## 📊 API Usage Notes

### Anthropic Claude API
- Model: `claude-sonnet-4-20250514`
- Used for: Text summarization
- Token limits: 150-500 depending on summary length
- Cost: ~$0.003 per 1K input tokens

### Password Generation
- No external API needed
- Uses Node.js built-in `crypto` module
- Cryptographically secure random generation
- Free to use, works offline

---

## 🎓 What You'll Learn

- ✅ Building REST APIs with Express
- ✅ Integrating AI APIs (Anthropic Claude)
- ✅ Secure password generation
- ✅ Client-server communication
- ✅ Error handling and validation
- ✅ Responsive UI design
- ✅ LocalStorage for client-side data
- ✅ Clipboard API usage
- ✅ File downloads in browser
- ✅ Async/await patterns

---

## 📝 Grading Criteria

| Criteria | Points | Description |
|----------|--------|-------------|
| **Functionality** | 40% | Both tools work correctly |
| **Code Quality** | 25% | Clean, commented code |
| **UI/UX** | 20% | Beautiful, responsive design |
| **Error Handling** | 10% | Proper validation and errors |
| **Git** | 5% | Good commits, no .env in repo |

---

## 🚀 Deployment (Optional)

To deploy your tools:

1. **Push to GitHub:**
```bash
git add student5-text/
git commit -m "Add Student 5: AI Summarizer and Password Generator"
git push origin main
```

2. **Deploy to Render/Railway/Vercel:**
- Add environment variables in dashboard
- Deploy from GitHub
- Update port if needed

---

## 🤝 Contributing

Only modify files in the `student5-text/` folder. Don't touch other students' folders!

---

## 📚 Resources

### Anthropic Claude API
- [Documentation](https://docs.anthropic.com/)
- [API Reference](https://docs.anthropic.com/claude/reference/getting-started-with-the-api)
- [Best Practices](https://docs.anthropic.com/claude/docs/best-practices)

### Node.js Crypto
- [Crypto Module Docs](https://nodejs.org/api/crypto.html)
- [Secure Random Generation](https://nodejs.org/api/crypto.html#cryptorandombytessize-callback)

### Bootstrap
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

---

## 👨‍💻 Author

**Student 5**  
Multi-Tool Website Project  
TechMasters Class 2026

---

## 📄 License

Educational project - For learning purposes only.

---

**Happy Coding! 🚀**

Built with ❤️ using Node.js, Express, and Claude AI