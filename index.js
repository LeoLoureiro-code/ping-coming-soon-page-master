const form = document.getElementById('form')
const btn = document.getElementById('btn')
const input = document.getElementById('email')
const errorMsj =  document.getElementById('error-msj')

//Email validation pattern
const validation = /^[^]+@[^]+\.[a-z]{2,3}$/

form.addEventListener("click", function(event){
    event.preventDefault()
  });

const validate = () =>{
    if(!input.value.match(validation) || input.value.length === 0){
        input.removeAttribute('id')
        input.setAttribute('id', 'email-error')
        input.placeholder ="example@email.com"
        errorMsj.style.display = "block"
    }else{
        input.removeAttribute('id')
        input.setAttribute('id', 'email')
        input.placeholder ="Your email address"
        errorMsj.style.display = "none"
        input.value =""
    }
}

btn.addEventListener('click', validate)