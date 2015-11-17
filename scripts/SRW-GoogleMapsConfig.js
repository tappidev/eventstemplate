﻿// Google Maps Configuration
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
        center: { lat: 30.326013, lng: -81.661420 },  // Jacksonville
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
        }
    });

    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);
    map.setOptions({ 'scrollwheel': false });
}

