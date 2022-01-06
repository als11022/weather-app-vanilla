function formatDate(timestamp){
let date = new Date(timestamp);
let hours = date.getHours();
if (hours < 10){
    hours = `0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10){
    minutes = `0${minutes}`;
}
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[date.getDay()];
return `${day}, ${hours}:${minutes}`
}

function displayTemperature (response){
    console.log(response);
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#description").innerHTML = response.data.weather[0].description;
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#feels-like").innerHTML = Math.round(response.data.main.feels_like);
    document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
    document.querySelector("#date").innerHTML = formatDate(response.data.dt * 1000);
}


let apiKey = "a50f410ea36ad12d8cb30de68e6fc33b";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);