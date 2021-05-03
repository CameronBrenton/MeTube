function main(){
  
  //Utilize local storage to pull and push comments in the comment section
  //Pull the sign in name/email from local storage to display as Commenter's ID

  let template = document.querySelector("#template");
  let name_input = localStorage.getItem("name");
  let comment_input = document.querySelector("#comment_input");
  let output = document.querySelector("#output");
  let button = document.querySelector("#post_button");

  let message_string = localStorage.getItem("messages");
  let messages;
  if (message_string === null){
    messages = []
  }else{
    messages = JSON.parse(message_string);
  }

  for(let message of messages){
    let copy = template.content.cloneNode(true);
    let n = copy.querySelector('.name_area');
    n.innerText = message["name"];
    let c = copy.querySelector('.comment_area');
    c.innerText = message["content"];
    output.appendChild(copy);
  }


  

  button.addEventListener("click", function(){

    let current_messages_string = localStorage.getItem("messages");
    let current_messages;
    
    if(current_messages_string == null){
      current_messages = [];
    }else{
      current_messages = JSON.parse(current_messages_string);
    }
    let message_object = {
      "name" : name_input,
      "content" : comment_input.value,

    }
    current_messages.push(message_object);
    localStorage.setItem("messages", JSON.stringify(current_messages));

    let copy = template.content.cloneNode(true);
    let n = copy.querySelector('.name_area');
    n.innerText = name_input;
    let c = copy.querySelector('.comment_area');
    c.innerText = comment_input.value;
    output.appendChild(copy);


  })
}

window.addEventListener('load', main);
