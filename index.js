const { Composer } = require("micro-bot");
const { Telegraf } = require("telegraf");
const dotenv = require("dotenv");
dotenv.config();

const bot = new Composer();

//const bot = new Telegraf(process.env.TOKEN);

bot.on("message", async (context) => {
  const message = context.message.text;

  if (message === "/start") {
    await context.reply(
      "Hello, welcome to the @ready_money_bot we are here to track your expenses and income and help you save money. Before we start, we need to create a new account for you."
    );
  } else {
    context.reply("Please enter your name");
  }
});

module.exports = bot;

//bot.launch();
