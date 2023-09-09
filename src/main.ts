import Discord from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new Discord.Client({
    intents: [
        3276799
    ]
})

client.on('ready', () => {
  console.log(`The bot ${client.user?.tag} is ready!`)
})

client.on('messageCreate', (message) => {
  if (message.author.bot) return
  message.reply({
    content: 'im alive!'
  })
})

client.login(process.env.TOKEN)

