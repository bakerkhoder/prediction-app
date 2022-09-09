//gender : https://api.genderize.io/?name=rio
//:agge:  https://api.agify.io/?name=nour
//:nationality: https://api.nationalize.io/?name=mohamad
//dog image: https://dog.ceo/api/breeds/image/random
btn=document.querySelector("button")
btn.addEventListener("click",()=>{
let name =document.querySelector("input").value
const genderapi="https://api.genderize.io/?name=rio".replace("rio", name);
console.log(genderapi)
fetch(genderapi)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));
})


document.querySelector(".prediction").classList.add("rred")
