function main(){

  //Form Validation 
  let button = document.querySelector(".next_button");
  let button2 = document.querySelector("#show_password");

  button.addEventListener("click", function(){
      if(first_name.value === ""){ alert("First name cannot be empty");
      } else if(last_name.value === ""){ alert("Last name cannot be empty");
      } else if(email_address.value === ""){ alert("Email address cannot be empty");
      } else if(password.value === ""){ alert("Password boxes cannot be empty");
      } else if(pass_confirm.value === ""){ alert("Password boxes cannot be empty");
      } else if(password.value != pass_confirm.value){ alert("Passwords must match");
      } else{window.location.replace("../main_screen/main.html")};
  })

  //Show Password
  button2.addEventListener("click", function(){
    if(button2.checked === true){
      password.setAttribute("type", "text");
      pass_confirm.setAttribute("type", "text");
    }else{
      password.setAttribute("type", "password");
      pass_confirm.setAttribute("type", "password");
    }
  })
}
window.addEventListener("load", main);
