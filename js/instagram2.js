const puppeteer = require('puppeteer');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var nextMan = 0;
var accountsInfo = 0;
var likeInfo = 0;

rl.on('line', (input) => {
    if (input == 'next') {
        console.log('-> change account');
        nextMan = 1;
    }
    if (input == 'info') {
        console.log('-> accounts = ' + accountsInfo);
        console.log('-> likes = ' + likeInfo);
    }
    if (input == 'help') {
        console.log('-> next - for change account instagram');
        console.log('-> info - check info');
    }
});


const BASE_URL = 'https://instagram.com/';
const TAG_URL = (tag) => `https://www.instagram.com/explore/tags/${tag}/`;

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
        
        await instagram.page.waitFor(2000);
        
        let loginButton = await instagram.page.$x('//a[contains(text(), "Вход")]');
        
        //click on the login url
        await loginButton[0].click();
        
        await instagram.page.waitForNavigation({waitUntil: 'networkidle2'});
        
        await instagram.page.waitFor(5000);
        
        //Writing the username and password
        await instagram.page.type('input[name="username"]', username, { delay: 50 });
        await instagram.page.type('input[name="password"]', password, { delay: 50 });

        //click the login button
        loginButton = await instagram.page.$x('//div[contains(text(), "Войти")]');
        await loginButton[0].click();

        await instagram.page.waitFor(3000);
        await instagram.page.waitFor('a > span[aria-label="Профиль"]');
        
    },
    
    likeProcess: async (curent_user, likes, colAcc) => {
        
        await instagram.page.goto('https://www.instagram.com/' + curent_user + '/', { waitUntil: 'networkidle2'});
        await instagram.page.waitFor(1000);
        
        
        accountsInfo = colAcc;
        
        //Начинаем лайкать
        let posts = await instagram.page.$$('img[decoding="auto"]');

        for(let i = 0; i < 24; i++) {

            if (nextMan == 1) {
                i = 100;
                nextMan = 0;
            }
            
            let post = posts[i];
            
            likeInfo = likes;
            
            if(!post) {
                
                return likes;
            
            }
            
            //click on the post
            await post.click();

            //wait for the modal to appeat
            await instagram.page.waitFor('span[id="react-root"][aria-hidden="true"]');
            await instagram.page.waitFor(1000);

            
            let isWasLiked = await instagram.page.$('span[aria-label="Не нравится"]');

            if(isWasLiked) {

                return likes;    
                
            }
            
            
            let isLikable = await instagram.page.$('span[aria-label="Нравится"]');

            if(isLikable) {

                await instagram.page.click('span[aria-label="Нравится"]');

            }

            await instagram.page.waitFor(3000);

            //close the modal
            let closeModalButton = await instagram.page.$x('//button[contains(text(), "Закрыть")]');
            await closeModalButton[0].click();

            await instagram.page.waitFor(3000);

            likes++;
        }

        await instagram.page.waitFor(5000);
        
        return likes;
    },
    
    goNextUser: async (curent_user, attempt_number) => {
        
        //go to new user
        await instagram.page.goto('https://www.instagram.com/' + curent_user + '/', { waitUntil: 'networkidle2'});
        await instagram.page.waitFor(2000);
        
        //click followers
        let loginButton = await instagram.page.$$('a[href="/' + curent_user + '/followers/"]');
        
        //close user or not
        if(loginButton[0]) {
            await loginButton[0].click();

            await instagram.page.waitFor(2000);
            let element = await instagram.page.$$("a[title]");

            let link_user = element[attempt_number];
            
            return [{ curent_user: await instagram.page.evaluate(link_user => link_user.textContent, link_user), close_user: 0}];
        } else {
            return [{ curent_user:'', close_user: 1}];
        }
        
    }
    
}

module.exports = instagram;