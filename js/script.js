let getData = async (city) => {
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2586aa5d0dd8d6f62c17c705f4004f62&units=metric`;
    try {
        let req = await fetch(URL);
        if (req.ok) {
            let data = await req.json();
            writeData(data);
            input.value = ""
        } else {
            alert("City not found");
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
};
let daysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
setInterval(() => {
  let date = new Date()
document.querySelector(".tme").textContent = `${date.getHours()<10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}:${date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds()} - ${daysWeek[date.getDay()]}, ${date.getDate()<10?"0"+date.getDate():date.getDate()} ${months[date.getMonth()]}`
}, 1000);  
let writeData = (data) => {
  document.querySelector(`.maxTemp`).textContent = `${Math.floor(data.main.temp_max)}°`
  document.querySelector(`.minTemp`).textContent = `${Math.floor(data.main.temp_min)}°`
  document.querySelector(`.humd`).textContent = `${data.main.humidity}%`
  document.querySelector(`.clod`).textContent = `${data.clouds.all}%`
  document.querySelector(`.windSpeed`).textContent = `${Math.floor(data.wind.speed)}km/h`
  document.querySelector(`.mainTemp`).textContent = `${Math.floor(data.main.temp)}°`
  document.querySelector(`.cityName`).textContent = `${data.name}`
  document.querySelector(".weatherIcon").src = "https://openweathermap.org/img/w/${data.weather[0].icon}.png"  
}
document.addEventListener(`DOMContentLoaded`, ()=>{
    getData(`Fergana`)
})
let input = document.querySelector(`input`)
let form = document.querySelector(`form`)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let city = input.value.trim();
    if (city) {
        getData(city);
    }
})