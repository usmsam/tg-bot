import TelegramBot, { Message } from 'node-telegram-bot-api'

// Типизируйте ваш токен
const token: string = '7214643228:AAGNIkLhtbV1CRs3knTNn52XcJQydmqWotU'

// Создайте экземпляр бота, используя типы
const bot = new TelegramBot(token, { polling: true })

// Типизация на событии /start
bot.onText(/\/start/, (msg: Message) => {
	const chatId: number = msg.chat.id
	bot.sendMessage(chatId, 'Добро пожаловать! Как я могу помочь?')
})

// Типизация для обработки сообщений
bot.on('message', (msg: Message) => {
	const chatId: number = msg.chat.id
	const text: string | undefined = msg.text
	bot.getUpdates().then(console.log)

	if (text) {
		bot.sendMessage(chatId, `Вы сказали: ${text}`)
	}
})
