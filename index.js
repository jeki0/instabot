const ig = require('./instagram');

(async () => {
    
    await ig.initialize();
    
    await ig.login('577695@mail.ru','password');
    
    await ig.likeTagsProcess(['java', 'programming', 'coding', 'code', 'index', 'css', 'js', 'php', 'html', 'htm', 'ii', 'ai', 'prog', 'delphi', 'comp', 'robot' ]);
    
    await console.log('End liked');
    
    debugger;
    
})()