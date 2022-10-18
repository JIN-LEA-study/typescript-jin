const path = require('path');

module.exports = {
    mode:"development",
    // 시작점
    entry:{
        main:'./src/app.js',
        // main2:'./src/app2.js'
    },
    // 2개의 인자, path(output 디렉토리의 절대경로)와 filename
    output:{
        path: path.resolve('./dist'),
        filename:'[name].js',
        // filename:'main2.js'
    }
}