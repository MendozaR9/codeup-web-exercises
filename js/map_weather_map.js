let lat = '32.7767';
let lon ='-96.7970';

//showing location
function mylocation() {
    let head1 = "";
    head1 += `Longitude: ${lon} Latitude: ${lat}`;
    console.log(head1)
    $('#location').html(head1)
}

//get user input
let map = createmap(lon,lat);

$('#submit').click(function (e){
    e.preventDefault();
    lon = $('#lon').val()
    lat = $('#lat').val()
    console.log(lon)
    console.log(lat)
    mylocation()
    getWeatherData()
    let maker = makemaker(Number(lon),Number(lat))

    geocode("650 W State Hwy 114, Grapevine, TX 76051", mapBox_key).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(20);
    });

})




//Creating a Map
function createmap(lon, lat) {
    mapboxgl.accessToken = mapBox_key;
    return  new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [Number(lon), Number(lat)], // starting position [lng, lat]
        zoom: 5 // starting zoom
    });
}

//make marker
function makemaker(lon,lat) {
    return  new mapboxgl.Marker()
        .setLngLat([lon, lat])
        .addTo(map);

}



