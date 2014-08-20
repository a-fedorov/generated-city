var express = require('express');
var app = express();
// Логгирование
var morgan  = require('morgan')
// Компактный вид лога
app.use(morgan('short'));

// Загрузка всех статических файлов из каталога public
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 4000;
app.listen(port, function(){
  console.log('Listening localhost on ' + port + '\n');  
});
