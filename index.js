require('dotenv').config() ? console.log("In development...") : console.log('production');
const {resolve} = require('path');

const {Client,Intents} = require('discord.js');
const app = require(resolve('src', 'app'));
const client = new Client({intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS]});

const tokenAccess = process.env.DISCORD_TOKEN_ACCESS;

const channelIdYoutube = process.env.TEST_CHANNEL; 
// const channelIdYoutube = process.env.VIDEO_PROMOTION_CHANNEL;

setInterval(() => {
    
    client.login(tokenAccess).then(() => app(client, channelIdYoutube));

}, 2000); // 3600000 = 1 hour in miliseconds
