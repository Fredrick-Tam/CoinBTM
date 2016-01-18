/**
 * Hours Format --> '12AM - 12AM' or '24 Hours' or 'Closed'
 */
var STORES = [
	{
		name: 'Big Boy Deli (BedStuy)',
		address: '928 Broadway',
		city: 'Brooklyn',
		state: 'NY',
		zip: '',
		country: 'USA',
		lat: 40.697097,
		lng: -73.935803,
		mon: '24 hours',
		tue: '24 hours',
		wed: '24 hours',
		thu: '24 hours',
		fri: '24 hours',
		sat: '24 hours',
		sund: '24 hours',
		phone: '(917) 789-5251'
	},
	{
		name: 'Starrett Deli (East New York)',
		address: '114 Cozine Ave',
		city: 'Brooklyn',
		state: 'NY',
		zip: '11207',
		country: 'USA',
		lat: 40.654113,
		lng: -73.886588,
		mon: '24 hours',
		tue: '24 hours',
		wed: '24 hours',
		thu: '24 hours',
		fri: '24 hours',
		sat: '24 hours',
		sund: '24 hours',
		phone: '(917) 789-5251'
	},
	{
		name: 'Deli Express (Brownsville)',
		address: '250 Livonia',
		city: 'Brooklyn',
		state: 'NY',
		zip: '11212',
		country: 'USA',
		lat: 40.662272,
		lng: -73.908532,
		mon: '24 hours',
		tue: '24 hours',
		wed: '24 hours',
		thu: '24 hours',
		fri: '24 hours',
		sat: '24 hours',
		sund: '24 hours',
		phone: '(917) 789-5251'
	},
	{
		name: 'Hookah Deli (Red Hook)',
		address: '52 Lorraine St.',
		city: 'Brooklyn',
		state: 'NY',
		zip: '112331',
		country: 'USA',
		lat: 40.674378,
		lng: -74.007611,
		mon: '24 hours',
		tue: '24 hours',
		wed: '24 hours',
		thu: '24 hours',
		fri: '24 hours',
		sat: '24 hours',
		sund: '24 hours',
		phone: '(917) 789-5251'
	},
	{
		name: 'Golden Island Laundromat (Staten Island, NY)',
		address: '250 Broad St.',
		city: 'Staten Island',
		state: 'NY',
		zip: '10304',
		country: 'USA',
		lat: 40.623068,
		lng: -74.083329,
		mon: '6:00 AM - 2:00 AM',
		tue: '6:00 AM - 2:00 AM',
		wed: '6:00 AM - 2:00 AM',
		thu: '6:00 AM - 2:00 AM',
		fri: '6:00 AM - 2:00 AM',
		sat: '6:00 AM - 2:00 AM',
		sund: '6:00 AM - 2:00 AM',
		phone: '(917) 789-5251'
	},
	{
		name: 'Gail\'s Wine and Spirits (Elizabeth, NJ)',
		address: '9b W. Grand St.',
		city: 'Elizabeth',
		state: 'NJ',
		zip: '07201',
		country: 'USA',
		lat: 40.666543,
		lng: -74.216194,
		mon: '10:00 AM - 10:00 PM',
		tue: '10:00 AM - 10:00 PM',
		wed: '10:00 AM - 10:00 PM',
		thu: '10:00 AM - 10:00 PM',
		fri: '10:00 AM - 10:00 PM',
		sat: '10:00 AM - 10:00 PM',
		sund: '10:00 AM - 10:00 PM',
		phone: '(917) 789-5251'
	},
	{
		name: 'Laundromat (St. Albans, NY)',
		address: '168-19 Baisley Blvd.',
		city: 'Jamaica',
		state: 'NY',
		zip: '11434',
		country: 'USA',
		lat: 40.680422,
		lng: -73.775066,
		mon: '24 hours',
		tue: '24 hours',
		wed: '24 hours',
		thu: '24 hours',
		fri: '24 hours',
		sat: '24 hours',
		sund: '24 hours',
		phone: '(917) 789-5251'
	},
	{
		name: 'Clean Right Laundromat (Far Rockaway)',
		address: '14-79 Beach Channel Dr.',
		city: 'Far Rockaway',
		state: 'NY',
		zip: '11691',
		country: 'USA',
		lat: 40.609896,
		lng: -73.75392,
		mon: '24 hours',
		tue: '24 hours',
		wed: '24 hours',
		thu: '24 hours',
		fri: '24 hours',
		sat: '24 hours',
		sund: '24 hours',
		phone: '(917) 789-5251'
	},
	{
		name: 'J&M Deli Grocery (Newark, NJ)',
		address: '468 Springfield Ave.',
		city: 'Newark',
		state: 'NJ',
		zip: '07103',
		country: 'USA',
		lat: 40.732369,
		lng: -74.201191,
		mon: '7:00am - 10:00pm',
		tue: '7:00am - 10:00pm',
		wed: '7:00am - 10:00pm',
		thu: '7:00am - 10:00pm',
		fri: '7:00am - 10:00pm',
		sat: '7:00am - 9:00pm',
		sund: '9:00am - 6:00pm',
		phone: '(917) 789-5251'
	},
	{
		name: 'New Lots Laundromat (East New York)',
		address: '719 New Lots Avenue',
		city: 'Brooklyn',
		state: 'NY',
		zip: '11207',
		country: 'USA',
		lat: 40.666048,
		lng: -73.884337,
		mon: '24 hours',
		tue: '24 hours',
		wed: '24 hours',
		thu: '24 hours',
		fri: '24 hours',
		sat: '24 hours',
		sund: '24 hours',
		phone: '(917) 789-5251'
	},
	{
		name: 'NYC Big Deli & Grocery (Flatbush)',
		address: '1452 Nostrand Avenue',
		city: 'Brooklyn',
		state: 'NY',
		zip: '11226',
		country: 'USA',
		lat: 40.650809,
		lng: -73.949582,
		mon: '24 hours',
		tue: '24 hours',
		wed: '24 hours',
		thu: '24 hours',
		fri: '24 hours',
		sat: '24 hours',
		sund: '24 hours',
		phone: '(917) 789-5251'
	},
	{
		name: 'KH Minimart (Canarsie)',
		address: '1214 Remsen Avenue',
		city: 'Brooklyn',
		state: 'NY',
		zip: '11236',
		country: 'USA',
		lat: 40.639949,
		lng: -73.905771,
		mon: '6AM - 3AM',
		tue: '6AM - 3AM',
		wed: '6AM - 3AM',
		thu: '6AM - 3AM',
		fri: '6AM - 3AM',
		sat: '6AM - 3AM',
		sund: '6AM - 3AM',
		phone: '(917) 789-5251'
	},
	{
		name: 'Titem Deli (Inwood)',
		address: '630 W 207th St',
		city: 'New York',
		state: 'NY',
		zip: '10034',
		country: 'USA',
		lat: 40.868209,
		lng: -73.921857,
		mon: '24 hours',
		tue: '24 hours',
		wed: '24 hours',
		thu: '24 hours',
		fri: '24 hours',
		sat: '24 hours',
		sund: '24 hours',
		phone: '(917) 789-5251'
	},
	{
		name: '786 Candy Store (Spanish Harlem)',
		address: '141 E 96th St',
		city: 'New York',
		state: 'NY',
		zip: '10128',
		country: 'USA',
		lat: 40.786004,
		lng: -73.951033,
		mon: '24 hours',
		tue: '24 hours',
		wed: '24 hours',
		thu: '24 hours',
		fri: '24 hours',
		sat: '24 hours',
		sund: '24 hours',
		phone: '(917) 789-5251'
	},
	{
		name: 'Provokem Tattoos (Bronx)',
		address: '1964 Prospect Ave',
		city: 'Bronx',
		state: 'NY',
		zip: '10457',
		country: 'USA',
		lat: 40.844506,
		lng: -73.888833,
		mon: '1PM-2:30AM',
		tue: '1PM-2:30AM',
		wed: '1PM-2:30AM',
		thu: '1PM-2:30AM',
		fri: '1PM-2:30AM',
		sat: '1PM-2:30AM',
		sund: '1PM-2:30AM',
		phone: '(917) 789-5251'
	},
	{
		name: 'Sonny\'s Groceries (Hell\'s Kitchen)',
		address: '767 10th Ave',
		city: 'New York',
		state: 'NY',
		zip: '10019',
		country: 'USA',
		lat: 40.765708,
		lng: -73.991369,
		mon: '8AM - 8:30PM',
		tue: '8AM - 8:30PM',
		wed: '8AM - 8:30PM',
		thu: '8AM - 8:30PM',
		fri: '8AM - 8:30PM',
		sat: '8AM - 8:30PM',
		sund: '8AM - 8:30PM',
		phone: '(917) 789-5251'
	},
	{
		name: 'G Star Chicken (Bronx)',
		address: '3440 Wilson Ave',
		city: 'Bronx',
		state: 'NY',
		zip: '10469',
		country: 'USA',
		lat: 40.876125,
		lng: -73.851042,
		mon: '7AM - 12:00AM',
		tue: '7AM - 12:00AM',
		wed: '7AM - 12:00AM',
		thu: '7AM - 12:00AM',
		fri: '7AM - 12:00AM',
		sat: '7AM - 12:00AM',
		sund: 'Closed',
		phone: '(917) 789-5251'
	},
	{
		name: 'Chien Chien Deli (Astoria)',
		address: '21-22 36th Ave',
		city: 'Astoria',
		state: 'NY',
		zip: '11106',
		country: 'USA',
		lat: 40.75945,
		lng: -73.936197,
		mon: '24 hours',
		tue: '24 hours',
		wed: '24 hours',
		thu: '24 hours',
		fri: '24 hours',
		sat: '24 hours',
		sund: '24 hours',
		phone: '(917) 789-5251'
	},
	{
		name: 'The Henley Vaporium (Kipps Bay)',
		address: '350 3rd Ave',
		city: 'New York',
		state: 'NY',
		zip: '10010',
		country: 'USA',
		lat: 40.740663,
		lng: -73.982182,
		mon: '11AM - 10PM',
		tue: '11AM - 10PM',
		wed: '11AM - 10PM',
		thu: '11AM - 10PM',
		fri: '11AM - 11PM',
		sat: '11AM - 11PM',
		sund: '12PM - 9PM',
		phone: '(917) 789-5251'
	},
	{
		name: 'The Henley Vaporium (SoHo)',
		address: '23 Cleveland Pl',
		city: 'New York',
		state: 'NY',
		zip: '10012',
		country: 'USA',
		lat: 40.721764,
		lng: -73.997072,
		mon: '11AM - 10PM',
		tue: '11AM - 10PM',
		wed: '11AM - 10PM',
		thu: '11AM - 10PM',
		fri: '11AM - 11PM',
		sat: '11AM - 11PM',
		sund: '12PM - 9PM',
		phone: '(917) 789-5251'
	},
	{
		name: '89 Deli (Jamaica)',
		address: '164-03 89th Ave',
		city: 'Jamaica',
		state: 'NY',
		zip: '11432',
		country: 'USA',
		lat: 40.707685,
		lng: -73.796963,
		mon: '7AM - 1AM',
		tue: '7AM - 1AM',
		wed: '7AM - 1AM',
		thu: '7AM - 1AM',
		fri: '7AM - 1AM',
		sat: '7AM - 1AM',
		sund: '7AM - 1AM',
		phone: '(917) 789-5251'
	},
	{
		name: 'B-Papa Mini Market (Brooklyn)',
		address: '689 Ralph Ave',
		city: 'Brooklyn',
		state: 'NY',
		zip: '11212',
		country: '',
		lat: 40.666006,
		lng: -73.922347,
		mon: '8AM-10:30PM',
		tue: '8AM-10:30PM',
		wed: '8AM-10:30PM',
		thu: '8AM-10:30PM',
		fri: '8AM-10:30PM',
		sat: '8AM-10:30PM',
		sund: '8AM-10:30PM',
		phone: '(917) 789-5251'
	},
	{
		name: 'Tony Deli (BedStuy)',
		address: '528 Gates Avenue',
		city: 'Brooklyn',
		state: 'NY',
		zip: '11221',
		country: 'USA',
		lat: 40.686896,
		lng: -73.94457,
		mon: '24 hours',
		tue: '24 hours',
		wed: '24 hours',
		thu: '24 hours',
		fri: '24 hours',
		sat: '24 hours',
		sund: '24 hours',
		phone: '(917) 789-5251'
	},
	{
		name: 'Apollo Deli & Fruit (Harlem)',
		address: '2350 Frederick Douglass Blvd',
		city: 'New York',
		state: 'NY',
		zip: '10027',
		country: 'USA',
		lat: 40.810833,
		lng: -73.950293,
		mon: '6AM - 3AM',
		tue: '6AM - 3AM',
		wed: '6AM - 3AM',
		thu: '6AM - 3AM',
		fri: '6AM - 3AM',
		sat: '6AM - 3AM',
		sund: '6AM - 3AM',
		phone: '(917) 789-5251'
	},
	{
		name: 'P International Style (Bronx)',
		address: '106 E 167th St',
		city: 'Bronx',
		state: 'NY',
		zip: '10452',
		country: 'USA',
		lat: 40.83486,
		lng: -73.919272,
		mon: '9:30AM - 10:30PM',
		tue: '9:30AM - 10:30PM',
		wed: '9:30AM - 10:30PM',
		thu: '9:30AM - 10:30PM',
		fri: '9:30AM - 10:30PM',
		sat: '9:30AM - 10:30PM',
		sund: '9:30AM - 10:30PM',
		phone: '(917) 789-5251'
	},
	{
		name: 'Vape Supply Co (Brooklyn)',
		address: '40 Bushwick Ave',
		city: 'Brooklyn',
		state: 'NY',
		zip: '11211',
		country: 'USA',
		lat: 40.713631,
		lng: -73.941547,
		mon: '11AM - 10PM',
		tue: '11AM - 10PM',
		wed: '11AM - 10PM',
		thu: '11AM - 10PM',
		fri: '11AM - 11PM',
		sat: '11AM - 11PM',
		sund: '12PM - 9PM',
		phone: '(917) 789-5251'
	},
	{
		name: 'Bagels Road (Sheepshead Bay)',
		address: '1424 Sheepshead Bay Road',
		city: 'Brooklyn',
		state: 'NY',
		zip: '11235',
		country: 'USA',
		lat: 40.587281,
		lng: -73.954536,
		mon: '6AM - 9PM',
		tue: '6AM - 9PM',
		wed: '6AM - 9PM',
		thu: '6AM - 9PM',
		fri: '6AM - 9PM',
		sat: '7AM - 6PM',
		sund: '7AM - 6PM',
		phone: '(917) 789-5251'
	}
];

