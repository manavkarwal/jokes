const apiBody = document.querySelector(".api_body");
const fetchElement = document.getElementById("fetchJoke");
const apiUrl = "https://icanhazdadjoke.com/";



 getData =  async () => {
    try{
 const res = await fetch(apiUrl, {headers:{accept: "application/json", },})
 const data =  await res.json();
 apiBody.innerHTML = data.joke;
}catch(error) { apiBody.innerHTML = "sorry";}

 }
getData();

fetchElement.addEventListener("click", getData);
