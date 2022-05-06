const puppeteer = require('puppeteer');

module.exports = class Watcher {

    constructor() {
        this.browser = null;
        this.page = null;
        this.watched = [];
    }

    runBrowser = async () => {
        this.browser = await puppeteer.launch({headless: true}); // Em produção usar modo headless 
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

                return {videoTitle, videoLink};
            
            })
            .then(video => this.watched[0] = {title: video.videoTitle, link: video.videoLink});
            
        return lastVideo;

    }
    checkVideo = async (youtubeChannelUrl) => {

        const video = {videoTitle: '', videoLink: ''};
        
        const lastVideo = await this.getLastVideo(youtubeChannelUrl)
        if (lastVideo.videoTitle === this.watched[0]) return video;
        else {
            video.videoTitle = lastVideo.title;
            video.videoLink = lastVideo.link;
            
            return video;
        }
    }
}
