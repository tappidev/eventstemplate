// Google Maps Configuration
// 08/18/2015


function initMap() {
    var customMapType = new google.maps.StyledMapType([
        {
            elementType: 'labels',
            stylers: [{ visibility: 'on' }]
        }
    ], {
        name: 'Custom Style'
    });
    var customMapTypeId = 'custom_style';

    var map = new google.maps.Map(document.getElementById('location'), {
        zoom: 14,
        center: { lat: 32.756216, lng: -97.331813 },  // Cincinnati
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
        }
    });

    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);
    map.setOptions({ 'scrollwheel': false });
}

