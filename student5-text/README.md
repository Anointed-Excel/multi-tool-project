# Student 5: Text Processing & Security

**Port:** 3005  
**Student:** [Your Name Here]

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
