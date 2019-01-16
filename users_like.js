const ig = require('./instagram2');
const pass = require('./password_user');

var current_user = 'science.accessories';
var prev_user = 'az_handmades';
var attempt = 1;

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
            prev_user = current_user;
            current_user = next_user[0].curent_user;
            attempt = 0;
        } else {
            current_user = prev_user;
            attempt++;
        }
        
        await console.log('current:' + current_user);
        await console.log('prev:' + prev_user);
        
    }
    
    
    
    await console.log('End liked');
    
    debugger;
    
})()