// Calender Start 
$(document).ready(function(){
    $('.datepicker-start').datepicker();
  });

// Calender End   
$(document).ready(function(){
    $('.datepicker-end').datepicker();
  });

// From Input 
$(document).ready(function() {
    $('.from-location-input-id').characterCounter();
  });

  // To Input 
$(document).ready(function() {
    $('.to-location-input-id').characterCounter();
  });


// Mobile Navi 
$(document).ready(function(){
    $('.sidenav').sidenav();
  });

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });


//global variables

//input form elements
var userFormEl = document.querySelector("#search-button");
var startdateinputformEl = document.querySelector("#startdateinputform");
var enddateinputformEl = document.querySelector("#enddateinputform");
var startdatepickerinputEl = document.querySelector("#datepicker-start-id");
var enddatepickerinputEl = document.querySelector("#datepicker-end-id");
var fromLocationInputIdEl = document.querySelector("#from-location-input-id");
var toLocationInputIdEl = document.querySelector("#to-location-input-id");



//this function passes the input data to the function 
var formSubmitHandler = function(event) {
    event.preventDefault();
    startDate = startdatepickerinputEl.value.trim();
    endDate = enddatepickerinputEl.value.trim();
    fromLocation = fromLocationInputIdEl.value.trim();
    toLocation = toLocationInputIdEl.value.trim();
    console.log(startDate, endDate, fromLocation, toLocation);

    if (startDate) {
        //to get the cities with the city name
        getFlightData();
      

        //push selected city name to the cityArray array
        startDateArray.push(startDate);
        //set the startDate to the localStorage
        localStorage.setItem("Start Date", JSON.stringify(startDateArray));
        

        //to clear the input form field after submit
        startdatepickerinputEl.value = "";

    } else {
        alert("Please enter a Start Date")
    }
    console.log(event);
}





//function to get flight data

var getFlightData = function() {

    // var flightSearchUrl = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/USA/USD/en-US/"
    var skyScannerSearchUrl = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/SFO/NYC/2020-04-30?inboundpartialdate=2020-05-15"
    var skyScannerSearchUrl2 = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/SFO/NYC/2020-05-01?inboundpartialdate=2020-05-15"
    // var skyScannerSearchUrl3 = "https://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/{country}/{currency}/{locale}/{originPlace}/{destinationPlace}/{outboundPartialDate}/{inboundPartialDate}?apiKey={apiKey}""

    fetch(skyScannerSearchUrl2, {
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
            var carrierID1 = jsonResponse.Quotes[0].OutboundLeg.CarrierIds[0];
            var carrierID2 = jsonResponse.Quotes[1].OutboundLeg.CarrierIds[0];
            var carrierID3 = jsonResponse.Quotes[2].OutboundLeg.CarrierIds[0];
            console.log(carrierID1, carrierID2, carrierID3);


            var destinationCityName = jsonResponse.Places[0].CityName;
            console.log(destinationCityName);

            var originCityName = jsonResponse.Places[1].CityName;
            console.log(originCityName);

            var minPrice1 = jsonResponse.Quotes[0].MinPrice;
            console.log("$" + minPrice1);
            var minPrice2 = jsonResponse.Quotes[1].MinPrice;
            console.log("$" + minPrice2);
            var minPrice3 = jsonResponse.Quotes[2].MinPrice;
            console.log("$" + minPrice3);

            var carrierName1;
            var carrierName2;
            var carrierName3;

            for (var i = 0; i < jsonResponse.Carriers.length; i++) {
                var carriers = jsonResponse.Carriers[i]
                console.log(carriers);
                if (carrierID1 === carriers.CarrierId) {
                    carrierName1 = carriers.Name;
                    console.log(carrierName1);
                }

                else if (carrierID2 === carriers.CarrierId) {
                    carrierName2 = carriers.Name;
                    console.log(carrierName2);
                }

                else if (carrierID3 === carriers.CarrierId) {
                    carrierName3 = carriers.Name;
                    console.log(carrierName3);
                }
                
            }


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
    var hotelSearchUrl2 = "http://engine.hotellook.com/api/v2/cache.json?location=NYC&checkIn=2020-05-02&checkOut=2020-05-15&currency=usd&limit=3&token=065c3b8c9e2bb6252bf699eacc8fd32c";

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
    var attractionSearchURL = "https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=YgasmQcKMenqrHdAGUHQgz3JdB9tVnSi&keyword=NewYork"

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

// var getYelpData = function() {
//     var yelpBusinessURL = "https://api.yelp.com/v3/businesses/search"

//     fetch(yelpBusinessURL)
//     .then(function(response) {
//         if(response.ok) {
//             response.json().then(function(yelpDataResponse) {
//                 console.log(yelpDataResponse);
//             })
//         }
//         else {
//             alert("Error: " + response.statusText);
//         }
//     })
//     .catch(function(error) {
//         alert("Unable to connect to Yelp!");
//     })
// }









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




// getLocation();
// searchAttractionData();
// getFlightData();
// getHotelData();
userFormEl.addEventListener("submit", formSubmitHandler);
// getYelpData();

