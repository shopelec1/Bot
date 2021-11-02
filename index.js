const TG_Bot = require('node-telegrm-bot-api')

const TOKEN = '2065572942:AAF5bgFxR4phDBQXvwFI9fcQ9-F7eQs6sJM'

const bot = new TG_Bot(TOKEN, {polling: true})

bot.on('message', msg =>{
	bot.sendMessage(msg.chat.id, 'Bot says:"Hi, $msg.from.first_name"')
})