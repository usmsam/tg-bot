import bodyParser from 'body-parser'
import express, { Request, Response } from 'express'
import TelegramBot, { Message } from 'node-telegram-bot-api'

const app = express()

// Используйте bodyParser для обработки JSON
app.use(bodyParser.json())

const token: string = 'YOUR_TELEGRAM_BOT_TOKEN'
const bot = new TelegramBot(token)

// Укажите URL для вебхука
const webhookUrl: string = 'tg-bot-gules.vercel.app/api/bot'

// Установите вебхук
bot.setWebHook(webhookUrl).then(() => {
	console.log('Webhook установлен на ' + webhookUrl)
})

// Обработка входящих обновлений от Telegram
app.post('/api/bot', (req: Request, res: Response) => {
	const update = req.body // Получите данные обновления
	bot.processUpdate(update) // Обработайте обновление
	res.sendStatus(200) // Верните статус 200 OK
})

// Обработка команды /start
bot.onText(/\/start/, (msg: Message) => {
	const chatId = msg.chat.id
	bot.sendMessage(chatId, 'Добро пожаловать! Как я могу помочь?')
})

// Обработка любых других сообщений
bot.on('message', (msg: Message) => {
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
