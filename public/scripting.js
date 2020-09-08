const api = {
    key:"b9e0e3aa800901a4245dde0ac4d42481",
    base:"api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if (evt.keyCode == 13) {
        getResults(searchBox.value);
        
    }
}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults (weather){
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
}

function dateBuilder(dt){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decembr"];
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    let day = days[dt.getDay()];
    let date = dt.getDate();
    let month = months[dt.getMonth()];
    let year = dt.getFullYear();

    return  `${day} ${date} ${month} ${year}`;
}