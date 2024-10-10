import bodyParser from 'body-parser'
import express, { Request, Response } from 'express'
import TelegramBot, { Message } from 'node-telegram-bot-api'

const app = express()

app.use(bodyParser.json())

const token: string = '7214643228:AAFiUCOeloGJawNnDuzHxgqZ2K-eMHIvhZw'

const bot = new TelegramBot(token)

const webhookUrl: string =
	'https://tg-bot-git-main-usmsams-projects.vercel.app/'

bot.setWebHook(webhookUrl).then(() => {
	console.log('Webhook установлен на ' + webhookUrl)
})

app.post('/', (req: Request, res: Response) => {
	const update = req.body
	bot.processUpdate(update) // Telegram-бот обрабатывает обновление
	res.sendStatus(200) // Возвращаем статус 200 OK
})

bot.onText(/\/start/, (msg: Message) => {
	const chatId = msg.chat.id
	bot.sendMessage(chatId, 'Добро пожаловать! Как я могу помочь?')
})

// Обработка любых сообщений
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
