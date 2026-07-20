const form =document.querySelector("form");
const inp1=document.querySelector("#name");
const inp2=document.querySelector("#email");
const users = document.querySelector(".users");


form.addEventListener("submit",(events) => {


    event.preventDefault();//not relodes page after every submits
    let name =inp1.value;
    let email =inp2.value;
    users.innerHTML += `<div class="usercard">
        <div class="imgbox">
          <img
            src="https://plus.unsplash.com/premium_photo-1783724597271-e283bf48affc?q=80&w=1156&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div class="text">
          <h3>Name:${name}</h3>
          <h3>Email:${email}</h3>
        </div>
      </div>`

    form.reset();//resets form back 



})