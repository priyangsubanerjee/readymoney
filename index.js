const { Composer } = require("micro-bot");
const dotenv = require("dotenv");
dotenv.config();

const bot = new Composer();

bot.on("message", (msg) => {
  console.log(msg);
  bot.telegram.sendMessage(msg.chat.id, msg.message.text);
});

module.exports = bot;
