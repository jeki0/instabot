const ig = require('./instagram');
const pass = require('./password_user');

(async () => {
    
    await ig.initialize();
    
    await ig.login('577695@mail.ru', pass.password);
    
    await ig.likeTagsProcess(['java', 'programming', 'coding', 'code', 'index', 'css', 'js', 'php', 'html', 'htm', 'ii', 'ai', 'prog', 'delphi', 'comp', 'robot' ]);
    
    await console.log('End liked');
    
    debugger;
    
})()