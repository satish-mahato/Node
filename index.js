const dotenv = require("dotenv");

const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");
dotenv.config();
console.log(process.env.TELEGRAM_BOT);
const bot = new TelegramBot(process.env.TELEGRAM_BOT, { polling: true });
bot.onText("message", (option) => {
  console.log("message receive on the bot ", option);
  bot.sendMessage(option.chat.id, " Thank for message satish");
});
bot.onText("msg", (option) => {
  console.log("message receive on the bot ", option);
  bot.sendMessage(option.chat.id, " Thank for message satish 234");
});
bot.onText(/\/joke/, async (option) => {
  const responce = await axios.get(
    "https://official-joke-api.appspot.com/random_joke"
  );
  console.log(responce.data);
  const setup = responce.data.setup;
  const punchline = responce.data.punchline;
  bot.sendMessage(option.chat.id, setup + "  , " + punchline);
});
