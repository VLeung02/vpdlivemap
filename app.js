
    mapboxgl.accessToken = 'pk.eyJ1IjoidmxldW5nMjAiLCJhIjoiY2wwZTlkZDVtMGZxdjNpcG9rOGN5bDlsciJ9.smRKGmLRPiPNRxngfIZTqA'

    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true})

    function successLocation(position) {
      console.log(position)
      setupMap([position.coords.longitude, position.coords.latitude]);
    }

    function errorLocation(){
      setupMap([50.4501, 30.5234])
    }

    function setupMap(center){
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11', 
      center: center,
      zoom: 15
    })
    setMarkers()
    function setMarkers() {

      const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        'Construction on the Washington Monument began in 1848.'
        );

        const el = document.createElement('div');
        el.id = 'marker1';

      const marker1 = new mapboxgl.Marker()
      .setLngLat([12.554729, 55.70651])
      .setPopup(popup)
      .addTo(map);
    }
    // const popup = new mapboxgl.Popup({ offset: 25 }).setText(
    //   'Construction on the Washington Monument began in 1848.');
      
    //   const el = document.createElement('div');
    //   el.id = 'marker';
       
    //   // create the marker
    //   const marker1 = new mapboxgl.Marker(el)
    //   .setLngLat([50.4501, 30.5234])
    //   .setPopup(popup) // sets a popup on this marker
    //   .addTo(map);
  };



