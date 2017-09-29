//creat button
let button1 = document.createElement('button');
button1.setAttribute('id', 'button');
button1.innerHTML = 'Click';
document.body.appendChild(button1);

//get the weather data from open api
function httpGet(theUrl) {
     var xmlHttp = new XMLHttpRequest();
     xmlHttp.open("GET", theUrl, false);
     xmlHttp.send(null);
     return xmlHttp.response;
}
//function to change the api url using user input
function getUrl() {
     let apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
     console.log(document.getElementById('textBox').value);
     city = document.getElementById('textBox').value;
     apiURL += city + '&appid=90faa993733f773f1de4a7c43ae0c2d8&units=metric';
     return apiURL;
}
console.log(getUrl());
//Now link the two together: When you click the button -> get the data from the weather API and display it on your website
button1.onclick = function () {
     //parse the api data in a javascript object using json
     let Weather = JSON.parse(httpGet(getUrl()));
     console.log(Weather);
     //now i am going to creat html elements 
     let div = document.createElement('div');
     div.setAttribute('id', 'div');
     let cityName = document.createElement('h2');
     cityName.innerHTML = 'The Weather now in ' + Weather.name;
     let main = document.createElement('h3');
     main.innerHTML = 'Statue : ' + Weather.weather[0].main;
     let description = document.createElement('h3');
     description.innerHTML = 'Description: ' + Weather.weather[0].description;
     let details = document.createElement('p');
     details.innerHTML = 'Temperature: ' + Weather.main.temp + '<br>' + 'Pressure: ' + Weather.main.pressure + '<br>' + 'Humidity: ' + Weather.main.humidity + '<br>' + 'temp_min: ' + Weather.main.temp_min + '<br>' + 'temp_max: ' + Weather.main.temp_max;
     let wind = document.createElement('p');
     wind.innerHTML = 'Wind speed: ' + Weather.wind.speed;
     div.appendChild(cityName);
     div.appendChild(main);
     div.appendChild(description);
     div.appendChild(details);
     div.appendChild(wind);
     document.body.appendChild(div);
}
