const ig = require('./instagram2');
const pass = require('./password_user');

var current_user = 'g.kostakes';
var prev_user = 'g.kostakes';

var attempt = 0;
var likes = 263;

(async () => {
    
    await ig.initialize();
    
    await ig.login('577695@mail.ru', pass.password);
    
    while(true) {
        if(prev_user != current_user) {
            like_for_one = -1;
            like_for_one = await ig.likeProcess(current_user, likes);
            console.log(like_for_one + '  -  ' + likes);
            if(like_for_one != likes) {
                attempt = 0;
                likes = like_for_one;
            }
        }
        
        await console.log('---------------');
        
        attempt = attempt + getRandomInt(0,4);
        next_user = await ig.goNextUser(current_user, attempt);
        
        if(!next_user[0].close_user) {
            prev_user = current_user;
            current_user = next_user[0].curent_user;
        } else {
            current_user = prev_user;
            attempt++;
        }
        
    }
    
    
    
    await console.log('End liked');
    
    debugger;
    
})()

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}