let lat = '32.7767';
let lon ='-96.7970';

mapboxgl.accessToken= mapBox_key;
let map;
let geocoder;
let marker;
let popup;
init();
setGeocoderEventListener()

function init(){
    //make the mapbox
    map = new mapboxgl.Map({
        container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [lon, lat], // starting position [lng, lat]
            zoom: 5 // starting zoom
    });

    // makes the geocoder
    geocoder = new MapboxGeocoder({
        accessToken: mapBox_key,
        mapboxgl: mapboxgl,
        marker: false
    });

    map.addControl(geocoder);

}
function getMarker(coordinates){
    return new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
}

function  getPopup(description, coordinates){
    return new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(`<p>${description}</p>`)
        .addTo(map);
}


function setGeocoderEventListener() {
    geocoder.on("result", function (e) {
        /*We need to ensure marker/popup variables hoisted at the top actual *have* a value
        * Otherwise, calling a remove() method on a non-existent object will result in a runtime error
        * */
        let newlat = e.result.geometry.coordinates[1];
        let newlon =e.result.geometry.coordinates[0]

        console.log(e)
        if (marker) {
            marker.remove();
        }
        if (popup) {
            popup.remove();
        }

        /*Finally, set the hoisted marker/popup variables to new respective objects*/
        marker = getMarker(e.result.geometry.coordinates);
        popup = getPopup(e.result.place_name, e.result.geometry.coordinates);
        mylocation(e.result.place_name);
        getWeatherData(newlon, newlat);

    });
}

//showing location
function mylocation(location) {
    let head1 = "";
    head1 += `${location}`;
    $('#location').html(head1)
}







