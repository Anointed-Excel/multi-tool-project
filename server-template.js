const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001; // CHANGE THIS TO YOUR ASSIGNED PORT!

// ==========================================
// MIDDLEWARE
// ==========================================
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static('public')); // Serve static files from 'public' folder

// ==========================================
// HEALTH CHECK (for landing page status)
// ==========================================
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        port: PORT,
        timestamp: new Date().toISOString()
    });
});

// ==========================================
// YOUR ROUTES GO HERE
// ==========================================

// Example Route 1: Serve your first tool
app.get('/tool1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tool1.html'));
});

// Example Route 2: Serve your second tool
app.get('/tool2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tool2.html'));
});

// Example API Route
app.post('/api/example', async (req, res) => {
    try {
        const { input } = req.body;

        // Your logic here
        // e.g., call external API, process data, etc.

        res.json({
            success: true,
            data: { message: 'Processed successfully!' }
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

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
    console.log(`\n🚀 Server running on http://localhost:${PORT}`);
    console.log(`📝 Tool 1: http://localhost:${PORT}/tool1`);
    console.log(`📝 Tool 2: http://localhost:${PORT}/tool2`);
    console.log(`\n Press Ctrl+C to stop\n`);
});
