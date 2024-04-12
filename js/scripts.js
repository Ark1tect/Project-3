
mapboxgl.accessToken = 'pk.eyJ1IjoibncyMjU3IiwiYSI6ImNsdXU4emozMzA3ZHoyam11Zmx6NWxqajcifQ._r9IkgwnilyVDH2Mh6MEzg';
const map = new mapboxgl.Map({
    container: 'map-container',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-94.74, 40.4],
    zoom: 3.5,

});

var stadium_location = [
    {
        "Team": "Anaheim Ducks",
        "Longitude": -117.8758786,
        "Lattitude": 33.80798125,
        "division": "Pacific",
    },
    {
        "Team": "Arizona Coyotes",
        "Longitude": -111.8846962,
        "Lattitude": 33.43711414,
        "division": "Pacific",
    },
    {
        "Team": "Boston Bruins",
        "Longitude": -71.06167392,
        "Lattitude": 42.36633269,
        "division": "Atlantic",
    },
    {
        "Team": "Buffalo Sabres",
        "Longitude": -78.87606109,
        "Lattitude": 42.87521469,
        "division": "Atlantic",
    },
    {
        "Team": "Calgary Flames",
        "Longitude":  -114.05207357781896,
        "Lattitude": 51.03745381098466,
        "division": "Pacific",
    },
    {
        "Team": "Carolina Hurricanes",
        "Longitude": -78.7214692,
        "Lattitude": 35.80349426,
        "division": "Metro",
    },
    {
        "Team": "Chicago Blackhawks",
        "Longitude": -87.67377892,
        "Lattitude": 41.88086647,
        "division": "Central",
    },
    {
        "Team": "Colorado Avalanche",
        "Longitude": -105.0070196,
        "Lattitude": 39.74881309,
        "division": "Central",
    },
    {
        "Team": "Columbus Blue Jackets",
        "Longitude": -83.00540456,
        "Lattitude": 39.96935513,
        "division": "Metro",
    },
    {
        "Team": "Dallas Stars",
        "Longitude": -96.80929982,
        "Lattitude": 32.79055307,
        "division": "Central",
    },
    {
        "Team": "Detroit Red Wings",
        "Longitude": -83.0548596,
        "Lattitude": 42.34126114,
        "division": "Atlantic",
    },
    {
        "Team": "Edmonton Oilers",
        "Longitude": -113.4972103,
        "Lattitude": 53.5470838,
        "division": "Pacific",
    },
    {
        "Team": "Florida Panthers",
        "Longitude": -80.32454509,
        "Lattitude": 26.15865565,
        "division": "Atlantic",
    },
    {
        "Team": "Los Angeles Kings",
        "Longitude": -118.2667498,
        "Lattitude": 34.04316857,
        "division": "Pacific",
    },
    {
        "Team": "Minnesota Wild",
        "Longitude": -93.10029127,
        "Lattitude": 44.94493472,
        "division": "Central",
    },
    {
        "Team": "Montreal Canadiens",
        "Longitude": -73.56878958,
        "Lattitude": 45.49619448,
        "division": "Atlantic",
    },
    {
        "Team": "Nashville Predators",
        "Longitude":-86.77792726,
        "Lattitude":36.15932079,
        "division": "Central",
    },
    {
        "Team": "New Jersey Devils",
        "Longitude":-74.17072257,
        "Lattitude":40.73363449,
        "division": "Metro",
    },
    {
        "Team": "New York Islanders",
        "Longitude": -73.72554627,
        "Lattitude": 40.71187949,
        "division": "Metro",
    },
    {
        "Team": "New York Rangers",
        "Longitude": -73.9928486,
        "Lattitude": 40.75068324,
        "division": "Metro",
    },
    {
        "Team": "Ottawa Senators",
        "Longitude": -75.92605051,
        "Lattitude": 45.29702068,
        "division": "Atlantic",
    },
    {
        "Team": "Philadelphia Flyers",
        "Longitude": -75.1713143,
        "Lattitude": 39.90134135,
        "division": "Metro",
    },
    {
        "Team": "Pittsburgh Penguins",
        "Longitude": -79.98899499,
        "Lattitude": 40.43942395,
        "division": "Metro",
    },
    {
        "Team": "San Jose Sharks",
        "Longitude": -121.9015178,
        "Lattitude": 37.33308816,
        "division": "Pacific",
    },
    {
        "Team": "Seattle Kraken",
        "Longitude": -122.35347058820376,
        "Lattitude": 47.62219420530764,
        "division": "Pacific",
    },
    {
        "Team": "St. Louis Blues",
        "Longitude": -90.20228133,
        "Lattitude": 38.626991,
        "division": "Central",
    },
    {
        "Team": "Tampa Bay Lightning",
        "Longitude": -82.45135867,
        "Lattitude": 27.94290785,
        "division": "Atlantic",
    },
    {
        "Team": "Toronto Maple Leafs",
        "Longitude": -79.37859463,
        "Lattitude": 43.64362131,
        "division": "Atlantic",
    },
    {
        "Team": "Vancouver Canucks",
        "Longitude": -123.1084043,
        "Lattitude": 49.27793372,
        "division": "Pacific",
    },
    {
        "Team": "Vegas Golden Knights",
        "Longitude": -115.1775942,
        "Lattitude": 36.10292462,
        "division": "Pacific",
    },
    {
        "Team": "Washington Capitals",
        "Longitude": -77.02032035042363,
        "Lattitude": 38.898292678550916, 
        "division": "Metro",
    },
    {
        "Team": "Winnipeg Jets",
        "Longitude": -97.14258493,
        "Lattitude": 49.89272194,
        "division": "Central",
    }
]

console.log(stadium_location)


const popup = new mapboxgl.Popup({
    offset: 75,
    anchor: "bottom-left",
}).setHTML(
    '<h3>Center of the universe.</h3><p>Go Sox</p>'
);
// Create a default Marker and addit to the map.
const marker1 = new mapboxgl.Marker({ color: '#FFB81C' })
    .setLngLat([-71.06057, 42.35972])
    .setPopup(popup)
    .addTo(map);

stadium_location.forEach(function(record){

    console.log(record)


    const popup = new mapboxgl.Popup({
        offset: 30,
        anchor: "bottom-left",
    })
    .setText(record.Team);
  

    

        var color

    // use if statements to assign colors based on division data
    if (record.division === "Atlantic") {
        color = '#FFB81C'
    }
    if (record.division === "Metro") {
        color = 'Red'
    }
    if (record.division === "Central") {
        color = '#1f8f39'
    }
    if (record.division === "Pacific") {
        color = 'darkblue'
    }
    new mapboxgl.Marker({color:color})
        .setLngLat([record.Longitude, record.Lattitude])
        .setPopup(popup)
        .addTo(map);
})