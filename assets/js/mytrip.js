
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


var getFlight1FromMyTrip = function() {


    //parse items from localStorage for Flight 1
    var startDateFlight1Display = JSON.parse(localStorage.getItem("startDateFlight1"));
    var endDateFlight1Display = JSON.parse(localStorage.getItem("endDateFlight1"));
    var fromLocationFlight1Display = JSON.parse(localStorage.getItem("fromLocationFlight1"));
    var toLocationFlight1Display = JSON.parse(localStorage.getItem("toLocationFlight1"));
    var carrierFlight1Display = JSON.parse(localStorage.getItem("carrierFlight1"));
    var priceFlight1Display = JSON.parse(localStorage.getItem("priceFlight1"));
    var directFlight1Display = JSON.parse(localStorage.getItem("directFlight1"));


    //get items from locaStorage for each item above
        var startDateFlight1DisplayItem
        for (var i = 0; i < startDateFlight1Display.length; i++) {
            startDateFlight1DisplayItem = startDateFlight1Display[0];
            // console.log(startDateFlight1DisplayItem);
        }

        var endDateFlight1DisplayItem
        for (var i = 0; i < endDateFlight1Display.length; i++) {
            endDateFlight1DisplayItem = endDateFlight1Display[0];
            // console.log(endDateFlight1DisplayItem);
        }

        var fromLocationFlight1DisplayItem
        for (var i = 0; i < fromLocationFlight1Display.length; i++) {
            fromLocationFlight1DisplayItem = fromLocationFlight1Display[0];
            // console.log(fromLocationFlight1DisplayItem);
        }

        var toLocationFlight1DisplayItem
        for (var i = 0; i < toLocationFlight1Display.length; i++) {
            toLocationFlight1DisplayItem = toLocationFlight1Display[0];
            // console.log(toLocationFlight1DisplayItem);
        }

        var carrierFlight1DisplayItem
        for (var i = 0; i < carrierFlight1Display.length; i++) {
            carrierFlight1DisplayItem = carrierFlight1Display[0];
            // console.log(carrierFlight1DisplayItem);
        }

        var priceFlight1DisplayItem
        for (var i = 0; i < priceFlight1Display.length; i++) {
            priceFlight1DisplayItem = priceFlight1Display[0];
            // console.log(priceFlight1DisplayItem);
        }

        var directFlight1DisplayItem
        for (var i = 0; i < directFlight1Display.length; i++) {
            directFlight1DisplayItem = directFlight1Display[0];
            // console.log(directFlight1DisplayItem);
        }




    document.getElementById("saved-outbounddate1").innerHTML = "Outbound: " + startDateFlight1DisplayItem;
    document.getElementById("saved-inbounddate1").innerHTML = "Inbound: " + endDateFlight1DisplayItem;
    document.getElementById("saved-origin1").innerHTML = "Origin: " + " " + "(" + fromLocationFlight1DisplayItem + ")";
    document.getElementById("saved-destination1").innerHTML = "Destination: " + " " + "(" + toLocationFlight1DisplayItem + ")";
    document.getElementById("saved-airlinecode1").innerHTML = "Carrier: " + carrierFlight1DisplayItem;
    document.getElementById("saved-price1").innerHTML = "Price: $" + priceFlight1DisplayItem;
    document.getElementById("saved-direct1").innerHTML = "Direct Flight: " + directFlight1DisplayItem;

}

getFlight1FromMyTrip();

