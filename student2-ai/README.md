# Student 2: AI & External APIs

**Port:** 3002  
**Student:** [Your Name Here]

## 🛠️ Tools

### 3. AI Storybook Generator
Uses Claude or OpenAI API to generate creative stories from prompts

### 4. Weather Dashboard
Fetches real-time weather data from OpenWeatherMap API

## 📦 Dependencies

```bash
npm install express cors dotenv @anthropic-ai/sdk axios
# OR
npm install express cors dotenv openai axios
```

## 🔐 Environment Variables

Create a `.env` file:
```
ANTHROPIC_API_KEY=your_key_here
# OR
OPENAI_API_KEY=your_key_here

OPENWEATHER_API_KEY=your_key_here
```

## 🚀 How to Run

```bash
node server.js
```

Then access:
- AI Storybook: http://localhost:3002/storybook
- Weather Dashboard: http://localhost:3002/weather

## 📋 Checklist

- [ ] AI Storybook UI created
- [ ] AI Storybook API integration working
- [ ] Weather Dashboard UI created
- [ ] Weather Dashboard API integration working
- [ ] Error handling for API failures
- [ ] Loading states implemented
- [ ] Responsive design
- [ ] .env file created (not committed!)

## 🧪 Testing

1. Test story generation with different prompts
2. Test API error handling (invalid key)
3. Test weather with valid city
4. Test weather with invalid city
5. Test 5-day forecast display

## 📝 Notes

Add any additional notes, API considerations, or extra features implemented here.
