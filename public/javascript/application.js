function initMap() {
  var home = {lat: 48.469, lng: -123.367}; 
  var aussie = {lat: -25.363, lng: 131.044};

  var map = new google.maps.Map(document.getElementById('map'),  {
    zoom: 12, 
    center: home
  }); 

  var homeMarker = new google.maps.Marker({
    position: home, 
    map: map, 
    draggable: true,
    animation: google.maps.Animation.DROP,
    title: 'Welcome home, Jenn & Garrett'
  });

  var aussieMarker = new google.maps.Marker({
    position: aussie, 
    map: map, 
    draggable: true,
    animation: google.maps.Animation.DROP,
    title: 'Whee I am in Australia!'
  });

  homeMarker.addListener('click', toggleBounce);
  aussieMarker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    merker.setAnimation(google.maps.Animation.BOUNCE);
  }
}