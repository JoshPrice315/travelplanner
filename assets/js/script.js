// Disable previous days in calender variable 
var minDate = new Date();

// // Calender Start 
$(document).ready(function () {
    $('.datepicker-start').datepicker({
        minDate: minDate,
    });
 });

// Calender End   
$(document).ready(function () {
    $('.datepicker-end').datepicker({
        minDate: minDate 
    });
});

// // From Input 
// $(document).ready(function () {
//     $('.from-location-input-id').characterCounter();
// });

// // To Input 
// $(document).ready(function () {
//     $('.to-location-input-id').characterCounter();
// });

// Mobile Navi 
$(document).ready(function () {
    $('.sidenav').sidenav();
});


//global variables

//input form elements


var userFormEl = document.querySelector("#valueinputform");
var valueinputformEl = document.querySelector("#valueinputform");

var submitButtonEl = document.querySelector("#search-button");
var startdatepickerinputEl = document.querySelector("#datepicker-start-id");
var enddatepickerinputEl = document.querySelector("#datepicker-end-id");
var fromLocationInputIdEl = document.querySelector("#from-location-input-id");
var toLocationInputIdEl = document.querySelector("#to-location-input-id");

var outboundDate1El = document.querySelector("#outbounddate1");
var outboundDate2El = document.querySelector("#outbounddate2");
var outboundDate3El = document.querySelector("#outbounddate3");

var inbounddate1El = document.querySelector("#inbounddate1");
var inbounddate2El = document.querySelector("#inbounddate2");
var inbounddate3El = document.querySelector("#inbounddate3");

var origin1El = document.querySelector("#origin1");
var origin2El = document.querySelector("#origin2");
var origin3El = document.querySelector("#origin3");

var destination1El = document.querySelector("#destination1");
var destination2El = document.querySelector("#destination2");
var destination3El = document.querySelector("#destination3");

var airlinecode1El = document.querySelector("#airlinecode1");
var airlinecode2El = document.querySelector("#airlinecode2");
var airlinecode3El = document.querySelector("#airlinecode3");

var price1El = document.querySelector("#price1");
var price2El = document.querySelector("#price2");
var price3El = document.querySelector("#price3");

var direct1El = document.querySelector("#direct1");
var direct2El = document.querySelector("#direct2");
var direct3El = document.querySelector("#direct3");

var directFlightIconEl1 = document.querySelector("#direct-flight-icon1")
var directFlightIconEl2 = document.querySelector("#direct-flight-icon2")
var directFlightIconEl3 = document.querySelector("#direct-flight-icon3")




   




var startDateArray = [];
var endDateArray = [];
var fromLocationArray = [];
var toLocationArray = [];
var formattedEndDate
var fromLocation





//this function passes the input data to the function 
var formSubmitHandler = function (event) {
    event.preventDefault();

    //get the value from the startDate field
    startDate = startdatepickerinputEl.value.trim();
    // console.log("startDate " + startDate);

    //format the startDate field into the format that API needs
    formattedStartDate = moment(startDate).format('YYYY-MM-DD');
    console.log("formattedStartDate " + formattedStartDate);

    //get the value from the endDate field
    endDate = enddatepickerinputEl.value.trim();
    // console.log(endDate);

    //format the endDate field into the format that API needs    
    formattedEndDate = moment(endDate).format('YYYY-MM-DD');
    console.log("formattedEndDate " + formattedEndDate);

    //get the value of the fromLocation
    fromLocation = fromLocationInputIdEl.value.trim();
    console.log(fromLocation);

    //get the value of the toLocation 
    toLocation = toLocationInputIdEl.value.trim();
    console.log(toLocation);




    if (formattedStartDate && formattedEndDate && fromLocation && toLocation) {
        //to call the functions if the data above was input 
        getFlightData();
        getHotelData();


        // //push selected startDate into the startDateArray 
        startDateArray.push(formattedStartDate);
        //set the startDate to the localStorage
        localStorage.setItem("Start Date", JSON.stringify(startDateArray));


        // //push selected endDate into the endDateArray 
        endDateArray.push(formattedEndDate);
        //set the endDate to the localStorage
        localStorage.setItem("End Date", JSON.stringify(endDateArray));


        //push selected fromLocation into the fromLocationArray 
        fromLocationArray.push(fromLocation);
        //set the fromLocation to the localStorage
        localStorage.setItem("From Location", JSON.stringify(fromLocationArray));


        //push selected toLocation into the toLocationArray 
        toLocationArray.push(toLocation);
        //set the toLocation to the localStorage
        localStorage.setItem("To Location", JSON.stringify(toLocationArray));



        //to clear the input form field after submit
        startdatepickerinputEl.value = "";
        enddatepickerinputEl.value = "",
        fromLocationInputIdEl.value = "";
        toLocationInputIdEl.value = "";

    }
    else {
        alert("Please enter a Start Date, End Date, From and To Location (City Code in Capital Letters) in order to search.")
    }
    // console.log(event);
}





