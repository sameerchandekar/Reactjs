var path = require('path');
var config = {
entry : [
'./src/app'
],
output : {
    path: __dirname,
    filename: 'app.js',
    publicPath: '/js/'
},
module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'src')
    }]
}

}
module.exports = config;
