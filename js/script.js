let getData = async (city) => {
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2586aa5d0dd8d6f62c17c705f4004f62&units=metric`;
    try {
        let req = await fetch(URL);
        if (req.ok) {
            let data = await req.json();
            writeData(data);
        } else {
            alert("City not found");
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
};
let daysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let header = document.querySelector(`.header`)
let writeData = (data) => {
    let date = new Date()
    header.innerHTML = `<div class="weather">
            <div class="flex">
              <p class="formP">Weather Details...</p>
              <div class="drizzle">
                <p class="drizzleP">THUNDERSTORM WITH LIGHT DRIZZLE</p>
                <div class="temps">
                  <div class="tName">
                    <p>Temp max</p>
                    <h6>
                      <span>${Math.floor(data.main.temp_max)}°</span><img src="./css/imgs/tMax.svg" alt="" />
                    </h6>
                  </div>
                  <div class="tName">
                    <p>Temp min</p>
                    <h6>
                      <span>${Math.floor(data.main.temp_min)}°</span><img src="./css/imgs/tMin.svg" alt="" />
                    </h6>
                  </div>
                  <div class="tName">
                    <p>Humadity</p>
                    <h6>
                      <span>${data.main.humidity}%</span
                      ><img src="./css/imgs/humadity.svg" alt="" />
                    </h6>
                  </div>
                  <div class="tName">
                    <p>Cloudy</p>
                    <h6>
                      <span>${data.clouds.all}%</span><img src="./css/imgs/cloudy.svg" alt="" />
                    </h6>
                  </div>
                  <div class="tName">
                    <p>Wind</p>
                    <h6>
                      <span>${Math.floor(data.wind.speed)}km/h</span><img src="./css/imgs/wind.svg" alt="" />
                    </h6>
                  </div>
                </div>
              </div>
              <hr>
            </div>
          </div>
          <div class="info">
            <h1>${Math.floor(data.main.temp)}°</h1>
            <div class="city">
              <h3>${data.name}</h3>
              <span>${date.getHours()<10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()} - ${daysWeek[date.getDay()]}, ${date.getDate()<10?"0"+date.getDate():date.getDate()} ${months[date.getMonth()]}</span>
            </div>
            <img
              src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"
              alt=""
            />
          </div>`    
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
});