//FRONT END

//This is the socket for the front end.....
var socket = io.connect('http://localhost:4000');


//Query DOM

var message = document.getElementById('message'),
handle = document.getElementById('handle'),
btn = document.getElementById('send'),
output = document.getElementById('output'),
feedback = document.getElementById('feedback');


//Emit events


btn.addEventListener('click', function(){
  //Emiting chat message to server
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });

})

message.addEventListener('keypress', function(){
  socket.emit('typing', {
    handle: handle.value
  })
})






//Listen for addEventListener

socket.on('typing', function(data){
  console.log('typing!!!!')
  feedback.innerHTML = '<p><em>' + data.handle + 'is typing a message... </em></p>';
})

socket.on('chat', function(data){
  feedback.innerHTML = ''
  output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
})
