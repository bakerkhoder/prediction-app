//gender : https://api.genderize.io/?name=rio
//:agge:  https://api.agify.io/?name=nour
//:nationality: https://api.nationalize.io/?name=mohamad
//dog image: https://dog.ceo/api/breeds/image/random
btn=document.querySelector("button")
btn.addEventListener("click",()=>{
let name =document.querySelector("input").value
let gender=document.querySelector(".gender")
const genderapi="https://api.genderize.io/?name=rio".replace("rio", name);
const ageapi="https://api.agify.io/?name=nour".replace("rio", name);
const nationalityapi="https://api.nationalize.io/?name=mohamad".replace("rio", name);

/*fetching data for the gender and putting them in their tags */
fetch(genderapi)
	.then(response => response.json())
	.then((data) => {
        console.log(data)
    gender.textContent=data.gender})
	.catch(err => console.error(err));

/*fetching data for the age and putting them in their tags */
fetch(ageapi)
	.then(response => response.json())
	.then((data) => {
        console.log(data)
    gender.textContent=data.age})
	.catch(err => console.error(err));


/*fetching data for the age and putting them in their tags */
fetch(nationalityapi)
	.then(response => response.json())
	.then((data) => {
        console.log(data)
    gender.textContent=data.nationality})
	.catch(err => console.error(err));    



})


document.querySelector(".prediction").classList.add("rred")
