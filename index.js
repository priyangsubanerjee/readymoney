const { Composer } = require("micro-bot");
const dotenv = require("dotenv");
dotenv.config();

const bot = new Composer();

bot.on("message", (msg) => {
  console.log(msg);
  msg.reply("Hello World");
});

module.exports = bot;
