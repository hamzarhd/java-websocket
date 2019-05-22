var ws;

function connect() {
    var username = document.getElementById("username").value;
    
    var host = document.location.host;
    var pathname = document.location.pathname;
    
    ws = new WebSocket("wss://" +host  + pathname + "chat/" + username);
    // ws= new WebSocket("wss://java-web-socket.herokuapp.com/chat/" + username);
    console.log(host+pathname);

    ws.onmessage = function(event) {
    var log = document.getElementById("log");
        console.log(event.data);

        var message = JSON.parse(event.data);
        log.innerHTML += message.from + " : " + message.content + "\n";
    };
}

function send() {
    var content = document.getElementById("msg").value;
    var user = document.getElementById("user").value;
    var json = JSON.stringify({
        "content":content,
        "to":user
    });

    ws.send(json);
}