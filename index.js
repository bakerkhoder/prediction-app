/*showing a dog image in every render */
const imageapi="https://dog.ceo/api/breeds/image/random"
let image=document.querySelector("img")
fetch(imageapi)
	.then(response => response.json())
	.then((data) => {
        console.log(data.message)
        image.src=data.message
    })
	.catch(err => console.error(err));  

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
    age.textContent=data.age})
	.catch(err => console.error(err));


/*fetching data for the nationality and putting them in their tags */
fetch(nationalityapi)
	.then(response => response.json())
	.then((data) => {
        console.log(data.country)
        let countries=data.country
        countries.forEach((item)=>{
            nationality.textContent+=item.country_id+"    "
        })
        })
    .catch(err => console.error(err));
   })

