"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
console.log('Bot is live! )');
// Типизируйте ваш токен
const token = '7214643228:AAGNIkLhtbV1CRs3knTNn52XcJQydmqWotU';
// Создайте экземпляр бота, используя типы
const bot = new node_telegram_bot_api_1.default(token, { polling: true });
// Типизация на событии /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Добро пожаловать! Как я могу помочь?');
});
// Типизация для обработки сообщений
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    bot.getUpdates().then(console.log);
    if (text) {
        bot.sendMessage(chatId, `Вы сказали: ${text}`);
    }
});
