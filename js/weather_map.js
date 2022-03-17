let lat = '32.7767';
let lon ='-96.7970';

//Getting Weather Data
function getWeatherData() {
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

//showing location
function mylocation() {
    let head1 = "";
    head1 += `Longitude: ${lon} Latitude: ${lat}`;
    console.log(head1)
    $('#location').html(head1)
}

//get user input
$('#submit').click(function (e){
    e.preventDefault();
    lon = $('#lon').val()
    lat = $('#lat').val()
    console.log(lon)
    console.log(lat)
    if (Number(lon)&&Number(lat)){
        mylocation()
        getWeatherData()
        map();
        makemaker(lon,lat)
    }
})

//make marker
function makemaker(lon,lat) {
    var marker = new mapboxgl.Marker()
        .setLngLat([lon, lat])
        .addTo(map);

}
//Getting Map
function map() {
    mapboxgl.accessToken = mapBox_key;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [Number(lon), Number(lat)], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });
}



