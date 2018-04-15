function draw(map) {
  var myLatLng = {
    lat: -25.363,
    lng: 131.044
  };
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
};

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {
      lat: -25.363,
      lng: 131.044
    }
  });
  draw(map);
};
