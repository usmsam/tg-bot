const TelegramBot = require('node-telegram-bot-api')

const token = '7214643228:AAGNIkLhtbV1CRs3knTNn52XcJQydmqWotU'

const bot = new TelegramBot(token, { polling: true })

bot.onText(/\/start/, msg => {
	const chatId = msg.chat.id
	bot.sendMessage(chatId, 'Добро пожаловать! Как я могу помочь?')
})

bot.on('message', msg => {
	const chatId = msg.chat.id
	const text = msg.text

	bot.sendMessage(chatId, `Вы сказали: ${text}`)
})
