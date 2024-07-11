# Flight Booking Bot

Welcome to the Flight Booking Bot project! This bot simulates a basic flight booking system where users can interact to book flights, check flight status, and receive flight details.

## Getting Started

To get started with the Flight Booking Bot, follow these steps:

### Prerequisites

1. Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/flight-booking-bot.git
   ```

2. Navigate into the project directory:

   ```bash
   cd flight-booking-bot
   ```

3. Install dependencies using npm:

   ```bash
   npm install
   ```

### Running the Bot

1. Start the server:

   ```bash
   node server.js
   ```

2. Open your web browser and go to `http://localhost:3000` (or the port specified).

3. Interact with the bot by typing messages in the input field. The bot will respond based on predefined scenarios like booking flights, checking flight status, and providing flight details.

## File Structure

The project structure is as follows:

```
flight-booking-bot/
├── node_modules/         # Dependencies installed via npm
├── public/               # Static files served by Express (HTML, CSS, JS)
│   ├── index.html        # Main HTML file for the chat interface
│   ├── script.js         # JavaScript file handling user interactions
│   └── style.css         # CSS styles for the chat interface
├── bots/                 # Bot logic implementation
│   └── flightBookingBot.js  # Bot logic for handling user interactions
├── server.js             # Express server setup
├── package.json          # Project configuration and dependencies
└── .env                  # Environment variables configuration
```

## Features

- **Flight Booking**: Book flights by specifying departure and destination.
- **Flight Status**: Check the status of booked flights.
- **Simulated Responses**: Simulates bot responses based on predefined commands and scenarios.

## Contributing

Contributions to improve the bot's functionality or add new features are welcome! Please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
