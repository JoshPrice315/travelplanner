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

var showHiddenEl = document.querySelector("#hidden");

var flight1buttonEl = document.querySelector("#flight1button");
var flight2buttonEl = document.querySelector("#flight2button");
var flight3buttonEl = document.querySelector("#flight3button");

// Links hotel names to index
var hotelID1El = document.querySelector("#hotelID1");
var hotelID2El = document.querySelector("#hotelID2");
var hotelID3El = document.querySelector("#hotelID3");
// Link hotel stars to index
var hotelStars1El = document.querySelector("#hotelStars1");
var hotelStars2El = document.querySelector("#hotelStars2");
var hotelStars3El = document.querySelector("#hotelStars3");
// Links hotel prices to index
var hotelPrice1 = document.querySelector("#hotelPrice1");
var hotelPrice1 = document.querySelector("#hotelPrice2");
var hotelPrice1 = document.querySelector("#hotelPrice3");

//flight 1 arrays for local storage
var startDateArrayFlight1 = [];
var endDateArrayFlight1 = [];
var fromLocationArrayFlight1 = [];
var toLocationArrayFlight1 = [];
var carrierArrayFlight1 = [];
var priceArrayFlight1 = [];
var directArrayFlight1 = [];

//flight 2 arrays for local storage
var startDateArrayFlight2 = [];
var endDateArrayFlight2 = [];
var fromLocationArrayFlight2 = [];
var toLocationArrayFlight2 = [];
var carrierArrayFlight2 = [];
var priceArrayFlight2 = [];
var directArrayFlight2 = [];


//flight 3 arrays for local storage
var startDateArrayFlight3 = [];
var endDateArrayFlight3 = [];
var fromLocationArrayFlight3 = [];
var toLocationArrayFlight3 = [];
var carrierArrayFlight3 = [];
var priceArrayFlight3 = [];
var directArrayFlight3 = [];


var formattedEndDate;
var fromLocation;
var carrierName1;
var carrierName2;
var carrierName3;
var minPrice1;
var minPrice2;
var minPrice3;
var directFlight1;
var directFlight2;
var directFlight3;





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
                        alert("Please select a different date or city combination.")
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
                        console.log(destinationID1);
                        var destinationID2 = jsonResponse.Quotes[1].OutboundLeg.DestinationId;
                        console.log(destinationID2);
                        var destinationID3 = jsonResponse.Quotes[2].OutboundLeg.DestinationId;
                        console.log(destinationID3);



                        //match up the places ID with the Quote Place ID
                        var destinationAirportCode1;
                        var destinationAirportCode2;
                        var destinationAirportCode3;

                        for (var i = 0; i < jsonResponse.Places.length; i++) {
                            var destinationAirportCodes = jsonResponse.Places[i]
                            console.log(destinationAirportCodes);
                            if (destinationID1 === destinationAirportCodes.PlaceId) {
                                destinationAirportCode1 = destinationAirportCodes.IataCode;
                                console.log("destinationAirportCode1 " + destinationAirportCode1);
                                // if (destinationAirportCode1 === "undefined") {
                                //     destinationAirportCode1 === ""
                                // }
                            }
                            else if (destinationID2 === destinationAirportCodes.PlaceId) {
                                destinationAirportCode2 = destinationAirportCodes.IataCode;
                                console.log("destinationAirportCode2 " + destinationAirportCode2);
                                // if (destinationAirportCode2 === "undefined") {
                                //     destinationAirportCode2 === ""
                                // }
                            }
                            else if (destinationID3 === destinationAirportCodes.PlaceId) {
                                destinationAirportCode3 = destinationAirportCodes.IataCode;
                                console.log("destinationAirportCode3 " + destinationAirportCode3);
                                // if (destinationAirportCode3 === "undefined") {
                                //     destinationAirportCode3 === ""
                                // }
                            }
                        }


                        //get the 3 quote min prices from the jsonResponse
                        minPrice1 = jsonResponse.Quotes[0].MinPrice;
                        // console.log("$" + minPrice1);
                        minPrice2 = jsonResponse.Quotes[1].MinPrice;
                        // console.log("$" + minPrice2);
                        minPrice3 = jsonResponse.Quotes[2].MinPrice;
                        // console.log("$" + minPrice3);



                        //match up the carrier ID with the Carrier Name
                        carrierName1;
                        carrierName2;
                        carrierName3;

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
                        directFlight1 = jsonResponse.Quotes[0].Direct;
                        // console.log(directFlight1);

                        //conditionality to show and hide checkbox based on the flight being direct or not
                        if (directFlight1) {
                            directFlightIconEl1.setAttribute("src", "./assets/images/checked_checkbox.png");
                        }
                        else {
                            directFlightIconEl1.setAttribute("src", "./assets/images/unchecked-checkbox.png");
                        }

                        directFlight2 = jsonResponse.Quotes[1].Direct;
                        // console.log(directFlight2);
                        if (directFlight2) {
                            directFlightIconEl2.setAttribute("src", "./assets/images/checked_checkbox.png");
                        }
                        else {
                            directFlightIconEl2.setAttribute("src", "./assets/images/unchecked-checkbox.png");
                        }

                        directFlight3 = jsonResponse.Quotes[2].Direct;
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



                        //this will remove the class that was defaulted from the HTML file so that the data placeholders show up
                        showHiddenEl.classList.remove("hidden");






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


