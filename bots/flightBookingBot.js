const { ActivityHandler } = require('botbuilder');

class FlightBookingBot extends ActivityHandler {
    constructor(userState) {
        super();
        this.userState = userState;

        this.onMessage(async (context, next) => {
            const text = context.activity.text;
            await context.sendActivity(`You said: ${text}`);
            await next();
        });
    }
}

module.exports.FlightBookingBot = FlightBookingBot;
