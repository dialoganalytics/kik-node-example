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

bot.onTextMessage((message) => {
  dialog.incoming(message); // Track an incoming message

  var replies = ["Hey, ho!", "Let's go!"];
  var response = bot.send(replies, message.from, message.chatId);

  response.then(function() {
    replies.forEach((text) => {
      payload = {
        type: 'text',
        body: text,
        chatId: message.chatId
      };

      console.log(dialog.outgoing(payload)); // Track outgoing message(s)
    });
  });
});

// Set up your server and start listening
let server = http
  .createServer(bot.incoming())
  .listen(process.env.PORT || 8080);
