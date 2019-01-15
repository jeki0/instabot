const ig = require('./instagram2');
const pass = require('./password_user');

(async () => {
    
    await ig.initialize();
    
    await ig.login('577695@mail.ru', pass.password);
    
    //await ig.likeProcess('spectrum.solar');
    
    await console.log('С этим человеком закончили, го дальше');
    
    await ig.goNextUser('spectrum.solar');
    
    await console.log('End liked');
    
    debugger;
    
})()