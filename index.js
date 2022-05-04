require('dotenv').config() ? console.log("In development...") : console.log('production');

const {
    Client,
    Intents
} = require('discord.js');

const app = require('./src/app');
const Time = require('./src/utils/getTime');
const client = new Client({
    intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS]
});

const tokenAccess = process.env.DISCORD_TOKEN_ACCESS;
const channelIdYoutube = process.env.TEST_CHANNEL;


setInterval(() => {

    client.login(tokenAccess)
        .then(() => {
            app(client, channelIdYoutube)
            let time = new Time().getTime();

            // console.log(time);
        });

}, 2000); // 604800000 = 7 days in miliseconds