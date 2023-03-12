var http = require('http');
var app = require('./config/express.js')

require('./config/database.js')('localhost/alurapic');

http.createServer(app).listen(8080, function(){
    
    console.log(`Servidor escutando em http://localhost:${8080}`) 
})

 