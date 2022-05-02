const puppeteer = require('puppeteer');

module.exports = class {
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

    getLastVideo = async () => {

        await this.page.waitForTimeout(3000);

        const lastVideo = await this.page.evaluate(() => {

                const videoTitle = document.querySelector('#video-title').innerHTML;
                const videoLink = document.querySelector('#video-title').href;
              
                return {
                    videoTitle,
                    videoLink
                };
            })
            .then(video => this.watched[0] = video);

        return lastVideo;

    }

    checkVideo = async () => {

        await this.getLastVideo().then(res => {
            console.log(res.videoTitle);
            console.log(res.videoLink);

            if (res.videoTitle === this.watched[0]) return;


        });


    }
}