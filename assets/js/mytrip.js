
// variables to target the ids of the elements
var savedoutbounddate1El = document.querySelector("#saved-outbounddate1");
var savedoutbounddate2El = document.querySelector("#saved-outbounddate2");
var savedoutbounddate3El = document.querySelector("#saved-outbounddate3");

var savedinbounddate1El = document.querySelector("#saved-inbounddate1");
var savedinbounddate2El = document.querySelector("#saved-inbounddate2");
var savedinbounddate3El = document.querySelector("#saved-inbounddate3");

var savedorigin1El = document.querySelector("#saved-origin1");
var savedorigin2El = document.querySelector("#saved-origin2");
var savedorigin3El = document.querySelector("#saved-origin3");

var saveddestination1El = document.querySelector("#saved-destination1");
var saveddestination2El = document.querySelector("#saved-destination2");
var saveddestination3El = document.querySelector("#saved-destination3");

var savedairlinecode1 = document.querySelector("#saved-airlinecode1");
var savedairlinecode2 = document.querySelector("#saved-airlinecode2");
var savedairlinecode3 = document.querySelector("#saved-airlinecode3");

var savedprice1 = document.querySelector("#saved-price1");
var savedprice2 = document.querySelector("#saved-price2");
var savedprice3 = document.querySelector("#saved-price3");

var saveddirect1El = document.querySelector("#saved-direct1");
var saveddirect2El = document.querySelector("#saved-direct2");
var saveddirect3El = document.querySelector("#saved-direct3");

var saveddirectflighticon1 = document.querySelector("#saved-direct-flight-icon1");
var saveddirectflighticon2 = document.querySelector("#saved-direct-flight-icon2");
var saveddirectflighticon3 = document.querySelector("#saved-direct-flight-icon3");


var getFlightsFromMyTrip = function() {

    var startDateFlight1Display = JSON.parse(localStorage.getItem("startDateFlight1"));
    document.getElementById("saved-outbounddate1").innerHTML = startDateFlight1Display

        // // Get the data from the localStorage for row #5
        // $("#saved-outbounddate1").val(JSON.parse(localStorage.getItem("startDateFlight1")));

}

getFlightsFromMyTrip();

