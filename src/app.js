const RandomMessage = require('./modules/randomMessage');
const Watcher = require('./modules/watcher');
const youtubeWatcher = new Watcher();
const Time = require('./utils/getTime');

const app = async (client, channel_id) => {

    client.on("ready", async () => {
        console.log("Client is ready!");

        const randomPhraseBot = new RandomMessage().getRandomMessage();

        await youtubeWatcher.checkVideo('https://www.youtube.com/channel/UCcHWdlaVbzVP083WlPnHiWA/videos')
            .then(async response => {

                const channel = await client.channels.cache.get(channel_id);
                const admChannel = await client.channels.cache.get(process.env.ADM_CHANNEL)
                if (response.videoLink != undefined && response.videoTitle != undefined) {
                    await channel.send(`:shushing_face: @everyone, ${randomPhraseBot}\n"${response.videoTitle}"\nSe tiver achando que a fofoca é mentira, pode clicar em:${response.videoLink} e ver com seus próprios olhos! `);
                }

            }).then(() => {

                youtubeWatcher.browser.close();
                const time = new Time().getTime();
                console.log(`Bot "fofoqueiro" (Youtube Watcher) tabalhou em: ${time}`);

            }).catch(e => console.error(e, ': response error'));
    })
}

module.exports = app;
