
(function () {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDmuYmbFpzTdIxHycHbatJrb9ahKOfggEk&libraries=places&callback=initApp';
    script.async = true;
    var head = document.querySelector('head');
    head.appendChild(script);
})();

let map;
const position = { lat: -33.4402179, lng: -70.6578679 };

async function initApp() {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
        center: position,
        mapId: "DEMO_MAP_ID",
        zoom: 12,
    });

    const marker = new AdvancedMarkerElement({
        map: map,
        position: position
    });


}
