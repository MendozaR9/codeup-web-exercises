let lat = '32.7767';
let lon ='-96.7970';
let count = 1;

//Getting Weather Data
fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${OWM_key}`)
.then(response => response.json())

.then(data => {
    console.log(data)
    let html ="";
    html+='<div class="row justify-content-evenly">'

    for(let i = 0; i < 5;i++) {
        let dailyTemp = data.daily[i].temp.day
        html += `<div class=" col-2 card pb-3 mb-2" style="border:1px #a2d9ef solid"> <section class="text-center my-2"> day ${count}</section> 
                Temp: ${dailyTemp} F<hr>
                Humidity: ${data.daily[i].humidity}<hr> 
                Wind: ${data.daily[i].wind_speed}
                </div>`
        count++
    }

    html +='</div>';

    $('#weather').html(html);
});
let head1 ="";
head1+=`Longitude: ${lon} Latitude: ${lat}`;
console.log(head1)
$('#location').html(head1)

//Getting Map
// mapboxgl.accessToken = mapBox_key;
// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/streets-v11', // style URL
//     center: [-74.5, 40], // starting position [lng, lat]
//     zoom: 9 // starting zoom
// });