//function to get flight data

var getFlightData = function () {

    // var skyScannerSearchUrl = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/SFO/NYC/2020-04-30?inboundpartialdate=2020-05-15"
    // var skyScannerSearchUrl2 = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/SFO/NYC/2020-05-01?inboundpartialdate=2020-05-15"
    // var skyScannerSearchUrl3 = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/" + fromLocation + "/" + toLocation + "/" + formattedStartDate + "?inboundpartialdate=" + formattedEndDate;
    var skyScannerSearchUrl = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/" + fromLocation + "/" + toLocation + "/" + formattedStartDate + "?inboundpartialdate=" + formattedEndDate;

    fetch(skyScannerSearchUrl, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "5748a536b5mshfe885049fe60f17p14f38fjsn322ccf2c0aa7"
        }
    })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (jsonResponse) {
                    console.log(jsonResponse);

                    //conditionality to handle an empty response from the API and show a message to the user that different data needs to be entered
                    quotesArray = []
                    var quotesArrayCheck = jsonResponse.Quotes[0];
                    // console.log("quotesArrayCheck" + quotesArrayCheck);
                    quotesArray.push(quotesArrayCheck);
                    // console.log(quotesArray);

                    if (quotesArray[0] === undefined) {
                        alert("Please select a future and different date or city combination.")
                    }

                    else {



                        //get outBoundDates for the Quotes
                    var outBoundDate1 = jsonResponse.Quotes[0].OutboundLeg.DepartureDate;
                    // console.log(outBoundDate1);
                    var outBoundDate1Formatted = moment(outBoundDate1).format('YYYY-MM-DD');
                    // console.log("outBoundDate1Formatted " + outBoundDate1Formatted);

                    var outBoundDate2 = jsonResponse.Quotes[1].OutboundLeg.DepartureDate;
                    console.log(outBoundDate2);
                    var outBoundDate2Formatted = moment(outBoundDate2).format('YYYY-MM-DD');
                    // console.log("outBoundDate2Formatted " + outBoundDate2Formatted);

                    var outBoundDate3 = jsonResponse.Quotes[2].OutboundLeg.DepartureDate;
                    console.log(outBoundDate3);
                    var outBoundDate3Formatted = moment(outBoundDate3).format('YYYY-MM-DD');
                    // console.log("outBoundDate3Formatted " + outBoundDate3Formatted);

                


                    //get inboundDates for the Quotes


                    //get originCityName from the jsonResponse
                    var originCityName = jsonResponse.Places[1].CityName;
                    // console.log(originCityName);

                    //get destinationCityName from the jsonResponse
                    var destinationCityName = jsonResponse.Places[0].CityName;
                    // console.log(destinationCityName);                    

                    //get 3 carriers from the jsonResponse
                    var carrierID1 = jsonResponse.Quotes[0].OutboundLeg.CarrierIds[0];
                    var carrierID2 = jsonResponse.Quotes[1].OutboundLeg.CarrierIds[0];
                    var carrierID3 = jsonResponse.Quotes[2].OutboundLeg.CarrierIds[0];
                    // console.log(carrierID1, carrierID2, carrierID3);



                    //get places(airports codes)
                    var destinationID1 = jsonResponse.Quotes[0].OutboundLeg.DestinationId;
                    // console.log(destinationID1);
                    var destinationID2 = jsonResponse.Quotes[1].OutboundLeg.DestinationId;
                    // console.log(destinationID2);
                    var destinationID3 = jsonResponse.Quotes[2].OutboundLeg.DestinationId;
                    // console.log(destinationID3);



                    //match up the places ID with the Quote Place ID
                    var destinationAirportCode1;
                    var destinationAirportCode2;
                    var destinationAirportCode3;

                    for (var i = 0; i < jsonResponse.Places.length; i++) {
                        var destinationAirportCodes = jsonResponse.Places[i]
                        // console.log(destinationAirportCodes);
                        if (destinationID1 === destinationAirportCodes.PlaceId) {
                            destinationAirportCode1 = destinationAirportCodes.IataCode;
                            console.log("destinationAirportCode1 " + destinationAirportCode1);
                            // if (destinationAirportCode1 == "undefined") {
                            //     destinationAirportCode1 == ""
                            // }
                        }
                        else if (destinationID2 === destinationAirportCodes.PlaceId) {
                            destinationAirportCode2 = destinationAirportCodes.IataCode;
                            console.log("destinationAirportCode2 " + destinationAirportCode2);
                            // if (destinationAirportCode2 == "undefined") {
                            //     destinationAirportCode2 == ""
                            // }
                        }
                        else if (destinationID3 === destinationAirportCodes.PlaceId) {
                            destinationAirportCode3 = destinationAirportCodes.IataCode;
                            console.log("destinationAirportCode3 " + destinationAirportCode3);
                            // if (destinationAirportCode3 == "undefined") {
                            //     destinationAirportCode3 == ""
                            // }
                        }
                    }


                    //get the 3 quote min prices from the jsonResponse
                    var minPrice1 = jsonResponse.Quotes[0].MinPrice;
                    // console.log("$" + minPrice1);
                    var minPrice2 = jsonResponse.Quotes[1].MinPrice;
                    // console.log("$" + minPrice2);
                    var minPrice3 = jsonResponse.Quotes[2].MinPrice;
                    // console.log("$" + minPrice3);



                    //match up the carrier ID with the Carrier Name
                    var carrierName1;
                    var carrierName2;
                    var carrierName3;

                    for (var i = 0; i < jsonResponse.Carriers.length; i++) {
                        var carriers = jsonResponse.Carriers[i]
                        // console.log(carriers);
                        if (carrierID1 === carriers.CarrierId) {
                            carrierName1 = carriers.Name;
                            // console.log(carrierName1);
                        }
                        else if (carrierID2 === carriers.CarrierId) {
                            carrierName2 = carriers.Name;
                            // console.log(carrierName2);
                        }
                        else if (carrierID3 === carriers.CarrierId) {
                            carrierName3 = carriers.Name;
                            // console.log(carrierName3);
                        }
                    }


                    //get direct flight data
                    var directFlight1 = jsonResponse.Quotes[0].Direct;
                    // console.log(directFlight1);

                    //conditionality to show and hide checkbox based on the flight being direct or not
                    if (directFlight1) {
                        directFlightIconEl1.setAttribute("src", "./assets/images/checked_checkbox.png");
                    }
                    else {
                        directFlightIconEl1.setAttribute("src", "./assets/images/unchecked-checkbox.png");
                    }

                    var directFlight2 = jsonResponse.Quotes[1].Direct;
                    // console.log(directFlight2);
                    if (directFlight2) {
                        directFlightIconEl2.setAttribute("src", "./assets/images/checked_checkbox.png");
                    }
                    else {
                        directFlightIconEl2.setAttribute("src", "./assets/images/unchecked-checkbox.png");
                    }

                    var directFlight3 = jsonResponse.Quotes[2].Direct;
                    // console.log(directFlight3);
                    if (directFlight3) {
                        directFlightIconEl3.setAttribute("src", "./assets/images/checked_checkbox.png");
                    }
                    else {
                        directFlightIconEl3.setAttribute("src", "./assets/images/unchecked-checkbox.png");
                    }

 
                    direct1El.innerHTML = "Direct Flight: ";
                    direct2El.innerHTML = "Direct Flight: ";
                    direct3El.innerHTML = "Direct Flight: ";


                    outboundDate1El.innerHTML = "Outbound: " + outBoundDate1Formatted;
                    outboundDate2El.innerHTML = "Outbound: " + outBoundDate2Formatted;
                    outboundDate3El.innerHTML = "Outbound: " + outBoundDate3Formatted;

                    inbounddate1El.innerHTML = "Inbound: " + formattedEndDate;
                    inbounddate2El.innerHTML = "Inbound: " + formattedEndDate;
                    inbounddate3El.innerHTML = "Inbound: " + formattedEndDate;

                    origin1El.innerHTML = "Origin: " + originCityName + " " + "(" + fromLocation + ")";
                    origin2El.innerHTML = "Origin: " + originCityName + " " + "(" + fromLocation + ")";
                    origin3El.innerHTML = "Origin: " + originCityName + " " + "(" + fromLocation + ")";

                    destination1El.innerHTML = "Destination: " + destinationCityName + " " + "(" + destinationAirportCode1 + ")";
                    destination2El.innerHTML = "Destination: " + destinationCityName + " " + "(" + destinationAirportCode2 + ")";
                    destination3El.innerHTML = "Destination: " + destinationCityName + " " + "(" + destinationAirportCode3 + ")";

                    airlinecode1El.innerHTML = "Carrier: " + carrierName1;
                    airlinecode2El.innerHTML = "Carrier: " + carrierName2;
                    airlinecode3El.innerHTML = "Carrier: " + carrierName3;

                    price1El.innerHTML = "Price: $" + minPrice1;
                    price2El.innerHTML = "Price: $" + minPrice2;
                    price3El.innerHTML = "Price: $" + minPrice3;

     





                    }
                    

                    

                })
            }
            else {
                alert("Error: " + response.statusText);
            }
        })
        .catch(function (error) {
            alert("Unable to connect to the SkyScanner!")
        })
}



