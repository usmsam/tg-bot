import bodyParser from 'body-parser'
import express from 'express'
import TelegramBot from 'node-telegram-bot-api'

const app = express()

// Используйте bodyParser для обработки JSON
app.use(bodyParser.json())

const token = '7214643228:AAFiUCOeloGJawNnDuzHxgqZ2K-eMHIvhZw'
const bot = new TelegramBot(token)

// Укажите URL для вебхука
const webhookUrl = 'tg-bot-gules.vercel.app/api/bot'

// Установите вебхук
bot.setWebHook(webhookUrl).then(() => {
	console.log('Webhook установлен на ' + webhookUrl)
})

// Обработка входящих обновлений от Telegram
app.post('/api/bot', (req, res) => {
	const update = req.body // Получите данные обновления
	bot.processUpdate(update) // Обработайте обновление
	res.sendStatus(200) // Верните статус 200 OK
})

// Обработка команды /start
bot.onText(/\/start/, msg => {
	const chatId = msg.chat.id
	bot.sendMessage(chatId, 'Добро пожаловать! Как я могу помочь?')
})

// Обработка любых других сообщений
bot.on('message', msg => {
	const chatId = msg.chat.id
	const text = msg.text

	if (text) {
		bot.sendMessage(chatId, `Вы сказали: ${text}`)
	}
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
	console.log(`Сервер запущен на порту ${PORT}`)
})
