require('dotenv').config() ? console.log("In development...") : console.log('production');

const { Client, Intents } = require('discord.js');
const app = require('./src/app');
const client = new Client({intents: [Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILDS]});
const tokenAccess = process.env.DISCORD_TOKEN_ACCESS;
const channelIdYoutube = process.env.TEST_CHANNEL;

client.login(tokenAccess)
    .then(async () => app(client, channelIdYoutube));
