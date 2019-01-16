const ig = require('./instagram2');
const pass = require('./password_user');

var current_user = 'ankit_patel3692';
var prev_user = 'geekonics';
var attempt = 0;

(async () => {
    
    await ig.initialize();
    
    await ig.login('577695@mail.ru', pass.password);
    
    while(true) {
        if(!attempt) {
            await ig.likeProcess(current_user);
        }
        
        next_user = await ig.goNextUser(current_user, attempt);
        
        await console.log(next_user[0].close_user);
        
        if(!next_user[0].close_user) {
            current_user = next_user[0].curent_user;
            prev_user = current_user;
            attempt = 0;
        } else {
            current_user = prev_user;
            attempt++;
        }
    }
    
    
    
    await console.log('End liked');
    
    debugger;
    
})()