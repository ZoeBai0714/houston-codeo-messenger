class Message{
    constructor(message){
        this.message = message
        Message.all.push(message)
    }

    static display(){
        const msgUl = document.querySelector('#messages')
        Message.all.forEach(function(msg){
            if(msg.content){
                const li = document.createElement('li')
                li.innerText = msg.content 
                msgUl.appendChild(li)
                //console.log(msg.content) 
            }

        })
    }


    //add msg
    addMsg(newMsg){
        const msgUl = document.querySelector('#messages')
        const li = document.createElement('li')
        li.innerText = newMsg.content 
        msgUl.appendChild(li)
    }
}

Message.all = []
