function initMap() {
  var home = {lat: 48.469, lng: -123.367}; 
  var aussie = {lat: -25.363, lng: 131.044};
  var moonUnderWater = {lat: 48.438, lng: -123.376};
  var kickboxing = {lat: 48.493, lng: -123.388};
  var beach = {lat: 48.521, lng: -123.366};
  var swanLake = {lat: 48.463, lng: -123.373};

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

  var moonUnderWaterMarker = new google.maps.Marker({
    position: moonUnderWater, 
    map: map, 
    draggable: true,
    animation: google.maps.Animation.DROP,
    title: 'Moon Under Water Pub'
  });

  var kickboxingMarker = new google.maps.Marker({
    position: kickboxing, 
    map: map, 
    draggable: true,
    animation: google.maps.Animation.DROP,
    title: '30 Minute Hit'
  });

  var beachMarker = new google.maps.Marker({
    position: beach, 
    map: map, 
    draggable: true,
    animation: google.maps.Animation.DROP,
    title: 'My favourite beach... Cordova'
  });

  var swanLakeMarker = new google.maps.Marker({
    position: swanLake, 
    map: map, 
    draggable: true,
    animation: google.maps.Animation.DROP,
    title: 'Swan Lake near my home'
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h2 id="firstHeading" class="firstHeading">Victoria</h2>'+
      '<div id="bodyContent">'+
      '<p><b>Victoria</b> /vɪkˈtɔriə/ is the capital city of ' +
      'British Columbia, Canada, and is located on the southern tip ' +
      'of Vancouver Island off Canada\'s Pacific coast. The city has a ' +
      'population of about 80,017, while the metropolitan area of ' +
      'Greater Victoria, has a population of 344,615, making it the ' +
      '15th most populous Canadian urban region. </p>' +
      '<p>Read more: <a href="https://en.wikipedia.org/wiki/Victoria,_British_Columbia">'+
      'https://en.wikipedia.org/wiki/Victoria,_British_Columbia</a> '+
      '(last visited Dec 4, 2015).</p>'+
      '</div>';

  var infoWindow = new google.maps.InfoWindow({
    content: contentString
  });

  homeMarker.addListener('click', function() {
    infoWindow.open(map, homeMarker);
  });
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    merker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
