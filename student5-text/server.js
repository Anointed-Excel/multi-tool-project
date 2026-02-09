const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3005; // Student 5's assigned port

// ==========================================
// MIDDLEWARE
// ==========================================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// ==========================================
// HEALTH CHECK (for landing page status)
// ==========================================
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        port: PORT,
        student: 'Student 5',
        tools: ['AI Text Summarizer', 'Password Generator'],
        timestamp: new Date().toISOString()
    });
});

// ==========================================
// TOOL ROUTES
// ==========================================

// Serve AI Text Summarizer
app.get('/summarizer', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'summarizer.html'));
});

// Serve Password Generator
app.get('/password', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'password.html'));
});

// ==========================================
// API ROUTES
// ==========================================

// AI Text Summarization API
app.post('/api/summarize', async (req, res) => {
    try {
        const { text, length = 'medium' } = req.body;

        // Validate input
        if (!text || text.trim().length === 0) {
            return res.status(400).json({
                success: false,
                error: 'Please provide text to summarize'
            });
        }

        // Check if text is too short
        if (text.trim().split(/\s+/).length < 50) {
            return res.status(400).json({
                success: false,
                error: 'Text is too short to summarize. Please provide at least 50 words.'
            });
        }
// ===============================
// LOCAL MOCK SUMMARIZER (NO API)
// ===============================

// Simple local summarization logic:
// take first few sentences based on length choice
const sentences = text
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?])\s+/);

let summarySentencesCount;

switch (length) {
    case 'short':
        summarySentencesCount = 2;
        break;
    case 'long':
        summarySentencesCount = Math.min(6, sentences.length);
        break;
    default: // medium
        summarySentencesCount = 4;
        break;
}

const summary = sentences
    .slice(0, summarySentencesCount)
    .join(' ');


        res.json({
            success: true,
            data: {
                summary: summary,
                originalLength: text.length,
                summaryLength: summary.length,
                wordCount: {
                    original: text.trim().split(/\s+/).length,
                    summary: summary.trim().split(/\s+/).length
                }
            }
        });

    } catch (error) {
        console.error('Summarization Error:', error);
        
        // Handle specific API errors
        if (error.status === 401) {
            return res.status(500).json({
                success: false,
                error: 'API key is invalid. Please check your .env file.'
            });
        }
        
        res.status(500).json({
            success: false,
            error: error.message || 'Failed to generate summary'
        });
    }
});

// Password Generation API (no external API needed)
app.post('/api/generate-password', (req, res) => {
    try {
        const {
            length = 16,
            includeUppercase = true,
            includeLowercase = true,
            includeNumbers = true,
            includeSymbols = true,
            excludeSimilar = false,
            count = 1
        } = req.body;

        // Validate length
        if (length < 8 || length > 32) {
            return res.status(400).json({
                success: false,
                error: 'Password length must be between 8 and 32 characters'
            });
        }

        // Validate at least one character type is selected
        if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
            return res.status(400).json({
                success: false,
                error: 'Please select at least one character type'
            });
        }

        // Character sets
        let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let lowercase = 'abcdefghijklmnopqrstuvwxyz';
        let numbers = '0123456789';
        let symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

        // Exclude similar characters if requested
        if (excludeSimilar) {
            uppercase = uppercase.replace(/[IO]/g, '');
            lowercase = lowercase.replace(/[lo]/g, '');
            numbers = numbers.replace(/[01]/g, '');
        }

        // Build character pool
        let charPool = '';
        const required = [];

        if (includeUppercase) {
            charPool += uppercase;
            required.push(uppercase);
        }
        if (includeLowercase) {
            charPool += lowercase;
            required.push(lowercase);
        }
        if (includeNumbers) {
            charPool += numbers;
            required.push(numbers);
        }
        if (includeSymbols) {
            charPool += symbols;
            required.push(symbols);
        }

        // Generate multiple passwords
        const passwords = [];
        for (let i = 0; i < Math.min(count, 10); i++) {
            passwords.push(generatePassword(length, charPool, required));
        }

        res.json({
            success: true,
            data: {
                passwords: passwords,
                strength: calculateStrength(passwords[0], length, 
                    includeUppercase, includeLowercase, includeNumbers, includeSymbols)
            }
        });

    } catch (error) {
        console.error('Password Generation Error:', error);
        res.status(500).json({
            success: false,
            error: error.message || 'Failed to generate password'
        });
    }
});

// Helper function to generate a single password
function generatePassword(length, charPool, required) {
    const crypto = require('crypto');
    let password = '';

    // Ensure at least one character from each required set
    for (let reqSet of required) {
        const randomIndex = crypto.randomInt(0, reqSet.length);
        password += reqSet[randomIndex];
    }

    // Fill the rest randomly
    for (let i = password.length; i < length; i++) {
        const randomIndex = crypto.randomInt(0, charPool.length);
        password += charPool[randomIndex];
    }

    // Shuffle the password
    return password.split('').sort(() => crypto.randomInt(0, 2) - 0.5).join('');
}

// Helper function to calculate password strength
function calculateStrength(password, length, hasUpper, hasLower, hasNum, hasSym) {
    let score = 0;
    
    // Length score
    if (length >= 8) score += 20;
    if (length >= 12) score += 20;
    if (length >= 16) score += 20;
    
    // Character diversity score
    if (hasUpper) score += 10;
    if (hasLower) score += 10;
    if (hasNum) score += 10;
    if (hasSym) score += 10;
    
    // Determine strength level
    let level, color;
    if (score < 40) {
        level = 'Weak';
        color = '#d63031';
    } else if (score < 70) {
        level = 'Medium';
        color = '#fdcb6e';
    } else {
        level = 'Strong';
        color = '#00b894';
    }
    
    return {
        score: score,
        level: level,
        color: color
    };
}

// ==========================================
// ERROR HANDLING
// ==========================================
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// ==========================================
// START SERVER
// ==========================================
app.listen(PORT, () => {
    console.log(`\n🚀 Student 5 Server running on http://localhost:${PORT}`);
    console.log(`📝 AI Text Summarizer: http://localhost:${PORT}/summarizer`);
    console.log(`🔐 Password Generator: http://localhost:${PORT}/password`);
    console.log(`\nPress Ctrl+C to stop\n`);
});