//FRONT END

//This is the socket for the front end.....
var socket = io.connect('http://localhost:4000');


//Query DOM

var message = document.getElementById('message'),
handle = document.getElementById('handle'),
btn = document.getElementById('send'),
output = document.getElementById('output');


//Emit events


btn.addEventListener('click', function(){
  //Emiting chat message to server
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });

})



//Listen for addEventListener


socket.on('chat', function(data){
  console.log('Hey.')
  output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
})
