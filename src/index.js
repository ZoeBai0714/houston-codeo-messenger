
const messagesURL = `http://10.185.1.104:3000/messages`

document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')
  
  const msgContainer = document.querySelector('#messages')    
  const reFetch = function(){
  //get msg
    Message.all = []
    fetch(messagesURL)
    .then(function(response){
       return response.json()
    })
    .then(function(messages){
        messages.forEach(message => {   
        new Message(message)
        });
     msgContainer.innerHTML = ""
     Message.display()
    })
 }

setInterval(function(){
  reFetch()
}, 500)


//add msg
const submitBtn = document.querySelectorAll('#message_form input')[1]
  
  submitBtn.addEventListener('click', function(e){
    const messageInput = document.querySelectorAll('#message_form input')[0].value
    e.preventDefault()
    fetch(messagesURL, {
      method:"POST",
      headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json'
              },
      body:JSON.stringify({
        'content':messageInput
      })        
    })
    .then(function(response){
     return response.json()
    })
    .then(function(newMsg){
      createMsg = new Message(newMsg)
      createMsg.addMsg(newMsg)
    })
  })



  
})