const puppeteer = require('puppeteer');

module.exports = class Watcher {

    constructor() {
        this.browser = null;
        this.page = null;
        this.watched = [];
    }

    runBrowser = async () => {
        this.browser = await puppeteer.launch({
            headless: true
        });

        this.page = await this.browser.newPage();

    }

    createPage = async url => {
        await this.runBrowser();
        await this.page.goto(url);
    }

    getLastVideo = async youtubeChannelUrl => {
        await this.createPage(youtubeChannelUrl)
        await this.page.waitForTimeout(3000);

        const lastVideo = await this.page.evaluate(() => {

                const videoTitle = document.querySelector('#video-title').innerHTML;
                const videoLink = document.querySelector('#video-title').href;

                return {
                    videoTitle,
                    videoLink
                };
            })
            .then(video => this.watched[0] = video.videoLink);

        return lastVideo;

    }

    checkVideo = async (youtubeChannelUrl) => {

        const lastVideo = await this.getLastVideo(youtubeChannelUrl)
        if (lastVideo.videoTitle === this.watched[0]) return;

        else return {
            videoTitle: lastVideo.videoTitle,
            videoLink: lastVideo.videoLink
        }

    }

  



}

