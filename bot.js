require('dotenv').config();

let util = require('util');
let http = require('http');
let Bot  = require('@kikinteractive/kik');

let Dialog = require('dialog-api/lib/kik');

var dialog = new Dialog(process.env.DIALOG_API_TOKEN, process.env.DIALOG_BOT_ID);

// Configure the bot
let bot = new Bot({
  username: process.env.KIK_BOT_USERNAME,
  apiKey: process.env.KIK_API_TOKEN,
  baseUrl: process.env.BOT_HOST
});

bot.updateBotConfiguration();

// Track incoming messages
bot.use((message, next) => {
  dialog.incomingMiddleware(message, next);
})

// Track outgoing messages
bot.outgoing((message, next) => {
  dialog.outgoingMiddleware(message, next);
});

bot.onTextMessage((message) => {
  var replies = ["Hey, ho!", "Let's go!"];
  bot.send(replies, message.from, message.chatId);
});

bot.onPictureMessage((message) => {
  bot.send(Bot.Message.picture('http://i.imgur.com/oalyVlU.jpg')
    .setAttributionName('Imgur')
    .setAttributionIcon('http://s.imgur.com/images/favicon-96x96.png'),
    message.from,
    message.chatId);  
});

// Set up your server and start listening
let server = http
  .createServer(bot.incoming())
  .listen(process.env.PORT || 8080);
