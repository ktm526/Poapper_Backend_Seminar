const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.end()
    }
    else if(req.url == '/time'){
        var time = new Date();
    
        res.write(time.getFullYear()+'-'+time.getMonth()+'-'+time.getDate()+' '+time.getHours()+':'+time.getMinutes()+':'+time.getSeconds());
        res.end()

    }
    

}).listen(8080, () => {
    console.log("server is running on 8080 port.");
})
