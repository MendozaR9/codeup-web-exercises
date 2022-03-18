

//Getting Weather Data
function getWeatherData(lon, lat) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${OWM_key}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let html = "";
            html += '<div class="row justify-content-evenly">'
            console.log(data.daily[0].dt)
            for (let i = 0; i < 5; i++) {
                let dailyTemp = data.daily[i].temp.day
                var myDate = new Date(data.daily[i].dt * 1000).toLocaleString();
                html += `<div class=" col-2 card pb-3 mb-2" style="border:1px #a2d9ef solid"> 
<section class="text-center my-2">${myDate}</section> 
                Temp: ${dailyTemp} F<hr>
                Humidity: ${data.daily[i].humidity}<hr> 
                Wind: ${data.daily[i].wind_speed}
                </div>`
            }

            html += '</div>';

            $('#weather').html(html);
        });
}

