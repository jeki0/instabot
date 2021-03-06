const puppeteer = require('puppeteer');

const BASE_URL = 'https://instagram.com/';
const TAG_URL = (tag) => `https://www.instagram.com/explore/tags/${tag}/`;

var col_liked = 0;

const instagram = {
    browser: null,
    page: null,
    
    initialize: async () => {
    
        instagram.browser = await puppeteer.launch({
            headless: false
        });
    
        instagram.page = await instagram.browser.newPage();

    },
    
    login: async (username, password) => {
     
        await instagram.page.goto(BASE_URL, {waitUntil: 'networkidle2'});
        
        await instagram.page.waitFor(1000);
        
        let loginButton = await instagram.page.$x('//a[contains(text(), "Вход")]');
        
        //click on the login url
        await loginButton[0].click();
        
        await instagram.page.waitForNavigation({waitUntil: 'networkidle2'});
        
        await instagram.page.waitFor(1000);
        
        //Writing the username and password
        await instagram.page.type('input[name="username"]', username, { delay: 50 });
        await instagram.page.type('input[name="password"]', password, { delay: 50 });
        
        //click the login button
        loginButton = await instagram.page.$x('//button[contains(text(), "Войти")]');
        await loginButton[0].click();
        
        await instagram.page.waitFor(10000);
        await instagram.page.waitFor('a > span[aria-label="Профиль"]');
        
    },
    
    likeTagsProcess: async (tags = []) => {
    
        for(let tag of tags) {
            
            //Got to the tag page
            await instagram.page.goto(TAG_URL(tag), { waitUntil: 'networkidle2'});
            await instagram.page.waitFor(1000);

            let posts = await instagram.page.$$('article > div:nth-child(3) img[decoding="auto"]');
            
            for(let i = 0; i < 24; i++) {

                let post = posts[i];

                //click on the post
                await post.click();

                //wait for the modal to appeat
                await instagram.page.waitFor('span[id="react-root"][aria-hidden="true"]');
                await instagram.page.waitFor(1000);

                let isLikable = await instagram.page.$('span[aria-label="Нравится"]');

                if(isLikable) {

                    await instagram.page.click('span[aria-label="Нравится"]');
                    
                    col_liked++;

                }

                await instagram.page.waitFor(3000);

                //close the modal
                let closeModalButton = await instagram.page.$x('//button[contains(text(), "Закрыть")]');
                await closeModalButton[0].click();

                await instagram.page.waitFor(3000);

            }

            console.log('Количество лайков:' + col_liked);
            
            await instagram.page.waitFor(15000);

        }
    }     
}

module.exports = instagram;