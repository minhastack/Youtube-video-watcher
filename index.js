const dotenv = require("dotenv").config();
const enviromentChecker = require('./src/utils/enviromentChecker');
const inProduction = enviromentChecker(dotenv);

const {resolve} = require('path');

const {Client,Intents} = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS]});
const app = require('./src/app');
const tokenAccess = process.env.DISCORD_TOKEN_ACCESS;


if(inProduction){
    console.log('Em produção')

    setInterval(() => {client.login(tokenAccess)
        .then(() => app(client, process.env.VIDEO_PROMOTION_CHANNEL));
    }, 3600000); // 3600000 = 1 hour in miliseconds

}else{
    console.log('Em desenvolvimento')
    // DEVELOPMENT
    setInterval(() => {client.login(tokenAccess)
        .then(() => app(client, process.env.TEST_CHANNEL));
    }, 2000); 
}