//function to get hotel data
var getHotelData = function () {
    // FORMAT: http://engine.hotellook.com/api/v2/cache.json?location=NYC&checkIn=2020-05-02&checkOut=2020-05-15&currency=usd&limit=3&token=065c3b8c9e2bb6252bf699eacc8fd32c

    // var hotelSearchUrl = "http://engine.hotellook.com/api/v2/lookup.json?query=london&lang=ru&lookFor=both&limit=1&token=065c3b8c9e2bb6252bf699eacc8fd32c";

    var hotelSearchUrl2 = "http://engine.hotellook.com/api/v2/cache.json?location=" + toLocation + "&checkIn=" + formattedStartDate + "&checkOut=" + formattedEndDate + "&currency=usd&limit=3&token=065c3b8c9e2bb6252bf699eacc8fd32c";

    fetch(hotelSearchUrl2)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (hotelDataResponse) {
                    console.log(hotelDataResponse);
                })
            }
            else {
                alert("Error: " + response.statusText);
            }
        })
        .catch(function (error) {
            alert("Unable to connect to HotelLook!");
        })

}





// function to get attraction data

var searchAttractionData = function () {
    var attractionSearchURL = "https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=YgasmQcKMenqrHdAGUHQgz3JdB9tVnSi&keyword=NewYork"

    fetch(attractionSearchURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (attractionDataResponse) {
                    console.log(attractionDataResponse);
                })
            }
            else {
                alert("Error: " + response.statusText);
            }
        })
        .catch(function (error) {
            alert("Unable to connect to TicketMaster!");
        })
}


















// searchAttractionData();
// getFlightData();
// getHotelData();
submitButtonEl.addEventListener("click", formSubmitHandler);
