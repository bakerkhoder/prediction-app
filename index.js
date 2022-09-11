/*start Login form */
 const signin=document.querySelector("#signin")
 signin.addEventListener("click",()=>{
 const email =document.querySelector("#email").value
 const password =document.querySelector("#email").value
 const popup =document.querySelector("#popup")
window.localStorage.setItem(email,password)
if(email!="" && password!=""){
    popup.classList.add("none")
  }})
const signup=document.querySelector("#signup")
signup.addEventListener("click",()=>{
const popup =document.querySelector("#popup")
let email =document.querySelector("#existing-email").value
if(localStorage.getItem(email)){
    console.log(email)
    popup.classList.add("none")}
       
else 
 {document.querySelector("#login-error").textContent="invalid email please retry or sign in"}})
/*end Login form */

/* start rendering a random dog image on every load*/
let image=document.querySelector("img")    
const imageapi="https://dog.ceo/api/breeds/image/random"
axios.get(imageapi)
      .then(res => {
        const data = res.data;
         image.src=data.message
      })
/* end rendering a random dog image on every load*/

btn=document.querySelector("button")
btn.addEventListener("click",()=>{
let name =document.querySelector("input").value
let gender=document.querySelector(".gender")
let age=document.querySelector(".age")
let nationality=document.querySelector(".nationality")
const genderapi="https://api.genderize.io/?name=rio".replace("rio", name);
const ageapi="https://api.agify.io/?name=nour".replace("nour", name);
const nationalityapi="https://api.nationalize.io/?name=mohamad".replace("mohamad", name);


/*fetching data for the gender and putting them in their tags */
axios.get(genderapi)
      .then(res => {
        const data = res.data;
         gender.textContent=data.gender
      })

/*fetching data for the age and putting them in their tags */
axios.get(ageapi)
      .then(res => {
        const data = res.data;
         age.textContent=data.age
      })

/*fetching data for the nationality and putting them in their tags */
axios.get(nationalityapi)
      .then(res => {
        const data = res.data;
        let countries=data.country
        nationality.textContent=""
     nationality.textContent=countries[0].country_id+"  "+countries[1].country_id
      })
})


const boredbutton=document.querySelector("#bored")

const boredapi="https://www.boredapi.com/api/activity"
boredbutton.addEventListener("click",()=>{
 
    axios.get(boredapi)
      .then(res => {
         const boredtext=document.querySelector("#bored-text")
        const data = res.data;
        console.log(data.activity)
        boredtext.innerHTML=data.activity

         
      })

    
})

/*https://www.boredapi.com/api/activity */
/*https://api.ipify.org/?format=json */