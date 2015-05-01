var map;

var mapStyle = [
		{
			'stylers':[
				{'saturation':-100},
				{'gamma':1}
			]
		},
		{
			'elementType':'labels.text.stroke',
			'stylers':[
				{'visibility':'off'}
				]
		},
		{
			'featureType':'road',
			'elementType':'geometry',
			'stylers':[
				{'visibility':'simplified'}
				]
		},
		{
			'featureType':'water',
			'stylers':[
				{'visibility':'on'},
				{'saturation':50},
				{'gamma':0},
				{'hue':'#50a5d1'}
				]
		},
		{
			'featureType':'landscape',
			'elementType':'all',
			'stylers':[
				{'color':'#e2e2e2'}
				]
		}
	];

function loadMap(){

	var mapOptions = {

		//default zoom
		zoom: 11,
		//latitude longitude for Dhaka, Bangladesh
		center: new google.maps.LatLng(23.716667, 90.416667),
		//maximum and minimum zoom available
		minZoom: 10,
		maxZoom: 12,

		//map control
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			mapTypeIds: [google.maps.MapTypeId.ROADMAP,
			google.maps.MapTypeId.SATELLITE,
			google.maps.MapTypeId.HYBRID,
			google.maps.MapTypeId.TERRAIN],
			position: google.maps.ControlPosition.TOP_RIGHT
		},

		//Set maptype
		mapTypeId: google.maps.MapTypeId.TERRAIN,

		//tilt 0 to 45, valid for sattelite and terrain
		tilt: 0,

		//Zoom Controls
		zoomControl: true,
		zoomControlOptions:{
			style: google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.RIGHT_TOP
		},

		//Pan Controls
		panControl: true,
		panControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_LEFT
		},

		//streetview control
		streetViewControl: true,

		//Overview Map
		overviewMapControl: true,
		overviewMapControlOptions: {
			opened: true
		},

		//stylize google maps
		styles: mapStyle

	};
	var mapID = document.getElementById('map');
	map = new google.maps.Map(mapID, mapOptions);
}

google.maps.event.addDomListener(window, 'load', loadMap())