//function to save Flight 1 data on button click to localStorage
var saveFlight1ToMyTrip = function (event) {
    // console.log(event);

    //push selected startDate into the startDateArray 
    startDateArrayFlight1.push(formattedStartDate);
    //set the startDate to the localStorage
    localStorage.setItem("startDateFlight1", JSON.stringify(startDateArrayFlight1));

    // //push selected endDate into the endDateArray 
    endDateArrayFlight1.push(formattedEndDate);
    //set the endDate to the localStorage
    localStorage.setItem("endDateFlight1", JSON.stringify(endDateArrayFlight1));

    //push selected fromLocation into the fromLocationArray 
    fromLocationArrayFlight1.push(fromLocation);
    //set the fromLocation to the localStorage
    localStorage.setItem("fromLocationFlight1", JSON.stringify(fromLocationArrayFlight1));

    //push selected toLocation into the toLocationArray 
    toLocationArrayFlight1.push(toLocation);
    //set the toLocation to the localStorage
    localStorage.setItem("toLocationFlight1", JSON.stringify(toLocationArrayFlight1));

    //push carrier info into the carrierArray and then save to localStorage
    carrierArrayFlight1.push(carrierName1)
    localStorage.setItem("carrierFlight1", JSON.stringify(carrierArrayFlight1));

    //push price info into the priceArray and then save to localStorage
    priceArrayFlight1.push(minPrice1);
    localStorage.setItem("priceFlight1", JSON.stringify(priceArrayFlight1));

    //push direct info into the directArray and then save to localStorage
    directArrayFlight1.push(directFlight1);
    localStorage.setItem("directFlight1", JSON.stringify(directArrayFlight1));
}


//function to save Flight 2 data on button click to localStorage
var saveFlight2ToMyTrip = function (event) {
    // console.log(event);

    //push selected startDate into the startDateArray 
    startDateArrayFlight2.push(formattedStartDate);
    //set the startDate to the localStorage
    localStorage.setItem("startDateFlight2", JSON.stringify(startDateArrayFlight2));

    // //push selected endDate into the endDateArray 
    endDateArrayFlight2.push(formattedEndDate);
    //set the endDate to the localStorage
    localStorage.setItem("endDateFlight2", JSON.stringify(endDateArrayFlight2));

    //push selected fromLocation into the fromLocationArray 
    fromLocationArrayFlight2.push(fromLocation);
    //set the fromLocation to the localStorage
    localStorage.setItem("fromLocationFlight2", JSON.stringify(fromLocationArrayFlight2));

    //push selected toLocation into the toLocationArray 
    toLocationArrayFlight2.push(toLocation);
    //set the toLocation to the localStorage
    localStorage.setItem("toLocationFlight2", JSON.stringify(toLocationArrayFlight2));

    //push carrier info into the carrierArray and then save to localStorage
    carrierArrayFlight2.push(carrierName2)
    localStorage.setItem("carrierFlight2", JSON.stringify(carrierArrayFlight2));

    //push price info into the priceArray and then save to localStorage
    priceArrayFlight2.push(minPrice2);
    localStorage.setItem("priceFlight2", JSON.stringify(priceArrayFlight2));

    //push direct info into the directArray and then save to localStorage
    directArrayFlight2.push(directFlight2);
    localStorage.setItem("directFlight2", JSON.stringify(directArrayFlight2));
}


