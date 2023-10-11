const apiKey = '521d2988f572a98630d34a01b2a5e8f8';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.whether-icon');


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.whether').style.display = "none";
    } else {


        let data = await response.json();

        console.log(data);

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + "Km/hr";

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = 'img/images/clouds.png';
        } else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = 'img/images/clear.png';
        } else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = 'img/images/rain.png';
        } else if (data.weather[0].main == 'Dizzle') {
            weatherIcon.src = 'img/images/dizzle.png';
        } else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = 'img/images/mist.png';
        }

        document.querySelector('.whether').style.display = "block";
        document.querySelector('.error').style.display = "none";
    }
}
searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})