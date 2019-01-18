const ig = require('./js/instagram');
const pass = require('./js/password_user');

(async () => {
    
    await ig.initialize();
    
    await ig.login(pass.email, pass.password);
    
    await ig.likeTagsProcess(['java', 'programming', 'coding', 'code', 'index', 'css', 'js', 'php', 'html', 'htm', 'ii', 'ai', 'prog', 'delphi', 'comp', 'robot' ]);
    
    await console.log('End liked');
    
    debugger;
    
})()