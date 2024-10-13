const express = require('express')
const TelegramBot = require('node-telegram-bot-api')

// Замените 'YOUR_TELEGRAM_BOT_TOKEN' на токен вашего бота
const token = '7214643228:AAFiUCOeloGJawNnDuzHxgqZ2K-eMHIvhZw'
const bot = new TelegramBot(token)

// Создание Express приложения
const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())

app.post('/', (req, res) => {
	const update = req.body
	console.log(req.body)
	if (update.message) {
		const chatId = update.message.chat.id
		const text = update.message.text

		if (text === '/start') {
			bot.sendMessage(chatId, 'Добро пожаловать! Я бот на Express с вебхуком.')
		} else {
			bot.sendMessage(chatId, `Вы написали: ${text}`)
		}
	}
	res.sendStatus(200)
})

app.listen(PORT, () => {
	console.log(`Сервер запущен на http://localhost:${PORT}`)
})
