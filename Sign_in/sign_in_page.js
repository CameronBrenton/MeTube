// Send email/name to local storage
//email, name, phone verification
function main(){
  let name = document.querySelector("#email_or_phone");
  let button = document.querySelector(".next_button");

  button.addEventListener("click", function(){
    try{
      if(email_or_phone.value === "") throw "Please enter an email, phone number, or name";
      localStorage.setItem("name", email_or_phone.value);
      window.location.replace("../main_screen/main.html");
    }
    catch(err){
      alert(err);
    }
  })
}
window.addEventListener("load", main)