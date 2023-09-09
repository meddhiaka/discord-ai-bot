# ChatGPT Discord Assistant
We have integrated OpenAI's ChatGPT 3.5-turbo into a designated Discord channel ID, as specified in the .env file, This integration allows us to create a chatbot experience similar to the web version.

# Installation
To set up the ChatGPT Discord ChatBot Assistant, follow these steps:

* Create a Discord Bot with full intents and permissions by visiting the [Discord Developer Portal](https://discord.com/developers/applications).

* Enable Developer mode in your Discord advanced settings.

* Create a Discord server if you haven't already and set up a specific channel, Make note of the channel ID, as you will need it later.

* In the .env file, you will find three variables: TOKEN, OPENAI, and CHANNEL, Copy and paste these variables from the `.env.copy` file into your personal `.env` file.

   * **TOKEN:** This is your Discord Personal Token, which can be found by clicking the reset button on the bot page.

   * **OPENAI:** Obtain the API key from the [OpenAI platform](https://platform.openai.com) by clicking on your profile picture and selecting the `View API Keys` button.

   * **CHANNEL:** Retrieve the channel ID from your Discord Server by switching to developer mode, Simply right click on the specific channel and copy the ID, then paste it into the CHANNEL variable in the .env file.
* Install the project's dependencies using the following command: `npm i`
* Run the project to compile the TypeScript file and activate the bot by Executing the following command: `npm run dev`
* Finally, Test the specific channel by asking any questions or interacting with the bot as needed.

# Useful Links
* [https://discord.com/developers/docs/getting-started#step-1-creating-an-app](https://discord.com/developers/docs/getting-started#step-1-creating-an-app)
* [https://platform.openai.com/docs/api-reference/making-requests](https://platform.openai.com/docs/api-reference/making-requests)
* [https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

# Contact
* You can reach me at this email address: `mohameddhiakb@gmail.com`, and you can also find me on `Instagram` or `X` with the username *@meddhiaka*
