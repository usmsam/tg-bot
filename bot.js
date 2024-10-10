// index.js
const express = require('express')
const TelegramBot = require('node-telegram-bot-api')

// Замените 'YOUR_TELEGRAM_BOT_TOKEN' на токен вашего бота
const token = '7214643228:AAFiUCOeloGJawNnDuzHxgqZ2K-eMHIvhZw'
const bot = new TelegramBot(token)

// Создание Express приложения
const app = express()
const PORT = process.env.PORT || 3000

// Middleware для обработки JSON
app.use(express.json())

// Обработка вебхука
app.post('/api/webhook', (req, res) => {
	const update = req.body

	// Проверка наличия сообщения
	if (update.message) {
		const chatId = update.message.chat.id
		const text = update.message.text

		// Обработка команды /start
		if (text === '/start') {
			bot.sendMessage(chatId, 'Добро пожаловать! Я бот на Express с вебхуком.')
		} else {
			bot.sendMessage(chatId, `Вы написали: ${text}`)
		}
	}

	// Отправляем ответ Telegram
	res.sendStatus(200)
})
app.post('/', (req, res) => {
	const update = req.body

	// Проверка наличия сообщения
	if (update.message) {
		const chatId = update.message.chat.id
		const text = update.message.text

		// Обработка команды /start
		if (text === '/start') {
			bot.sendMessage(chatId, 'Добро пожаловать! Я бот на Express с вебхуком.')
		} else {
			bot.sendMessage(chatId, `Вы написали: ${text}`)
		}
	}

	// Отправляем ответ Telegram
	res.sendStatus(200)
})

// Запуск сервера
app.listen(PORT, () => {
	console.log(`Сервер запущен на http://localhost:${PORT}`)
})
