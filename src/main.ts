import Discord from 'discord.js'
import { OpenAI } from 'openai'
import dotenv from 'dotenv'
dotenv.config()

const client = new Discord.Client({
    intents: [
        3276799
    ]
})

const openai = new OpenAI({
  apiKey: process.env.OPENAI
})

client.on('ready', () => {
  console.log(`The bot ${client.user?.tag} is ready!`)
})

const prefix = '!'
const channels = [process.env.CHANNEL]

client.on('messageCreate', async (message) => {

  if (message.author.bot) return
  if (message.content.startsWith(prefix)) return
  if (!channels.includes(message.channelId)) return
  const res = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'chatgpt is a friendly chatbot.'
      },
      {
        role: 'user',
        content: message.content
      }
    ]
  }).catch(err => {
    console.error('OpenAI Error: ', err)
  })
  message.reply(res.choices[0].message.content)
})

client.login(process.env.TOKEN)

