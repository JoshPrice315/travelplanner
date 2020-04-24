


// var getLocation = function() {
//     var apiLocationUrl = "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2020-08-01&returnDate=2020-08-05&adults=2&includedAirlineCodes=TG&max=3";

//     // https://test.api.amadeus.com/v2/reference-data/urls/checkin-links?airlineCode=1X" \
//     //   -H "Authorization: Bearer CpjU0sEenniHCgPDrndzOSWFk5mN

//     var  oAuthToken = "https://test.api.amadeus.com/v1/security/oauth2/token"


//     fetch(oAuthToken, {
//         method : "POST",
//         body : {
//             grant_type : "client_credentials",
//             client_id : "cFoJTq5iwLIpiwBQvmWjpgsHY2ON3CAy",
//             client_secret: "QBxVw4TBoEbP2LfL"
//         },
//         headers: { 'Content-type': 'application/x-www-form-urlencoded' }
        
//     })
//     .then(function(response) {
//         if (response.ok) {
//             response.json().then(function(jsonResponse) {
//                 console.log(jsonResponse);
//             })
//         }
//         else {
//             alert("Error: " + response.statusText);
//         }
//     })
//     .catch(function(error) {
//         alert("Unable to connect to the Server")
//     })
// }



//function to get flight data

var getFlightData = function() {

    // var flightSearchUrl = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/USA/USD/en-US/"
    var skyScannerSearchUrl = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/SFO/NYC/2020-04-25?inboundpartialdate=2020-04-30"

    fetch(skyScannerSearchUrl, {
        	"method": "GET",
        	"headers": {
        		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        		"x-rapidapi-key": "5748a536b5mshfe885049fe60f17p14f38fjsn322ccf2c0aa7"
        	}
        })
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(jsonResponse) {
            console.log(jsonResponse);
            })   
        }
        else {
            alert("Error: " + response.statusText);
        }
    })
    .catch(function(error) {
        alert("Unable to connect to the SkyScanner!")
    })
}



//function to get hotel data
var getHotelData = function() {
    
    var hotelSearchUrl = "http://engine.hotellook.com/api/v2/lookup.json?query=london&lang=ru&lookFor=both&limit=1&token=065c3b8c9e2bb6252bf699eacc8fd32c";
    var hotelSearchUrl2 = "http://engine.hotellook.com/api/v2/cache.json?location=Atlanta&checkIn=2020-05-01&checkOut=2020-05-15&currency=usd&limit=5&token=065c3b8c9e2bb6252bf699eacc8fd32c";

    fetch(hotelSearchUrl2)
    .then(function(response) {
        if(response.ok) {
            response.json().then(function(hotelDataResponse) {
                console.log(hotelDataResponse);
            })
        }
        else {
            alert("Error: " + response.statusText);
        }
    })
    .catch(function(error) {
        alert("Unable to connect to HotelLook!");
    })

}





// function to get attraction data

var searchAttractionData = function() {
    var attractionSearchURL = "https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=YgasmQcKMenqrHdAGUHQgz3JdB9tVnSi"

    fetch(attractionSearchURL)
    .then(function(response) {
        if(response.ok) {
            response.json().then(function(attractionDataResponse) {
                console.log(attractionDataResponse);
            })
        }
        else {
            alert("Error: " + response.statusText);
        }
    })
    .catch(function(error) {
        alert("Unable to connect to TicketMaster!");
    })
}




// getLocation();
searchAttractionData();
getFlightData();
getHotelData();

