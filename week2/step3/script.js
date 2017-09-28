let lable = document.createElement('h1');
lable.setAttribute('id','lable')
lable.innerHTML = 'Click the button to get the weather information in Amsterdam';
document.body.appendChild(lable);
//creat button
let button1 = document.createElement('button');
button1.setAttribute('id','button');
button1.innerHTML = 'Click here';
document.body.appendChild(button1);

//let button2 = document.createElement('button');
//button2.setAttribute('id','button');
//button2.innerHTML = 'Weather in Damascuse';
//document.body.appendChild(button2);

//get the weather data from open api
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.response;
}
//two urls for two cities
let amsterdam = 'http://api.openweathermap.org/data/2.5/weather?q=Amsterdam,nl&appid=90faa993733f773f1de4a7c43ae0c2d8';
//parse the api data in a javascript object using json
let amsterdamWeather = JSON.parse(httpGet(amsterdam));
console.log(amsterdamWeather);
//now i am going to creat html elements 
let div = document.createElement('div');
div.setAttribute('id','div');
let cityName = document.createElement('h2');
cityName.innerHTML = 'The Weather now in ' + amsterdamWeather.name;
let main = document.createElement('h3');
main.innerHTML = 'Statue : ' + amsterdamWeather.weather[0].main;
let description = document.createElement('h3');
description.innerHTML = 'Description: ' + amsterdamWeather.weather[0].description;
let details = document.createElement('p');
details.innerHTML = 'Temperature: ' + amsterdamWeather.main.temp + '<br>' + 'Pressure: ' + amsterdamWeather.main.pressure + '<br>' + 'Humidity' + amsterdamWeather.main.humidity + '<br>' + 'temp_min' + amsterdamWeather.main.temp_min + '<br>' + 'temp_max' + amsterdamWeather.main.temp_max;
let wind = document.createElement('p');
wind.innerHTML = 'Wind speed: ' + amsterdamWeather.wind.speed;
div.appendChild(cityName);
div.appendChild(main);
div.appendChild(description);
div.appendChild(details);
div.appendChild(wind);
//Now link the two together: When you click the button -> get the data from the weather API and display it on your website
button1.onclick = function(){
     document.body.appendChild(div);
}
