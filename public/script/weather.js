function weather() {
    var apiKey = '4c014064c713e54407dc188fcc5f9b80';
    var city = document.getElementById("city").value;
    if (city != '') {
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + apiKey,
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                weatherToDisplay = {
                    'main': {
                        'humidity': data.main.humidity,
                        'temp': data.main.temp,
                        'temp_min': data.main.temp_min,
                        'temp_max': data.main.temp_max
                    },
                    'wind': {
                        'speed': data.wind.speed
                    },
                    'weather': {
                        'description': data.weather[0].description
                    },
                    'name': data.name
                }
                if (weatherToDisplay.main != undefined) {
                    var strCity = `City : ${weatherToDisplay.name}`;
                    var strTemp = `Current temperature : ${weatherToDisplay.main.temp}`;
                    var strMinMax = `Temp min : ${weatherToDisplay.main.temp_min} <br\>
                                                                Temp max : ${weatherToDisplay.main.temp_max}`;
                    var strWind = `Wind speed : ${weatherToDisplay.wind.speed}`;
                    var strDesc = `Description : ${weatherToDisplay.weather.description}`;
                    document.getElementById("weatherCity").innerHTML = strCity;
                    document.getElementById("temperature").innerHTML = strTemp;
                    document.getElementById("temperatureMinMax").innerHTML = strMinMax;
                    document.getElementById("wind").innerHTML = strWind;
                    document.getElementById("desc").innerHTML = strDesc;
                } else {
                    document.getElementById("weatherWidgetDisplay").innerHTML = 'City doesn\'t exist';
                }
            }
        })
    }
}

function lol() {
    console.log("ok");
}

setInterval(weather, 30000);