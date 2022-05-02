require('dotenv').config() ? console.log("development") : console.log('production');
const { Client, Intents } = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.DIRECT_MESSAGES]});

const Watcher = require('./src/modules/watcher');

const app = require('./src/app');
const watcher = new Watcher();

const teste = async ()=>{
    await watcher.createPage('https://www.youtube.com/channel/UCcHWdlaVbzVP083WlPnHiWA/videos');
    await watcher.checkVideo().then(()=> {
        watcher.watched.pop() // TODO: Remover essa linha, ela só está controlando pra que o bot n fique preso; 
        watcher.browser.close()})
}
 teste();
// const token = process.env.TOKEN;
// client.login(token).then(()=>{
    
// });