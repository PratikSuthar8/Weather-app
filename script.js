const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector('.weather-icon');


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else {
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + 'KMPh';
        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = './Images/clouds.png'
        } else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = './Images/clear.png'
        } else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = './Images/rain.png'
        } else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = './Images/drizzle.png'
        } else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = './Images/mist.png'
        } else if (data.weather[0].main == 'Snow') {
            weatherIcon.src = './Images/snow.png'
        }
        document.querySelector(".error").style.display = "none"
        document.querySelector('.weather').style.display = "block"
    }



}

searchBtn.addEventListener('click', () => {

    checkWeather(searchBox.value);
})

