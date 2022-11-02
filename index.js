const { Composer } = require("micro-bot");
const dotenv = require("dotenv");
dotenv.config();

const bot = new Composer();

bot.on("message", (context) => {
  const message = context.message.text;
  const chatId = context.message.chat.id;

  if (message === "/start") {
    context.reply(
      "Hello, welcome to the @ready_money_bot we are here to help you track your expenses and income"
    );
  }
});

module.exports = bot;
