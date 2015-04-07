var nodejsWebSocket = require("nodejs-websocket");
var server = nodejsWebSocket.createServer(function(con){
    console.log("a new connection is established");

    var timer = setInterval(function(){
        con.sendText(new Date().toString());
    }, 5000);
    con.on("text", function(msgEvt){
        if (msgEvt === "stop"){
            console.log("stoping the timer");
            clearInterval(timer);
        }
    });
});
server.listen(9090);
console.log("socket server listening or port 9090");
