// Load environment variables from .env file
require('dotenv').config();

// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const { CloudAdapter, ConfigurationServiceClientCredentialFactory, MemoryStorage, UserState } = require('botbuilder');

// Initialize Express app
const app = express();
app.use(bodyParser.json());

// Create MySQL database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Connect to MySQL database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database');
});

// Create credential factory
const credentialsFactory = new ConfigurationServiceClientCredentialFactory({
    MicrosoftAppId: process.env.MICROSOFT_APP_ID,
    MicrosoftAppPassword: process.env.MICROSOFT_APP_PASSWORD,
    MicrosoftAppType: 'MultiTenant',
    MicrosoftAppTenantId: process.env.MICROSOFT_APP_TENANT_ID
});

// Create Cloud Adapter
const adapter = new CloudAdapter(credentialsFactory);

// Memory storage for user state
const memoryStorage = new MemoryStorage();
const userState = new UserState(memoryStorage);

// Bot logic implementation
const { FlightBookingBot } = require('./bots/flightBookingBot');
const bot = new FlightBookingBot(userState);

// Define routes
app.get("/", (req, res) => {
    res.status(200).send("Hey, You are in my backend!!!");
});

app.get("/api/", (req, res) => {
    res.status(200).send("Hey, You are in my backend!!!");
});

// API endpoint for receiving messages
app.post('/api/messages', (req, res) => {
    adapter.process(req, res, async (context) => {
        await bot.run(context);
    });
});

// Serve static files from the public directory
app.use(express.static('public'));

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
