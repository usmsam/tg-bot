const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

// Замените 'YOUR_TELEGRAM_BOT_TOKEN' на токен вашего бота
const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true }); // Включаем опрос

// Создание Express приложения
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для обработки JSON
app.use(express.json());

// Обработка сообщений
bot.on('message', (msg) => {
	const chatId = msg.chat.id;
	const text = msg.text;

	// Обработка команды /start
	if (text === '/start') {
		bot.sendMessage(chatId, 'Добро пожаловать! Я бот на Express с опросом.');
	} else {
		bot.sendMessage(chatId, `Вы написали: ${text}`);
	}
});

// Запуск сервера
app.listen(PORT, () => {
	console.log(`Сервер запущен на http://localhost:${PORT}`);
});