//function to save Flight 3 data on button click to localStorage
var saveFlight3ToMyTrip = function (event) {
    // console.log(event);

    //push selected startDate into the startDateArray 
    startDateArrayFlight3.push(formattedStartDate);
    //set the startDate to the localStorage
    localStorage.setItem("startDateFlight3", JSON.stringify(startDateArrayFlight3));

    // //push selected endDate into the endDateArray 
    endDateArrayFlight3.push(formattedEndDate);
    //set the endDate to the localStorage
    localStorage.setItem("endDateFlight3", JSON.stringify(endDateArrayFlight3));

    //push selected fromLocation into the fromLocationArray 
    fromLocationArrayFlight3.push(fromLocation);
    //set the fromLocation to the localStorage
    localStorage.setItem("fromLocationFlight3", JSON.stringify(fromLocationArrayFlight3));

    //push selected toLocation into the toLocationArray 
    toLocationArrayFlight3.push(toLocation);
    //set the toLocation to the localStorage
    localStorage.setItem("toLocationFlight3", JSON.stringify(toLocationArrayFlight3));

    //push carrier info into the carrierArray and then save to localStorage
    carrierArrayFlight3.push(carrierName3)
    localStorage.setItem("carrierFlight3", JSON.stringify(carrierArrayFlight3));

    //push price info into the priceArray and then save to localStorage
    priceArrayFlight3.push(minPrice3);
    localStorage.setItem("priceFlight3", JSON.stringify(priceArrayFlight3));

    //push direct info into the directArray and then save to localStorage
    directArrayFlight3.push(directFlight3);
    localStorage.setItem("directFlight3", JSON.stringify(directArrayFlight3));
}








//function to get hotel data
var getHotelData = function () {
    // FORMAT: http://engine.hotellook.com/api/v2/cache.json?location=NYC&checkIn=2020-05-02&checkOut=2020-05-15&currency=usd&limit=3&token=065c3b8c9e2bb6252bf699eacc8fd32c

    // var hotelSearchUrl = "http://engine.hotellook.com/api/v2/lookup.json?query=london&lang=ru&lookFor=both&limit=1&token=065c3b8c9e2bb6252bf699eacc8fd32c";

    var hotelSearchUrl2 = "https://engine.hotellook.com/api/v2/cache.json?location=" + toLocation + "&checkIn=" + formattedStartDate + "&checkOut=" + formattedEndDate + "&currency=usd&limit=3&token=065c3b8c9e2bb6252bf699eacc8fd32c";

    fetch(hotelSearchUrl2)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (jsonResponse) {
                    console.log(jsonResponse);
                    var hotelID1 = jsonResponse[0].hotelName;
                    var hotelID2 = jsonResponse[1].hotelName;
                    var hotelID3 = jsonResponse[2].hotelName;
                    console.log(hotelID1, hotelID2, hotelID3);

                    var hotelStars1 = jsonResponse[0].stars;
                    var hotelStars2 = jsonResponse[1].stars;
                    var hotelStars3 = jsonResponse[2].stars;
                    console.log(hotelStars1, hotelStars2, hotelStars3);

                    var hotelPrice1 = jsonResponse[0].priceAvg;
                    var hotelPrice2 = jsonResponse[1].priceAvg;
                    var hotelPrice3 = jsonResponse[2].priceAvg;
                    console.log(hotelPrice1, hotelPrice2, hotelPrice3);
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

// var searchAttractionData = function () {
//     var attractionSearchURL = "https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=YgasmQcKMenqrHdAGUHQgz3JdB9tVnSi&keyword=NewYork"

//     fetch(attractionSearchURL)
//         .then(function (response) {
//             if (response.ok) {
//                 response.json().then(function (attractionDataResponse) {
//                     console.log(attractionDataResponse);
//                 })
//             }
//             else {
//                 alert("Error: " + response.statusText);
//             }
//         })
//         .catch(function (error) {
//             alert("Unable to connect to TicketMaster!");
//         })
// }

















//event listener for the submit button so that it calls the formSubmitHandler function when the button is clicked
submitButtonEl.addEventListener("click", formSubmitHandler);

//event listener for flight 1 button so that it saves data to local storage for the 1st flight
flight1buttonEl.addEventListener("click", saveFlight1ToMyTrip)
//event listener for flight 2 button so that it saves data to local storage for the 2nd flight
flight2buttonEl.addEventListener("click", saveFlight2ToMyTrip)
//event listener for flight 2 button so that it saves data to local storage for the 3rd flight
flight3buttonEl.addEventListener("click", saveFlight3ToMyTrip)