function initialize() {
	google.maps.visualRefresh = true;
	var openInfoWindow;
	var initialLocation = new google.maps.LatLng(40.7058316,-74.2581956); //Default Center - New York, NY
	var initialZoom = 11;
  var defaultOptions = {
    zoom: 10,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("googft-mapCanvas"), defaultOptions);
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      map.setCenter(initialLocation);
      map.setOptions({
		    zoom: 11,
		    mapTypeId: google.maps.MapTypeId.ROADMAP
		  });
		  //Current location
		  var marker = new google.maps.Marker({
		    map: map,
		    place: {
		      location: {lat: initialLocation.lat(), lng: initialLocation.lng()},
		      query: 'Current Location'
		    },
		    animation: google.maps.Animation.DROP,
		    icon: {
		      path: google.maps.SymbolPath.CIRCLE,
					strokeColor: '#FFF',
					fillColor: '#4285f4',
					fillOpacity: 1,
					strokeWeight: 1,
					scale: 6
		    }
		  });
    }, function() {
      map.setCenter(initialLocation);
    });
  } else {
    map.setCenter(initialLocation);
  }
  var date = new Date();
	var utc = date.getTime() + (date.getTimezoneOffset() * 60000);
	var offset = date.getMonth() % 10 < 4 && date.getMonth() !== 5 ? -5 : -4;
	date = new Date(utc + (3600000 * offset));
  // Create Markers
  for (var i in STORES) {
  	createMarker(STORES[i]);
  }

  function createMarker(store) {
  	var hrs;
	  var marker = new google.maps.Marker({
	    map: map,
	    place: {
	      location: {lat: store.lat, lng: store.lng},
	      query: store.name + i
	    },
	    icon: (function() {
	    	switch(date.getDay()) {
	    	case 0: hrs = store.sund;
	    	        break;
	    	case 1: hrs = store.mon;
	    	        break;
	    	case 2: hrs = store.tue;
	    	        break;
	    	case 3: hrs = store.wed;
	    	        break;
	    	case 4: hrs = store.thu;
	    	        break;
	    	case 5: hrs = store.fri;
	    	        break;
	    	case 6: hrs = store.sat;
	    	        break;
	    	} 
        if (isOpen(date, hrs)) { return  'images/marker_green.png' }        
        return 'images/marker_red.png';
	    })()
	  });
	  // HTML for the pop up information windows
	  var infoWindow = new google.maps.InfoWindow({
	    content: '<div style="color:#000000;"><b>' + store.name +
								'</b><br>' + store.address + '<br><br><b>Hours: </b>' + hrs + 
								'<br><b>Phone#: </b>' + store.phone + '<br><br>' + 
								'<a href="http://maps.google.com/maps?saddr=Current+Location' + 
								'&daddr=' + store.lat + ',' + store.lng + '"target="_blank"><b>Directions</b></a></div>'
	  });
	  // Opens the InfoWindow when marker is clicked.
	  marker.addListener('click', function() {
	  	if (typeof(openInfoWindow) !== 'undefined') {
	  		openInfoWindow.close();
	  	}
	    infoWindow.open(map, marker);
	    openInfoWindow = infoWindow;
	  });
	}  
}

