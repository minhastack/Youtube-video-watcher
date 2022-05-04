const RandomMessage = require('./modules/randomMessage');
const Watcher = require('./modules/watcher');
const youtubeWatcher = new Watcher();

const app = async (client, channel_id) => {


    client.on("ready", async () => {

        console.log("Client is ready!");

        const randomPhraseBot = new RandomMessage().getRandomMessage();

        await youtubeWatcher.checkVideo('https://www.youtube.com/channel/UCcHWdlaVbzVP083WlPnHiWA/videos')
            .then(async response => {

                const channel = await client.channels.cache.get(channel_id);

                if (response.videoLink != undefined && response.videoTitle != undefined) {
                    await channel.send(`:shushing_face: @ever yone, ${randomPhraseBot}\n"${response.videoTitle}"\nSe vc quiser ficar iterado mesmo da fofoca, é só clicar em:${response.videoLink}`);
                }

            }).then(() => {
                youtubeWatcher.browser.close();
            })
    })
}

module.exports = app;