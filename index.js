//gender : https://api.genderize.io/?name=rio
//:agge:  https://api.agify.io/?name=nour
//:nationality: https://api.nationalize.io/?name=mohamad
//dog image: https://dog.ceo/api/breeds/image/random
btn=document.querySelector("button")
btn.addEventListener("click",()=>{
let name =document.querySelector("input").value
let gender=document.querySelector(".gender")
const genderapi="https://api.genderize.io/?name=rio".replace("rio", name);
fetch(genderapi)
	.then(response => response.json())
	.then((data) => {
        console.log(data)
    gender.textContent=data.gender})
	.catch(err => console.error(err));

//gender.textContent=dta    
})


document.querySelector(".prediction").classList.add("rred")