// Check if store if open
function isOpen(date, hrs) {
	if (hrs.toLowerCase() === '24 hours') {	return true; }
	if (hrs.toLowerCase() === 'closed') {	return false;	}
	if (hrs.match(/d*/)) {
		var currentHr = date.getHours(),
				currentMin = date.getMinutes(),
				todaysHrs = hrs.split('-'),
				opening,
				closing;
		if (todaysHrs.length === 2) {
			opening = todaysHrs[0].replace(/\s/g, '');
			closing = todaysHrs[1].replace(/\s/g, '');;
		} else {
			return false;
		}
		var openingHr,
		    openingMin,
		    closingHr,
		    closingMin;
		if (opening.match(/[aA]+/) !== null) {
			if (opening.match(/:/) !== null) {
				openingHr = parseInt(opening.split(':')[0]);
				openingMin = parseInt(opening.split(':')[1].replace(/\D*/,''));
			} else {
				openingHr = parseInt(opening.split(':')[0].replace(/\D*/,''));
				openingMin = 0;			
			}
		} else {
			if (opening.match(/:/) !== null) {
				openingHr = parseInt(closing.split(':')[0]) + 12;
				openingMin = parseInt(closing.split(':')[1]);
			} else {
				openingHr = parseInt(opening.split(':')[0].replace(/\D*/,'')) + 12;
				openingMin = 0;			
			}
		}
		if (closing.match(/[pP]+/) !== null) {
			if (closing.match(/:/) !== null) {
				closingHr = parseInt(closing.split(':')[0]) + 12;
				closingMin = parseInt(closing.split(':')[1]);
			} else {
				closingHr = parseInt(closing.split(':')[0]) + 12;
				closingMin = 0;
			}
		} else {
			if (closing.match(/:/) !== null) {
				closingHr = parseInt(closing.split(':')[0]);
				closingMin = parseInt(closing.split(':')[1]);
			} else {
				closingHr = parseInt(closing.split(':')[0]);
				closingMin = 60;
			}
			if (closingHr === 12) {
				closingHr = 24;
			} else if (closingHr < 5) {
				closingHr += 24;
			}
		}
		currentHr = currentHr < 5 ? currentHr + 24: currentHr;
		if (currentHr > openingHr && currentHr < closingHr) {
			return true;
		} else if (currentHr === openingHr && currentHr !== closingHr) {
			return currentMin >= openingMin;
		} else if (currentHr !== openingHr && currentHr === closingHr) {
			return currentMin < closingMin;
		} else {
			return false;			
		}
	}
	return false;
}