const Watcher = require('./modules/watcher');
const youtubeWatcher = new Watcher();


const app = async (client, channel_id) => {

    client.on("ready", async() => { console.log("Client is ready!");


    await youtubeWatcher.checkVideo('https://www.youtube.com/channel/UCcHWdlaVbzVP083WlPnHiWA/videos')
        .then(response => {
            const channel = client.channels.cache.get(channel_id);
            const {videoLink, videoTitle} = response;

            if(videoLink != undefined && videoTitle != undefined) {
                channel.send(`# Vídeo novo!!\n "${videoTitle}"\n Assista em:\n${videoLink}`);
            }
        })
    })
}

module.exports = app;